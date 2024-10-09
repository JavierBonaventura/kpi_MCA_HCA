import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import recuadroUno from "../../images/recuadroUno.png";
import recuadroDos from "../../images/recuadroDos.png";

function Header_Home() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[852px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`, // Capa verde más sutil
            backgroundPosition: "0px -300.596px",
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay", // Mezcla la imagen con la capa verde
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Texto "Servicios" con margen superior de 120px */}
          <div
            className="w-[624px] h-[76px] flex-shrink-0 mt-[120px]"
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
            Servicios
          </div>

          {/* Texto debajo de "Servicios" con 15px de espacio */}
          <div
            className="w-[711px] h-[70px] flex-shrink-0 mt-[15px]"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "28px",
              fontFeatureSettings: "'liga' off, 'clig' off",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            interdum erat nec. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam interdum erat nec.
          </div>

          {/* Contenedor de los dos rectángulos centrados horizontalmente */}
          <div
            className="flex justify-center mt-[50px] space-x-[30px]" // Flexbox para alinear los rectángulos uno al lado del otro
          >
            {/* Primer rectángulo */}
            <div
              className="w-[527px] h-[453.484px] flex-shrink-0"
              style={{
                borderRadius: "21.323px",
                background: "#DAD8CB",
                boxShadow:
                  "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
                position: "relative", // Para posicionar la imagen dentro del rectángulo
              }}
            >
              {/* Imagen en la parte superior del rectángulo */}
              <img
                src={recuadroUno}
                alt="Recuadro uno"
                className="absolute top-[-30px] left-1/2 transform -translate-x-1/2"
              />

              {/* Texto debajo de la imagen */}
              <div
                style={{
                  color: "#464646",
                  textAlign: "center",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "400", // Peso para "Asesoramiento"
                  lineHeight: "21.323px",
                  letterSpacing: "-1.333px",
                  position: "absolute",
                  top: "220px", // Para posicionar el texto a 20px debajo de la imagen
                  width: "100%",
                }}
              >
                <span style={{ fontWeight: "400" }}>Asesoramiento </span>
                <span
                  style={{
                    color: "#464646",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "600", // Peso para "Integral"
                    lineHeight: "21.323px",
                    letterSpacing: "-1.333px",
                  }}
                >
                  Integral
                </span>
              </div>

              {/* Texto adicional debajo de "Asesoramiento Integral" */}
              <div
                style={{
                  color: "#464646",
                  textAlign: "center",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "23px", // 115% de la altura de línea
                  letterSpacing: "-1.333px",
                  position: "absolute",
                  top: "270px", // Para posicionar el texto 40px debajo de "Asesoramiento Integral"
                  width: "452.381px",
                  height: "62.274px",
                  left: "50%",
                  transform: "translateX(-50%)", // Centrado horizontalmente
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl
                facilisi. Pellentesque pharetra id placerat.
              </div>

              {/* Botón debajo del texto */}
              <button
                className="bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform translate-x-[-50%]"
                style={{
                  width: "217px",
                  height: "50px",
                  borderRadius: "5px",
                  position: "absolute",
                  top: "370px",
                  left: "50%",
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
                    fontStyle: "normal",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  VER MAS
                </span>
              </button>
            </div>

            {/* Segundo rectángulo */}
            <div
              className="w-[527px] h-[453.484px] flex-shrink-0"
              style={{
                borderRadius: "21.323px",
                background: "#DAD8CB",
                boxShadow:
                  "13.327px 13.327px 23.322px 6.663px rgba(2, 2, 2, 0.30)",
                position: "relative", // Para posicionar la imagen dentro del rectángulo
              }}
            >
              {/* Imagen en la parte superior del segundo rectángulo */}
              <img
                src={recuadroDos}
                alt="Recuadro dos"
                className="absolute top-[-30px] left-1/2 transform -translate-x-1/2"
              />
              {/* Texto debajo de la imagen */}
              <div
                style={{
                  color: "#464646",
                  textAlign: "center",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "30px",
                  fontStyle: "normal",
                  fontWeight: "400", // Peso para "Asesoramiento"
                  lineHeight: "21.323px",
                  letterSpacing: "-1.333px",
                  position: "absolute",
                  top: "220px", // Para posicionar el texto a 20px debajo de la imagen
                  width: "100%",
                }}
              >
                <span style={{ fontWeight: "400" }}>Asesoramiento </span>
                <span
                  style={{
                    color: "#464646",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "30px",
                    fontStyle: "normal",
                    fontWeight: "600", // Peso para "Integral"
                    lineHeight: "21.323px",
                    letterSpacing: "-1.333px",
                  }}
                >
                  Productivo
                </span>
              </div>

              {/* Texto adicional debajo de "Asesoramiento Integral" */}
              <div
                style={{
                  color: "#464646",
                  textAlign: "center",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "23px", // 115% de la altura de línea
                  letterSpacing: "-1.333px",
                  position: "absolute",
                  top: "270px", // Para posicionar el texto 40px debajo de "Asesoramiento Integral"
                  width: "452.381px",
                  height: "62.274px",
                  left: "50%",
                  transform: "translateX(-50%)", // Centrado horizontalmente
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus urna at sit
                praesent ornare eu. Vehicula feugiat vel porttitor pretium nisl
                facilisi. Pellentesque pharetra id placerat.
              </div>

              {/* Botón debajo del texto */}
              <button
                className="bg-[#00942C] cursor-pointer transition-transform duration-500 ease-out hover:bg-[#007A24] hover:-translate-y-0.5 transform translate-x-[-50%]"
                style={{
                  width: "217px",
                  height: "50px",
                  borderRadius: "5px",
                  position: "absolute",
                  top: "370px",
                  left: "50%",
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
                    fontStyle: "normal",
                    fontWeight: "400",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  VER MAS
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_Home;
