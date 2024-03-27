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
    <div className="w-full  flex  justify-center bg-[#252323]">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl relative  z-10 !py-10 lg:!py-20">
        <p className="text-center font-gotham text-white text-lg lg:text-2xl lg:leading-[36px] w-full lg:w-1/2 mx-auto">
          Somos una de las primeras bodegas construidas en la región, con
          algunos de los viñedos más antiguos en el Valle de Uco.
        </p>
      </div>
    </div>
  );
}

export default BodegaComponente4;
