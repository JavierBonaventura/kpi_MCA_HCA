import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importar Link
import fondoTopBar from "../../images/topbar-fondo.png";
import logoGarabi from "../../images/logo-garabi.svg";
import logoInstagram from "../../images/logoInstagram.svg";
import logoLinkedin from "../../images/linkedin.png";

function Header() {
  const [fontSize, setFontSize] = useState(14);
  const [letterSpacing, setLetterSpacing] = useState(4);

  const handleResize = () => {
    const width = window.innerWidth;
    const newFontSize = (width / 1440) * 14; // Proporcional al ancho
    const newLetterSpacing = (width / 1440) * 4; // Proporcional al ancho
    setFontSize(newFontSize);
    setLetterSpacing(newLetterSpacing);
  };

  useEffect(() => {
    handleResize(); // Llamar la función al montar
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento al desmontar
    };
  }, []);

  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div className="w-full h-[94px]">
      <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
      <div
        className="relative z-10 flex flex-col h-full px-4"
        style={{
          backgroundImage: `url(${fondoTopBar}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`, // Capa verde más sutil
          backgroundSize: "100% 143.058%",
          backgroundBlendMode: "overlay", // Mezcla la imagen con la capa verde
          backgroundRepeat: "no-repeat",
        }}
      >
        <img
          src={logoGarabi}
          alt="Logo Garabi"
          className="absolute"
          style={{
            left: `${leftPercentageLogo}%`,
            top: "4px",
            width: "auto",
            height: "auto",
          }}
        />

        <div
          className="absolute"
          style={{
            left: `${(421 / 1440) * 100}%`,
            top: "30px",
            display: "inline-flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {[
            { text: "HOME", to: "/" },
            { text: "ABOUT US", to: "/about" },
            { text: "PROYECTOS", to: "/projects" },
            { text: "IMPACTO", to: "/impact" },
            { text: "SERVICIOS", to: "/services" },
            { text: "CONTACTO", to: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              style={{
                color: "#00942C",
                textAlign: "center",
                fontFamily: "TT Norms Pro",
                fontSize: `${fontSize}px`,
                fontWeight: 400,
                letterSpacing: `${letterSpacing}px`,
                textTransform: "uppercase",
                position: "relative",
                display: "inline-block",
                marginBottom: "9.16px",
                cursor: "pointer",
              }}
              className="group"
            >
              {item.text}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-[3.205px] bg-[#00942C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  width: "100%",
                  marginTop: "3px",
                }}
              />
            </Link>
          ))}
        </div>

        <div
          className="absolute"
          style={{
            left: `85vw`,
            top: "30px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logoLinkedin}
              alt="LinkedIn"
              style={{
                width: "30px",
                height: "30px",
                flexShrink: 0,
                marginRight: "10px",
                cursor: "pointer", // Cambia el cursor al pasar el mouse
                transition: "transform 0.2s", // Suaviza el efecto de escala
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              } // Escala al pasar el mouse
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              } // Vuelve al tamaño original
            />
            
            <img
              src={logoInstagram}
              alt="Instagram"
              style={{
                width: "26.572px",
                height: "28.343px",
                flexShrink: 0,
                cursor: "pointer", // Cambia el cursor al pasar el mouse
                transition: "transform 0.2s", // Suaviza el efecto de escala
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              } // Escala al pasar el mouse
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              } // Vuelve al tamaño original
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
