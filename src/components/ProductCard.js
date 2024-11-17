import React, { useState } from 'react';
import { FaWhatsapp, FaTimes, FaCheckCircle, FaTimesCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from './img/img1.jpeg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpeg';

const ImageCarousel = ({ images, name }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative group">
            <img
                src={images[currentIndex]}
                alt={`${name} - ${currentIndex + 1}`} // Eliminamos la palabra "Image" para evitar redundancia
                className="w-full h-64 sm:h-96 object-cover rounded-t-lg transition-transform duration-500"
            />
            <button
                onClick={goToPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Previous image"
            >
                <FaChevronLeft className="text-xl" />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/75 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Next image"
            >
                <FaChevronRight className="text-xl" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 bg-black/30 px-4 py-2 rounded-full">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all transform ${index === currentIndex
                            ? 'bg-white scale-110'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    // Usar las imágenes locales para cada producto
    const productImages = [img1, img2, img3];

    return (
        <div className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300">
            <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all">
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-white hover:text-gray-200 bg-black/50 hover:bg-black/75 rounded-full p-2 shadow-lg z-10 transition-all"
                        aria-label="Close modal"
                    >
                        <FaTimes className="text-xl" />
                    </button>
                    <ImageCarousel images={productImages} name={product.name} />
                </div>

                <div className="p-6 space-y-6">
                    <div className="flex justify-between items-start">
                        <h3 className="text-3xl font-bold text-gray-800">{product.name}</h3>
                        <div className="flex items-center">
                            {product.available ? (
                                <div className="flex items-center text-green-500 bg-green-50 px-3 py-1 rounded-full">
                                    <FaCheckCircle className="mr-2" />
                                    <span className="font-medium">Disponible</span>
                                </div>
                            ) : (
                                <div className="flex items-center text-red-500 bg-red-50 px-3 py-1 rounded-full">
                                    <FaTimesCircle className="mr-2" />
                                    <span className="font-medium">Agotado</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <p className="text-gray-600 text-lg leading-relaxed">
                            {product.longDescription || product.description}
                        </p>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-xl mb-4 text-gray-800">Detalles del producto</h4>
                            <ul className="space-y-3 text-base">
                                <li className="flex justify-between">
                                    <span className="font-medium text-gray-600">Precio:</span>
                                    <span className="text-gray-800">${product.price.toLocaleString()}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium text-gray-600">Tiempo de crecimiento:</span>
                                    <span className="text-gray-800">{product.growthTime}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium text-gray-600">Altura promedio:</span>
                                    <span className="text-gray-800">{product.height}</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="font-medium text-gray-600">Clima recomendado:</span>
                                    <span className="text-gray-800">{product.climate}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <h4 className="font-bold text-xl mb-4 text-gray-800">Cuidados requeridos</h4>
                            <ul className="space-y-2 text-base">
                                {product.care?.map((item, index) => (
                                    <li key={index} className="flex items-baseline">
                                        <span className="text-green-500 mr-3">•</span>
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href={`https://wa.me/${product.whatsappNumber}?text=Hola, estoy interesado en: ${product.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl text-center font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                        >
                            <FaWhatsapp className="inline-block mr-3 text-2xl" />
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductCard = ({ product, onClick }) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div
                onClick={onClick}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full transform hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
                <div className="relative pb-[75%]">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {!product.available && (
                        <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Agotado
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-green-600">${product.price.toLocaleString()}</span>
                        <span className="bg-green-500 text-white p-2 rounded-full transform hover:rotate-12 transition-transform">
                            <FaWhatsapp className="text-xl" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProductList = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            name: 'Café Arábigo',
            description: 'Plántula de café arábigo, ideal para climas suaves.',
            longDescription: 'El café Arábigo es conocido por su sabor suave y aromático. Nuestras plántulas son cultivadas bajo estrictos estándares de calidad para asegurar un óptimo desarrollo y producción. Esta variedad produce un café de alta calidad con notas dulces y afrutadas.',
            price: 2000,
            image: img1,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: true,
            growthTime: '8-12 meses',
            height: '1.5-2 metros',
            climate: 'Templado (17-23°C)',
            care: [
                'Riego moderado cada 2-3 días',
                'Exposición solar parcial',
                'Suelo bien drenado y rico en nutrientes',
                'Poda regular para mejor producción'
            ]
        },
        {
            name: 'Café Robusta',
            description: 'Plántula de café robusta, resistente y productiva.',
            longDescription: 'La variedad Robusta es conocida por su alta resistencia a plagas y enfermedades. Produce granos con mayor contenido de cafeína y es ideal para zonas de menor altitud. Perfecta para producción comercial a gran escala.',
            price: 1800,
            image: img2,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: true,
            growthTime: '6-10 meses',
            height: '2-3 metros',
            climate: 'Cálido (20-30°C)',
            care: [
                'Riego abundante en época seca',
                'Exposición solar directa',
                'Suelo ácido con buen drenaje',
                'Fertilización trimestral'
            ]
        },
        {
            name: 'Café Typica',
            description: 'Café de la variedad Typica, con excelente sabor.',
            longDescription: 'El Café Typica es una de las variedades más antiguas y apreciadas. Produce un café de excelente calidad con un perfil de sabor complejo y equilibrado. Ideal para productores que buscan calidad premium.',
            price: 2500,
            image: img3,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: true,
            growthTime: '8-12 meses',
            height: '3-4 metros',
            climate: 'Templado a frío (15-21°C)',
            care: [
                'Riego controlado',
                'Sombra parcial necesaria',
                'Suelo rico en materia orgánica',
                'Protección contra vientos fuertes'
            ]
        },
        {
            name: 'Café Gesha',
            description: 'Variedad premium de café Gesha, excelente para exportación.',
            longDescription: 'El Café Gesha es una variedad de élite, reconocida mundialmente por su extraordinario perfil de sabor y aroma. Produce un café con notas florales y cítricas únicas, altamente cotizado en el mercado internacional.',
            price: 3500,
            image: img1,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: false,
            growthTime: '12-15 meses',
            height: '2-3 metros',
            climate: 'Templado frío (16-20°C)',
            care: [
                'Riego preciso y controlado',
                'Sombra regulada',
                'Suelo volcánico preferido',
                'Manejo fitosanitario riguroso',
                'Fertilización especial'
            ]
        },
        {
            name: 'Café Bourbon',
            description: 'Café Bourbon, de sabor dulce y suave.',
            longDescription: 'El Café Bourbon es apreciado por su sabor dulce y suave con notas a caramelo. Esta variedad produce un 20-30% más de frutos que el Typica y es conocida por su excelente calidad en taza.',
            price: 2200,
            image: img2,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: true,
            growthTime: '7-11 meses',
            height: '1.5-2 metros',
            climate: 'Templado (18-23°C)',
            care: [
                'Riego regular',
                'Sombra moderada',
                'Suelo fértil y bien drenado',
                'Poda anual recomendada'
            ]
        },
        {
            name: 'Limón con Injerto',
            description: 'Plántula de limón con injerto, alta producción y buena calidad.',
            longDescription: 'Nuestros limones injertados combinan la resistencia de patrones seleccionados con variedades de alta producción. Producen frutos de excelente calidad y tienen una mayor resistencia a enfermedades.',
            price: 1500,
            image: img3,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: true,
            growthTime: '24-36 meses para primera cosecha',
            height: '2.5-3 metros',
            climate: 'Subtropical (20-28°C)',
            care: [
                'Riego frecuente en temporada seca',
                'Exposición solar plena',
                'Fertilización regular',
                'Control de plagas preventivo',
                'Poda de formación'
            ]
        },
        {
            name: 'Limón sin Injerto',
            description: 'Limón sin injerto, ideal para suelos alcalinos.',
            longDescription: 'Las plántulas de limón sin injerto son más resistentes y longevas. Aunque tardan más en producir, son excelentes para terrenos difíciles y pueden alcanzar una mayor altura.',
            price: 1200,
            image: img1,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: true,
            growthTime: '36-48 meses para primera cosecha',
            height: '4-5 metros',
            climate: 'Tropical a subtropical (18-30°C)',
            care: [
                'Riego profundo semanal',
                'Sol directo necesario',
                'Suelo bien drenado',
                'Fertilización orgánica recomendada',
                'Poda ligera de mantenimiento'
            ]
        },
        {
            name: 'Limón tipo Mexicano',
            description: 'Plántula de limón tipo mexicano, más pequeño y de sabor más ácido.',
            longDescription: 'El limón mexicano o lima ácida es muy apreciado por su intenso sabor y alto contenido de jugo. Ideal para cocina y bebidas, produce frutos pequeños pero muy aromáticos durante todo el año.',
            price: 1300,
            image: img2,
            images: [img1, img2, img3],
            whatsappNumber: '3001234567',
            available: true,
            growthTime: '18-24 meses para primera cosecha',
            height: '2-3 metros',
            climate: 'Tropical (22-32°C)',
            care: [
                'Riego moderado',
                'Exposición solar directa',
                'Suelo arenoso-arcilloso',
                'Fertilización bimestral',
                'Poda de aclareo regular'
            ]
        }
    ];

    return (
        <section id='plantulas'  className="py-12 sm:py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                    Nuestros Productos
                </h2>
                <div className="flex flex-wrap -mx-4">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            onClick={() => setSelectedProduct(product)}
                        />
                    ))}
                </div>
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </section>
    );
};

export default ProductList;