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
    <div className="w-full py-20 lg:py-32  flex  justify-center bg-[#252323]">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl relative z-10">
        <p
          className="text-center text-vinos-comp2 mx-auto w-full lg:w-1/2"
          style={gothamMedium}
        >
          Cada parcela se vinifica por separado para buscar el mayor equilibrio
          posible en cada vino y que cada uno refleje las distinciones entre
          orientación, variedad, altitud y tipos de suelo.
        </p>
      </div>
    </div>
  );
}

export default VinosComponente2;
