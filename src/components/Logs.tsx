import { JSX, useState, useEffect } from "react";

type LogEntry = {
  date: string;
  message: string;
};

export default function Logs(): JSX.Element {
  const [logEntries, setLogEntries] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLogs() {
      try {
        const response = await fetch("https://api.sierrapablo.dev/logs");
        if (!response.ok) {
          throw new Error("Failed to fetch logs");
        }
        const data: LogEntry[] = await response.json();
        setLogEntries(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchLogs();
  }, []);

  if (loading) return <p className="text-gray-400">Loading logs...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <section>
      <h2 className="text-lg font-semibold text-amber-500 mb-3">[ Recent logs ]</h2>
      <ul className="font-mono text-sm text-emerald-400 space-y-2">
        {logEntries.map((log, index) => (
          <li key={index}>
            [{log.date}] {log.message}
          </li>
        ))}
      </ul>
      <div id="rotating-fish-container" className="ascii-art mt-4 text-center"></div>
    </section>
  );
}
