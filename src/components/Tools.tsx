import { JSX } from "react";

const tools = [
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/python/python-original.svg",
    label: "Python",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/rust/rust-original.svg",
    label: "Rust",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    label: "Postgres",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/nodejs/nodejs-original.svg",
    label: "NodeJS",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/react/react-original.svg",
    label: "React",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    label: "HTML5",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    label: "CSS3",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    label: "JavaScript",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/typescript/typescript-original.svg",
    label: "Typescript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    label: "Git",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/bash/bash-original.svg",
    label: "Bash",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/docker/docker-original.svg",
    label: "Docker",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/lua/lua-original.svg",
    label: "Lua",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/java/java-original.svg",
    label: "Java",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/linux/linux-original.svg",
    label: "Linux",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/neovim/neovim-original.svg",
    label: "NeoVim",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/vscode/vscode-original.svg",
    label: "VSCode",
  },
  {
    icon: "https://www.svgrepo.com/download/217753/github.svg",
    label: "GitHub",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/dbeaver/dbeaver-original.svg",
    label: "DBeaver",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/postman/postman-original.svg",
    label: "Postman",
  },
  {
    icon: "https://vite.dev/logo.svg",
    label: "Vite",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/nginx/nginx-original.svg",
    label: "Nginx",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/filezilla/filezilla-original.svg",
    label: "FileZilla",
  },
  {
    icon: "https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.16.0/icons/notion/notion-original.svg",
    label: "Notion",
  }
];

export default function Logs(): JSX.Element {
  return (
    <section>
      <h2 className="text-lg font-semibold text-amber-500 mb-3">
        [ Tools I kinda know how to use ]
      </h2>
      <ul className="cursor-default font-bold grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-gray-300">
        {tools.map((tool, index) => (
          <li
            key={index}
            className="bg-neutral-800 p-2 border border-neutral-600 rounded flex items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:border-amber-500 hover:bg-emerald-400 hover:text-neutral-800"
          >
            <img src={tool.icon} className="w-5 h-5" alt={tool.label} />
            {tool.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
