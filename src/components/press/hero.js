import React from "react";
import valleUco from "../../images/valleUco.png";

function Hero() {
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
      className="w-full py-24 lg:py-[12.5rem]  flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${valleUco})` }}
    >
      <div className="z-10 space-y-8 ">
        <h1
          className="text-white text-center text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase"
          style={gothamBlack}
        >
          Press Kit
        </h1>
        <div className="w-full lg:w-1/2 mx-auto">
          <p className="text-white text-center text-base lg:text-lg lg:leading-[28px] font-gotham">
            Fotografías de botellas, logotipo, viñedos, terroirs, barricas, y
            mucho material más. Si necesitas más información contactanos en{" "}
            <a href="mailto:info@vinosdelaluz.com" className=" hover:underline">
              info@vinosdelaluz.com
            </a>
          </p>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default Hero;
