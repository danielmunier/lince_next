'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from '@/app/assets/logo.png';
import Link from 'next/link';

const routes = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "Sobre" },
  { href: "#services", label: "Serviços" },
  { href: "/vagas", label: "Vagas" }
];

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 w-full px-4 py-3 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Image src={Logo} width={50} alt="Logo" />
          <a
            href="/"
            className="text-white font-extrabold hover:text-yellow-500 transition-colors"
          >
            Lince
          </a>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav
          className={`flex-col lg:flex-row lg:flex ${
            isMenuOpen ? "flex" : "hidden"
          } lg:space-x-6 lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
            {routes.map((route, index) => (
              <li key={index}>
                {route.href.startsWith("#") ? (
                  <a className="nav-link scrollto text-white" href={route.href}>
                    {route.label}
                  </a>
                ) : (
                  <Link href={route.href} className="nav-link scrollto text-white">
                    {route.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
