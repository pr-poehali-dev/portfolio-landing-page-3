const About = () => {
  return (
    <section id="about" className="py-24 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-6">
            <h2 className="font-montserrat font-bold text-5xl lg:text-6xl neon-text">
              О себе
            </h2>
          </div>

          <div className="space-y-8 animate-fade-in">
            <p className="font-playfair text-2xl lg:text-3xl text-foreground leading-relaxed">
              Я не просто пробую — я ищу то, что будет иметь смысл.
            </p>

            <p className="font-playfair text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Я кайфую от визуала, от крутого сторителлинга, от ощущения «я
              сделал это». Мечтаю собрать команду и запустить большой творческий
              проект.
            </p>

            <p className="font-playfair text-lg text-muted-foreground/80 leading-relaxed">
              Пока учусь, пробую, накапливаю скиллы. Но план уже есть.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
