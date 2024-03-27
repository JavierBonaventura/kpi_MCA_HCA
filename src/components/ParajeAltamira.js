import React from "react";
import parajeAltamira from "../images/ParajeAltamira.png";
import iconoMap from "../images/iconoMap.png";
import iconoSuelo from "../images/iconoSuelo.png";
import iconoUvas from "../images/iconoUvas.png";

function ParajeAltamira() {
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
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-6 !py-12 lg:py-0 ">
        <h1
          className="text-white text-2xl lg:text-[2.5rem] lg:leading-[50px]"
          style={gothamBlack}
        >
          PARAJE ALTAMIRA
        </h1>

        <div className="font-gotham text-white text-base lg:text-lg">
          <p>
            <img src={iconoMap} alt="Icono Map" className="inline-block mr-2" />
            1.100 msnm
          </p>
          <p className="mt-6">
            Buena amplitud térmica, con noches frescas y días de pleno sol.
          </p>
          <p className="mt-6">
            <img
              src={iconoSuelo}
              alt="Icono Map"
              className="inline-block mr-2"
            />
            SUELO: están compuestos por arcilla, arena, limo y piedras
            calcáreas, en proporciones que varían sustancialmente de un viñedo a
            otro.
          </p>
          <p className="mt-6">
            <img
              src={iconoUvas}
              alt="Icono Map"
              className="inline-block mr-2"
            />
            VARIEDADES: Malbec
          </p>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 py-32 lg:py-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${parajeAltamira})` }}
      ></div>
    </div>
  );
}

export default ParajeAltamira;
