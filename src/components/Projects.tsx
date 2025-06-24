import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      title: "Посты с AI-контентом",
      description:
        "От идеи до оформления — мои тексты и визуалы для студенческого медиа.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      buttonText: "Посмотреть примеры",
      icon: "Image",
    },
    {
      title: "Видео-монтаж Reels",
      description:
        "Смонтировано в After Effects / Premiere, всё — моими руками.",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      buttonText: "Смотреть видео",
      icon: "Play",
    },
    {
      title: "Социальные эксперименты",
      description:
        "Тестировал вовлечённость, оформление, темы. Работаю с подачей и формой.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      buttonText: "Смотреть кейсы",
      icon: "TrendingUp",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="font-montserrat font-bold text-5xl lg:text-6xl neon-text">
              Проекты и портфолио
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-card/40 rounded-3xl border border-border/30 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:glow-box animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-center space-x-3">
                    <Icon
                      name={project.icon as any}
                      size={24}
                      className="text-primary"
                    />
                    <h3 className="font-montserrat font-bold text-xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-playfair text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <button className="w-full gradient-border hover:glow-box transition-all duration-300">
                    <div className="gradient-border-inner px-6 py-3 font-montserrat font-semibold text-center">
                      {project.buttonText}
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
