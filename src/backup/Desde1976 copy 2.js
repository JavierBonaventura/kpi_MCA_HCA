import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenFondo from "../../images/imagenFondo.jpg";

import campoDesde from "../../images/campoDesde.png";

function Desde1976() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[852px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Nuevo div contenedor centrado */}
        <div
          style={{
            margin: "0 auto", // Centrado horizontalmente
            display: "flex",
            alignItems: "flex-start", // Alinear elementos al inicio
            position: "relative", // Posicionamiento relativo para los elementos internos
            width: "100%", // Ocupar todo el ancho disponible
            marginTop: "30px",
          }}
        >
          {/* Imagen campoDesde a la izquierda */}
          <img
            src={campoDesde}
            alt="Campo Desde"
            style={{
              width: "50vw", // Imagen ocupa la mitad del ancho de la pantalla
              flexShrink: 0,
            }}
          />

          {/* Recuadro rotado 90 grados y alineado con el centro */}
          <div
            className="flex-shrink-0"
            style={{
              position: "absolute",
              width: "30vw",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",

              right: "calc(50% - 0px)",
            }}
          />
          <div
            className="flex-shrink-0"
            style={{
              position: "absolute",
              width: "30vw",
              height: "100%",
              background:
                "linear-gradient(-90deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",

              left: "calc(50% - 0px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Desde1976;
{
  /* <div
              className="flex-shrink-0"
              style={{
                position: "absolute",
                top: "26px", // Para posicionar el texto a 20px debajo de la imagen
                width: "620px",
                height: "568px",
                transform: "rotate(90deg)",
                background:
                  "linear-gradient(180deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",
                marginLeft: "683px",
                display: "flex", // Para centrar el texto
                justifyContent: "center", // Centrado horizontal
                alignItems: "center", // Centrado vertical
              }}
            >

            </div> */
}
