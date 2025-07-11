'use client';
import Link from 'next/link';
import { useTheme } from './ThemeContext';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-950 shadow-lg py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <span className="text-xl font-bold text-blue-300">[YourName].dev</span>
      <div className="flex gap-6 items-center">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-blue-400 transition-colors">
            {item.label}
          </Link>
        ))}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light Mode"
          className="ml-4 bg-blue-700 hover:bg-blue-600 text-white rounded px-3 py-1"
        >
          {theme === 'dark' ? '🌞 Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}
