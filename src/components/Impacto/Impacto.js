import React, { useState } from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenCurvaImpacto from "../../images/imagenCurvaImpacto.png";
import tarjetaImpacto1 from "../../images/tarjetaImpacto1.png";
import tarjetaImpacto2 from "../../images/tarjetaImpacto2.png";
import tarjetaImpacto3 from "../../images/tarjetaImpacto3.png";
import botonDerecha from "../../images/botonDerecha.png";
import botonIzquierda from "../../images/botonIzquierda.png";
import imagenFondo from "../../images/imagenFondo.jpg"

import arbolesProyectos from "../../images/arboles-proyectos.png";

function Imapcto() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[2740px] relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <img
          src={imagenCurvaImpacto}
          alt="Curva"
          className="absolute top-0 left-0 w-full h-auto z-20 max-h-[850px]"
          style={{
            mixBlendMode: "normal",
            top: "30px",
         
          }}
        />
        <div
          className="relative z-10 flex flex-col h-full "
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'contain',  
            backgroundPosition: 'center top',              
          }}
        >
          <div
            className="w-[546px] h-[72px] flex-shrink-0 mt-[40px]"
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
            Impacto
          </div>

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
            Descubrí cómo nuestra empresa se enfoca en reducir su impacto
            ambiental y fomentar un cambio positivo para el medio ambiente y la
            comunidad, desde lo economico hasta lo social{" "}
          </div>

          <div className="relative w-full h-full">
            {/* Bloque de fondo que se debe mostrar detrás */}
            <div className="relative w-full" style={{ top: "1850px" }}>
              {/* Contenedor de la imagen */}
              <div className="absolute z-0 w-full">
                <img
                  src={arbolesProyectos}
                  alt="Árboles Proyectos"
                  style={{
                    width: "100vw",
                    height: "678px",
                    objectFit: "cover",
                  }} // Asegúrate de que la imagen cubra el contenedor sin deformarse
                />
              </div>

              {/* Capa de degradado */}
              <div
                className="absolute"
                style={{
                  width: "571px",
                  height: "100vw", // Considera si necesitas ajustar esta altura para que el degradado cubra adecuadamente la imagen
                  transform: "rotate(90deg)",
                  flexShrink: 0,
                  background:
                    "linear-gradient(90deg, #dfe8e0 0%, rgba(237, 242, 232, 0.00) 100%)",
                  top: "0%",
                  left: "100%",
                  transformOrigin: "top left",
                  pointerEvents: "none", // Esto asegura que el degradado no interfiere con otros eventos del mouse, como clicks
                }}
              />
            </div>

            {/* Aquí comienza la sección de dos columnas */}

            {/* primer tarjeta */}
            {/* Sección de dos columnas */}
            <div
              className="flex mt-[650px] mx-auto"
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna izquierda */}
              <div style={{ width: "528px", position: "relative" }}>
                <img
                  src={tarjetaImpacto1}
                  alt="Tarjeta Servicios"
                  style={{
                    width: "528px",
                    height: "400px",
                    borderRadius: "20px",
                  }}
                />

                {/* Botón izquierda */}
                <img
                  src={botonIzquierda}
                  alt="Botón Izquierda"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "30px",
                    transform: "translateY(-50%) ",
                    width: "40px",
                    height: "38.667px",
                    flexShrink: 0,
                  }}
                />

                {/* Botón derecha */}
                <img
                  src={botonDerecha}
                  alt="Botón Derecha"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "30px",
                    transform: "translateY(-50%) ",
                    width: "40px",
                    height: "38.667px",
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Columna derecha */}

              <div className="mr-4" style={{ width: "468.214px" }}>
                <div
                  style={{
                    width: "344px",
                    height: "32px",
                    flexShrink: 0,
                    color: "#000",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "50px",
                  }}
                >
                  Medio ambiente
                </div>
                <div
                  style={{
                    width: "464px",
                    height: "206px",
                    flexShrink: 0,
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                  className="mt-8"
                >
                  <p>
                    Preservación y promoción de especies nativas y bosques
                    naturales (fotos de bosques nativos + fotos de viveros de
                    árboles)
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Preservación y promoción del entorno natural de la fauna
                      local
                    </li>
                    <li>
                      Captura de carbón, como consecuencia de las plantaciones
                      continuas de bosques para uso comercial y bosques
                      naturales
                    </li>
                    <li>
                      Diseño de un sistema de gestión de residuos y optimización
                      del uso de productos residuales en nuevas industrias
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* segunda tarjeta */}

            <div
              className="flex mt-[40px] mx-auto"
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna izquierda */}

              <div className="mr-4" style={{ width: "468.214px" }}>
                <div
                  style={{
                    width: "344px",
                    height: "32px",
                    flexShrink: 0,
                    color: "#000",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "50px",
                  }}
                >
                  Economico
                </div>
                <div
                  style={{
                    width: "449px",
                    height: "206px",
                    flexShrink: 0,
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                  className="mt-8"
                >
                  <p>
                    Es nuestro fin de aportar al crecimiento económico en la
                    zona y en el país, creando operaciones con un alto valor
                    agregado y un potencial importante de exportación así
                    contribuyendo a la apertura del país al resto del mundo.
                  </p>
                </div>
              </div>

              {/* Columna derecha */}

              <div style={{ width: "528px", position: "relative" }}>
                <img
                  src={tarjetaImpacto2}
                  alt="Tarjeta Servicios"
                  style={{
                    width: "528px",
                    height: "400px",
                    borderRadius: "20px",
                  }}
                />

                {/* Botón izquierda */}
                <img
                  src={botonIzquierda}
                  alt="Botón Izquierda"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "30px",
                    transform: "translateY(-50%) ",
                    width: "40px",
                    height: "38.667px",
                    flexShrink: 0,
                  }}
                />

                {/* Botón derecha */}
                <img
                  src={botonDerecha}
                  alt="Botón Derecha"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "30px",
                    transform: "translateY(-50%) ",
                    width: "40px",
                    height: "38.667px",
                    flexShrink: 0,
                  }}
                />
              </div>
            </div>

            {/* tercera tarjeta */}

            <div
              className="flex mt-[40px] mx-auto"
              style={{
                width: "1074px",
                gap: "100px",
                position: "relative",
                zIndex: 10,
              }}
            >
              {/* Columna izquierda */}
              <div style={{ width: "528px", position: "relative" }}>
                <img
                  src={tarjetaImpacto3}
                  alt="Tarjeta Servicios"
                  style={{
                    width: "528px",
                    height: "400px",
                    borderRadius: "20px",
                  }}
                />

                {/* Botón izquierda */}
                <img
                  src={botonIzquierda}
                  alt="Botón Izquierda"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "30px",
                    transform: "translateY(-50%) ",
                    width: "40px",
                    height: "38.667px",
                    flexShrink: 0,
                  }}
                />

                {/* Botón derecha */}
                <img
                  src={botonDerecha}
                  alt="Botón Derecha"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "30px",
                    transform: "translateY(-50%) ",
                    width: "40px",
                    height: "38.667px",
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Columna derecha */}

              <div className="mr-4" style={{ width: "468.214px" }}>
                <div
                  style={{
                    width: "461px",
                    height: "32px",
                    flexShrink: 0,
                    color: "#000",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "50px",
                    textAlign: "right",
                  }}
                >
                  Social
                </div>
                <div
                  style={{
                    width: "461px",
                    height: "206px",
                    flexShrink: 0,
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                    textAlign: "right",
                  }}
                  className="mt-8"
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nisl augue, finibus sed magna varius, egestas varius
                    ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nisl augue, finibus sed magna varius, egestas varius
                    ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec nisl augue, finibus sed magna varius, egestas varius
                    ex.
                  </p>
                </div>
              </div>
            </div>

            {/* Contenido adicional, botones, etc. */}
            <div
              className="absolute z-10 w-full"
              style={{ top: "300px", position: "relative" }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <div
                  className="text-center"
                  style={{
                    color: "#00942C",
                    fontFamily: "Fira Sans",
                    fontSize: "40px",
                    fontWeight: "700",
                    lineHeight: "50px",
                    maxWidth: "615px",
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
      </div>
    </div>
  );
}

export default Imapcto;
