import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import imagenCurvaContacto from "../../images/imagenCurvaContacto.png";

function ContactoForm() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (180 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[1420px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex flex-col h-full px-4"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`,
            // backgroundPosition: "0px -300.596px",
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Texto "Servicios" con margen superior de 120px */}
          <div
            className="w-[707px] h-[72px] flex-shrink-0 mt-[120px]"
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
            Quedemos en contacto
          </div>

          {/* Contenedor principal con flex para organizar campos */}
          <div
            className="flex mt-8"
            style={{
              marginLeft: `${leftPercentageLogo}%`,
              justifyContent: "flex-start", // Para crear espacio entre las dos secciones
            }}
          >
            {/* Sección de campos input */}
            <div>
              {/* Sección de formulario */}
              <div
                className="flex flex-wrap"
                style={{
                  gap: "39px",
                }}
              >
                {/* Input NOMBRE */}
                <div>
                  <label
                    htmlFor="nombre"
                    style={{
                      display: "block",
                      width: "336.444px",
                      height: "16px",
                      color: "#000",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontWeight: "500",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    style={{
                      width: "336.444px",
                      height: "50px",
                      borderRadius: "4px",
                      border: "2px solid #000",
                      background: "rgba(218, 218, 218, 0.00)",
                      padding: "10px",
                    }}
                  />
                </div>

                {/* Input EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      width: "336.444px",
                      height: "16px",
                      color: "#000",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontWeight: "500",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    style={{
                      width: "336.444px",
                      height: "50px",
                      borderRadius: "4px",
                      border: "2px solid #000",
                      background: "rgba(218, 218, 218, 0.00)",
                      padding: "10px",
                    }}
                  />
                </div>
              </div>

              {/* Sección de Servicio y Teléfono */}
              <div
                className="flex flex-wrap mt-8"
                style={{
                  gap: "39px",
                }}
              >
                {/* Input SERVICIO */}
                <div>
                  <label
                    htmlFor="servicio"
                    style={{
                      display: "block",
                      width: "336.444px",
                      height: "16px",
                      color: "#000",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontWeight: "500",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Servicio
                  </label>
                  <input
                    type="text"
                    id="servicio"
                    style={{
                      width: "336.444px",
                      height: "50px",
                      borderRadius: "4px",
                      border: "2px solid #000",
                      background: "rgba(218, 218, 218, 0.00)",
                      padding: "10px",
                    }}
                  />
                </div>

                {/* Input TELÉFONO */}
                <div>
                  <label
                    htmlFor="telefono"
                    style={{
                      display: "block",
                      width: "336.444px",
                      height: "16px",
                      color: "#000",
                      fontFamily: "Fira Sans",
                      fontSize: "14px",
                      fontWeight: "500",
                      letterSpacing: "4px",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    style={{
                      width: "336.444px",
                      height: "50px",
                      borderRadius: "4px",
                      border: "2px solid #000",
                      background: "rgba(218, 218, 218, 0.00)",
                      padding: "10px",
                    }}
                  />
                </div>
              </div>

              {/* Input MENSAJE */}
              <div className="mt-8">
                <label
                  htmlFor="mensaje"
                  style={{
                    display: "block",
                    width: "114.338px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  style={{
                    width: "711px",
                    height: "136px",
                    borderRadius: "4px",
                    border: "2px solid #000",
                    background: "rgba(218, 218, 218, 0.00)",
                    padding: "10px",
                  }}
                />
              </div>
              {/* Contenedor del botón "Enviar" */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    width: "227.846px",
                    height: "50px",
                    flexShrink: 0,
                    borderRadius: "5px",
                    background: "#000",
                    color: "#FFF",
                    textAlign: "center",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "500",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  Enviar
                </button>
              </div>
            </div>

            {/* Sección de campos textos */}
            <div style={{ marginLeft: "85px", marginTop: "0px" }}>
              {/* Texto 1 - Dirección */}
              <div>
                <p
                  style={{
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "900",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Dirección
                </p>
                <p
                  style={{
                    width: "216px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  Chubut 991, San Isidro, Buenos Aires
                </p>
              </div>

              {/* Texto 2 - Teléfono */}
              <div style={{ marginTop: "16px" }}>
                <p
                  style={{
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "900",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Teléfono
                </p>
                <p
                  style={{
                    width: "216px",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  +54 11 4723 6967
                </p>
              </div>

              {/* Texto 3 - Email */}
              <div style={{ marginTop: "16px" }}>
                <p
                  style={{
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "14px",
                    fontWeight: "900",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "8px",
                  }}
                >
                  Email
                </p>
                <p
                  style={{
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  Escribinos a:
                </p>
                <p
                  style={{
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: "400",
                    lineHeight: "28px",
                  }}
                >
                  contacto@grupogarabi.com.ar
                </p>
              </div>
            </div>
          </div>
          {/* Imagen que se superpone al contenedor superior */}
          <div className=" w-screen">
            <img
              src={imagenCurvaContacto} // Asegúrate de que la ruta sea correcta
              alt="Curva de contacto"
              style={{
                position: "relative",
                maxHeight: "650px",
                top: "-140px", // Ajusta este valor según sea necesario para la superposición
                width: "100vw", // Ajusta el ancho como necesites
                height: "auto", // Mantiene la proporción de la imagen
                display: "block",
                marginLeft: "-20px", // Cambiado a 0
                marginRight: "0", // Cambiado a 0
              }}
            />
          </div>

          {/* Contenedor principal */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-70px",
            }}
          >
            {/* Primer Mapa */}
            <div style={{ textAlign: "center", marginRight: "20px" }}>
              <img
                src={require("../../images/mapa.png")}
                alt="Mapa"
                style={{
                  position: "relative",
                  top: "-260px", // Ajusta este valor según sea necesario para la superposición
                  width: "519px",
                  height: "262px",
                  flexShrink: 0,
                }}
              />
              <div className="mt-[-220px]">
                <div
                  style={{
                    width: "144px",
                    margin: "0 auto",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    marginTop: "5px",
                  }}
                >
                  Grupo Garabí
                </div>

                <div
                  style={{
                    width: "216.933px",
                    margin: "0 auto",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginTop: "5px",
                  }}
                >
                  Chubut 991
                </div>

                <div
                  style={{
                    width: "237.926px",
                    margin: "0 auto",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginTop: "5px",
                  }}
                >
                  San Isidro, Buenos Aires
                </div>
              </div>
            </div>

            {/* Segundo Mapa */}
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../../images/mapa.png")}
                alt="Mapa"
                style={{
                  position: "relative",
                  top: "-260px", // Ajusta este valor según sea necesario para la superposición
                  width: "519px",
                  height: "262px",
                  flexShrink: 0,
                }}
              />
              <div className="mt-[-220px]">
                <div
                  style={{
                    width: "144px",
                    margin: "0 auto",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "22px",
                    fontWeight: 600,
                    lineHeight: "32px",
                    marginTop: "5px",
                  }}
                >
                  Grupo Garabí
                </div>

                <div
                  style={{
                    width: "216.933px",
                    margin: "0 auto",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginTop: "5px",
                  }}
                >
                  Chubut 991
                </div>

                <div
                  style={{
                    width: "237.926px",
                    margin: "0 auto",
                    color: "#000",
                    fontFamily: "Fira Sans",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "28px",
                    marginTop: "5px",
                  }}
                >
                  San Isidro, Buenos Aires
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactoForm;
