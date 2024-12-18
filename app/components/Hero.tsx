import HeroBg from "@/app/assets/hero.jpg";

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${HeroBg.src})`, 
        
      }}
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white"
      id="hero" 
    >
      <div className="container" data-aos="fade-up">
        <div
          className="row justify-center text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-extrabold md:text-7xl">
              Lince Corporate<span className="text-yellow-500">.</span>
            </h1>
            <h2 className="text-xl font-light mt-4 md:text-2xl">
              Capacitar para servir melhor
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
