// Background.js
import React from "react";

// Estilos en línea para el componente Background
const styles = {
  backgroundContainer: {
    position: "relative", // Para que los hijos se posicionen sobre el fondo
    width: "100vw",
    height: "100vh",
    overflow: "auto", // Permite scroll si es necesario
    backgroundImage: `url(${require("../images/imagenFondo.jpg")})`, // Ruta a la imagen
    backgroundSize: "cover", // Asegura que la imagen cubra todo el fondo
    backgroundPosition: "center", // Centra la imagen
    backgroundAttachment: "fixed", // La imagen no se mueve al hacer scroll
    backgroundRepeat: "no-repeat", // Evita que la imagen se repita
  },
  content: {
    position: "relative", // Asegura que los hijos estén por encima del fondo
    zIndex: 1,
  },
};

const Background = ({ children }) => {
  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

export default Background;
