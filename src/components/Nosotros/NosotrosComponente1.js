import React from "react";
import Nosotros from "../../images/hero-nosotros.png";

function NosotrosComponente1() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
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
      className="w-full py-32 lg:py-56 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${Nosotros})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="text-center relative  z-10">
          <div className=" mx-auto">
            <h1 className=" texto-valle-uco-1" style={gothamBlack}>
              NOSOTROS
            </h1>
          </div>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NosotrosComponente1;
