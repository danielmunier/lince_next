import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Contato</h2>
          <p className="text-gray-600">Fale conosco</p>
        </div>

        <div className="mb-8">
          <iframe
            className="w-full h-64 border-0 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58802.76106899869!2d-43.17739!3d-22.907005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f609141910b%3A0x6e4f6574012c8913!2sAv.%20Rio%20Branco%2C%20156%20-%20Centro%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020010-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1681883256924!5m2!1spt-BR!2sus"
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="shadow-lg p-6">
            <div className="mb-4">
              <div className="flex items-center text-gray-700 mb-4">
                <i className="bi bi-geo-alt text-2xl text-blue-500 mr-3"></i>
                <h4 className="text-lg font-bold">Localização</h4>
              </div>
              <p className="text-gray-600">
                Av. Nilo Peçanha, 50, Sala 302 - Centro, Rio de Janeiro - RJ,
                20020-906, Brasil
              </p>
            </div>

            <div className="mb-4">
              <div className="flex items-center text-gray-700 mb-4">
                <i className="bi bi-envelope text-2xl text-blue-500 mr-3"></i>
                <h4 className="text-lg font-bold">Email</h4>
              </div>
              <p className="text-gray-600">kellylince@gmail.com</p>
            </div>

            <div>
              <div className="flex items-center text-gray-700 mb-4">
                <i className="bi bi-phone text-2xl text-blue-500 mr-3"></i>
                <h4 className="text-lg font-bold">Telefone</h4>
              </div>
              <p className="text-gray-600">+55 21 96731-5536</p>
              {/* <p className="text-gray-600">21 2487-5685</p> */}
              <p className="text-gray-600">+55 21 97804-9339</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white shadow-lg p-6">
            <form
              action="https://lince.onrender.com/"
              method="post"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  className="form-input w-full border border-gray-300 p-3"
                  placeholder="Nome"
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="form-input w-full border border-gray-300 p-3"
                  placeholder="Email"
                  required
                />
              </div>
              <input
                type="text"
                name="assunto"
                className="form-input w-full border border-gray-300 p-3"
                placeholder="Assunto"
                required
              />
              <textarea
                name="mensagem"
                className="form-textarea w-full border border-gray-300 p-3"
                placeholder="Mensagem"
                required
              ></textarea>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition duration-300"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
