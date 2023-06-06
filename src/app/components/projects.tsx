"use client";

import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "./card";
import { Article } from "./article";
import axios from "axios";
import { Octokit } from "octokit";
import { Loader2 } from "lucide-react";

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const [repos, setRepos] = useState<Repository[]>();
  const [isLoading, setIsLoading] = useState<boolean>();

  const getRepos = async () => {
    try {
      const octokit = new Octokit({
        auth: process.env.GITHUB_API_TOKEN,
      });

      const res = await octokit.request("GET /users/jfirme-sys/repos", {
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      setRepos(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRepos();
    setIsLoading(true);
  }, []);

  return (
    <div className="flex justify-center">
      {isLoading ? (
        <Loader2  className="mr-2 h-20 w-20 animate-spin text-zinc-200"/>
      ) : (
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {repos &&
              repos
                .filter((_, i) => i % 3 === 0)
                .map((project) => (
                  <Card key={project.html_url}>
                    <Article project={project} views={0} />
                  </Card>
                ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {repos &&
              repos
                .filter((_, i) => i % 3 === 1)
                .map((project) => (
                  <Card key={project.html_url}>
                    <Article project={project} views={0} />
                  </Card>
                ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {repos &&
              repos
                .filter((_, i) => i % 3 === 2)
                .map((project) => (
                  <Card key={project.html_url}>
                    <Article project={project} views={0} />
                  </Card>
                ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
