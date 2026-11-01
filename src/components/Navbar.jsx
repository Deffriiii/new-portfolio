import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import useTheme from "../hooks/useTheme";

const menuItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function ThemeOption({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-medium hover:bg-ink ${
        active ? "text-sun" : ""
      }`}
    >
      {icon}
      {label}
      {active && <span className="ml-auto">✓</span>}
    </button>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [theme, setTheme] = useTheme();
  const dropRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDrop(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const pickTheme = (value) => {
    setTheme(value);
    setDrop(false);
    setIsOpen(false);
  };

  return (
    <header className="relative z-40 mx-auto max-w-[1296px] px-4 pt-9 sm:px-6 xl:px-0">
      <div className="flex items-center justify-between rounded-lg bg-panel px-6 py-4 shadow-(--nav-shadow) lg:px-12">
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold tracking-tight">
          <span className="text-brand-light">D</span>f.
        </a>

        {/* Menu desktop */}
        <nav aria-label="Navigasi utama" className="hidden items-center gap-8 lg:flex">
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setDrop(!drop)}
              aria-expanded={drop}
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide hover:text-sun"
            >
              Home
              <ChevronDown size={16} className={`transition ${drop ? "rotate-180" : ""}`} />
            </button>

            {drop && (
              <div className="absolute left-0 top-full mt-4 w-48 rounded-lg border border-line bg-panel p-2 shadow-xl">
                <a
                  href="#home"
                  onClick={() => setDrop(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-ink"
                >
                  Beranda
                </a>
                <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-wide text-muted">
                  Tampilan
                </p>
                <ThemeOption
                  icon={<Moon size={16} />}
                  label="Dark mode"
                  active={theme === "dark"}
                  onClick={() => pickTheme("dark")}
                />
                <ThemeOption
                  icon={<Sun size={16} />}
                  label="Light mode"
                  active={theme === "light"}
                  onClick={() => pickTheme("light")}
                />
              </div>
            )}
          </div>

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold uppercase tracking-wide hover:text-sun"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Tombol Resume desktop */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-fg px-7 py-3 text-sm font-semibold text-ink transition hover:bg-sun hover:text-black lg:block"
        >
          Resume
        </a>

        {/* Tombol menu HP */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu HP */}
      {isOpen && (
        <nav className="mt-2 flex flex-col gap-4 rounded-lg bg-panel p-6 lg:hidden">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold uppercase tracking-wide"
          >
            Home
          </a>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-fg py-3 text-center text-sm font-semibold text-ink"
          >
            Resume
          </a>
          <div className="flex gap-2 border-t border-line pt-4">
            <button
              onClick={() => pickTheme("dark")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md border border-line py-2 text-sm font-medium ${
                theme === "dark" ? "text-sun" : ""
              }`}
            >
              <Moon size={16} /> Dark
            </button>
            <button
              onClick={() => pickTheme("light")}
              className={`flex flex-1 items-center justify-center gap-2 rounded-md border border-line py-2 text-sm font-medium ${
                theme === "light" ? "text-sun" : ""
              }`}
            >
              <Sun size={16} /> Light
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;