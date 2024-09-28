import React from "react";
import fondoServicios from "../../images/fondoServicios.png";
import campoDesde from "../../images/campoDesde.png";

function Desde1976() {
  // Cálculo del margen izquierdo en porcentaje
  const leftPercentageLogo = (184 / 1440) * 100;

  return (
    <div>
      <div className="w-full h-[852px]">
        <div className="inset-0 bg-[#F7FFF1] bg-opacity-100"></div>
        <div
          className="relative z-10 flex h-full"
          style={{
            backgroundImage: `url(${fondoServicios}), linear-gradient(rgba(0, 148, 44, 0.08), rgba(0, 148, 44, 0.08))`, // Capa verde más sutil
            backgroundPosition: "0px -300.596px",
            backgroundSize: "100% 143.058%",
            backgroundBlendMode: "overlay", // Mezcla la imagen con la capa verde
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Nuevo div contenedor centrado */}
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto", // Centrar horizontalmente
              display: "flex",
              alignItems: "flex-start", // Alinear elementos al inicio
              position: "relative", // Para el posicionamiento de los elementos dentro
              width: "100%", // Para asegurar que ocupe el espacio disponible
            }}
          >
            {/* Imagen campoDesde a la izquierda */}
            <img
              src={campoDesde}
              alt="Campo Desde"
              style={{
                width: "708px",
                height: "620px",
                flexShrink: 0,
              }}
            />

            {/* Recuadro a la derecha, rotado 90 grados */}
            <div
              className="flex-shrink-0"
              style={{
                position: "absolute",
                top: "107px", // Para posicionar el texto a 20px debajo de la imagen
                width: "620px",
                height: "407px",
                transform: "rotate(-90deg)",
                background:
                  "linear-gradient(180deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",
                marginLeft: "199px",
              }}
            />

            {/* Recuadro pegado a la derecha, rotado -90 grados */}
            <div
              className="flex-shrink-0"
              style={{
                position: "absolute",
                top: "26px", // Para posicionar el texto a 20px debajo de la imagen
                width: "620px",
                height: "568px",
                transform: "rotate(90deg)",
                background:
                  "linear-gradient(180deg, rgba(229, 235, 225, 0.00) 0%, #E5EBE1 100%)",
                marginLeft: "683px",
                display: "flex", // Para centrar el texto
                justifyContent: "center", // Centrado horizontal
                alignItems: "center", // Centrado vertical
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "118px",
                  left: "-115px", // Para posicionar el texto a 20px debajo de la imagen
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
                  transform: "rotate(-90deg)", // Para revertir la rotación del texto
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
                    transform: "rotate(-90deg)", // Para revertir la rotación del texto
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    width: "510px",
                    top: "46px",
                    left: "113px", // Para posicionar el texto a 20px debajo de la imagen
                    color: "#000",
                    textAlign: "right",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: '"TT Norms Pro", sans-serif',
                    fontSize: "21px",
                    fontStyle: "normal",
                    fontWeight: 450,
                    lineHeight: "32px", // 152.381%
                    letterSpacing: "-1px",
                    transform: "rotate(-90deg)", // Para revertir la rotación del texto
                  }}
                >
                  Grupo Garabí comienza su actividad en la provincia de Corrientes
                  con la administración de dos establecimientos forestales
                  ubicados en el centro norte de la provincia, en las localidades
                  de Loreto y Santa Rosa. <br></br>
                  <br></br>
                  En el año 1983 la empresa incorpora a su
                  administración dos nuevas sociedades en la localidad de
                  Gobernador Virasoro. Cabe destacar que tres de estas empresas
                  continúan al día de hoy bajo la administración de Grupo Garabí.  <br></br>
                  <br></br>
                  En la actualidad Grupo Garabi tiene bajo administración más de
                  18.000 hectáreas forestadas, entre pinos y eucaliptos. En los
                  últimos años, Grupo Garabí incorporó nuevos proyectos:
                  Ganadería, Agricultura, Yerba Mate, Arroz,  cultivo de arándanos
                  y Olivos.
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
