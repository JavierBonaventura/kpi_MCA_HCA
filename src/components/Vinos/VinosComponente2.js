import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function VinosComponente2() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const gothamMedium = {
    fontFamily: "Gotham Medium",
  };

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="w-full  flex  justify-center bg-[#252323] ">
      <div className="relative z-10 container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex justify-center items-center !py-10 lg:!py-20">
        <p
          data-aos="zoom-in"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="text-center font-gotham text-white text-lg lg:text-2xl lg:leading-[36px] w-full lg:w-1/2"
        >
          Cada parcela se vinifica por separado para buscar el mayor equilibrio
          posible en cada vino y que cada uno refleje las distinciones entre
          orientación, variedad, altitud y tipos de suelo.
        </p>
      </div>
    </div>
  );
}

export default VinosComponente2;
