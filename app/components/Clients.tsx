import clientHands from "@/app/assets/clients.jpg";
import Image from "next/image";

const Clients = () => {
  return (
    <section className="p-8 md:p-16 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Imagem */}
        <div className="w-full lg:w-1/2">
          <Image
            src={clientHands}
            alt="Sobre a Lince Corporate"
            className=""
            width={1800}
            height={400}
            priority
          />
        </div>

        {/* Texto */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h3 className="text-3xl md:text-4xl font-bold">
            Principais parceiros
          </h3>
          <p className="leading-relaxed text-gray-700">
            Além de possuirmos um time de profissionais capacitados, a empresa conta com parceiros
            de negócios, tais como: Bravamar, R&D Technologies, Vertical Flight, Omni Táxi Aéreo,
            Costa do Sol, PetroMaterials, Wison, Grupo Cobra, entre outros.
          </p>

          {/* Dados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Número de clientes */}
            <div className="flex flex-col items-center text-center p-6 shadow-md">
              <span className="text-5xl font-bold text-blue-500">65</span>
              <p className="mt-2 text-sm text-gray-700">
                Nossa empresa tem a satisfação de atender a um número significativo de clientes,
                com mais de 16 parceiros confiando em nossos serviços e soluções personalizadas.
              </p>
            </div>

            {/* Anos de experiência */}
            <div className="flex flex-col items-center text-center p-6 shadow-md">
              <span className="text-5xl font-bold text-green-500">24</span>
              <p className="mt-2 text-sm text-gray-700">
                Anos de experiência no mercado, nossa empresa tem o conhecimento e a expertise
                necessários para oferecer soluções eficientes e de qualidade para nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
