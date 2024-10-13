import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importar Link
import fondoHome from "../../images/fondo-home.png";
import fondoTopBar from "../../images/topbar-fondo.png";
import imagenFondo from "../../images/imagenFondo.jpg";
import logoGarabi from "../../images/logo-garabi.svg";
import logoInstagram from "../../images/logoInstagram.svg";
import logoLinkedin from "../../images/linkedin.png";

function Header_Home() {
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
    <div
      className="relative h-[760px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${fondoHome}),linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-[94px]">
        <div className="absolute inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex items-center justify-between h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center top", 
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
              top: "38px",
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
                  fontSize: `14px`,
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
              top: "36px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={logoLinkedin}
                alt="LinkedIn"
                style={{
                  width: "20px",
                  height: "20px",
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
                  width: "20px",
                  height: "20px",
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

      {/* Contenedor para el texto "Líderes en forestación" */}
      <div
        style={{
          position: "absolute",
          width: "356px",
          height: "126px",
          left: `${leftPercentageLogo}%`,
          top: "262px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            color: "#FFF",
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: "Fira Sans, sans-serif",
            fontSize: "60px",
            fontStyle: "normal",
            fontWeight: 900,
            lineHeight: "60px",
            letterSpacing: "-1px",
            textAlign: "left",
          }}
        >
          Líderes en forestación
        </h1>
      </div>

      {/* Contenedor para el texto "Desde 1983..." */}
      <div
        style={{
          position: "absolute",
          width: "396px",
          height: "64px",
          left: `${leftPercentageLogo}%`,
          top: "416px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "#FFF",
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: "Fira Sans, sans-serif",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "32px",
            letterSpacing: "-1px",
            textAlign: "left",
          }}
        >
          Desde 1983 gestionado con éxito más de 18.000 hectáreas de bosques
        </p>
      </div>

      {/* Contenedor para los botones */}
      <div
        style={{
          position: "absolute",
          left: `${leftPercentageLogo}%`,
          top: "515px", // Margen superior para la posición de los botones
          display: "flex",
          gap: "10px", // Espacio entre botones
        }}
      >
        {/* Botón 1 */}
        <div
          className="bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
          style={{
            width: "217px",
            height: "50px",
            borderRadius: "5px",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Fira Sans",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            SOBRE NOSOTROS
          </span>
        </div>

        {/* Botón 2 */}
        <div
          className="bg-white cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
          style={{
            width: "187.875px",
            height: "50px",
            borderRadius: "5px",
            border: "1px solid #00942C",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              color: "#00942C",
              textAlign: "center",
              fontFamily: "Fira Sans",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "4px",
              textTransform: "uppercase",
            }}
          >
            PROYECTOS
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header_Home;
