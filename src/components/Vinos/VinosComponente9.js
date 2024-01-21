import React from "react";
import vinosFoto7 from "../../images/vinosFoto7.png";

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

  return (
    <div className="w-full h-[415px] flex items-center justify-center bg-cover bg-center relative">
      <div className="w-1/2 bg-gray-300">
        <img src={vinosFoto7} alt="Gualtallary" className="w-full h-[415px]" />
      </div>

      <div className="w-1/2 bg-[#252323] h-full">
        <div className="w-[595px]">
          <h1
            className="mt-16 ml-24 text-vinos-comp3-titulo"
            style={gothamBlack}
          >
            RESERVA
          </h1>
        </div>

        <div className="w-[500px]  flex items-center ml-24">
          <div className="mt-8">
            <p className="text-vinos-comp3">
              La línea que mejor representa quiénes somos. Es la que mejor
              resume nuestra experiencia y trayectoria. Es embajadora del vino
              argentino con monovarietales de Malbec, Cabernet Sauvignon y
              Cabernet Franc.
            </p>
          </div>
        </div>
        <div className="boton-vinos-ver-mas-comp3 mt-8  ml-24">
          <p className="texto-boton-vinos-ver-mas-comp3">ver más</p>
        </div>
      </div>
    </div>
  );
}

export default VinosComponente9;
