import React, { useRef, useState } from "react";
import galleryPersona1 from "../../images/galleryPersona1.png";
import imagenFondo from "../../images/imagenFondo.jpg";

function Historias() {
  const initialCards = [
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

  const [cards, setCards] = useState(initialCards);
  const carouselRef = useRef(null);
  const [isSliding, setIsSliding] = useState(false);

  const cardWidth = 941;

  const handleNext = () => {
    if (isSliding) return;

    setIsSliding(true);

    carouselRef.current.style.transition = "transform 0.5s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = "translateX(0)";
      setIsSliding(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isSliding) return;

    setIsSliding(true);

    // Mover la última tarjeta al inicio antes de iniciar la animación
    setCards((prevCards) => [
      prevCards[prevCards.length - 1],
      ...prevCards.slice(0, -1),
    ]);

    // Posicionar el carrusel al final (en -cardWidth) sin transición
    carouselRef.current.style.transition = "none";
    carouselRef.current.style.transform = `translateX(-${cardWidth}px)`;

    // Esperar un ciclo para aplicar la transición hacia 0
    setTimeout(() => {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = "translateX(0)";
    }, 50);

    setTimeout(() => {
      setIsSliding(false);
    }, 500);
  };

  return (
    <div className="w-full h-[350px] relative">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center h-full px-4"
        style={{
          backgroundImage: `url(${imagenFondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full flex items-center justify-center mt-[50px]">
          <button
            onClick={handlePrev}
            className="absolute left-24 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-10 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform"
          >
            &lt;
          </button>

          <div className="relative w-[941px] h-[235px] overflow-hidden">
            <div
              ref={carouselRef}
              className="flex"
              style={{ width: `${cards.length * cardWidth}px` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="w-[941px] flex-shrink-0 flex items-center justify-center p-6 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-shrink-0 w-[185.39px] h-[185.39px] rounded-full overflow-hidden bg-[#D9D9D9]">
                      <img
                        src={card.image}
                        alt="Persona"
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col justify-center ml-6">
                      <div className="mb-4 text-[#633F3F] font-normal text-[18px] leading-[28px]">
                        <p>{card.testimonial}</p>
                      </div>
                      <div className="mb-2 text-[#633F3F] font-medium text-[22px] leading-[32px]">
                        <p>{card.name}</p>
                      </div>
                      <div className="text-[#633F3F] font-medium text-[14px] uppercase tracking-widest">
                        <p>{card.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-24 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-10 cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Historias;
