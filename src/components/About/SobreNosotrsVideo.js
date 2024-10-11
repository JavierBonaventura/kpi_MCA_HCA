import React from "react";
import videoSobreNosotros from "../../images/videoSobreNosotros.png"; // Si lo necesitas más adelante

function SobreNosotrosVideo() {
  return (
    <div className="flex justify-center items-center h-[842px] w-full">
      <img 
        src={videoSobreNosotros} 
        alt="Sobre Nosotros" 
        className="object-cover w-full h-full" 
      />
    </div>
  );
}

export default SobreNosotrosVideo;
