import React, { useState } from "react";
import fondoServicios from "../../images/fondoServicios.png";
import galleryPersona1 from "../../images/galleryPersona1.png"; // Asegúrate de importar la imagen correcta
import imagenFondo from "../../images/imagenFondo.jpg"

function Historias() {
  // Estado para manejar el índice de la tarjeta visible
  const [currentIndex, setCurrentIndex] = useState(1); // Inicializa en 1 para mostrar la primera tarjeta correctamente

  // Contenido de las tarjetas
  const cards = [
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
    {
      image: galleryPersona1,
      testimonial:
        "Testimonials take the spotlight away from the seller, and shine it on the customer. Your customer was once in the shopper’s shoes, debating what product to choose, comparing prices, reading marketing message after marketing message.",
      name: "Molly Chambers",
      position: "Owner of CF INVESTMENTS",
    },
  ];

  // Duplicar las tarjetas para el carrusel infinito
  const duplicatedCards = [cards[cards.length - 1], ...cards, cards[0]];

  // Función para ir a la tarjeta siguiente
  const nextCard = () => {
    setCurrentIndex((prevIndex) => {
      // Si estamos en la última tarjeta, reiniciamos al primero
      if (prevIndex === duplicatedCards.length - 1) {
        return 1; // Regresamos al primer elemento real
      }
      return prevIndex + 1;
    });
  };

  // Función para ir a la tarjeta anterior
  const prevCard = () => {
    setCurrentIndex((prevIndex) => {
      // Si estamos en la primera tarjeta (copia), saltamos al final
      if (prevIndex === 0) {
        return duplicatedCards.length - 2; // Regresamos al último elemento real
      }
      return prevIndex - 1;
    });
  };

  return (
    <div>
      <div className="w-full h-[350px] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Contenedor para las tarjetas */}
          <div className="relative w-full flex items-center justify-center mt-[50px]">
            {/* Botón de navegación izquierda */}
            <button
              onClick={prevCard}
              className="absolute left-24 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-10 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform "
            >
              &lt;
            </button>

            {/* Tarjetas */}
            <div className="relative w-[941px] h-[235px] overflow-hidden">
              {duplicatedCards.map((card, index) => {
                const translateClass =
                  index === currentIndex
                    ? "translate-x-0"
                    : index === (currentIndex + 1) % duplicatedCards.length
                    ? "translate-x-full"
                    : index === (currentIndex - 1 + duplicatedCards.length) % duplicatedCards.length
                    ? "-translate-x-full"
                    : "hidden";

                return (
                  <div
                    key={index}
                    className={`absolute transition-transform duration-500 ease-in-out w-full h-full ${translateClass} flex items-center justify-center`}
                  >
                    <div className="flex flex-row items-center justify-between p-6 rounded-lg">
                      {/* Contenedor de la izquierda con la imagen */}
                      <div className="flex-shrink-0 w-[185.39px] h-[185.39px] rounded-full overflow-hidden bg-[#D9D9D9]">
                        <img
                          src={card.image}
                          alt="Persona"
                          className="object-cover w-full h-full"
                          style={{
                            width: "185.39px",
                            height: "185.39px",
                            flexShrink: 0,
                          }}
                        />
                      </div>

                      {/* Contenedor de la derecha con los textos */}
                      <div className="flex flex-col justify-center ml-6">
                        {/* Componente de arriba */}
                        <div
                          className="mb-4"
                          style={{
                            width: "681.849px",
                            height: "78.65px",
                            flexShrink: 0,
                            color: "#633F3F",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: '"Fira Sans"',
                            fontSize: "18px",
                            fontStyle: "normal",
                            fontWeight: 400,
                            lineHeight: "28px", // 155.556%
                          }}
                        >
                          <p>{card.testimonial}</p>
                        </div>

                        {/* Componente del medio */}
                        <div
                          className="mb-2"
                          style={{
                            width: "208.357px",
                            height: "29.962px",
                            flexShrink: 0,
                            color: "#633F3F",
                            fontFamily: "Fira Sans",
                            fontSize: "22px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "32px", // 145.455%
                          }}
                        >
                          <p>{card.name}</p>
                        </div>

                        {/* Componente de abajo */}
                        <div
                          style={{
                            width: "354.34px",
                            height: "15.917px",
                            flexShrink: 0,
                            color: "#633F3F",
                            fontFamily: "Fira Sans",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            letterSpacing: "4px",
                            textTransform: "uppercase",
                          }}
                        >
                          <p>{card.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Botón de navegación derecha */}
            <button
              onClick={nextCard}
              className="absolute right-24 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-10 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform "
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historias;
