import React from "react";
import Sombra from "../../images/textura-single-vinos.png";
import Bottle from "../../images/wine-bottle-3.png";

function VinosComponente7() {
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
          SINGLE VINEYARD PAMPA EL CEPILLO
        </h1>

        <div>
          <h1 className="texto-guantallary-sub"></h1>
          <p className="texto-guantallary-sub mt-6">
            Ubicada en el extremo sur del Valle de Uco a 1.100 metros de altura.
            Con orientación sureste, este viñedo se enfrenta directamente con la
            Cordillera de los Andes frontal. Ésta es una zona fría y extrema que
            nos permite lograr una gran sanidad y una madurez equilibrada de las
            uvas, siempre con bajos rendimientos. <br />
            <br /> Esta zona austral con microclima austero, gracias sus bajas
            temperaturas transmite un Malbec profundo, de gran tensión y
            personalidad gracias a sus bajas temperaturas.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2  bg-cover bg-center bg-[#252323]">
        <div className="relative flex justify-center items-center">
          <img src={Sombra} alt="" className="" />
          <img src={Bottle} className="absolute w-28 " alt="" />
        </div>
      </div>
    </div>
  );
}

export default VinosComponente7;
