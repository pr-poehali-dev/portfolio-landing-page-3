const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="font-montserrat font-bold text-4xl lg:text-5xl neon-text">
              Обо мне
            </h2>
            <p className="font-inter text-muted-foreground text-lg">
              Моя история и подход к работе
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6">
              <h3 className="font-montserrat font-semibold text-2xl text-primary">
                Мой путь
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Я увлечён созданием цифровых решений, которые объединяют
                красивый дизайн и функциональность. Мой опыт охватывает
                frontend-разработку, UX/UI дизайн и создание брендинга.
              </p>
              <p className="font-inter text-muted-foreground leading-relaxed">
                Работаю с современными технологиями и всегда открыт для изучения
                новых инструментов, которые помогают создавать лучшие продукты.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-montserrat font-semibold text-2xl text-primary">
                Принципы работы
              </h3>
              <ul className="space-y-3 font-inter text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span>Качество превыше скорости</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span>Внимание к деталям в каждом пикселе</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span>Открытое общение с клиентами</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary">•</span>
                  <span>Постоянное обучение и развитие</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
