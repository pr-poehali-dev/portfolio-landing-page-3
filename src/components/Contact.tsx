import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl neon-text">
              Связаться
            </h2>
            <p className="font-inter text-muted-foreground text-lg">
              Готов обсудить ваш проект или просто поболтать
            </p>
          </div>

          <div className="space-y-8">
            <p className="font-inter text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Если у вас есть интересный проект, предложение о сотрудничестве,
              или вы просто хотите сказать привет — я всегда открыт для общения!
            </p>

            <div className="flex justify-center">
              <a
                href="https://t.me/DavidRokhlis"
                target="_blank"
                rel="noopener noreferrer"
                className="group gradient-border animate-glow hover:scale-105 transition-transform duration-300"
              >
                <div className="gradient-border-inner px-8 py-4 flex items-center space-x-3">
                  <Icon
                    name="Send"
                    size={24}
                    className="text-primary group-hover:animate-bounce"
                  />
                  <span className="font-montserrat font-semibold text-lg">
                    Написать в Telegram
                  </span>
                </div>
              </a>
            </div>

            <div className="text-center">
              <p className="font-inter text-sm text-muted-foreground">
                @DavidRokhlis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
