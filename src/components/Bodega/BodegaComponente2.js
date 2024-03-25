import React from "react";

function BodegaComponente2() {
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
    <div className="w-full h-[326px] flex  justify-center bg-[#252323] ">
      <div className="text-center relative z-10 container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex justify-center items-center">
        <p className="text-center text-bodega-comp2" style={gothamMedium}>
          Nuestra bodega en Mendoza se ubica en Vista Flores, a los pies del
          volcán Tupungato, una de las montañas más importantes de la cordillera
          de los Andes.
        </p>
      </div>
    </div>
  );
}

export default BodegaComponente2;
