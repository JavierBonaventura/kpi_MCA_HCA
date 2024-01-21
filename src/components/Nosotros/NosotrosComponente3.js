import React from "react";
import referentes from "../../images/referentes.png";

function NosotrosComponente3() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  
  const gothamMedium = {
    fontFamily: "Gotham Medium",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.46)",
  };

  return (
    <div
      className="w-full h-[673px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${referentes})` }}
    >
      <div className="text-center relative  z-10">
        <div className="w-[616px] h-[50px] mx-auto">
          <h1 className="mb-4 text-nosotros-comp3" style={gothamBlack}>
            NUESTROS REFERENTES
          </h1>
        </div>
        <div className="w-[739px] mx-auto pt-6">
          <p className="text-center text-nosotros-comp3-chico w-[739px] h-[84px] mx-auto" style={gothamMedium}>
          Cosmos solves today’s hardest blockchain problems.
          <p>
Join the most customizable ecosystem the of connected
</p>
<p>
 blockchain.
 </p>
          </p>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NosotrosComponente3;
