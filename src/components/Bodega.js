import React from "react";
import fondoBodega from "../images/fondoBodega.png";

function Bodega() {
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.63)",
  };

  return (
    <div
      className="w-full  bg-cover bg-center relative py-24"
      style={{ backgroundImage: `url(${fondoBodega})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col gap-y-20 relative  z-10">
        <h1 className="texto-bodega-titulo text-black font-black  text-start">
          BODEGA
        </h1>

        <div className="w-full lg:w-2/5">
          <p className="texto-bodega text-left">
            Nuestros vinos nacen de la experiencia, la atención al detalle y una
            exhaustiva selección de viñedos que se ha ido haciendo a lo largo de
            casi dos décadas. <br /> <br /> Trabajamos en torno a 3 pilares
            fundamentales: Naturaleza, Innovacion y Sostenibilidad.
          </p>
        </div>
        <div className="flex">
          <div className="flex relative  z-10  flex-shrink-0 border border-white  flex-col  hover:bg-[#460377] hover:cursor-pointer  transition-all ease-in-out duration-300 px-12 py-3">
            <p className="text-ver-mas ">ver más</p>
          </div>
        </div>
      </div>

      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default Bodega;
