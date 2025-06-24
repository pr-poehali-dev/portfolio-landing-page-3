import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Современная платформа для онлайн-торговли с интуитивным интерфейсом",
      tech: ["React", "TypeScript", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Аналитическая панель с интерактивными графиками и отчётами",
      tech: ["Next.js", "Chart.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      link: "#",
    },
    {
      title: "Mobile App Design",
      description:
        "UI/UX дизайн мобильного приложения для здорового образа жизни",
      tech: ["Figma", "Prototyping", "Design System"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl neon-text">
              Проекты
            </h2>
            <p className="font-inter text-muted-foreground text-lg">
              Некоторые из моих последних работ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:glow-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon
                      name="ExternalLink"
                      size={20}
                      className="text-primary"
                    />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="font-montserrat font-semibold text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-inter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
