import React from "react";
import fondoVinos from "../images/fondoVinos.png";

function NuestrosVinos() {
 
  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.63)",
   
  };

  return (
    <div
      className="w-full h-[979px]  bg-cover bg-center relative"
      style={{ backgroundImage: `url(${fondoVinos})` }}
    >
      <div className="text-center relative z-10 top-[78px] left-[163px]">
        <div className="w-[682px] h-[50px]">
          <h1 className="mb-4 texto-vinos text-black font-black absolute ">
            VINOS
          </h1>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NuestrosVinos;
