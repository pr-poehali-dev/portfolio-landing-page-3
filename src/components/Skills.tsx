import Icon from "@/components/ui/icon";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "Code",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Design",
      icon: "Palette",
      skills: [
        "Figma",
        "Adobe Creative Suite",
        "UI/UX Design",
        "Prototyping",
        "Branding",
      ],
    },
    {
      title: "Tools",
      icon: "Settings",
      skills: ["Git", "VS Code", "Webpack", "Vite", "Docker"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl neon-text">
              Навыки
            </h2>
            <p className="font-inter text-muted-foreground text-lg">
              Технологии и инструменты, с которыми я работаю
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group relative p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:glow-effect"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon
                      name={category.icon as any}
                      size={32}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="font-montserrat font-semibold text-xl">
                    {category.title}
                  </h3>

                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-sm font-inter text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        {skill}
                      </div>
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

export default Skills;
