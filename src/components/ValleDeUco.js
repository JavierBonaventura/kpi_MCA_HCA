import React from "react";

function ValleDeUco() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };
  return (
    <div>
      <div className="w-full h-[841px] flex items-center justify-center">
        <div class="text-center">
          <div className="w-[584px] ">
            <h1 class="mb-4 texto-valle-uco-1" style={firaSans}>
              VALLE DE UCO
            </h1>
          </div>
          <div className="w-[534px] ">
            <p class="text-center texto-valle-uco-2" style={firaSans}>
              la expresión de Vista Flores, la frescura de Pampa el Cepillo, la
              fineza de Gualtallary y la textura de Paraje Altamira
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValleDeUco;
