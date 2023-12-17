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
    <div className="w-full h-[680px] flex items-center justify-center bg-cover bg-center relative">
      <div className="w-1/2 bg-gray-300">
        <img
          src={pampaElCielo}
          alt="Gualtallary"
          className="w-full h-[680px]"
        />
      </div>

      <div className="w-1/2 bg-[#252323] h-full">
        <div className="w-[510px]">
          <h1 className="mt-28 ml-24 texto-guantallary" style={gothamBlack}>
            PAMPA EL CEPILLO
          </h1>
        </div>

        <div className="w-[470px] h-[336px] flex items-center ml-24">
          <div className="mt-11">
            <p className="texto-guantallary-sub">
              <img
                src={iconoMap}
                alt="Icono Map"
                className="inline-block mr-2"
              />
              San Carlos, 1.100 msnm
            </p>
            <p className="texto-guantallary-sub mt-6">
              Orientación sureste. Zona fría y extrema que nos permite lograr
              una gran sanidad y una madurez equilibrada de las uvas, siempre
              con bajos rendimientos.
            </p>
            <p className="texto-guantallary-sub mt-6">
              <img
                src={iconoSuelo}
                alt="Icono Map"
                className="inline-block mr-2"
              />
              Composición variada de arenas, caliche y piedras de gran tamaño
              recubiertas de carbonato de calcio.
            </p>
            <p className="texto-guantallary-sub mt-6 ">
              <img
                src={iconoUvas}
                alt="Icono Map"
                className="inline-block mr-2"
              />
              VARIEDAD: Malbec
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PampaElCielo;
