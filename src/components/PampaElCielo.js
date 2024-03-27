import React from "react";
import pampaElCielo from "../images/PampaElCielo.png";
import iconoMap from "../images/iconoMap.png";
import iconoSuelo from "../images/iconoSuelo.png";
import iconoUvas from "../images/iconoUvas.png";

function PampaElCielo() {
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
    <div className="flex flex-col lg:flex-row ">
      <div
        className="w-full lg:w-1/2 py-32 lg:py-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${pampaElCielo})` }}
      ></div>
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-6 !py-12 lg:py-0 ">
        <h1
          className="text-white text-2xl lg:text-[2.5rem] lg:leading-[50px]"
          style={gothamBlack}
        >
          PAMPA EL CEPILLO
        </h1>

        <div className="font-gotham text-white text-base lg:text-lg">
          <p>
            <img src={iconoMap} alt="Icono Map" className="inline-block mr-2" />
            San Carlos, 1.100 msnm
          </p>
          <p className="mt-6">
            Orientación sureste. Zona fría y extrema que nos permite lograr una
            gran sanidad y una madurez equilibrada de las uvas, siempre con
            bajos rendimientos.
          </p>
          <p className="mt-6">
            <img
              src={iconoSuelo}
              alt="Icono Map"
              className="inline-block mr-2"
            />
            SUELO: Formado de manera biológica, interviniendo bacterias, plantas
            Icono MapComposición variada de arenas, caliche y piedras de gran
            tamaño recubiertas de carbonato de calcio.
          </p>
          <p className="mt-6">
            <img
              src={iconoUvas}
              alt="Icono Map"
              className="inline-block mr-2"
            />
            VARIEDADES: Malbec
          </p>
        </div>
      </div>
    </div>
  );
}

export default PampaElCielo;
