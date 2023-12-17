import React from "react";
import parajeAltamira from "../images/ParajeAltamira.png";
import iconoMap from "../images/iconoMap.png";
import iconoSuelo from "../images/iconoSuelo.png"
import iconoUvas from "../images/iconoUvas.png"

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
    <div className="w-full h-[680px] flex items-center justify-center bg-cover bg-center relative">


      <div className="w-1/2 bg-[#252323] h-full">
        <div className="w-[550px]">
          <h1 className="mt-28 ml-36 texto-guantallary" style={gothamBlack}>
          PARAJE ALTAMIRA
                    </h1>
        </div>

        <div className="w-[470px] h-[308px] flex items-center ml-36">
          <div className="mt-12">
            <p className="texto-guantallary-sub">
              <img src={iconoMap} alt="Icono Map" className="inline-block mr-2" />
              1.100 msnm
                         </p>
                         <p className="texto-guantallary-sub mt-6">
                         Buena amplitud térmica, con noches frescas y días de pleno sol.            </p>

            <p className="texto-guantallary-sub mt-6">
            <img src={iconoSuelo} alt="Icono Map" className="inline-block mr-2" />
            SUELO: están compuestos por arcilla, arena, limo y piedras calcáreas, en proporciones que varían sustancialmente de un viñedo a otro.            </p>
            <p className="texto-guantallary-sub mt-6 ">
            <img src={iconoUvas} alt="Icono Map" className="inline-block mr-2" />

            VARIEDAD: Malbec            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-gray-300">
        <img src={parajeAltamira} alt="Gualtallary" className="w-full h-[680px]" />
      </div>
    </div>
  );
}

export default ParajeAltamira;
