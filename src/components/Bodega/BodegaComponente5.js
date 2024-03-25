import React from "react";
import bodegaFoto3 from "../../images/banner-bodega.png";

function BodegaComponente5() {
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
      className="w-full py-24 lg:py-56 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bodegaFoto3})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl text-center relative  z-10">
        <div className="flex justify-center ">
          <div className="flex justify-center items-center z-10 px-10 py-4 flex-shrink-0 border border-white relative  flex-col hover:bg-[#460377] hover:cursor-pointer transition-all ease-in-out duration-300 ">
            <p className="text-ver-mas  text-white">VER VINOS</p>
          </div>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default BodegaComponente5;
