import { JSX, useState, useEffect } from "react";

type AboutResponse = {
  content: string;
};

export default function About(): JSX.Element {
  const [aboutText, setAboutText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAbout() {
      try {
        const response = await fetch("https://api.sierrapablo.dev/about");
        if (!response.ok) {
          throw new Error("Failed to fetch about content");
        }
        const data: AboutResponse = await response.json();
        setAboutText(data.content);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchAbout();
  }, []);

  if (loading) return <p className="text-gray-400">Loading content...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <section>
      <h2 className="text-lg font-semibold text-amber-500 mb-3">[ A bit more human, I guess ]</h2>
      <p className="text-sm text-gray-300 leading-relaxed text-justify">
        {aboutText}
      </p>
    </section>
  );
}
