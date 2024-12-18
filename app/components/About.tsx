import Meeting from "@/app/assets/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 overflow-hidden">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="flex flex-col lg:flex-row gap-8">
          <div
            className="order-2 lg:order-1 flex flex-col gap-6 lg:pt-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h3 className="text-3xl font-bold">A corporação</h3>
            <p className="italic text-slate-800">
              A <strong>Lince Corporate</strong> é constituída por empresas
              especializadas em diversas áreas de negócios, buscando estabelecer
              a sinergia necessária para a otimização do desempenho operacional
              dessas empresas, além de prestar serviços de alta qualidade para
              todos os seus clientes.
            </p>
            <p className="text-slate-800">
              Nossa política de qualidade é baseada em princípios fundamentais
              que norteiam nossa atuação:
            </p>
            <ul className="list-none">
              <li className="relative pl-8 text-slate-800">
                <i className="absolute left-0 top-0 text-yellow-500 ri-check-double-line"></i>
                Promover o desenvolvimento contínuo dos colaboradores,
                proporcionando-lhes a necessária formação.
              </li>
              <li className="relative pl-8 text-slate-800">
                <i className="absolute left-0 top-0 text-yellow-500 ri-check-double-line"></i>
                Manter uma cultura organizacional baseada na transparência.
              </li>
              <li className="relative pl-8 text-slate-800">
                <i className="absolute left-0 top-0 text-yellow-500 ri-check-double-line"></i>
                Garantir o cumprimento do Sistema de Gestão de Qualidade (SGQ),
                tendo, sempre, como objetivo a melhoria contínua da eficácia do
                serviços prestados.
              </li>
            </ul>
          </div>
          <div
            className="order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <Image
              src={Meeting}
              alt="Sobre a Lince Corporate"
              className="rounded-lg"
              width={1500}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
