import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';  // Ícono de flecha hacia abajo

const HeroImage = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Control de la animación fade-in cuando el componente está montado
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 200);
        return () => clearTimeout(timer);
    }, []);

    // Función para hacer scroll hacia abajo hasta los productos
    const scrollToProducts = () => {
        const productsSection = document.getElementById("plantulas");
        if (productsSection) {
            window.scrollTo({
                top: productsSection.offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative mb-12 overflow-hidden">
            {/* Se ajusta la altura de la imagen para diferentes tamaños de pantalla */}
            <div className={`w-full h-[calc(100vh-50px)] sm:h-[calc(100vh-80px)] md:h-[calc(100vh-90px)] lg:h-[calc(100vh-100px)] overflow-hidden transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <img
                    src="https://media.istockphoto.com/id/1224318522/es/foto/plantas-j%C3%B3venes-de-pepino-con-hojas-y-flores.jpg?s=612x612&w=0&k=20&c=3AFdUAl_Ten-cZQUe_pUsG7LwDyaVTx6ci7O97e8fFU="
                    alt="Plántulas de pepino"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-in-out transform hover:scale-105"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-800 via-transparent to-transparent"></div>

            {/* Ícono de flecha para bajar */}
            <div
                onClick={scrollToProducts}
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer text-3xl text-white animate__animated animate__fadeIn animate__delay-2s"
            >
                <FaArrowDown />
            </div>
        </section>
    );
};

export default HeroImage;
