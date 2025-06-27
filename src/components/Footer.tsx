import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-16 text-center text-xs text-gray-500">
      <p>~ last update: 2025 — version 0.1.2-dev</p>
      <p>I'm becoming insane at this point...</p>
      <p>
        <a
          href="https://github.com/sierrapablo/sierrapablo-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-500 transition"
        >
          view source code
        </a>
      </p>
    </footer>
  );
}