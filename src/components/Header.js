import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaLeaf, FaInfoCircle } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Animación de entrada para el header
  useEffect(() => {
    const timer = setTimeout(() => setIsHeaderVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Cerrar menú al cambiar el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`bg-gradient-to-r from-green-700 to-green-500 text-white fixed w-full top-0 z-50 shadow-lg transition-all duration-500 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl md:text-3xl font-extrabold tracking-wide flex items-center space-x-2">
            <FaLeaf className="text-yellow-300 animate-spin-slow text-lg md:text-2xl" />
            <span className="truncate">Agro Plántulas Pitayo</span>
          </div>

          {/* Links de navegación para dispositivos grandes */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-lg">
            <NavLink href="#inicio" icon={<FaHome />} text="Inicio" delay="1s" />
            <NavLink href="#plantulas" icon={<FaLeaf />} text="Plántulas" delay="2s" />
            <NavLink href="#informacion" icon={<FaInfoCircle />} text="Información" delay="3s" />
          </nav>

          {/* Botón del menú (Responsive para móviles) */}
          <button
            className="md:hidden p-2 hover:bg-green-600 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú desplegable para móviles */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col space-y-4 py-4">
            <MobileNavLink href="#inicio" icon={<FaHome />} text="Inicio" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink href="#plantulas" icon={<FaLeaf />} text="Plántulas" onClick={() => setIsMenuOpen(false)} />
            <MobileNavLink
              href="#informacion"
              icon={<FaInfoCircle />}
              text="Información"
              onClick={() => setIsMenuOpen(false)}
            />
          </nav>
        </div>
      </div>
    </header>
  );
};

// Componente para enlaces de navegación en desktop
const NavLink = ({ href, icon, text, delay }) => (
  <a
    href={href}
    className="flex items-center space-x-2 hover:text-yellow-300 transition-all duration-300 hover:scale-105 animate__animated animate__fadeIn"
    style={{ animationDelay: delay }}
  >
    {icon}
    <span>{text}</span>
  </a>
);

// Componente para enlaces de navegación en móvil
const MobileNavLink = ({ href, icon, text, onClick }) => (
  <a
    href={href}
    className="flex items-center space-x-3 hover:bg-green-600 p-2 rounded-lg transition-colors duration-200"
    onClick={onClick}
  >
    <span className="text-yellow-300">{icon}</span>
    <span>{text}</span>
  </a>
);

export default Header;