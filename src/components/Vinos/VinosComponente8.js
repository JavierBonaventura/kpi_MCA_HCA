import React from "react";
import Imagen from "../../images/vinosFoto6.png";

function VinosComponente8() {
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
          PERLAS DEL CALLEJÓN
        </h1>

        <div>
          <h1 className="texto-guantallary-sub"></h1>
          <p className="texto-guantallary-sub mt-6">
            Son vinos que reflejan nuestra memoria y compromiso con el pasado,
            al mismo tiempo que representan nuestro espíritu aventurero e
            innovador.
          </p>
          <div className="inline-block mx-auto z-10 mt-10">
            <a
              href=""
              className="border border-white text-white px-10 py-2   hover:bg-[#460377] transition-all ease-in-out duration-300"
            >
              VER MÁS
            </a>
          </div>
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 py-32 lg:py-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${Imagen})` }}
      ></div>
    </div>
  );
}

export default VinosComponente8;
