"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "projects",
      "hackathons",
      "social-impact",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);

        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.clientHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#hackathons", label: "Hackathons" },
    { href: "#social-impact", label: "Social Impact" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0d0914]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-lg font-extrabold tracking-tight text-purple-400 sm:text-xl md:text-2xl"
        >
          Chen Shao Yee
          <span className="hidden text-slate-400 sm:inline"> Portfolio</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                activeSection === link.href.slice(1)
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-700/40"
                  : "text-slate-300 hover:bg-white/10 hover:text-purple-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-purple-800/60 bg-[#1b1b20] text-xl text-white md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0d0914] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  activeSection === link.href.slice(1)
                    ? "bg-purple-600 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-purple-300"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}