import React from "react";
import vinosFoto1 from "../../images/vinosFoto1.png";

function VinosComponente3() {
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
        <img src={vinosFoto1} alt="Gualtallary" className="w-full h-[415px]" />
      </div>

      <div className="w-1/2 bg-[#252323] h-full">
        <div className="w-[540px]">
          <h1 className="mt-16 ml-24 text-vinos-comp3-titulo" style={gothamBlack}>
            ILUMINADO VINOS DE LA LUZ
          </h1>
        </div>

        <div className="w-[447px]  flex items-center ml-24">
          <div className="mt-8">
            <p className="text-vinos-comp3">
              La producción de Iluminado Vinos de La Luz es de 3.500 botellas
              numeradas. Es nuestro vino icono, 100% Malbec de Paraje Altamira.
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

export default VinosComponente3;
