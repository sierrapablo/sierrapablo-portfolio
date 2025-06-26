import { JSX } from "react";

const logEntries: { date: string; message: string }[] = [
  { date: "2025-06-26", message: "rewrote this page again instead of sleeping" },
  { date: "2025-06-20", message: "spent 3 hours debugging a typo — classic" },
  { date: "2025-06-18", message: "spent hours configuring Neovim instead of coding" },
];

export default function Logs(): JSX.Element {
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
