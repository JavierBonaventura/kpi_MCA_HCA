import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import arbolCentral from "../../images/arbolCentral.png";
import imagenFondo from "../../images/imagenFondo.jpg"

function SobreNosotrosArbol() {
  return (
    <div>
      <div className="w-full h-[52vw] relative "
    >
        {/* Fondo principal */}
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>

        {/* Contenedor con imagen de fondo y texto */}
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'cover',  
            backgroundPosition: 'center',              
          }}
        >
          <div
            className="flex flex-col items-center justify-center"
            style={{
              marginTop: "-26px",
              
            }}
          >
            {/* Contenedor del árbol */}
            <div className="relative flex flex-col items-center">
              <img
              //  style={{
              //   maxHeight: "966px",
              // }}
                src={arbolCentral}
                alt="Árbol Central"
                className="w-[55vw] h-auto"
              />
              {/* Línea a la izquierda */}
              <div
                className="absolute left-[-7.4vw] w-[16.5vw] h-[0.4vw] bg-[#00561A]  transform -translate-y-1/2 mt-4"
                style={{
                  top: "63.8%",
                
                }}
              ></div>

              {/* Texto "Vision" */}
              <h1
                className="absolute left-[-12vw]  transform -translate-y-1/2 translate-x-1/2 z-20 pb-2"
                style={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans, sans-serif", // Asegúrate de que Fira Sans esté disponible
                  fontSize: "3vw",
                  fontStyle: "normal",
                  fontWeight: 500,
                  top: "63%",
                }}
              >
                Vision
              </h1>

              {/* Texto "Trayectoria" */}
              <h1
                className="absolute right-[-6vw] transform -translate-y-1/2 translate-x-1/2 z-20 pb-2"
                style={{
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Fira Sans, sans-serif", // Asegúrate de que Fira Sans esté disponible
                  fontSize: "3vw",
                  fontStyle: "normal",
                  fontWeight: 500,
                  top: "15%", // Ajusta esta posición para mover el texto hacia arriba o hacia abajo
                }}
              >
                Trayectoria
              </h1>

              {/* Texto de descripción bajo "Visión" */}
              <p
                className="absolute left-[-16vw]  transform -translate-y-1/2 translate-x-1/2 z-20 pb-2"
                style={{
                  color: "#000",
                  fontSize: "1.25vw", // tamaño de la fuente proporcional al viewport
                  lineHeight: "2vw", // el line-height también es responsive
                  width: "17.5vw", // el ancho del párrafo ajustado al viewport
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  top: "80%",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                interdum erat nec commodo imperdiet. Duis libero nisi, mollis
                quis urna ornare, feugiat egestas nunc.
              </p>

              {/* Texto de descripción bajo "Trayectoria" (justificado a la derecha) */}
              <p
                className="absolute right-[-5vw]  transform -translate-y-1/2 translate-x-1/2 z-20 pb-2 text-right"
                style={{
                  color: "#000",
                  fontSize: "1.25vw", // tamaño de la fuente proporcional al viewport
                  lineHeight: "2vw", // el line-height también es responsive
                  width: "18vw", // el ancho del párrafo ajustado al viewport
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  top: "32%", // Ajusta la posición para que quede alineado bajo "Trayectoria"
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                interdum erat nec commodo imperdiet. Duis libero nisi, mollis
                quis urna ornare, feugiat egestas nunc.
              </p>

              {/* Línea a la derecha */}
              <div
                className="absolute right-[-13.5vw] w-[27vw] h-[0.4vw] bg-[#00942C]  transform -translate-y-1/2 mt-4"
                style={{
                  top: "16%",
                }}
              ></div>
                         
            {/* Linea debajo del árbol */}



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNosotrosArbol;
