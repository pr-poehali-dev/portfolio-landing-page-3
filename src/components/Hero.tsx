const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="font-montserrat font-bold text-6xl lg:text-7xl leading-tight">
                Привет. Я <span className="neon-glow">Давид</span>
              </h1>

              <p className="font-playfair text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Я создаю визуальные истории и медиа-контент, который цепляет.
                Мне важно, чтобы проект был не просто рабочим — а красивым,
                умным и по-настоящему интересным.
              </p>

              <p className="font-playfair text-lg text-muted-foreground/80">
                Я открыт к сотрудничеству.
              </p>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="gradient-border hover:glow-box transition-all duration-300 group"
            >
              <div className="gradient-border-inner px-8 py-4 font-montserrat font-semibold text-lg flex items-center space-x-2">
                <span>Смотреть работы</span>
                <span className="group-hover:translate-y-1 transition-transform duration-300">
                  ↓
                </span>
              </div>
            </button>
          </div>

          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group parallax-float">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                alt="David"
                className="relative w-80 h-96 lg:w-96 lg:h-[28rem] object-cover rounded-3xl shadow-2xl border border-border/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
