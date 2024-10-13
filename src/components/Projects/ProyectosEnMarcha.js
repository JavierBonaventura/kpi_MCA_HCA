import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenFondo from "../../images/imagenFondo.jpg"
import imagenCurva from "../../images/imagenCurva.png";
import tarjeta1Proyectos1 from "../../images/tarjeta1-proyectos.png";
import tarjeta2Proyectos2 from "../../images/tarjeta2-proyectos.png";
import tarjeta3Proyectos3 from "../../images/tarjeta3-proyectos.png";
import tarjeta4Proyectos4 from "../../images/tarjeta4-proyectos.png";
import tarjeta5Proyectos5 from "../../images/tarjeta5-proyectos.png";

import arbolesProyectos from "../../images/arboles-proyectos.png";

function ProyectosEnMarcha() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[2828px] relative">
        {" "}
        {/* Hacemos el contenedor relativo */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        {/* Imagen curva con menor prioridad */}
        <img
          src={imagenCurva}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[950px]" // Ajusta el z-index aquí (menor que la tarjeta)
          style={{
            mixBlendMode: "normal", // No aplicar ningún filtro o mezcla
            top: "30px",
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full px-4" // Cambia z-index aquí para menor prioridad que la tarjeta
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'contain',  
            backgroundPosition: 'top center',              
          }}
        >
          {/* Texto "Proyectos activos" */}
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
            Proyectos activos
          </div>

          {/* Contenedor de texto */}
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

          {/* Contenedor vacío para generar espacio antes de la tarjeta */}
          <div className="mt-[580px]"></div>
        </div>
        {/* Tarjeta superpuesta 1 */}
        <div
          className="absolute z-30"
          style={{
            top: "680px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.3s",
          }} // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "1074px",
              height: "268px",
              flexShrink: 0,
              borderRadius: "21.323px",
              background: "#DAD8CB",
              boxShadow:
                "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta1Proyectos1}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "21.323px 0 0 21.323px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Parte derecha con texto */}
            {/* Parte derecha con contenedores */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center"
                style={{
                  width: "435px",
                  height: "26px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "447px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button
                className="mt-6 flex justify-center items-center bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
                style={{
                  width: "217px",
                  height: "50px",
                  flexShrink: 0,
                  borderRadius: "5px",
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Ver Proyecto
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta foto derecha 2*/}
        <div
          className="absolute z-30"
          style={{
            top: "1000px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.3s",
          }} // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "1074px",
              height: "268px",
              flexShrink: 0,
              borderRadius: "21.323px",
              background: "#DAD8CB",
              boxShadow:
                "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "21.323px 0 0 21.323px" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center"
                style={{
                  width: "435px",
                  height: "26px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "447px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button
                className="mt-6 flex justify-center items-center bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
                style={{
                  width: "217px",
                  height: "50px",
                  flexShrink: 0,
                  borderRadius: "5px",
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Ver Proyecto
                </span>
              </button>
            </div>

            {/* Parte derecha con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta2Proyectos2}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "0 21.323px 21.323px 0",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta 3*/}
        <div
          className="absolute z-30"
          style={{
            top: "1320px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.3s",
          }} // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "1074px",
              height: "268px",
              flexShrink: 0,
              borderRadius: "21.323px",
              background: "#DAD8CB",
              boxShadow:
                "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta3Proyectos3}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "21.323px 0 0 21.323px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Parte derecha con texto */}
            {/* Parte derecha con contenedores */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center"
                style={{
                  width: "435px",
                  height: "26px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "447px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button
                className="mt-6 flex justify-center items-center bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
                style={{
                  width: "217px",
                  height: "50px",
                  flexShrink: 0,
                  borderRadius: "5px",
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Ver Proyecto
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta foto derecha 4*/}
        <div
          className="absolute z-30"
          style={{
            top: "1640px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.3s",
          }} // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "1074px",
              height: "268px",
              flexShrink: 0,
              borderRadius: "21.323px",
              background: "#DAD8CB",
              boxShadow:
                "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con texto */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "21.323px 0 0 21.323px" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center"
                style={{
                  width: "435px",
                  height: "26px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "447px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button
                className="mt-6 flex justify-center items-center bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
                style={{
                  width: "217px",
                  height: "50px",
                  flexShrink: 0,
                  borderRadius: "5px",
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Ver Proyecto
                </span>
              </button>
            </div>

            {/* Parte derecha con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta4Proyectos4}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "0 21.323px 21.323px 0",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
        {/* Tarjeta superpuesta 5 */}
        <div
          className="absolute z-30"
          style={{
            top: "1960px",
            left: "50%",
            transform: "translateX(-50%)",
            transition: "transform 0.3s",
          }} // Añadir transición
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1.02)")
          } // Escalar al pasar el mouse
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(-50%) scale(1)")
          } // Restaurar escala
        >
          {" "}
          {/* Centra la tarjeta horizontalmente */}
          <div
            className="flex"
            style={{
              width: "1074px",
              height: "268px",
              flexShrink: 0,
              borderRadius: "21.323px",
              background: "#DAD8CB",
              boxShadow:
                "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
              position: "relative",
            }}
          >
            {/* Parte izquierda con imagen */}
            <div className="flex items-center justify-center w-1/2">
              <img
                src={tarjeta5Proyectos5}
                alt="Tarjeta Proyectos"
                className="object-cover"
                style={{
                  borderRadius: "21.323px 0 0 21.323px",
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Parte derecha con texto */}
            {/* Parte derecha con contenedores */}
            <div
              className="flex flex-col justify-center w-1/2 px-6"
              style={{ borderRadius: "0 21.323px 21.323px 0" }}
            >
              {/* Primer contenedor - Título */}
              <div
                className="flex items-center"
                style={{
                  width: "435px",
                  height: "26px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "30px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Fideicomiso San Antonio
              </div>

              {/* Segundo contenedor - Texto */}
              <div
                className="mt-4"
                style={{
                  width: "447px",
                  height: "47px",
                  flexShrink: 0,
                  color: "#464646",
                  fontFamily: "Fira Sans",
                  fontSize: "24px",
                  fontWeight: "400",
                  lineHeight: "23px",
                  letterSpacing: "-1.333px",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  marginBottom: "17px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu.
              </div>

              {/* Tercer contenedor - Botón */}
              <button
                className="mt-6 flex justify-center items-center bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5"
                style={{
                  width: "217px",
                  height: "50px",
                  flexShrink: 0,
                  borderRadius: "5px",
                }}
              >
                <span
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Ver Proyecto
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Imagen de árboles con texto y botón debajo */}
        <div className="absolute z-10 w-full" style={{ top: "2140px" }}>
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
              className="mt-6 flex justify-center items-center bg-white cursor-pointer transition-transform duration-500 ease-out hover:bg-[#D1D1D1] hover:-translate-y-0.5"
              style={{
                width: "245.25px",
                height: "50px",
                flexShrink: 0,
                borderRadius: "5px",
                border: "1px solid #00942C",
            
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
  );
}

export default ProyectosEnMarcha;
