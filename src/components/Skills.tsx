import Icon from "@/components/ui/icon";

const Skills = () => {
  const activities = [
    {
      title: "Видео и моушн-дизайн",
      description: "Reels, TikTok, монтаж",
      icon: "Video",
      gradient: "from-neon-blue to-neon-cyan",
    },
    {
      title: "Работа с AI",
      description: "генерация визуалов и текстов, редактура",
      icon: "Brain",
      gradient: "from-neon-cyan to-purple-500",
    },
    {
      title: "Контент для соцсетей",
      description: "VK-сообщество, публикации",
      icon: "Share2",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Обучение и развитие",
      description: "ищу свою сильную творческую нишу",
      icon: "BookOpen",
      gradient: "from-pink-500 to-neon-blue",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <h2 className="font-montserrat font-bold text-5xl lg:text-6xl neon-text">
              Чем я занимаюсь
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group relative p-8 bg-card/50 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 hover:glow-box animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${activity.gradient} bg-opacity-20`}
                  >
                    <Icon
                      name={activity.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>

                  <div className="space-y-3 flex-1">
                    <h3 className="font-montserrat font-bold text-xl text-foreground">
                      {activity.title}
                    </h3>
                    <p className="font-playfair text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
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
