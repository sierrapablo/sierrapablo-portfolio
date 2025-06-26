import { JSX } from "react";

const aboutText: string = "Life isn’t about playing it safe or waiting for everything to make sense. It’s about diving headfirst into the chaos — embracing the mess inside and out. Real strength shows up when you face your weirdest fears and screw-ups, then turn them into your own kind of fuel. Becoming who you really are isn’t about fitting in; it’s about breaking the mold and making your own rules. So yeah, life throws curveballs, it’s uncomfortable, and sometimes it sucks — but that’s where the magic happens. Keep pushing, keep messing up, and keep creating your own meaning in the madness.";

export default function About(): JSX.Element {
  return (
    <section>
      <h2 className="text-lg font-semibold text-amber-500 mb-3">[ A bit more human, I guess ]</h2>
      <p className="text-sm text-gray-300 leading-relaxed text-justify">
        {aboutText}
      </p>
    </section>
  );
}
