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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="font-montserrat font-bold text-2xl neon-text tracking-wider">
              DAVID
            </h1>
            <p className="font-playfair text-sm text-muted-foreground italic">
              Создаю. Визуализирую. Думаю масштабно.
            </p>
          </div>

          <button className="gradient-border hover:glow-box transition-all duration-300">
            <div className="gradient-border-inner px-6 py-3 font-montserrat font-semibold text-sm tracking-wide">
              Скачать резюме PDF
            </div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
