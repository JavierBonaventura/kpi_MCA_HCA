import React from "react";
import Sombra from "../../images/textura-single-vinos.png";
import Bottle from "../../images/wine-bottle-1.png";
import { Link } from "react-router-dom";

function VinosComponente7() {
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

  return (
    <div className="flex flex-col-reverse lg:flex-row py-4 lg:py-0 bg-[#252323]">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] text-white flex flex-col  justify-center lg:px-44 gap-y-6 !py-5 lg:py-0 ">
        <h1
          className="text-2xl lg:text-[2.5rem] lg:leading-[50px]"
          style={gothamBlack}
        >
          GUALTALLARY
        </h1>

        <div className="font-gotham">
          <h1 className="text-lg lg:text-2xl lg:leading-[36px]">
            TUPUNGATO, 1.280 msnm
          </h1>
          <p className="text-sm lg:text-lg mt-6">
            Pureza, frescura, jugosidad y hierbas. Ubicada en uno de los lugares
            más extremos y apasionantes para el vino argentino. <br /> <br />{" "}
            Gracias a este particular suelo formado de manera biológica,
            interviniendo bacterias, plantas y rocas en su composición, en la
            parcela #2 de nuestro viñedo nace este Malbec puro, fresco y lleno
            de texturas.
          </p>
          <div className="flex">
            <div className="inline-block mr-auto z-10 mt-10">
              <a
                href=""
                className="border border-white text-white px-5 py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
              >
                VER FICHA TÉCNICA
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2  bg-cover bg-center bg-[#252323]">
        <div className="relative flex justify-center items-center">
          <img src={Sombra} alt="" className="w-auto" />
          <img src={Bottle} className="absolute w-[4.5rem] lg:w-28 " alt="" />
        </div>
      </div>
    </div>
  );
}

export default VinosComponente7;
