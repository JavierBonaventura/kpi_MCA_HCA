import React from "react";
import fondoServicios from "../../images/fondoServicios.png";

function ContactoForm() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[852px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`, // Capa verde más sutil
            backgroundPosition: "0px -300.596px",
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay", // Mezcla la imagen con la capa verde
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Texto "Servicios" con margen superior de 120px */}
          <div
            className="w-[707px] h-[72px] flex-shrink-0 mt-[120px]"
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
            Quedemos en contacto
          </div>

          {/* Texto debajo de "Servicios" con 15px de espacio */}
         

        
       
        </div>
      </div>
    </div>
  );
}

export default ContactoForm;
