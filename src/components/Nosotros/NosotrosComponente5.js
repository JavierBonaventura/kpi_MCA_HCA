import React from "react";
import barril from "../../images/barril.png";

function NosotrosComponente5() {
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
      className="w-full h-[504px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${barril})` }}
    >
      <div className="text-center relative  z-10">
        <div className="w-[810x] mx-auto">
          <h1 className="mb-4 text-bodega-comp5" style={gothamBlack}>
            BLOQUE CALL TO ACTION{" "}
          </h1>
        </div>
        <div className="w-[712px] mx-auto ">
          <p className="text-center texto-valle-uco-2" style={gothamMedium}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit
            amet faucibus ante. Sed lobortis pellentesque nulla, ut semper quam.
            Phasellus ac justo iaculis,
          </p>
        </div>
        <div className="flex justify-center mt-28">
          <div className="flex justify-center items-center z-10 w-[208px] h-[50px] flex-shrink-0 border border-white relative  flex flex-col items-center hover:bg-[#460377] hover:cursor-pointer rounded">
            <p className="text-ver-mas  text-white">VER VINOS</p>
          </div>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NosotrosComponente5;
