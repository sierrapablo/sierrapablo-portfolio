import { JSX } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact(): JSX.Element {
  return (
    <section>
      <h2 className="text-lg font-semibold text-amber-500 mb-3">
        [ Reach me ]
      </h2>
      <div className="flex space-x-4 text-sm text-white">
        <a
          href="https://github.com/sierrapablo"
          target="_blank"
          className="hover:text-green-300 flex items-center gap-1"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="small" />
        </a>
        <a
          href="mailto:proyectos@sierrapablo.dev"
          className="hover:text-emerald-400 flex items-center gap-1 transition-colors duration-200 ease-in-out"
        >
          <EmailIcon fontSize="small" />
        </a>
      </div>
      <p className="text-xs text-gray-500 mt-3">
        Also valid:{" "}
        <code>
          curl sierrapablo.dev/contact (I'm still working on this feature)
        </code>
      </p>
    </section>
  );
}
