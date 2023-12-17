import React from "react";
import gualtallary from "../images/vistaFlores.png";
import iconoMap from "../images/iconoMap.png";
import iconoSuelo from "../images/iconoSuelo.png";
import iconoUvas from "../images/iconoUvas.png";

function VistaFlores() {
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
        <div className="w-[470px]">
          <h1 className="mt-28 ml-36 texto-guantallary" style={gothamBlack}>
            VISTA FLORES
          </h1>
        </div>

        <div className="w-[470px] h-[308px] flex items-center ml-36">
          <div className="mt-12">
            <p className="texto-guantallary-sub">
              <img
                src={iconoMap}
                alt="Icono Map"
                className="inline-block mr-2"
              />
              Tunuyán, 1.050 msnm{" "}
            </p>

            <p className="texto-guantallary-sub mt-6">
              <img
                src={iconoSuelo}
                alt="Icono Map"
                className="inline-block mr-2"
              />
              SUELO: profundos con sedimentos aluviales, eólicos y con
              componentes de arenas, arcillas y carbonatos. Gracias a viñas de
              más de 40 años conducidas en espaldero, logramos un vino con
              expresión y potencia.
            </p>
            <p className="texto-guantallary-sub mt-6 ">
              <img
                src={iconoUvas}
                alt="Icono Map"
                className="inline-block mr-2"
              />
              VARIEDADES: Malbec, Sangiovese, Merlot, Petit Verdot, Ancellotta,
              Cabernet Franc y Cabernet Sauvignon.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-gray-300">
        <img src={gualtallary} alt="Gualtallary" className="w-full h-[680px]" />
      </div>
    </div>
  );
}

export default VistaFlores;
