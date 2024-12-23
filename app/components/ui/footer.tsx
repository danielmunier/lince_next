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
              <a
                href="#"
                className="text-blue-700 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4 className="text-lg font-semibold text-white">Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div className="footer-links">
            <h4 className="text-lg font-semibold text-white">Nossos Serviços</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Aeronáutica
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Lince China Capital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Consultoria Empresarial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Equipamentos Médicos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Imobiliária
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()}{" "}
            <strong className="text-gray-300">Lince Corporate</strong>. Todos os
            Direitos Reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
