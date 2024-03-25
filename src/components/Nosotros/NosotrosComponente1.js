import React from "react";
import nosotros from "../../images/hero-nosotros.png";

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
    backgroundColor: "rgba(0, 0, 0, 0.56)",
  };

  return (
    <div
      className="w-full py-20 lg:py-44 flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${nosotros})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl text-white relative z-10 text-center   flex flex-col gap-y-10  lg:!w-2/3">
        <p className="text-sm lg:text-xl">
          Callejón del Crimen pertenece al grupo vitivinícola Vinos de La Luz,
          que cuenta con bodegas y viñedos en las regiones más destacadas del
          viejo y nuevo mundo. El vino es para nosotros mucho más que una
          bebida. Es cultura, paisaje, tradición, historia y una forma de viajar
          que marca nuestra filosofía desde hace casi dos décadas en cada una de
          nuestras bodegas en los cinco países donde cultivamos y elaboramos.
        </p>

        <div className="text-sm lg:text-xl text-start mx-auto">
          <li>Valle de Uco, Mendoza, Argentina</li>
          <li>Ribera del Duero (Peñafiel), Rueda & Cigales, España.</li>
          <li>Toscana, Siena. Italia.</li>
          <li>Santa María, California. Estados Unidos.</li>
          <li>Odesa, Ucrania.</li>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NosotrosComponente1;
