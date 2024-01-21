import React from "react";
import nosotros from "../../images/nosotros.png";

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
      className="w-full h-[736px] flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${nosotros})` }}
    >
      <div className="text-center relative  z-10">
        <div className="w-[614px] h-[70px] mx-auto">
          <h1 className="mb-4 texto-valle-uco-1" style={gothamBlack}>
            NOSOTROS
          </h1>
        </div>

      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NosotrosComponente1;
