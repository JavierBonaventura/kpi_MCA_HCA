import React, { useEffect } from "react";
import botellas from "../../images/botellas.png";
import AOS from "aos";
import "aos/dist/aos.css";

function VinosComponente1() {
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

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div
      className="w-full  pt-56 pb-40 lg:py-64 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${botellas})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl text-center relative  z-10">
        <h1
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="text-white text-center text-4xl lg:text-6xl lg:leading-[70px] tracking-[-1px] uppercase"
          style={gothamBlack}
        >
          NUESTROS VINOS
        </h1>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default VinosComponente1;
