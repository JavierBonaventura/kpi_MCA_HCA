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
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-6 !py-5 lg:py-0 ">
        <h1 className=" texto-guantallary" style={gothamBlack}>
          VISTA FLORES
        </h1>

        <div>
          <p className="texto-guantallary-sub">
            <img src={iconoMap} alt="Icono Map" className="inline-block mr-2" />
            Tunuyán, 1.050 msnm
          </p>

          <p className="texto-guantallary-sub mt-6">
            <img
              src={iconoSuelo}
              alt="Icono Map"
              className="inline-block mr-2"
            />
            SUELO: profundos con sedimentos aluviales, eólicos y con componentes
            de arenas, arcillas y carbonatos. Gracias a viñas de más de 40 años
            conducidas en espaldero, logramos un vino con expresión y potencia.
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
      <div
        className="w-full lg:w-1/2 py-32 lg:py-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${gualtallary})` }}
      ></div>
    </div>
  );
}

export default VistaFlores;
