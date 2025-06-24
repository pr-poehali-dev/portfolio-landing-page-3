import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="font-montserrat font-bold text-xl neon-text">
            David Rokhlis
          </div>

          <div className="hidden md:flex space-x-8">
            {["hero", "about", "skills", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="font-inter text-sm uppercase tracking-wider hover:text-primary transition-colors duration-300 hover:neon-text"
                >
                  {section === "hero"
                    ? "Главная"
                    : section === "about"
                      ? "Обо мне"
                      : section === "skills"
                        ? "Навыки"
                        : section === "projects"
                          ? "Проекты"
                          : "Контакты"}
                </button>
              ),
            )}
          </div>

          <div className="md:hidden">
            <Icon name="Menu" size={24} className="text-primary" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
