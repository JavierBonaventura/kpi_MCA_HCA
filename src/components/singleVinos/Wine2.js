import React from "react";
import Sombra from "../../images/textura-single-vinos.png";
import Bottle from "../../images/wine-bottle-2.png";

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
    <div className="flex flex-col-reverse lg:flex-row-reverse ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-6 !py-5 lg:py-0 ">
        <h1 className=" texto-guantallary" style={gothamBlack}>
          SINGLE VINEYARD VISTA FLORES
        </h1>

        <div>
          <h1 className="texto-guantallary-sub"></h1>
          <p className="texto-guantallary-sub mt-6">
            Mucha fruta negra concentrada. Un Malbec típico, potente y compacto.{" "}
            <br /> <br /> A 1.050 metros sobre el nivel del mar. Estos suelos
            son profundos con sedimentos aluviales, eólicos y con componentes de
            arenas, arcillas y carbonatos. Gracias a viñas de más de 40 años
            conducidas en espaldero, logramos un vino con expresión y potencia.
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
