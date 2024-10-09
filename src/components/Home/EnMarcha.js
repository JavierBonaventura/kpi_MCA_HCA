import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenCurva from "../../images/imagenCurva.png"; // Importa la imagen curva

function EnMarcha() {
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[852px] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Imagen curva con propiedades ajustadas */}
        <img
          src={imagenCurva}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-30 max-h-[850px]" // Asegúrate de que tenga un z-index alto
          style={{
            mixBlendMode: "normal",
            top: "30px",
            pointerEvents: "none", // Permitir que el mouse interactúe con elementos debajo
          }}
        />

        {/* Contenedor con el fondo y el filtro */}
        <div
          className="relative z-20 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`,
            backgroundPosition: "0px -300.596px",
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="w-[631px] h-[196px] flex-shrink-0 mt-[120px]"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "60px",
              fontWeight: "900",
              lineHeight: "60px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Querés poner en marcha tu proyecto? Escribinos!
          </div>

          <div
            className="flex mt-[20px] gap-4"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
            }}
          >
            {/* Primer botón - "Email" */}
            <button
              className="w-[245.25px] h-[50px] rounded-[5px] bg-[#00942C] flex justify-center items-center z-30  cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5" 

             
            >
              <span
                style={{
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                email
              </span>
            </button>

            {/* Segundo botón - "011 xxx xxxx" */}
            <button
              className="w-[245.25px] h-[50px] rounded-[5px] border border-[#00942C] bg-[#FFF] flex justify-center items-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
            >
              <span
                style={{
                  color: "#00942C",
                  fontFamily: "Fira Code",
                  fontSize: "14px",
                  fontWeight: "400",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                011 xxx xxxx
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnMarcha;
