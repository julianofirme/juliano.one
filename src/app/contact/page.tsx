"use client";
import { Github, Linkedin, Mail, Text } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
		key: 1,
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/juliano-asfirme/",
    label: "Linkedin",
    handle: "Juliano Firme",
  },
  {
		key: 2,
    icon: <Mail size={20} />,
    href: "mailto:julianofirme23@gmail.com",
    label: "Email",
    handle: "julianofirme23@gmail.com",
  },
  {
		key: 3,
    icon: <Github size={20} />,
    href: "https://github.com/jfirme-sys",
    label: "Github",
    handle: "jfirme",
  },
  {
		key: 4,
    icon: <Text size={20} />,
    href: "https://medium.com/@julianofirme23/",
    label: "Medium",
    handle: "@julianofirme23",
  },
];

export default function Example() {
  return (
    <div className="bg-zinc-900">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full h-[400px] grid-cols-1 gap-8 mx-auto sm:mt-0 sm:grid-cols-2">
          {socials.map((s) => (
            <Card key={s.key}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 flex flex-col items-center gap-4 duration-700 group md:gap-8"
              >
                <span className="z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
