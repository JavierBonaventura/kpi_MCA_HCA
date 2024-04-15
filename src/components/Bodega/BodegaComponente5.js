import React from "react";
import bodegaFoto3 from "../../images/banner-bodega.png";
import { Link } from "react-router-dom";

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
        <div className="w-fit flex mx-auto">
          <a
            href="/vinos"
            className="border border-white text-white px-10 py-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
          >
            VER VINOS
          </a>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default BodegaComponente5;
