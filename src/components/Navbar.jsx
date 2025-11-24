import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? `
          py-3 
          bg-[hsl(var(--background)/0.4)] 
          backdrop-blur-xl 
          border-b border-[hsl(var(--border)/0.4)] 
          shadow-sm
        `
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold flex items-center" href="#hero">
          <span className="relative z-10 text-[hsl(var(--foreground))]">
            Pratik <span className="text-[hsl(var(--primary))]">Portfolio</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="
                text-[hsl(var(--foreground)/0.7)] 
                hover:text-[hsl(var(--primary))] 
                transition-colors duration-300
              "
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-[hsl(var(--foreground))] z-50"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            `
            fixed inset-0 
            bg-[hsl(var(--background)/0.95)] 
            backdrop-blur-lg 
            z-40 flex flex-col items-center justify-center
            transition-all duration-300 md:hidden
          `,
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="
                  text-[hsl(var(--foreground)/0.8)] 
                  hover:text-[hsl(var(--primary))] 
                  transition-colors duration-300
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};