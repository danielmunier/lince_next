'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Ajuste 50 conforme necessário
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                id="header"
                className={`fixed top-0 left-0 w-full px-4 py-3 transition-colors duration-300 ${
                    isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
                }`}
            >
                <div className="flex justify-between items-center m-20 mt-0 mb-0">
                    {/* Logo e Título */}
                    <h1 className="flex items-center space-x-3">
                        <Image src={Logo} width={50} alt="Logo" />
                        <a
                            href="index.html"
                            className="text-white font-extrabold hover:text-yellow-500 transition-colors"
                        >
                            Lince
                        </a>
                    </h1>

                    {/* Menu */}
                    <nav id="navbar" className="navbar">
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    className="nav-link scrollto active text-white"
                                    href="#hero"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="nav-link scrollto text-white" href="#about">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto text-white"
                                    href="#services"
                                >
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a
                                    className="nav-link scrollto text-white"
                                    href="#contact"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
