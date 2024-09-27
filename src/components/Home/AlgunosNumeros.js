import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenCirculo1 from "../../images/imagen-circulo-1.png";
import imagenCirculo2 from "../../images/imagen-circulo-2.png";
import imagenCirculo3 from "../../images/imagen-circulo-3.png";
import imagenCirculo4 from "../../images/imagen-circulo-4.png";

function AlgunosNumeros() {
  return (
    <div>
      <div className="w-full h-[550px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`, // Capa verde más sutil
            backgroundPosition: "0px -236.596px",
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay", // Mezcla la imagen con la capa verde
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Palabra "Algunos números" centrada horizontalmente a 20px del top */}
          <div
            style={{
              position: "absolute",
              top: "-170px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "648px",
              height: "76px",
              color: "#000",
              textAlign: "center",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "Fira Sans",
              fontSize: "60px",
              fontStyle: "normal",
              fontWeight: 900,
              lineHeight: "60px",
              letterSpacing: "-1px",
            }}
          >
            Algunos números
          </div>

          {/* Texto debajo de "Algunos números" */}
          <div
            style={{
              position: "absolute",
              top: "-90px", // Ajuste para ponerlo debajo de "Algunos números"
              left: "50%",
              transform: "translateX(-50%)",
              width: "290px",
              height: "32px",
              color: "#000",
              textAlign: "center",
              fontFeatureSettings: "'liga' off, 'clig' off",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "32px", // 133.333%
              letterSpacing: "-1px",
              flexShrink: 0,
            }}
          >
            Esto logramos en nuestros 20 años de trayectoria
          </div>

          {/* Sección de imágenes circulares con contenedor de texto */}
          <div
            style={{
              position: "absolute",
              top: "50px", // Ajusta según sea necesario
              left: "50%", // Cambiado para centrar
              transform: "translateX(-50%)", // Para centrar horizontalmente
              display: "flex",
              gap: "100px", // Espaciado entre imágenes
              justifyContent: "center", // Asegura que las imágenes estén centradas
            }}
          >
            {/* Bloque de imagen 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src={imagenCirculo1}
                alt="Imagen 1"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  width: "219px",
                  height: "130.083px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop:"55px"
                }}
              >
                <div
                  style={{
                    color: "#00942C",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "62.133px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "41.422px", // 66.667%
                  }}
                >
                  35.500
                </div>
                <div
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "20.711px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    letterSpacing: "5.178px",
                    textTransform: "uppercase",
                    paddingTop:"20px",
                    lineHeight: "1"

                  }}
                >
                  hectáreas administradas
                </div>
              </div>
            </div>

            {/* Bloque de imagen 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src={imagenCirculo2}
                alt="Imagen 2"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  width: "219px",
                  height: "130.083px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop:"55px"
                }}
              >
                <div
                  style={{
                    color: "#00942C",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "62.133px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "41.422px",
                   
                  }}
                >
                 7 204
                </div>
                <div
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "20.711px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    letterSpacing: "5.178px",
                    textTransform: "uppercase",
                    paddingTop:"20px",
                    lineHeight: "1"

                  }}
                >
                  HECTáREAS FORESTADAS
                </div>
              </div>
            </div>

            {/* Bloque de imagen 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src={imagenCirculo4}
                alt="Imagen 4"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  width: "262px",
                  height: "130.083px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop:"55px"

                }}
              >
                <div
                  style={{
                    color: "#00942C",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "62.133px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "41.422px",
                  }}
                >
                  437 M.
                </div>
                <div
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "20.711px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    letterSpacing: "5.178px",
                    textTransform: "uppercase",
                    paddingTop:"20px",
                    lineHeight: "1"
                  }}
                >
                  USD EN ACTIVOS ADMINISTRADOS
                </div>
              </div>
            </div>

            {/* Bloque de imagen 4 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img
                src={imagenCirculo3}
                alt="Imagen 3"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  width: "219px",
                  height: "130.083px",
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop:"55px"

                }}
              >
                <div
                  style={{
                    color: "#00942C",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "62.133px",
                    fontStyle: "normal",
                    fontWeight: 900,
                    lineHeight: "41.422px",
                  }}
                >
                  123
                </div>
                <div
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "20.711px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    letterSpacing: "5.178px",
                    textTransform: "uppercase",
                    paddingTop:"20px",
                    lineHeight: "1"

                  }}
                >
                  EMPLEADOS DIRECTOS E INDIRECTOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlgunosNumeros;
