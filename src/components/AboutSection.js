import React from 'react';
import { FaLeaf, FaHandshake, FaRegClock } from 'react-icons/fa';

const AboutSection = () => {
    return (
        <section className="bg-gradient-to-r from-green-400 to-green-600 py-16 px-8 sm:px-10 lg:px-20 text-white">
            <div className="container mx-auto text-center animate__animated animate__fadeIn">
                <h2 className="text-4xl sm:text-5xl font-semibold mb-8">
                    Sobre Agro Plántulas Pitayo
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Card 1 - Experiencia */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 ease-in-out">
                        <FaLeaf className="text-4xl text-green-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Experiencia</h3>
                        <p className="text-lg text-gray-700">
                            Con más de 5 años de experiencia, Agro Plántulas Pitayo esta bien ubicada en la producción de plántulas de calidad para café y cítricos en el Huila - Colombia.
                        </p>
                    </div>
                    {/* Card 2 - Calidad */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 ease-in-out">
                        <FaRegClock className="text-4xl text-green-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Calidad</h3>
                        <p className="text-lg text-gray-700">
                            Trabajamos con métodos sostenibles para ofrecer plántulas que aseguren un excelente crecimiento y adaptabilidad a diferentes condiciones.
                        </p>
                    </div>
                    {/* Card 3 - Servicios Personalizados */}
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300 ease-in-out">
                        <FaHandshake className="text-4xl text-green-600 mb-4 mx-auto" />
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Servicios Personalizados</h3>
                        <p className="text-lg text-gray-700">
                            Ofrecemos asesoría personalizada, ayudando a nuestros clientes en cada paso del proceso de cultivo para garantizar el mejor resultado.
                        </p>
                    </div>
                </div>
                <div className="mt-12 max-w-4xl mx-auto text-center">
                    <p className="text-lg sm:text-xl text-gray-200 mb-6">
                        Agro Plántulas Pitayo es más que una empresa, somos un aliado estratégico para el éxito de tu cultivo. Con un compromiso firme con la calidad, el servicio y la satisfacción de nuestros clientes, somos un referente en el sector agrícola. ¡Confía en nosotros para el crecimiento de tu cultivo!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
