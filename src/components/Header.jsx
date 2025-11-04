import { useEffect, useState } from 'react';
import { Flame, Moon, Sun, Github } from 'lucide-react';

export default function Header() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
            <Flame size={20} />
          </div>
          <span className="font-semibold text-neutral-900 dark:text-white text-lg">FlamesBlue</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#security" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Security</a>
          <a href="#download" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Download</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-neutral-900 dark:hover:text-white">
            <Github size={18} /> Code
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-200"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#download"
            className="hidden sm:inline-flex items-center justify-center h-10 px-4 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium shadow hover:opacity-95"
          >
            Get App
          </a>
        </div>
      </div>
    </header>
  );
}
