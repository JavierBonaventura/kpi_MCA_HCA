import React, { useState } from "react";
import vino1 from "../images/vino1.png";
import vino2 from "../images/vino3.png";
import vino3 from "../images/vino1.png";

const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [vino1, vino2, vino3];

  const nextImage = () => {
    setActiveImage((activeImage + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((activeImage - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex absolute top-1/2 left-0 right-0 transform -translate-y-1/2 justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={images[(index - activeImage + images.length) % images.length]}
            alt={`Vino ${index + 1}`}
            className={`transform ${activeImage === index ? "scale-110" : "scale-100"}`}
            style={{
              transition: "transform 0.3s ease-out", // Adjust the duration as needed
            }}
          />
        ))}
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button onClick={prevImage}>Anterior</button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button onClick={nextImage}>Siguiente</button>
      </div>
    </div>
  );
};

export default Carousel;
