import React from "react";
import imagenFondo from "../../images/imagenFondo.jpg";

import campoDesde from "../../images/campoDesde.png";

function Desde1976() {

  return (
    <div>
      <div className="w-full h-[58vw]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex h-full"
          style={{
            backgroundImage: `url(${imagenFondo})`,
            backgroundSize: "cover", // Asegura que la imagen cubra todo el ancho
            backgroundPosition: "center", // Centra la imagen
          }}
        >
          {/* Nuevo div contenedor centrado */}
          <div
            style={{
           
              margin: "0 auto", // Centrar horizontalmente
              display: "flex",
              alignItems: "flex-start", // Alinear elementos al inicio
              position: "relative", // Para el posicionamiento de los elementos dentro
              width: "100%", // Para asegurar que ocupe el espacio disponible
              marginTop: "30px",
            }}
          >
            {/* Imagen campoDesde a la izquierda */}
            <img
              src={campoDesde}
              alt="Campo Desde"
              style={{
                width: "50vw", // Imagen ocupa la mitad del ancho de la pantalla
                flexShrink: 0,
              }}
            />

            {/* Recuadro a la derecha, rotado 90 grados */}
            <div
              style={{
                position: "absolute",
                width: "30vw",
                height: "44vw",
                background:
                  "linear-gradient(90deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",

                right: "calc(50% - 0px)",
              }}
            />

            {/* Recuadro pegado a la derecha, rotado -90 grados */}
            <div
              className="flex-shrink-0"
              style={{
                position: "absolute",
                width: "30vw",
                height: "44vw",
                background:
                  "linear-gradient(-90deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",

                left: "calc(50% - 0px)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "4vw",
                  left: "23vw", // Para posicionar el texto a 20px debajo de la imagen
                  width: "354px",
                  height: "76px",
                  flexShrink: 0,
                  color: "#000",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: '"Fira Sans", sans-serif',
                  fontSize: "60px",
                  fontStyle: "normal",
                  fontWeight: 900,
                  lineHeight: "60px", // 100%
                  letterSpacing: "-1px",
                }}
              >
                Desde 1976
              </div>
              {/* Nuevo recuadro debajo */}
              <div
                style={{
                  width: "510px",
                  height: "485px",
                  flexShrink: 0,
                  background: "rgba(229, 235, 225, 0.1)", // Color de fondo (opcional)
                  marginTop: "20px", // Espacio entre los recuadros
                  padding: "10px", // Espacio interno
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    color: "#000",
                    textAlign: "right",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: '"TT Norms Pro", sans-serif',
                    fontSize: "21px",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "32px",
                    letterSpacing: "-1px",
                    marginBottom: "10px", // Espacio debajo de la primera palabra
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "510px",
                    top: "10vw",
                    left: "12vw", // Para posicionar el texto a 20px debajo de la imagen
                    color: "#000",
                    textAlign: "right",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: '"TT Norms Pro", sans-serif',
                    fontSize: "21px",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "32px", // 152.381%
                    letterSpacing: "-1px",
                  }}
                >
                  Grupo Garabí comienza su actividad en la provincia de
                  Corrientes con la administración de dos establecimientos
                  forestales ubicados en el centro norte de la provincia, en las
                  localidades de Loreto y Santa Rosa. <br></br>
                  <br></br>
                  En el año 1983 la empresa incorpora a su administración dos
                  nuevas sociedades en la localidad de Gobernador Virasoro. Cabe
                  destacar que tres de estas empresas continúan al día de hoy
                  bajo la administración de Grupo Garabí. <br></br>
                  <br></br>
                  En la actualidad Grupo Garabi tiene bajo administración más de
                  18.000 hectáreas forestadas, entre pinos y eucaliptos. En los
                  últimos años, Grupo Garabí incorporó nuevos proyectos:
                  Ganadería, Agricultura, Yerba Mate, Arroz,  cultivo de
                  arándanos y Olivos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desde1976;
