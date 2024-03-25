import React from "react";
import map from "../images/map-contacto.png";
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
    <div className=" bg-[#252323] py-10 lg:py-0 ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col lg:flex-row gap-y-5 lg:gap-y-0">
        <div className="w-full lg:w-1/2 text-white space-y-8 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-6xl" style={gothamBlack}>
            CONTACTO
          </h1>
          <div className="text-sm lg:text-lg space-y-2 ">
            <p style={firaSans}>
              Armani, s/n Villa Seca, Tunuyan, <br /> Valle de Uco (5563)
              Mendoza, <br />
              Argentina
            </p>
            <div className="space-x-2" style={firaSans}>
              <img src={celular} alt="Icono Map" className="inline-block w-5" />
              <span> (+ 54 11)4328.4868/3883</span>
            </div>
            <div className="space-x-2" style={firaSans}>
              <img src={correo} alt="Icono Map" className="inline-block w-5" />
              <span> info@vinosdelaluz.com</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img src={map} alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
