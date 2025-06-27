import { JSX, useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  link: string;
  technologies: string[];
};

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("https://api.sierrapablo.dev/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section>
      <h2 className="text-lg font-semibold text-amber-500 mb-3">[ Projects ]</h2>

      {loading ? (
        <p className="text-gray-400">Loading projects...</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 p-2 border border-neutral-600 rounded-md flex items-center gap-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:border-amber-500 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg text-emerald-400 font-medium mb-1">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-2">{project.description}</p>
              </div>
              <div className="mt-auto text-xs text-gray-500 flex gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-cyan-300 text-neutral-800 rounded px-2 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}