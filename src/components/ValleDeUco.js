import React, { useEffect } from "react";
import valleUco from "../images/valleUco.png";
import AOS from "aos";
import "aos/dist/aos.css";

function HeroValle() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.46)",
  };

  useEffect(() => {
    AOS.init({
      // Configura las opciones de AOS aquí, si es necesario
    });
  }, []);

  return (
    <>
      <style>
        {` .heightMobile {
            padding: 14rem 0;
          }
           media (min-width: 1024px) {
          .heightMobile {
          padding: 0;
              }
            }
          `}
      </style>
      <div
        className="w-full heightMobile lg:h-screen flex items-center justify-center bg-cover bg-center relative "
        style={{ backgroundImage: `url(${valleUco})` }}
      >
        <div className="z-10 space-y-8 container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl ">
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="text-white text-center text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase"
            style={gothamBlack}
          >
            VALLE DE UCO
          </h1>
          <div className="w-full lg:w-1/2  mx-auto">
            <p
              className="text-white text-center text-base lg:text-lg lg:leading-[28px] font-gotham"
              data-aos="zoom-in"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              La expresión de Vista Flores, la frescura de Pampa el Cepillo,{" "}
              <br className="hidden lg:block" /> la fineza de Gualtallary y la
              textura de Paraje Altamira
            </p>
          </div>
        </div>
        <div className="z-0" style={overlayStyle}></div>
      </div>
    </>
  );
}

export default HeroValle;
