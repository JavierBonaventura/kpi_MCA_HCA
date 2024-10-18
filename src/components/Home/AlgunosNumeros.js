import React, { useState, useEffect, useRef } from "react";
import imagenFondo from "../../images/imagenFondo.jpg";
import imagenCirculo1 from "../../images/imagen-circulo-1.png";
import imagenCirculo2 from "../../images/imagen-circulo-2.png";
import imagenCirculo3 from "../../images/imagen-circulo-3.png";
import imagenCirculo4 from "../../images/imagen-circulo-4.png";

function AlgunosNumeros() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const ref = useRef(null);

  const finalCount1 = 35500;
  const finalCount2 = 7204;
  const finalCount3 = 437;
  const finalCount4 = 123;

  // Tiempo total de referencia (en milisegundos)
  const totalDuration = 2000; // 2 segundos

  // Función para contar hasta el número final
  const countUp = (target, setCount) => {
    let start = 0;
    const increment = Math.ceil(target / (totalDuration / 100)); // Calcula cuánto incrementar por cada 100 ms
    const timer = setInterval(() => {
      if (start >= target) {
        clearInterval(timer);
      } else {
        start += increment;
        if (start > target) start = target; // Evita que pase el objetivo
        setCount(start);
      }
    }, 35); // Se ejecuta cada 35 ms
  };

  // Función para reiniciar el contador
  const resetCounter = (setCount, finalCount) => {
    setCount(0); // Reinicia el contador
    countUp(finalCount, setCount); // Comienza el conteo nuevamente
  };

  // Manejar el scroll para iniciar el conteo solo una vez
  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (inView) {
        countUp(finalCount1, setCount1);
        countUp(finalCount2, setCount2);
        countUp(finalCount3, setCount3);
        countUp(finalCount4, setCount4);
        window.removeEventListener("scroll", handleScroll); // Para que no se dispare varias veces
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref}>
      <div className="w-full h-[500px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-150px",
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
          <div
            style={{
              position: "absolute",
              top: "-70px",
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
              lineHeight: "32px",
              letterSpacing: "-1px",
              flexShrink: 0,
            }}
          >
            Esto logramos en nuestros 20 años de trayectoria
          </div>

          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "100px",
              justifyContent: "center",
            }}
          >
            {/* Bloque de imagen 1 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={imagenCirculo1}
                alt="Imagen 1"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount1, finalCount1)} // Reinicia el contador al hacer clic
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
                  paddingTop: "55px",
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
                  {count1}
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
                    paddingTop: "20px",
                    lineHeight: "1",
                  }}
                >
                  hectáreas administradas
                </div>
              </div>
            </div>

            {/* Bloque de imagen 2 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={imagenCirculo2}
                alt="Imagen 2"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount2, finalCount2)} // Reinicia el contador al hacer clic
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
                  paddingTop: "55px",
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
                  {count2}
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
                    paddingTop: "20px",
                    lineHeight: "1",
                  }}
                >
                  hectáreas forestadas
                </div>
              </div>
            </div>

            {/* Bloque de imagen 3 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={imagenCirculo3}
                alt="Imagen 3"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount3, finalCount3)} // Reinicia el contador al hacer clic
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
                  paddingTop: "55px",
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
                  {count3} M.
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
                    paddingTop: "20px",
                    lineHeight: "1",
                  }}
                >
                  USD en activos administrados
                </div>
              </div>
            </div>

            {/* Bloque de imagen 4 */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src={imagenCirculo4}
                alt="Imagen 4"
                style={{
                  width: "198px",
                  height: "198px",
                  borderRadius: "50%",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
                onClick={() => resetCounter(setCount4, finalCount4)} // Reinicia el contador al hacer clic
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
                  paddingTop: "55px",
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
                  {count4}
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
                    paddingTop: "20px",
                    lineHeight: "1",
                  }}
                >
                  empleados directos e indirectos
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
