import React from "react";
import valleUco from "../../images/hero-single-vinos.png";
import Arrow from "../../images/arrow-l.png";
import { Link } from "react-router-dom";

function Hero() {
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

  return (
    <>
      <style>
        {` .heightMobile {
            padding: 10rem 0;
          }
           media (min-width: 1024px) {
          .heightMobile {
          padding: 0;
              }
            }
          `}
      </style>
      <div
        className="w-full  heightMobile lg:h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${valleUco})` }}
      >
        <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl z-10 ">
          <Link
            to="/vinos"
            className="inline-block bg-white hover:bg-[#460377] rounded-[5px] absolute top-24 lg:top-32 transition-all ease-in-out duration-300 hover:text-white"
          >
            <div className="flex items-center gap-x-2 px-2 lg:px-4 py-1.5 lg:py-0.5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
              <span className="hidden lg:block uppercase font-gotham text-xs lg:text-sm lg:leading-[36px]">
                Volver atrás
              </span>
            </div>
          </Link>
          <div className="z-10 space-y-8 ">
            <h1
              className="text-white text-center text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase"
              style={gothamBlack}
            >
              Single vineyard
            </h1>
            <div className=" w-full lg:w-1/2 mx-auto text-white text-center text-sm lg:text-lg lg:leading-[28px]">
              <p className="mb-2 font-gotham text-xl lg:text-2xl">
                La expresión del terrior
              </p>
              <p className="font-gotham">
                Es la línea que mejor representa nuestra diversidad geográfica.
                Exhibe nuestro compromiso para poner en valor y comunicar la
                riqueza de terruños y expresiones que nos regala el Valle de
                Uco. <br />
                <br /> Nuestra apuesta por la calidad se refleja en el Malbec
                que adopta distintos perfiles en tres de nuestros viñedos más
                emblemáticos: Gualtallary, Vista Flores y Pampa el Cepillo.
              </p>
            </div>
          </div>
        </div>
        <div className="z-0" style={overlayStyle}></div>
      </div>
    </>
  );
}

export default Hero;
