import React from "react";
import valleUco from "../images/valleUco.png";

function HeroValle() {
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
    <>
      <style>{`

          .screenCustomStyle {
            padding: 8rem 0;
          }
            @media (min-width: 1024px) {
              .screenCustomStyle {
                height: calc(100vh - 86.77px);
                padding: 0;
              }
            }
          `}</style>
      <div
        className="w-full screenCustomStyle flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${valleUco})` }}
      >
        <div className="z-10 space-y-8 ">
          <h1 className="texto-valle-uco-1 uppercase" style={gothamBlack}>
            VALLE DE UCO
          </h1>
          <div className="w-1/2 mx-auto">
            <p className="text-center texto-valle-uco-2" style={firaSans}>
              La expresión de Vista Flores, la frescura de Pampa el Cepillo, la
              fineza de Gualtallary y la textura de Paraje Altamira
            </p>
          </div>
        </div>
        <div className="z-0" style={overlayStyle}></div>
      </div>
    </>
  );
}

export default HeroValle;
