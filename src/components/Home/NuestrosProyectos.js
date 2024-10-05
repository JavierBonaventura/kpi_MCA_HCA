import React, { useState } from "react";
import fondoServicios from "../../images/fondoServicios.png";
// Asegúrate de que estas imágenes existan
import gallery1 from "../../images/gallery1.png";
import gallery2 from "../../images/gallery2.png";
import gallery3 from "../../images/gallery3.png";

function Servicios() {
  const cardWidth = 569.736; // Ancho de cada tarjeta
  const positions = [0, cardWidth, cardWidth * 2]; // Posiciones iniciales: 0px, 569px, 1139px

  // Estado para las posiciones de las tarjetas
  const [cardPositions, setCardPositions] = useState(positions);

  const handleLeftClick = () => {
    // Mover las posiciones hacia la izquierda, de forma circular
    setCardPositions((prev) => [
      prev[2], // La tarjeta en la posición 3 se mueve a la posición 1
      prev[0], // La tarjeta en la posición 1 se mueve a la posición 2
      prev[1], // La tarjeta en la posición 2 se mueve a la posición 3
    ]);
  };

  const handleRightClick = () => {
    // Mover las posiciones hacia la derecha, de forma circular
    setCardPositions((prev) => [
      prev[1], // La tarjeta en la posición 2 se mueve a la posición 1
      prev[2], // La tarjeta en la posición 3 se mueve a la posición 2
      prev[0], // La tarjeta en la posición 1 se mueve a la posición 3
    ]);
  };

  return (
    <div>
      <div className="w-full h-[852px] overflow-hidden relative">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`,
            backgroundPosition: "0px -300.596px",
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="w-[624px] h-[76px] flex-shrink-0 mt-[-50px]"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "60px",
              fontWeight: "900",
              lineHeight: "60px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
              textAlign: "center",
            }}
          >
            Nuestros proyectos
          </div>

          <div
            className="w-[535px] h-[70px] flex-shrink-0 mt-[15px]"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "32px",
              letterSpacing: "-1px",
              fontFeatureSettings: "'liga' off, 'clig' off",
              textAlign: "center",
            }}
          >
            Esta es una selección de todos los proyectos en los cuales venimos
            trabajando hace más de 40 años.
          </div>
          {/* Contenedor para los botones y las tarjetas */}
          <div className="flex items-center justify-center mt-[50px] relative">
            {/* Botón de navegación izquierda */}
            <button
              onClick={handleLeftClick}
              className="absolute left-[450px] mt-64 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-20"
              style={{
                cursor: "pointer", // Cursor de mano
                transition: "background 0.3s", // Transición suave para el cambio de color
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#007A24")
              } // Cambio de color al pasar el mouse
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#00942C")
              } // Restaurar color
            >
              &lt;
            </button>

            {/* Contenedor para las tarjetas */}
            <div className="flex gap-[160px]">
              {/* Tarjeta 1 */}
              <div
                className="transition-transform duration-500"
                style={{ transform: `translateX(${cardPositions[0]}px)` }}
              >
                <div
                  className="w-[409.736px] h-[514.89px] flex-shrink-0"
                  style={{
                    borderRadius: "28.132px",
                    background: "#DAD8CB",
                    boxShadow:
                      "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
                  }}
                ></div>
                <div
                  className="w-[409.736px] h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1]  absolute top-0 left-0"
                  style={{
                    backgroundImage: `url(${gallery1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "28.132px 28.132px 0px 0px",
                  }}
                />
                <div
                  style={{
                    color: "#464646",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "21.323px",
                    position: "absolute",
                    top: "220px",
                    width: "100%",
                  }}
                ></div>

                {/* Descripción de la tarjeta */}
                <div
                  style={{
                    width: "389.793px",
                    height: "65.268px",
                    flexShrink: 0,
                    color: "#464646",
                    textAlign: "center",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "TT Norms Pro",
                    fontSize: "28.132px",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "28.132px",
                    letterSpacing: "-1.758px",
                    position: "absolute",
                    top: "280px",
                    width: "100%",
                  }}
                >
                  Proyecto Ciriaco Agro Alba
                </div>

                {/* Segunda descripción */}
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    width: "351.72px",
                    height: "70.707px",
                    flexShrink: 0,
                    color: "#464646",
                    textAlign: "center",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "TT Norms Pro",
                    fontSize: "17.583px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22.858px",
                    letterSpacing: "-1.758px",
                    position: "absolute",
                    top: "330px",
                    width: "100%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                  praesent ornare eu. Vehicula feugiat vel porttitor pretium
                  nisl facilisi. Pellentesque pharetra id placerat.
                </div>

                {/* Botón */}
                <div
                  style={{
                    width: "217px",
                    height: "50px",
                    flexShrink: 0,
                    borderRadius: "5px",
                    background: "#00942C",
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer", // Cursor de mano
                    transition: "background 0.3s", // Transición suave para el cambio de color
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#007A24")
                  } // Cambio de color al pasar el mouse
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#00942C")
                  } // Restaurar color
                >
                  <div
                    style={{
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    ver más
                  </div>
                </div>
              </div>
              {/* Tarjeta 2 */}
              <div
                className="transition-transform duration-500"
                style={{ transform: `translateX(${cardPositions[1] - 569}px)` }}
              >
                <div
                  className="w-[409.736px] h-[514.89px] flex-shrink-0"
                  style={{
                    borderRadius: "28.132px",
                    background: "#DAD8CB",
                    boxShadow:
                      "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
                  }}
                ></div>
                <div
                  className="w-[409.736px] h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1]  absolute top-0 left-0"
                  style={{
                    backgroundImage: `url(${gallery2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "28.132px 28.132px 0px 0px",
                  }}
                />
                <div
                  style={{
                    color: "#464646",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "21.323px",
                    position: "absolute",
                    top: "220px",
                    width: "100%",
                  }}
                ></div>

                {/* Descripción de la tarjeta */}
                <div
                  style={{
                    width: "389.793px",
                    height: "65.268px",
                    flexShrink: 0,
                    color: "#464646",
                    textAlign: "center",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "TT Norms Pro",
                    fontSize: "28.132px",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "28.132px",
                    letterSpacing: "-1.758px",
                    position: "absolute",
                    top: "280px",
                    width: "100%",
                  }}
                >
                  Proyecto Fideicomiso San Antonio.
                </div>

                {/* Segunda descripción */}
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    width: "351.72px",
                    height: "70.707px",
                    flexShrink: 0,
                    color: "#464646",
                    textAlign: "center",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "TT Norms Pro",
                    fontSize: "17.583px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22.858px",
                    letterSpacing: "-1.758px",
                    position: "absolute",
                    top: "330px",
                    width: "100%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                  praesent ornare eu. Vehicula feugiat vel porttitor pretium
                  nisl facilisi. Pellentesque pharetra id placerat.
                </div>

                {/* Botón */}
                <div
                  style={{
                    width: "217px",
                    height: "50px",
                    flexShrink: 0,
                    borderRadius: "5px",
                    background: "#00942C",
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer", // Cursor de mano
                    transition: "background 0.3s", // Transición suave para el cambio de color
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#007A24")
                  } // Cambio de color al pasar el mouse
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#00942C")
                  } // Restaurar color
                >
                  <div
                    style={{
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    ver más
                  </div>
                </div>
              </div>
              {/* Tarjeta 3 */}
              <div
                className="transition-transform duration-500"
                style={{
                  transform: `translateX(${cardPositions[2] - 1139}px)`,
                }}
              >
                <div
                  className="w-[409.736px] h-[514.89px] flex-shrink-0"
                  style={{
                    borderRadius: "28.132px",
                    background: "#DAD8CB",
                    boxShadow:
                      "17.583px 17.583px 30.77px 8.791px rgba(2, 2, 2, 0.30)",
                  }}
                ></div>
                <div
                  className="w-[409.736px] h-[259.258px] rounded-t-[28.132px] bg-[#F7FFF1]  absolute top-0 left-0"
                  style={{
                    backgroundImage: `url(${gallery3})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "28.132px 28.132px 0px 0px",
                  }}
                />
                <div
                  style={{
                    color: "#464646",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "30px",
                    fontWeight: "400",
                    lineHeight: "21.323px",
                    position: "absolute",
                    top: "220px",
                    width: "100%",
                  }}
                ></div>

                {/* Descripción de la tarjeta */}
                <div
                  style={{
                    width: "389.793px",
                    height: "65.268px",
                    flexShrink: 0,
                    color: "#464646",
                    textAlign: "center",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "TT Norms Pro",
                    fontSize: "28.132px",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "28.132px",
                    letterSpacing: "-1.758px",
                    position: "absolute",
                    top: "280px",
                    width: "100%",
                  }}
                >
                  Proyecto Biocor.
                </div>

                {/* Segunda descripción */}
                <div
                  style={{
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    width: "351.72px",
                    height: "70.707px",
                    flexShrink: 0,
                    color: "#464646",
                    textAlign: "center",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "TT Norms Pro",
                    fontSize: "17.583px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "22.858px",
                    letterSpacing: "-1.758px",
                    position: "absolute",
                    top: "330px",
                    width: "100%",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                  praesent ornare eu. Vehicula feugiat vel porttitor pretium
                  nisl facilisi. Pellentesque pharetra id placerat.
                </div>

                {/* Botón */}
                <div
                  style={{
                    width: "217px",
                    height: "50px",
                    flexShrink: 0,
                    borderRadius: "5px",
                    background: "#00942C",
                    position: "absolute",
                    bottom: "30px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer", // Cursor de mano
                    transition: "background 0.3s", // Transición suave para el cambio de color
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "#007A24")
                  } // Cambio de color al pasar el mouse
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "#00942C")
                  } // Restaurar color
                >
                  <div
                    style={{
                      color: "#FFF",
                      textAlign: "center",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                    }}
                  >
                    ver más
                  </div>
                </div>
              </div>
            </div>

            {/* Botón de navegación derecha */}
            <button
              onClick={handleRightClick}
              className="absolute right-[450px] mt-64 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white z-20"
              style={{
                cursor: "pointer", // Cursor de mano
                transition: "background 0.3s", // Transición suave para el cambio de color
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#007A24")
              } // Cambio de color al pasar el mouse
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#00942C")
              } // Restaurar color
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
