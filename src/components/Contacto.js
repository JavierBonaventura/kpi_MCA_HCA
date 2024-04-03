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
    <div className="bg-[#252323] relative  pt-28 lg:py-44  ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl space-y-10 lg:space-y-0  ">
        <div className="w-full lg:w-1/2 text-white space-y-5 lg:space-y-10  lg:pr-28 ">
          <h1
            className="text-white text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase"
            style={gothamBlack}
          >
            CONTACTO
          </h1>
          <div className="text-white text-base lg:text-lg lg:leading-[28px] font-gotham space-y-2 ">
            <a
              href="https://www.google.com/maps/place/Armani,+Tunuy%C3%A1n,+Mendoza/data=!4m2!3m1!1s0x967c25c55264fbc9:0x98a8695ef02d48a5?sa=X&ved=1t:242&ictx=111"
              target="_blank"
              className="hover:underline"
            >
              Armani, s/n Villa Seca, Tunuyan, <br /> Valle de Uco (5563)
              Mendoza, <br />
              Argentina
            </a>
            <div className="space-x-2">
              <img src={celular} alt="Icono Map" className="inline-block w-5" />
              <span> (+ 54 11) 4328-4868/3883</span>
            </div>
            <div className="space-x-2">
              <img src={correo} alt="Icono Map" className="inline-block w-5" />
              <a
                href="mailto:info@vinosdelaluz.com"
                className="hover:underline"
              >
                {" "}
                <span>info@vinosdelaluz.com</span>
              </a>
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
