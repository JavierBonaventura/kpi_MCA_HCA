import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import logoGarabi from "../../images/logo-garabi.svg"; // Importa el logo
import logoInstagram from "../../images/instagramNegra.png";
import logoLinkedin from "../../images/linkedinNegra.png";

function Footer() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[300px] relative">
        {/* Fondo y contenedor principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`,
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Nuevo contenedor con margen */}
          <div
            className="flex justify-between"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
            }}
          >
            {/* Primera columna con el logo y texto */}
            <div className="flex flex-col">
              <img
                src={logoGarabi}
                alt="Logo Garabi"
                style={{
                  width: "157px",
                  height: "80px",
                  flexShrink: 0,
                }}
              />
              <div
                style={{
                  width: "304.457px",
                  color: "#000",
                  fontFamily: "Fira Sans",
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "28px",
                  marginTop: "20px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                nisl augue, finibus sed magna varius, egestas varius ex.
              </div>
            </div>

            {/* Segunda columna */}
            <div className="flex flex-col top-20px mt-8">
              <div
                style={{
                  width: "133.714px",
                  color: "#000",
                  fontFamily: "Fira Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                HOME
              </div>
              <div className="w-[133.714px] h-[139px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[20px]">
                <p className="mb-[10px]">Nosotros</p>
                <p className="mb-[10px]">Proyectos</p>
                <p>Medio Ambiente</p>
              </div>
            </div>

            {/* Tercera columna */}
            <div className="flex flex-col top-20px mt-8">
              <div
                style={{
                  width: "133.714px",
                  color: "#000",
                  fontFamily: "Fira Sans",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                }}
              >
                SERVICIOS
              </div>
              <div className="w-[133.714px] h-[139px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[20px]">
                <p className="mb-[10px]">Servicio 1</p>
                <p className="mb-[10px]">Servicio 2</p>
                <p>Servicio 3</p>
              </div>
            </div>

            {/* Cuarta columna */}
{/* Cuarta columna */}
<div className="flex flex-col top-20px mt-8">
  <div
    style={{
      width: "133.714px",
      color: "#000",
      fontFamily: "Fira Sans",
      fontSize: "14px",
      fontWeight: "500",
      letterSpacing: "4px",
      textTransform: "uppercase",
    }}
  >
    SERVICIOS
  </div>
  <div className="w-[213px] h-[139px] text-black font-fira-sans text-[18px] font-normal leading-[28px] mt-[20px]">
    <p className="mb-[10px]"> +72 699 241-395</p>
    <p className="mb-[10px]">alexei@getcraftwork.com</p>
    <div
      className="absolute"
      style={{
        left: `${(1119 / 1440) * 100}%`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={logoLinkedin}
        alt="LinkedIn"
        style={{
          width: "30px",
          height: "30px",
          flexShrink: 0,
          marginRight: "10px",
        }}
      />
      <div
        style={{
          width: "0.5px",
          height: "28.343px",
          backgroundColor: "#00942C",
          margin: "0 10px",
        }}
      />
      <img
        src={logoInstagram}
        alt="Instagram"
        style={{
          width: "26.572px",
          height: "28.343px",
          flexShrink: 0,
        }}
      />
    </div>
  </div>
</div>


                      {/* Quinta columna */}
                      <div className="flex flex-col top-20px mt-8" style={{ width: `${leftPercentageLogo}px` }}>
       
            </div>
          </div>

          {/* Línea centrada */}
          <div
            style={{
              width: "1307px",
              height: "1px",
              background: "#000",
              margin: "40px auto 20px", // Centrar la línea
            }}
          ></div>

          {/* Texto centrado */}
          <div
            style={{
              width: "522.514px",
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "14px",
              fontWeight: "500",
              letterSpacing: "4px",
              textTransform: "uppercase",
              textAlign: "center", // Centrar el texto
              margin: "0 auto", // Asegura el centrado del contenedor
            }}
          >
            © 2024 AW visual studio. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
