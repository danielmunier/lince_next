import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black/90 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informações de Contato */}
          <div className="footer-info">
            <h3 className="text-2xl font-bold text-white">
              Lince<span className="text-yellow-500">.</span>
            </h3>
            <p className="mt-4 text-sm">
              Av. Rio Branco, 156, Sala 703 - Centro, Rio de Janeiro - RJ,
              20010-000, Brasil
            </p>
            <p className="text-sm">
              <strong>Telefone:</strong> 21 2487-5685 | 21 96731-5536
            </p>
            <p className="text-sm">
              <strong>Email:</strong> kellylince@gmail.com
            </p>
            <div className="social-links flex space-x-4 mt-3">
              <a
                href="#"
                className="text-blue-500 hover:text-white transition"
                aria-label="Facebook"
              >
                <i className="bx bxl-facebook text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-pink-500 hover:text-white transition"
                aria-label="Instagram"
              >
                <i className="bx bxl-instagram text-2xl"></i>
              </a>
              {/* Adicione mais links sociais aqui */}
            </div>
          </div>
          {/* Adicione mais colunas de footer aqui */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
