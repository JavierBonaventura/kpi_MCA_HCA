import React from "react";
import map from "../../images/mapa-nosotros.jpg";
import vineta from "../../images/flechaDerecha.png";

function NosotrosContent() {
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
    <div className="bg-[#252323] relative py-12 lg:py-32  ">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl space-y-10 lg:space-y-0  ">
        <div className="w-full lg:w-1/2 text-white space-y-5 lg:space-y-10  lg:pr-28 ">
          <p className="font-gotham text-white text-base lg:text-xl lg:leading-[30px] text-justify">
            Callejón del Crimen pertenece al grupo vitivinícola Vinos de La Luz,
            que cuenta con bodegas y viñedos en las regiones más destacadas del
            viejo y nuevo mundo. El vino es para nosotros mucho más que una
            bebida. Es cultura, paisaje, tradición, historia y una forma de
            viajar que marca nuestra filosofía desde hace casi dos décadas en
            cada una de nuestras bodegas en los cinco países donde cultivamos y
            elaboramos.
          </p>

          <div className="text-sm lg:text-base text-start mx-auto space-y-4 font-gotham-regular">
            <div className="flex items-center gap-x-3">
              <div className="bg-[#460377]  rounded-full py-2 px-3">
                <img src={vineta} alt="" className="w-2" />
              </div>
              <span>Valle de Uco, Mendoza, Argentina</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#460377]  rounded-full py-2 px-3">
                <img src={vineta} alt="" className="w-2" />
              </div>
              <span>Ribera del Duero (Peñafiel), Rueda & Cigales, España</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#460377]  rounded-full py-2 px-3">
                <img src={vineta} alt="" className="w-2" />
              </div>
              <span>Toscana, Siena. Italia</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#460377]  rounded-full py-2 px-3">
                <img src={vineta} alt="" className="w-2" />
              </div>
              <span>Santa María, California. Estados Unidos</span>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="bg-[#460377]  rounded-full py-2 px-3">
                <img src={vineta} alt="" className="w-2" />
              </div>
              <span>Odesa, Ucrania</span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full lg:absolute right-0 top-0 ">
          <img
            src={map}
            alt=""
            className="bg-white mx-auto h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default NosotrosContent;
