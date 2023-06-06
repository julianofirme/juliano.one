import { FunctionComponent } from "react";
import { Card } from "../components/card";
import { Article } from "../components/article";

interface pageProps {}

const projects: Project[] = [
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
  { name: "Crud", description: "Example CRUD", updated_at: new Date(), url: 'https://github.com/'},
]

const page: FunctionComponent<pageProps> = () => {
  return (
    <div>
      
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">My github public repos!</p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						{projects
							.filter((_, i) => i % 3 === 0)
							.map((project) => (
								<Card key={project.url}>
									<Article project={project} views={0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{projects
							.filter((_, i) => i % 3 === 1)
							.map((project) => (
								<Card key={project.url}>
									<Article project={project} views={0} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{projects
							.filter((_, i) => i % 3 === 2)
							.map((project) => (
								<Card key={project.url}>
									<Article project={project} views={0} />
								</Card>
							))}
					</div>
				</div>
      </div>
    </div>
  );
};

export default page;
