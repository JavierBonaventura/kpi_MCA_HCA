import React from "react";

function VinosComponente2() {
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
    <div className="w-full h-[312px] flex  justify-center bg-[#252323]">
      <div className="text-center relative mt-28 z-10">
        <div className="w-[1110px] h-[392px] mx-auto ">
          <p className="text-center text-vinos-comp2" style={gothamMedium}>
          Cada parcela se vinifica por separado para buscar el mayor equilibrio 
          </p>
          <p className="text-center text-vinos-comp2" style={gothamMedium}>
          posible en cada vino y que cada uno refleje las distinciones entre 
          </p>
          <p className="text-center text-vinos-comp2" style={gothamMedium}>
          orientación, variedad, altitud y tipos de suelo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VinosComponente2;
