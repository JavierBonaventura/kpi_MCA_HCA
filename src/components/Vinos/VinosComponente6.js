import React from "react";
import vinosFoto4 from "../../images/vinosFoto4.png";

function VinosComponente6() {
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
      <div className="w-1/2 bg-[#252323] h-full">
        <div className="w-[560px]">
          <h1
            className="mt-16 ml-32 text-vinos-comp3-titulo"
            style={gothamBlack}
          >
            GRAN RESERVA
          </h1>
        </div>

        <div className="w-[400px]  flex items-center ml-32">
          <div className="mt-8">
            <p className="text-vinos-comp3">
              Es la línea que mejor representa nuestra diversidad geográfica.
              Exhibe nuestro compromiso para poner en valor y comunicar la
              riqueza de terruños y expresiones que nos regala el Valle de Uco.
            </p>
          </div>
        </div>
        <div className="boton-vinos-ver-mas-comp3 mt-8  ml-32">
          <p className="texto-boton-vinos-ver-mas-comp3">ver más</p>
        </div>
      </div>
      <div className="w-1/2 bg-gray-300">
        <img src={vinosFoto4} alt="Gualtallary" className="w-full h-[415px]" />
      </div>
    </div>
  );
}

export default VinosComponente6;
