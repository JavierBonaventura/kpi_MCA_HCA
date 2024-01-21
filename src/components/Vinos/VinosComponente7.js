import React from "react";
import vinosFoto5 from "../../images/vinosFoto5.png";

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
    <div className="w-full h-[415px] flex items-center justify-center bg-cover bg-center relative">
      <div className="w-1/2 bg-gray-300">
        <img src={vinosFoto5} alt="Gualtallary" className="w-full h-[415px]" />
      </div>

      <div className="w-1/2 bg-[#252323] h-full">
        <div className="w-[595px]">
          <h1
            className="mt-16 ml-24 text-vinos-comp3-titulo"
            style={gothamBlack}
          >
            RELATOS DEL CALLEJÓN
          </h1>
        </div>

        <div className="w-[500px]  flex items-center ml-24">
          <div className="mt-8">
            <p className="text-vinos-comp3">
              Relatos del Callejón mantiene viva la memoria de los personajes
              cuyo trágico destino inspiró el nacimiento de nuestra bodega. Un
              crimen pasional que fue silenciado, una historia conmovedora...
              como la de nuestros vinos.
            </p>
          </div>
        </div>
        <div className="boton-vinos-ver-mas-comp3 mt-8  ml-24">
          <p className="texto-boton-vinos-ver-mas-comp3">ver más</p>
        </div>
      </div>
    </div>
  );
}

export default VinosComponente7;
