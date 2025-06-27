import { JSX, useEffect, useState } from "react";

type Tool = {
  icon: string;
  label: string;
};

export default function Tools(): JSX.Element {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchTools() {
      try {
        const response = await fetch("https://api.sierrapablo.dev/tools");
        if (!response.ok) {
          throw new Error("Failed to fetch tools");
        }
        const data = await response.json();
        setTools(data);
      } catch (error) {
        console.error("Error fetching tools:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTools();
  }, []);


  return (
    <section>
      <h2 className="text-lg font-semibold text-amber-500 mb-3">
        [ Tools I kinda know how to use ]
      </h2>

      {loading ? (
        <p className="text-gray-400">Loading tools...</p>
      ) : (
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
      )}
    </section>
  );
}
