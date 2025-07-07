import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const links = [
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' }
  ];
  

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full backdrop-blur-sm bg-glass/50 dark:bg-black/30 shadow-sm z-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <a href="#" className="text-2xl font-extrabold text-primary">
          Durai
        </a>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <FaBars size={24} />
          </button>
        </div>

        <ul className="md:flex gap-8">
  {links.map(({ href, label }) => (
    <li key={href}>
      <a
        href={href}
        className="block py-2 hover:text-primary transition
                   [aria-current='true']:text-primary"
      >
        {label}
      </a>
    </li>
  ))}
</ul>
      </nav>
    </header>
  );
}
