// components/Loader.tsx
import { useEffect, useState } from 'react';

interface LoaderProps {
  onFadeOutComplete?: () => void;
  isFadingOut?: boolean;
}

export default function Loader({ onFadeOutComplete, isFadingOut = false }: LoaderProps) {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isFadingOut) {
      const timeout = setTimeout(() => {
        setShouldRender(false);
        onFadeOutComplete?.();
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [isFadingOut, onFadeOutComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#1e1e1e] flex items-center justify-center z-50 transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <p className="text-white text-8xl animate-pulse">...</p>
    </div>
  );
}
