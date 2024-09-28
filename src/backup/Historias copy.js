import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import galleryPersona1 from "../../images/galleryPersona1.png";

function Historias() {
  return (
    <div>
      <div className="w-full h-[350px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`,
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Contenedor para las tarjetas y botones de navegación */}
          <div className="flex items-center justify-center mt-[50px] space-x-[30px] gap-[50px]">
            {/* Botón de navegación izquierda */}
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white">
              &lt;
            </button>

            {/* Tarjeta */}
            <div className="flex flex-row items-center justify-between  p-6 rounded-lg ">
              {/* Contenedor de la izquierda con la imagen */}
              <div className="flex-shrink-0 w-[185.39px] h-[185.39px] rounded-full overflow-hidden bg-[#D9D9D9]">
                <img
                  src={galleryPersona1}
                  alt="Persona 1"
                  className="object-cover w-full h-full"
                  style={{
                    width: "185.39px",
                    height: "185.39px",
                    flexShrink: 0,
                  }}
                />
              </div>

              {/* Contenedor de la derecha con los textos */}
              <div className="flex flex-col justify-center ml-6">
                {/* Componente de arriba */}
                <div
                  className="mb-4"
                  style={{
                    width: "681.849px",
                    height: "78.65px",
                    flexShrink: 0,
                    color: "#633F3F",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: '"Fira Sans"',
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "28px", // 155.556%
                  }}
                >
                  <p className="">
                    Testimonials take the spotlight away from the seller, and
                    shine it on the customer. Your customer was once in the
                    shopper’s shoes, debating what product to choose, comparing
                    prices, reading marketing message after marketing message.
                  </p>
                </div>

                {/* Componente del medio */}
                <div
                  className="mb-2"
                  style={{
                    width: "208.357px",
                    height: "29.962px",
                    flexShrink: 0,
                    color: "#633F3F",
                    fontFamily: "Fira Sans",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "32px", // 145.455%
                  }}
                >
                  <p>Molly Chambers</p>
                </div>

                {/* Componente de abajo */}
                <div
                  style={{
                    width: "354.34px",
                    height: "15.917px",
                    flexShrink: 0,
                    color: "#633F3F",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  <p>Owner of CF INVESTMENTS</p>
                </div>
              </div>
            </div>
            

            {/* Botón de navegación derecha */}
            <button className="w-[40px] h-[40px] flex items-center justify-center rounded-full bg-[#00942C] text-white">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Historias;
