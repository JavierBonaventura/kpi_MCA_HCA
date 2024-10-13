import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenCurvaSobreNosotros from "../../images/imagenCurvaSobreNosotros.png";
import imagenFondo from "../../images/imagenFondo.jpg"

function SobreNosotros() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[720px] relative">
        {/* Fondo principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Imagen curva */}
        <img
          src={imagenCurvaSobreNosotros}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[900px]"
          style={{
            mixBlendMode: "normal",
            top: "30px",
          }}
        />

        {/* Contenedor con imagen de fondo y texto */}
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'cover',  
            backgroundPosition: 'center',              
          }}
        >
          {/* Título "Sobre nosotros" */}
          <div
            className="w-[546px] h-[72px] flex-shrink-0 mt-[80px]"
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
            Sobre nosotros
          </div>
          {/* Texto debajo del título */}
          <div
            className="w-[452px] h-[64px] flex-shrink-0 mt-[20px]"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Enter dark mode. Oft referred to as night mode, high contrast, or
            inverted colors, the setting has grown popular with those who claim
            to experience eye fatigue from a deluge of white.
          </div>
          <div style={{marginRight: "8%"}}>
          <div
            className="ml-auto w-[338px] h-[142px]  mt-[40px]"
            style={{
              marginTop: "260px",
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "70px",
              letterSpacing: "-1px",
              textAlign: "right", // Cambiado a left para alinear el texto a la izquierda
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Lorem ipsum dolor
          </div>
          {/* Segundo bloque de texto */}
          <div
            className="ml-auto w-[589px] h-[140px] mt-[20px]"
            style={{
              marginTop: "30px",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "28px",
              letterSpacing: "-1px",
              textAlign: "right", // Cambiado a left para alinear el texto a la izquierda
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            interdum erat nec commodo imperdiet.
          </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotros;
