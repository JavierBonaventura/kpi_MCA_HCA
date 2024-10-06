import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import logoCandado from "../../images/logoCandado.png";
import logoVision from "../../images/logoVision.png";
import logoTrayectoria from "../../images/logoTrayectoria.png";
import arbolesProyectos from "../../images/arboles-proyectos.png";

function SobreNosotrosValores() {
  return (
    <div>
      <div className="w-full h-[450px]">
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
          {/* Título "Valores" centrado a 79px de la parte superior */}
          <div
            style={{
              marginTop: "50px",
              width: "250px",
              height: "50px",
              flexShrink: 0,
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            <h1
              style={{
                color: "#000",
                fontFamily: "Fira Sans",
                fontSize: "60px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "50px",
              }}
            >
              Valores
            </h1>
          </div>

          {/* Tarjetas centradas con un gap de 20px */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "55px",
              gap: "20px",
            }}
          >
            {/* tarjeta 1 */}
            <div
              style={{
                width: "345px",
                height: "230px",
                flexShrink: 0,
                borderRadius: "21px",
                background: "#00942C",
                position: "relative", 
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",

              }}
            >
              {/* Logo Candado */}
              <img
                src={logoCandado}
                alt="Logo Candado"
                style={{
                  position: "absolute",
                  top: "35px",
                  left: "34px",
                  width: "41px",
                  height: "47px",
                  flexShrink: 0,
                  fill: "#FFF",
                }}
              />

              {/* Texto "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "42px", // Alineado con el candado
                  left: "109px", // 34px + 41px (ancho del logo) + 35px de separación
                  width: "102.849px",
                  height: "32px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "32px", // 145.455%
                }}
              >
                Confianza
              </div>

              {/* Texto debajo del logo y "Confianza" */}
              <div
                style={{
                  position: "absolute",
                  top: "110px", // 35px (top margin) + 47px (logo height) + space
                  left: "34px",
                  width: "300px",
                  height: "84px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px", // 155.556%
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                This product's simple design focuses on videos and standout
                quotes from customers.
              </div>
            </div>

            {/* tarjeta 2 */}
            <div
              style={{
                width: "345px",
                height: "230px",
                flexShrink: 0,
                borderRadius: "21px",
                background: "#00942C",
                position: "relative", 
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",

              }}
            >
              {/* Logo Vision */}
              <img
                src={logoVision}
                alt="Logo Vision"
                style={{
                  position: "absolute",
                  top: "35px",
                  left: "34px",
                  width: "41px",
                  height: "47px",
                  flexShrink: 0,
                  fill: "#FFF",
                }}
              />

              {/* Texto "Vision" */}
              <div
                style={{
                  position: "absolute",
                  top: "42px", // Alineado con el candado
                  left: "109px", // 34px + 41px (ancho del logo) + 35px de separación
                  width: "102.849px",
                  height: "32px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "32px", // 145.455%
                }}
              >
                Visión
              </div>

              {/* Texto debajo del logo y "Vision" */}
              <div
                style={{
                  position: "absolute",
                  top: "110px", // 35px (top margin) + 47px (logo height) + space
                  left: "34px",
                  width: "300px",
                  height: "84px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px", // 155.556%
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                This product's simple design focuses on videos and standout
                quotes from customers.
              </div>
            </div>

            {/* tarjeta 3 */}
            <div
              style={{
                width: "345px",
                height: "230px",
                flexShrink: 0,
                borderRadius: "21px",
                background: "#00942C",
                position: "relative", 
                filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
              }}
            >
              {/* Logo Trayectoria */}
              <img
                src={logoTrayectoria}
                alt="Logo Trayectoria"
                style={{
                  position: "absolute",
                  top: "35px",
                  left: "34px",
                  width: "41px",
                  height: "47px",
                  flexShrink: 0,
                  fill: "#FFF",
                }}
              />

              {/* Texto "Trayectoria" */}
              <div
                style={{
                  position: "absolute",
                  top: "42px", // Alineado con el candado
                  left: "109px", // 34px + 41px (ancho del logo) + 35px de separación
                  width: "102.849px",
                  height: "32px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "32px", // 145.455%
                }}
              >
                Trayectoria
              </div>

              {/* Texto debajo del logo y "Vision" */}
              <div
                style={{
                  position: "absolute",
                  top: "110px", // 35px (top margin) + 47px (logo height) + space
                  left: "34px",
                  width: "300px",
                  height: "84px",
                  flexShrink: 0,
                  color: "#FFF",
                  fontFamily: "Fira Sans",
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "28px", // 155.556%
                  fontFeatureSettings: "'liga' off, 'clig' off",
                }}
              >
                This product's simple design focuses on videos and standout
                quotes from customers.
              </div>
            </div>
          </div>

          {/* Círculos debajo de las tarjetas */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "96px", // Ajusta este valor para controlar la separación horizontal
              }}
            >
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid #00942C",
                    backgroundColor: "#FFF",
                  }}
                />
              ))}
            </div>
                 
    {/* Imagen de árboles con texto y botón debajo */}
    <div className="absolute z-10 w-full" style={{ top: "1050px" }}>
    <img
      src={arbolesProyectos}
      alt="Árboles Proyectos"
      style={{ width: "100vw", height: "678px" }}
    />

    {/* Nuevo div superpuesto */}
    <div
      className="absolute"
      style={{
        width: "571px",
        height: "100vw",
        transform: "rotate(90deg)",
        flexShrink: 0,
        background:
          "linear-gradient(90deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
        top: "0%", // Ajusta según necesites
        left: "100%", // Ajusta según necesites
        transformOrigin: "top left", // Asegura que la rotación sea desde la esquina superior izquierda
      }}
    />



    <div
      className="absolute inset-0 flex flex-col justify-center items-center"
      style={{ width: "100%", margin: "0 auto", textAlign: "center" }}
    >
      <div
        className="text-center"
        style={{
          color: "#00942C",
          fontFamily: "Fira Sans",
          fontSize: "40px",
          fontWeight: "700",
          lineHeight: "50px",
          maxWidth: "615px", // Limitar el ancho máximo del texto
        }}
      >
        Contáctanos ahora para darle forma a tu futuro verde
      </div>

      <button
        className="mt-6 flex justify-center items-center"
        style={{
          width: "245.25px",
          height: "50px",
          flexShrink: 0,
          borderRadius: "5px",
          border: "1px solid #00942C",
          backgroundColor: "#FFF",
          cursor: "pointer", // Cursor de mano
          transition: "background 0.3s, color 0.3s", // Transición suave para el cambio de color
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#D1D1D1"; // Nuevo color de fondo al pasar el mouse
          e.currentTarget.style.color = "#00942C"; // Cambiar color del texto a verde
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#FFF"; // Restaurar fondo
          e.currentTarget.style.color = "#00942C"; // Restaurar color del texto
        }}
      >
        <span
          style={{
            color: "#00942C",
            textAlign: "center",
            fontFamily: "Fira Code",
            fontSize: "14px",
            fontWeight: "400",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Contáctanos
        </span>
      </button>
    </div>
  </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosValores;


