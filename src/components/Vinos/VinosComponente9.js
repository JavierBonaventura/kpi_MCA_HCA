import React, { useEffect } from "react";
import Imagen from "../../images/vinosFoto7.png";
import AOS from "aos";
import "aos/dist/aos.css";

function VinosComponente9() {
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
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="flex flex-col lg:flex-row-reverse bg-[#252323]">
      <div
        className="w-full lg:w-1/2 py-32 lg:py-80 bg-cover bg-center shadow-2xl"
        style={{ backgroundImage: `url(${Imagen})` }}
      ></div>
      <div
        data-aos="fade-right"
        data-aos-duration="1500"
        className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-0 lg:gap-y-6 !py-10 lg:py-0 "
      >
        <h1
          className="text-white text-2xl lg:text-[2rem] lg:leading-[50px]"
          style={gothamBlack}
        >
          RESERVA
        </h1>

        <div>
          <p className="mt-6 lg:mt-0 font-gotham text-white text-base lg:text-lg">
            La línea que mejor representa quiénes somos. Es la que mejor resume
            nuestra experiencia y trayectoria. Es embajadora del vino argentino
            con monovarietales de Malbec, Cabernet Sauvignon y Cabernet Franc.
          </p>
          <div className="flex lg:hidden">
            <div className="inline-block mr-auto mt-10 z-10">
              <a
                href=""
                className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
              >
                VER MÁS
              </a>
            </div>
          </div>
          <div className="hidden lg:inline-block mr-auto z-10 mt-10">
            <div className="border border-white text-white h-8 w-48 flex justify-center items-center hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center">
              <a href="">VER MÁS</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VinosComponente9;
