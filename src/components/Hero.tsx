const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-montserrat font-bold text-5xl lg:text-7xl leading-tight">
                Привет, я{" "}
                <span className="neon-text bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                  Дэвид
                </span>
              </h1>
              <p className="font-inter text-xl lg:text-2xl text-muted-foreground">
                Разработчик • Дизайнер • Креативщик
              </p>
            </div>

            <p className="font-inter text-lg text-muted-foreground max-w-xl leading-relaxed">
              Создаю современные веб-приложения и цифровые решения, которые
              делают жизнь людей проще и красивее
            </p>

            <div className="flex space-x-4">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="gradient-border animate-glow"
              >
                <div className="gradient-border-inner px-8 py-3 font-montserrat font-semibold">
                  Мои проекты
                </div>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-3 border border-border hover:border-primary transition-colors duration-300 rounded-lg font-montserrat font-semibold"
              >
                Связаться
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-float" />
              <img
                src="https://cdn.poehali.dev/files/09432ba7-035a-4c0c-8e6b-4211f3233591.jpg"
                alt="David Rokhlis"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
