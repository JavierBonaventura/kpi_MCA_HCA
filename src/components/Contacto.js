import React from "react";
import valleUco from "../images/valleUco.png";
import celular from "../images/celular.png";
import correo from "../images/correo.png";

function Contacto() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  return (
    <div className="w-full h-[488px] flex  justify-center bg-[#252323]">
      <div className="text-center relative mt-32 z-10">
        <div className="w-[351px] mx-auto">
          <h1 className="texto-valle-uco-1" style={gothamBlack}>
            CONTACTO
          </h1>
        </div>
        <div className="w-[734px] mx-auto ">
          <p className="text-center text-contacto-sub mt-16" style={firaSans}>
            Armani, s/n Villa Seca, Tunuyan, Valle de Uco (5563) Mendoza,
            Argentina
          </p>
          <p className="text-center text-contacto-sub mt-4" style={firaSans}>
            <img
              src={celular}
              alt="Icono Map"
              className="inline-block mr-2 w-5"
            />
            (+ 54 11)4328.4868/3883
          </p>
          <p className="text-center text-contacto-sub mt-2" style={firaSans}>
            <img
              src={correo}
              alt="Icono Map"
              className="inline-block mr-2 w-5"
            />
            info@vinosdelaluz.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
