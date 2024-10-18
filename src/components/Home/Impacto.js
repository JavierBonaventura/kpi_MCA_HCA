import React from "react";
import imagenFondo from "../../images/imagenFondo.jpg"

import sustentabilidad from "../../images/sustentabilidad.png"; // Imagen de sustentabilidad
import seguridad from "../../images/seguridad.png"; // Imagen de seguridad
import comunidad from "../../images/comunidad.png"; // Imagen de comunidad
import medioAmbiente from "../../images/medioAmbiente.png"; // Imagen de fondo

function Impacto() {
  return (
    <div>
      <div className="w-full h-[852px] ">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: 'cover',  // Asegura que la imagen cubra todo el ancho
            backgroundPosition: 'center',  // Centra la imagen
            
          }}
        >
          <div
            className="w-[804px] h-[76px] flex-shrink-0 mt-[50px]"
            style={{
              color: "#443838",
              fontFamily: "Fira Sans",
              fontSize: "60px",
              fontWeight: "700",
              lineHeight: "50px",
              fontFeatureSettings: "'liga' off, 'clig' off",
              textAlign: "center",
            }}
          >
            Impacto Medio Ambiente
          </div>

          <div
            className="w-[794px] h-[70px] flex-shrink-0 mt-[15px]"
            style={{
              color: "#000",
              fontFamily: "Fira Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "28px",
              fontFeatureSettings: "'liga' off, 'clig' off",
              textAlign: "center",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            interdum erat nec. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam interdum erat nec.
          </div>

          {/* Imagen centrada */}
          <div
            className="w-[1075px] h-[349px] flex-shrink-0 mt-[30px]"
            style={{
              marginTop: "80px",
              borderRadius: "31px",
              backgroundImage: `url(${medioAmbiente})`,
              backgroundColor: "lightgray",
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          {/* Contenedor para las tarjetas */}
          <div className="flex items-center justify-center mt-[50px] space-x-6 ml-[-200px]">

            {/* Tarjeta 1 - Sustentabilidad */}
            <div className="w-[340px] h-[150px] bg-transparent  rounded-lg flex">
              <div className="flex flex-col items-end w-1/2 border-r">
                <div
                  className="w-[59.778px] h-[67px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${sustentabilidad})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "271.171px",
                    height: "30px",
                    color: "#443838",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "28px",
                  }}
                >
                  Sustentabilidad
                </div>
                <div
                  className="flex-shrink-0 mt-2"
                  style={{
                    width: "270.203px",
                    height: "112px",
                    color: "#443838",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  Proof-of-Work protocols are slow, expensive, unscalable, and environmentally harmful. And we have solved that problem.
                </div>
              </div>
            </div>

            {/* Tarjeta 2 - Seguridad */}
            <div className="w-[340px] h-[150px] bg-transparent  rounded-lg flex">
              <div className="flex flex-col items-end w-1/2 border-r">
                <div
                  className="w-[58px] h-[67px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${seguridad})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "271.171px",
                    height: "30px",
                    color: "#443838",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "32px",
                  }}
                >
                  Seguridad
                </div>
                <div
                  className="flex-shrink-0 mt-2"
                  style={{
                    width: "270.203px",
                    height: "112px",
                    color: "#443838",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  Blockchain applications are complex and difficult to understand for developers. But we will make it clear.
                </div>
              </div>
            </div>

            {/* Tarjeta 3 - Comunidad */}
            <div className="w-[340px] h-[150px] bg-transparent  rounded-lg flex">
              <div className="flex flex-col items-end w-1/2 border-r">
                <div
                  className="w-[58px] h-[68px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${comunidad})`,
                  }}
                ></div>
              </div>
              <div className="flex flex-col w-1/2 p-2">
                <div
                  className="flex-shrink-0"
                  style={{
                    width: "271.171px",
                    height: "30px",
                    color: "#443838",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "32px",
                  }}
                >
                  Comunidad
                </div>
                <div
                  className="flex-shrink-0 mt-2"
                  style={{
                    width: "270.203px",
                    height: "112px",
                    color: "#443838",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  Blockchain economies are slices and cannot transfer assets between each other. Created agreement now allows it.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impacto;
