import React from "react";

function BodegaComponente4() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const gothamMedium = {
    fontFamily: "Gotham Medium",
  };

  return (
    <div className="w-full h-[250px] flex  justify-center bg-[#252323]">
      <div className="text-center relative mt-24 z-10">

        <div className="w-[630px] mx-auto ">
          <p className="text-center text-bodega-comp4" style={gothamMedium}>
          Somos una de las primeras bodegas construidas en la región, con algunos de los viñedos más antiguos en el Valle de Uco.          </p>
         
        </div>
      </div>
    </div>
  );
}

export default BodegaComponente4;
