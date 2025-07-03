import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="mt-16 text-center text-xs text-gray-500">
      <p>~ última actualización: 2025 — versión 0.2.1-dev</p>
      <p>Creo que ya me estoy volviendo loco en este punto...</p>
      <p>
        <a
          href="https://github.com/sierrapablo/sierrapablo-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-amber-500 transition"
        >
          ver código fuente
        </a>
      </p>
    </footer>
  );
}