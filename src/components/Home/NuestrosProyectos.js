import React, { useState, useRef, useEffect } from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenFondo from "../../images/imagenFondo.jpg"

import gallery1 from "../../images/gallery1.png";
import gallery2 from "../../images/gallery2.png";
import gallery3 from "../../images/gallery3.png";
import gallery4 from "../../images/gallery1.png";
import gallery5 from "../../images/gallery2.png";

function Servicios() {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Proyecto Ciriaco Agro Alba",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery1,
    },
    {
      id: 2,
      title: "Proyecto Fideicomiso San Antonio.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery2,
    },
    {
      id: 3,
      title: "Proyecto Biocor.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery3,
    },
    {
      id: 1,
      title: "Proyecto Ciriaco Agro Alba",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery1,
    },
    {
      id: 2,
      title: "Proyecto Fideicomiso San Antonio.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery2,
    },
    {
      id: 3,
      title: "Proyecto Biocor.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery3,
    },
    {
      id: 1,
      title: "Proyecto Ciriaco Agro Alba",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery1,
    },
    {
      id: 2,
      title: "Proyecto Fideicomiso San Antonio.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery2,
    },
    {
      id: 3,
      title: "Proyecto Biocor.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery3,
    },
    {
      id: 1,
      title: "Proyecto Ciriaco Agro Alba",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery1,
    },
    {
      id: 2,
      title: "Proyecto Fideicomiso San Antonio.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery2,
    },
    {
      id: 3,
      title: "Proyecto Biocor.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery3,
    },
    {
      id: 1,
      title: "Proyecto Ciriaco Agro Alba",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery1,
    },
    {
      id: 2,
      title: "Proyecto Fideicomiso San Antonio.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery2,
    },
    {
      id: 3,
      title: "Proyecto Biocor.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery3,
    },
    {
      id: 1,
      title: "Proyecto Ciriaco Agro Alba",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery1,
    },
    {
      id: 2,
      title: "Proyecto Fideicomiso San Antonio.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery2,
    },
    {
      id: 3,
      title: "Proyecto Biocor.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery3,
    },
    {
      id: 1,
      title: "Proyecto Ciriaco Agro Alba",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery1,
    },
    {
      id: 2,
      title: "Proyecto Fideicomiso San Antonio.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery2,
    },
    {
      id: 3,
      title: "Proyecto Biocor.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl facilisi. Pellentesque pharetra id placerat.",
      image: gallery3,
    },
  ];

  const cardWidth = 409.736 + 160;

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
    carousel.style.transform = `translateX(-${cardWidth}px)`;

    setTimeout(() => {
      carousel.style.transition = "none";
      carousel.style.transform = "translateX(0)";
      carousel.appendChild(carousel.firstChild);

      setIsTransitioning(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    const carousel = carouselRef.current;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${cardWidth}px)`;

    carousel.insertBefore(carousel.lastChild, carousel.firstChild);

    setTimeout(() => {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = "translateX(0)";

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 10);
  };

  return (
    <div>
      <div className="w-full h-[852px] overflow-hidden relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'cover',  // Asegura que la imagen cubra todo el ancho
            backgroundPosition: 'center',  // Centra la imagen
            
          }}
        >
          <div
            className="w-[624px] h-[76px] flex-shrink-0 mt-[-50px]"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "60px",
              fontWeight: "900",
              lineHeight: "60px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
              textAlign: "center",
            }}
          >
            Nuestros proyectos
          </div>
          <div
            className="w-[535px] h-[70px] flex-shrink-0 mt-[15px]"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
              textAlign: "center",
            }}
          >
            Esta es una selección de todos los proyectos en los cuales venimos
            trabajando hace más de 40 años.
          </div>
          {/* Contenedor para los botones y las tarjetas */}
          <div className="flex items-center justify-center mt-[50px] relative">
            {/* Botón de navegación izquierda */}
            <button
              className="absolute left-1/2 transform -translate-x-[300px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white z-20 bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
              onClick={handlePrev}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.86213 1.54581C9.5431 1.21738 9.02661 1.21738 8.70839 1.54581L1.96137 8.50935C1.32331 9.16705 1.32331 10.234 1.96137 10.8917L8.75735 17.9066C9.07312 18.2317 9.58308 18.2359 9.90293 17.9151C10.2293 17.5875 10.2334 17.0477 9.91191 16.715L3.69198 10.2963C3.37295 9.96707 3.37295 9.434 3.69198 9.10473L9.86213 2.73657C10.1812 2.40814 10.1812 1.87508 9.86213 1.54581Z"
                  fill="white"
                />
              </svg>
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
                  className="relative w-[409.736px] h-[514.89px] flex-shrink-0 transition-transform duration-500"
                  style={{
                    borderRadius: "28.132px",
                    background: "#DAD8CB",
                    boxShadow:
                      "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
                  }}
                >
                  {/* Imagen de la tarjeta */}
                  <div
                    className="w-[409.736px] h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1] absolute top-0 left-0"
                    style={{
                      backgroundImage: `url(${card.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "28.132px 28.132px 0px 0px",
                    }}
                  />

                  {/* Título de la tarjeta */}
                  <div
                    style={{
                      width: "389.793px",
                      height: "65.268px",
                      color: "#464646",
                      textAlign: "center",
                      fontFamily: "TT Norms Pro",
                      fontSize: "28.132px",
                      fontWeight: 450,
                      lineHeight: "28.132px",
                      letterSpacing: "-1.758px",
                      position: "absolute",
                      top: "280px",
                      width: "100%",
                    }}
                  >
                    {card.title}
                  </div>

                  {/* Descripción de la tarjeta */}
                  <div
                    style={{
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      width: "351.72px",
                      height: "70.707px",
                      color: "#464646",
                      textAlign: "center",
                      fontFamily: "TT Norms Pro",
                      fontSize: "17.583px",
                      fontWeight: 400,
                      lineHeight: "22.858px",
                      letterSpacing: "-1.758px",
                      position: "absolute",
                      top: "330px",
                      width: "100%",
                    }}
                  >
                    {card.description}
                  </div>

                  {/* Botón de la tarjeta */}
                  <div
                    className="bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform translate-x-[-50%]"
                    style={{
                      width: "217px",
                      height: "50px",
                      borderRadius: "5px",
                      position: "absolute",
                      bottom: "30px",
                      left: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "#FFF",
                        textAlign: "center",
                        fontFamily: "Fira Sans",
                        fontSize: "14px",
                        fontWeight: 400,
                        letterSpacing: "4px",
                        textTransform: "uppercase",
                      }}
                    >
                      ver más
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botón de navegación derecha */}
            <button
              className="absolute left-1/2 transform -translate-x-[-260px] w-[40px] h-[40px] flex items-center justify-center rounded-full text-white z-20 bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
              onClick={handleNext}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.66033 17.9067C1.97936 18.2351 2.49585 18.2351 2.81407 17.9067L9.56109 10.9432C10.1992 10.2855 10.1992 9.21849 9.56109 8.56079L2.76511 1.54588C2.44934 1.22082 1.93938 1.21661 1.61953 1.53746C1.29315 1.86505 1.28907 2.40485 1.61055 2.73749L7.83048 9.15617C8.14951 9.48545 8.14951 10.0185 7.83048 10.3478L1.66033 16.7159C1.34129 17.0444 1.34129 17.5774 1.66033 17.9067Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
