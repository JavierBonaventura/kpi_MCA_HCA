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
    <div className="w-full  flex  justify-center bg-[#252323] ">
      <div className="relative z-10 container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex justify-center items-center !py-10 lg:!py-20">
        <p className="text-center font-gotham text-white text-lg lg:text-2xl lg:leading-[36px] w-full lg:w-1/2">
          Nuestra bodega en Mendoza se ubica en Vista Flores, a los pies del
          volcán Tupungato, una de las montañas más importantes de la cordillera
          de los Andes.
        </p>
      </div>
    </div>
  );
}

export default BodegaComponente2;
