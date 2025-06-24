const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="font-montserrat font-bold text-lg neon-text">
            David Rokhlis
          </div>

          <div className="font-inter text-sm text-muted-foreground">
            © {currentYear} Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
