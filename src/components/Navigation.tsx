import { useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { site, real } from '../content';
import { SECTIONS, scrollToSection, useActiveSection, useScrolled, useTheme } from '../lib/hooks';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a
          href="#home"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
            setOpen(false);
          }}
        >
          <span className="nav-mono">{site.monogram}</span>
          <span className="nav-name">{real(site.name) || site.name}</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {SECTIONS.filter((s) => s.id !== 'home').map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(s.id);
                setOpen(false);
              }}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-drawer">
          {SECTIONS.filter((s) => s.id !== 'home').map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(s.id);
                setOpen(false);
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
