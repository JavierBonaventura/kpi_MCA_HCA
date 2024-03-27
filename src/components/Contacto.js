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
    <div className="bg-[#252323] relative py-12 lg:py-44  ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl space-y-10 lg:space-y-0  ">
        <div className="w-full lg:w-1/2 text-white space-y-5 lg:space-y-10  lg:pr-28 ">
          <h1
            className="text-white text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase"
            style={gothamBlack}
          >
            CONTACTO
          </h1>
          <div className="text-white text-base lg:text-lg lg:leading-[28px] font-gotham space-y-2 ">
            <p>
              Armani, s/n Villa Seca, Tunuyan, <br /> Valle de Uco (5563)
              Mendoza, <br />
              Argentina
            </p>
            <div className="space-x-2">
              <img src={celular} alt="Icono Map" className="inline-block w-5" />
              <span> (+ 54 11)4328.4868/3883</span>
            </div>
            <div className="space-x-2">
              <img src={correo} alt="Icono Map" className="inline-block w-5" />
              <span> info@vinosdelaluz.com</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full lg:absolute right-0 top-0 ">
          <img
            src={map}
            alt=""
            className="bg-white mx-auto h-full object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Contacto;
