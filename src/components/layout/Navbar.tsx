import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Publications", href: "#publications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-xl">
          <Cpu className="h-6 w-6 text-primary" />
          <span>Nick Goberville</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2 border-l pl-4 ml-2">
            <a
              href="https://github.com/nickgoberville"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/nick-goberville-5814a9125"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="/assets/documents/NickGobervilleResume_1225_0.pdf"
              download
            >
              <Button size="sm">Resume</Button>
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t">
            <a
              href="https://github.com/nickgoberville"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nick-goberville-5814a9125"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <Button className="w-full" asChild>
              <a
                href="/assets/documents/NickGobervilleResume_1225_0.pdf"
                download
              >
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
