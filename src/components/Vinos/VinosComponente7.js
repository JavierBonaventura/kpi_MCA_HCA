import React from "react";
import Imagen from "../../images/vinosFoto5.png";

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
    <div className="flex flex-col lg:flex-row ">
      <div
        className="w-full lg:w-1/2 py-32 lg:py-80 bg-cover bg-center shadow-2xl"
        style={{ backgroundImage: `url(${Imagen})` }}
      ></div>
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-0 lg:gap-y-6 !py-10 lg:py-0 ">
        <h1
          className="text-white text-2xl lg:text-[2rem] lg:leading-[50px]"
          style={gothamBlack}
        >
          RELATOS DEL CALLEJÓN
        </h1>

        <div>
          <p className="mt-6 lg:mt-0 font-gotham text-white text-base lg:text-lg">
            Relatos del Callejón mantiene viva la memoria de los personajes cuyo
            trágico destino inspiró el nacimiento de nuestra bodega. Un crimen
            pasional que fue silenciado, una historia conmovedora... como la de
            nuestros vinos.
          </p>
          <div className="flex">
            <div className="inline-block mr-auto mt-10 z-10">
              <a
                href=""
                className="border border-white text-white px-10 py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
              >
                VER MÁS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VinosComponente7;
