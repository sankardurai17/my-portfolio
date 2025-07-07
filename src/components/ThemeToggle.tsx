import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="text-xl hover:text-primary transition"
      aria-label="Toggle dark mode"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
