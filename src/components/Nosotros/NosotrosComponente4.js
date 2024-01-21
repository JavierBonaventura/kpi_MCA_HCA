import React from "react";

function NosotrosComponente4() {
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
    <div className="w-full h-[449px] flex justify-center bg-[#252323]">
      <div className="flex flex-col items-center mx-12 pt-24 ">
        <p className="text-nosotros-comp4 w-[339px] ">
        El origen de la tradición vitícola de la familia Fernández Núñez se remonta a principios del siglo XX, cuando en 1910, los emigrantes gallegos Serafín Fernández y María Núñez, partieron a Argentina en busca de trabajo.
        </p>
      </div>
      <div className="flex flex-col items-center mx-12 pt-24">
        <p className="text-nosotros-comp4  w-[324px]">
        Estos dos españoles aportaron su saber hacer como trabajadores jornaleros de siembras, podas y cosechas hasta asentarse en Mendoza, en 1919, donde las tierras fiscales de acceso gratuito de la precordillera de los Andes, necesitaban mano de obra en los límites con Chile.
        </p>
      </div>
      <div className="flex flex-col items-center mx-12 pt-24">
        <p className="text-nosotros-comp4 w-[324px]">
        El lugar era el Valle de Uco, donde se sembró por primera vez, el origen de Vinos de LA LUZ y donde actualmente está ubicada nuestra bodega argentina.
        </p>
      </div>
    </div>
  );
  
}

export default NosotrosComponente4;
