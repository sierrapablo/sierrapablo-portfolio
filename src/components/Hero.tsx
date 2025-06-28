import { JSX, useEffect, useState } from "react";
import { useTypedMessage } from "../hooks/useTypedMessage";

type Message = {
  text: string;
};

export default function Hero(): JSX.Element {
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch("https://api.sierrapablo.dev/messages");
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data: Message[] = await response.json();
        setMessages(data.map((m) => m.text));
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    if (!loading && !error) {
      const timeout = setTimeout(() => setStartTyping(true), 3500);
      return () => clearTimeout(timeout);
    }
  }, [loading, error]);

  const typed = useTypedMessage(messages, 35, 1500, 1000, startTyping);

  function goToBlog() {
    window.location.href = "/blog";
  }

  if (loading) return <p className="text-gray-400">Loading messages...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <section className="mb-12">
      <div className="max-w-2xl mx-auto">
        <div className="min-h-64 sm:min-h-44 bg-neutral-800 p-6 rounded-lg border border-neutral-600 shadow">
          {/* Header: Imagen, texto y botón */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-4">
              <img
                src="https://unavatar.io/github/sierrapablo"
                alt="pfp"
                className="w-14 h-14 rounded-full border-2 border-amber-500 shadow-lg hover:scale-105 transition-transform duration-200"
              />
              <div>
                <h1 className="text-xl font-bold text-amber-500">
                  Pablo Sierra - Software Engineer
                </h1>
                <p className="text-sm text-gray-400">
                  ~/about — probably overthinking something right now
                </p>
              </div>
            </div>
            <button
              onClick={goToBlog}
              className="cursor-pointer px-4 py-2 bg-amber-500 text-neutral-900 rounded hover:bg-amber-600 transition"
              aria-label="Go to blog"
            >
              Go to blog
            </button>
          </div>

          {/* Mensaje tipeado */}
          <p className="text-sm text-cyan-300 font-mono whitespace-pre-wrap">{typed}</p>
        </div>
      </div>
    </section>
  );
}
