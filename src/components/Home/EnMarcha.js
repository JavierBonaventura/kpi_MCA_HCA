import React from "react";
import imagenCurva from "../../images/imagenCurva.png"; // Importa la imagen curva
import imagenFondo from "../../images/imagenFondo.jpg"

function EnMarcha() {

  return (
    <div>
<div className="w-full h-[58vw] relative">
  {/* Fondo de color */}
  <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

  {/* Imagen curva con pointer-events desactivado */}
  <img
    src={imagenCurva}
    alt="Curva"
    className="absolute top-0 left-0 w-full h-auto z-10"
    style={{ pointerEvents: "none" }} // Desactiva interacción con la imagen curva
  />

  {/* Contenedor con el fondo */}
  <div
    className="relative flex flex-col h-full px-4 z-0"
    style={{
      backgroundImage: `url(${imagenFondo})`,
      backgroundSize: "cover", // Asegura que la imagen cubra todo el ancho
      backgroundPosition: "center", // Centra la imagen
    }}
  >
    {/* Título */}
    <div
      className="w-[631px] h-[196px] flex-shrink-0 mt-[120px] z-20"
      style={{
        marginLeft: `12%`,
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

    {/* Botones */}
    <div
      className="flex mt-[20px] gap-4 z-20"
      style={{ marginLeft: `12%` }}
    >
      <button
        className="w-[245.25px] h-[50px] rounded-[5px] bg-[#00942C] flex justify-center items-center cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
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
