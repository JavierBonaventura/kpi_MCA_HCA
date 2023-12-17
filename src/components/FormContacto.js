import React from "react";
import fondoContacto from "../images/fondoContacto.png";

function FormContacto() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  return (
    <div
      className="w-full h-[742px] flex items-center justify-center bg-center relative bg-[#252323]"
      style={{
        backgroundImage: `url(${fondoContacto})`,
        backgroundSize: "63%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="mt-10">
        <div className="flex flex-row items-center text-white">
          <div className="mr-4 flex flex-col texto-formulario">
            <label htmlFor="name" style={gothamBlack}>
              Your Name
            </label>
            <input type="text" id="name" className="rounded w-72 h-12  mt-1" />
          </div>

          <div className="mr-4 flex flex-col texto-formulario ml-6">
            <label htmlFor="email" style={gothamBlack}>
              Your Email
            </label>
            <input type="email" id="email" className="rounded w-72 h-12 mt-1" />
          </div>
        </div>
        <div className="flex flex-row items-center text-white mt-10">
          <div className="mr-4 flex flex-col texto-formulario">
            <label htmlFor="name" style={gothamBlack}>
              Service
            </label>
            <input type="text" id="name" className="rounded w-72 h-12  mt-1" />
          </div>

          <div className="mr-4 flex flex-col texto-formulario ml-6 ">
            <label htmlFor="email" style={gothamBlack}>
              Your phone number
            </label>
            <input type="email" id="email" className="rounded w-72 h-12 mt-1" />
          </div>
        </div>

        <div className="flex flex-row items-center text-white mt-10">
          <div className="mr-4 flex flex-col texto-formulario">
            <label htmlFor="name" style={gothamBlack}>
              Message
            </label>
            <input
              type="text"
              id="name"
              className="rounded w-160 w-[618px] h-[136px]   mt-1"
            />
          </div>
        </div>
        <div className="boton-ver-mas-vision mt-24">
          <p className="boton-ver-mas-texto-vision">send message</p>
        </div>
      </div>
    </div>
  );
}

export default FormContacto;
