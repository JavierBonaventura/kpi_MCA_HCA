import React from "react";
import fondoServicios from "../images/fondoServicios.png";
import recuadroUno from "../images/recuadroUno.png"; 
import recuadroDos from "../images/recuadroDos.png"; 


function Header_Home() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[852px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{ backgroundImage: `url(${fondoServicios})` }}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum erat nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum erat nec.
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header_Home;
