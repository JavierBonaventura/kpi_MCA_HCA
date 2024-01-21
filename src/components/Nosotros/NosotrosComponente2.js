import React from "react";

function NosotrosComponente2() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const gothamMedium = {
    fontFamily: "Gotham Medium",
  };

  return (
    <div className="w-full h-[660px] flex  justify-center bg-[#252323]">
      <div className="text-center relative mt-28 z-10">
        <div className="w-[1110px] h-[392px] mx-auto ">
          <p className="text-center text-nosotros-comp2" style={gothamMedium}>
            Callejón del Crimen pertenece al grupo vitivinícola Vinos de La Luz,
            que cuenta con
          </p>
          <p className="text-center text-nosotros-comp2" style={gothamMedium}>
            bodegas y viñedos en las regiones más destacadas del viejo y nuevo
            mundo.
          </p>

          <br></br>
          <br></br>
          <li className="text-center text-nosotros-comp2" style={gothamMedium}>
            {" "}
            Ribera del Duero, Peñafiel, y Cigales. España.{" "}
          </li>
          <li className="text-center text-nosotros-comp2" style={gothamMedium}>
            {" "}
            Toscana, Siena. Italia.{" "}
          </li>
          <li className="text-center text-nosotros-comp2" style={gothamMedium}>
            {" "}
            Santa María, California. Estados Unidos.
          </li>
          <li className="text-center text-nosotros-comp2" style={gothamMedium}>
            {" "}
            Odesa, Ucrania.{" "}
          </li>
          <br></br>
          <br></br>
          <p className="text-center text-nosotros-comp2" style={gothamMedium}>
            El vino es para nosotros mucho más que una bebida.Es cultura,
            paisaje, tradición, historia y
          </p>
          <p className="text-center text-nosotros-comp2" style={gothamMedium}>
            una forma de viajar que marca nuestra filosofía desde hace casi dos
            décadas en cada una
          </p>
          <p className="text-center text-nosotros-comp2" style={gothamMedium}>
            de nuestras bodegas en los cinco países donde cultivamos y
            elaboramos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NosotrosComponente2;
