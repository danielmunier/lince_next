import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const Header = () => {
    return (
        <>
            <header id="header" className="fixed-top bg-black/80 px-4 py-3">
                <div className="flex justify-between items-center m-20 mt-0 mb-0">
                    {/* Logo e Título */}
                    <h1 className="flex items-center space-x-3">
                        <Image src={Logo} width={50} alt="Logo" />
                        <a href="index.html" className="text-white font-extrabold hover:text-yellow-500 transition-colors">Lince</a>
                    </h1>

                    {/* Menu */}
                    <nav id="navbar" className="navbar">
                        <ul className="flex space-x-6">
                            <li><a className="nav-link scrollto active text-white" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto text-white" href="#about">Sobre</a></li>
                            <li><a className="nav-link scrollto text-white" href="#services">Serviços</a></li>
                            <li><a className="nav-link scrollto text-white" href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
