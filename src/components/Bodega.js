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
      className="w-full h-[979px]  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondoBodega})` }}
    >
      <div className="text-center relative z-10 top-[94px] left-[145px]">
        <div className="w-[615px] h-[50px]">
          <h1 className="mb-4 texto-vinos text-black font-black absolute ">
            BODEGA
          </h1>
        </div>
        <div className="w-[534px] pt-32">
          <p className="texto-bodega text-left">
            Nuestros vinos nacen de la experiencia, la atención al detalle y una
            exhaustiva selección de viñedos que se ha ido haciendo a lo largo de
            casi dos décadas. Trabajamos en torno a 3 pilares fundamentales:
            Naturaleza. El vino comienza en el viñedo. Cada parte del ecosistema
            que rodea nuestra bodega en Vista Flores es prioritaria. Desde el
            búho blanco del valle, imagen de nuestra marca, hasta la flora
            alrededor de la finca. Innovación. Trabajamos cada día con la mirada
            puesta en los procesos y nuevos productos. Sostenibilidad. Cuidamos
            no solo de los viñedos, sino del entorno paisajístico y de la fauna
            que rodea nuestra bodega.{" "}
          </p>
        </div>
        <div className="boton-ver-mas mt-32 ">
          <p className="boton-ver-mas-texto">VER MAS</p>
        </div>
      </div>
      
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default Bodega;
