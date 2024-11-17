import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-green-600 text-white py-8 px-6 sm:px-8 lg:px-16">
            <div className="container mx-auto text-center">
                {/* Contacto */}
                <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-4">¡Contáctanos!</h3>
                    <p className="text-lg mb-4">Para más información sobre nuestras plántulas, contáctanos por WhatsApp:</p>
                    <a
                        href="https://wa.me/573001234567"
                        className="text-white font-bold text-xl flex justify-center items-center gap-2 hover:text-green-200 transition duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp className="text-3xl" /> WhatsApp
                    </a>
                </div>

                {/* Información legal */}
                <div className="text-sm sm:text-base text-gray-200">
                    <p>&copy; 2024 Agro Plántulas Pitayo. Todos los derechos reservados.</p>
                    <p>Diseñado con cariño para brindar la mejor experiencia a nuestros clientes.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
