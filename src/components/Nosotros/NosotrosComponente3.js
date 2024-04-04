import React from "react";
import referentes from "../../images/nosotros-vinedo.png";

function NosotrosComponente3() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  const gothamMedium = {
    fontFamily: "Gotham Medium",
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
      className="w-full  flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${referentes})` }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-16 lg:!py-44">
        <div className="text-center relative z-10 space-y-10 text-white">
          <h1
            className="text-lg lg:text-[2.5rem] lg:leading-[50px]"
            style={gothamBlack}
          >
            NUESTROS ORÍGENES
          </h1>

          <p className="text-sm lg:text-lg font-gotham w-full lg:w-1/2 mx-auto text-justify">
            El origen de la tradición vitícola de la familia Fernández Núñez se
            remonta a principios del siglo XX, cuando en 1910, los emigrantes
            gallegos Serafín Fernández y María Núñez, partieron a Argentina en
            busca de trabajo. <br />
            <br /> Estos dos españoles aportaron su saber hacer como
            trabajadores jornaleros de siembras, podas y cosechas hasta
            asentarse en Mendoza, en 1919, donde las tierras fiscales de acceso
            gratuito de la pre-cordillera de los Andes, necesitaban mano de obra
            en los límites con Chile. <br />
            <br /> El lugar era el Valle de Uco, donde se sembró por primera
            vez, el origen de Vinos de LA LUZ y donde actualmente está ubicada
            nuestra bodega argentina. <br />
            <br /> El lugar era el Valle de Uco, donde se sembró por primera vez
            el origen de Vinos de la Luz. Ahí actualmente está ubicada nuestra
            bodega argentina bajo la dirección técnica del enólogo Pablo
            Navarrete.
          </p>
        </div>
      </div>
      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NosotrosComponente3;
