import React from "react";
import Sombra from "../../images/textura-single-vinos.png";
import Bottle from "../../images/wine-bottle-1.png";

function VinosComponente7() {
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
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl w-full lg:w-1/2 bg-[#252323] flex flex-col  justify-center lg:px-44 gap-y-6 !py-5 lg:py-0 ">
        <h1 className=" texto-guantallary" style={gothamBlack}>
          SINGLE VINEYARD GUALTALLARY
        </h1>

        <div>
          <h1 className="texto-guantallary-sub">TUPUNGATO, 1.280 msnm</h1>
          <p className="texto-guantallary-sub mt-6">
            Pureza, frescura, jugosidad y hierbas. Ubicada en uno de los lugares
            más extremos y apasionantes para el vino argentino. <br /> <br />{" "}
            Gracias a este particular suelo formado de manera biológica,
            interviniendo bacterias, plantas y rocas en su composición, en la
            parcela #2 de nuestro viñedo nace este Malbec puro, fresco y lleno
            de texturas.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2  bg-cover bg-center bg-[#252323]">
        <div className="relative flex justify-center items-center">
          <img src={Sombra} alt="" className="" />
          <img src={Bottle} className="absolute w-28 " alt="" />
        </div>
      </div>
    </div>
  );
}

export default VinosComponente7;
