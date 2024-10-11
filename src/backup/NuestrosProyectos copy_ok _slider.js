import React, { useState, useRef, useEffect } from "react";

function Servicios() {
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado para controlar la transición
  const carouselRef = useRef(null); // Referencia al contenedor del carrusel

  const cards = [
    { id: 1, title: "TARJETA 1" },
    { id: 2, title: "TARJETA 2" },
    { id: 3, title: "TARJETA 3" },
    { id: 4, title: "TARJETA 4" },
    { id: 5, title: "TARJETA 5" },
  ];

  const cardWidth = 409.736 + 160; // Ancho de la tarjeta más el gap

  // Inicializar el carrusel moviendo la última tarjeta al frente (para ciclo infinito)
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.insertBefore(carousel.lastChild, carousel.firstChild);
    }
  }, []);

  const handleNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const carousel = carouselRef.current;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${cardWidth}px)`; // Mover a la siguiente tarjeta

    setTimeout(() => {
      // Recolocar la primera tarjeta al final y resetear la transformación
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)"; // Resetear posición
      carousel.appendChild(carousel.firstChild); // Mover el primer elemento al final

      setIsTransitioning(false);
    }, 500); // Duración de la animación
  };

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const carousel = carouselRef.current;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${cardWidth}px)`; // Posicionamos hacia la izquierda

    // Recolocamos el último elemento al frente instantáneamente
    carousel.insertBefore(carousel.lastChild, carousel.firstChild);

    // Luego aplicamos la animación de transición
    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = "translateX(0)"; // Animar de regreso a la posición original

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Duración de la animación
    }, 10); // Timeout pequeño para que se ejecute después de mover el elemento
  };

  return (
    <div>
      <div className="w-full h-[852px] overflow-hidden relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Contenedor para los botones y las tarjetas */}
        <div className="flex items-center justify-center mt-[50px] relative">
          {/* Botón de navegación izquierda */}
          <button
            className="absolute left-[450px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white z-20 bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform"
            onClick={handlePrev}
          >
            prev
          </button>

          {/* Contenedor para las tarjetas */}
          <div
            ref={carouselRef}
            className={`flex gap-[160px] transition-transform duration-500 ease-in-out`}
            style={{ transform: `translateX(0px)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="transition-transform duration-500"
                style={{ transform: `translateX(0px)` }}
              >
                <div
                  className="w-[409.736px] h-[514.89px] flex-shrink-0"
                  style={{
                    borderRadius: "28.132px",
                    background: "#DAD8CB",
                    boxShadow:
                      "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
                  }}
                ></div>

                <div
                  style={{
                    color: "#464646",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "21.323px",
                    position: "absolute",
                    top: "220px",
                    width: "100%",
                  }}
                >
                  {card.title}
                </div>
              </div>
            ))}
          </div>

          {/* Botón de navegación derecha */}
          <button
            className="absolute right-[450px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white z-20 bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform "
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
