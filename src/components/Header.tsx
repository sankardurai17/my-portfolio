import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import useActiveSection from '../hooks/useActiveSection';

const links = [
  { href: '#about',       id: 'about',       label: 'About' },
  { href: '#whatido',     id: 'whatido',     label: 'Skills' },
  { href: '#experience',   id: 'experience',   label: 'Experience' },
  { href: '#projects',   id: 'projects',   label: 'Projects' },
  { href: '#education',   id: 'education',   label: 'Education' },
  { href: '#contact',     id: 'contact',     label: 'Contact' },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(links.map(l => l.id));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0c1220] text-white">
  <nav className="max-w-10xl mx-auto flex items-center justify-between px-7 py-7">
        {/* Brand */}
        <a href="#" className="text-lg md:text-xl font-extrabold text-primary whitespace-nowrap">
          Duraipaandiyaan Anbumani Poongothai
        </a>

        {/* Burger (mobile) */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <FaBars size={24} />
        </button>

        {/* Links */}
        <ul
          className={`${
            open ? 'block' : 'hidden'
          } absolute md:static top-16 left-0 right-0 bg-[#0c1220]/95
             md:bg-transparent md:flex md:gap-6 px-4 py-4 md:p-0`}
        >
          {links.map(({ href, id, label }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className={`block py-2 md:py-0 transition ${
                  active === id ? 'text-primary font-semibold' : 'text-gray-300'
                }`}
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
