import React, { useState, useEffect, useRef } from "react";

import vino1 from "../images/vino1.png";
import vino2 from "../images/vino2.png";
import vino3 from "../images/vino3.png";
import flechaIzquierda from "../images/flechaIzquierda.png";
import flechaDerecha from "../images/flechaDerecha.png";

function NuestrosVinos() {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [mainImage, setMainImage] = useState(2);

  const [distancia, setDistancia] = useState(0);
  const [distancia2, setDistancia2] = useState(0);

  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);

  let distanciaEntre1y2 = 0;
  let distanciaEntre2y3 = 0;

  useEffect(() => {
    const div1Rect = div1Ref.current.getBoundingClientRect();
    const div2Rect = div2Ref.current.getBoundingClientRect();
    const div3Rect = div3Ref.current.getBoundingClientRect();

    distanciaEntre1y2 =
      div2Rect.left +
      div2Rect.width / 2 -
      (div1Rect.right - div1Rect.width / 2);
    distanciaEntre2y3 =
      div3Rect.left +
      div3Rect.width / 2 -
      (div2Rect.right - div2Rect.width / 2);

    setDistancia(distanciaEntre1y2);
    setDistancia2(distanciaEntre2y3);
  }, []);

  const offsetChange = distancia2 - 5;

  const moveLeft = () => {
    if (mainImage == 2) {
      setOffset3(offset3 - offsetChange );
      setOffset2(offset2 - offsetChange);
      setOffset1(offset1 + offsetChange * 2);

    }
    if (mainImage == 1) {
      setOffset3(offset3 + offsetChange *2 );
      setOffset2(offset2 - offsetChange );
      setOffset1(offset1 - offsetChange);


    }
    if (mainImage == 3) {
      setOffset3(offset3 - offsetChange );
      setOffset1(offset1 - offsetChange);
      setOffset2(offset2 + offsetChange *2);


    }
    

    switch (mainImage) {
      case 2:
          setMainImage(3);
          break;
      case 1:
          setMainImage(2);
          break;
      case 3:
          setMainImage(1);
          break;
      default:
          // Puedes manejar el caso en que mainImage no sea 1, 2 o 3, si es necesario.
          break;
  }

  };

  const moveRight = () => {
    
    if (mainImage == 2) {
      setOffset3(offset3 - offsetChange * 2);
      setOffset2(offset2 + offsetChange);
      setOffset1(offset1 + offsetChange);

    }
    if (mainImage == 1) {
      setOffset3(offset3 + offsetChange );
      setOffset2(offset2 - offsetChange * 2);
      setOffset1(offset1 + offsetChange);


    }
    if (mainImage == 3) {
      setOffset3(offset3 + offsetChange );
      setOffset1(offset1 - offsetChange * 2);
      setOffset2(offset2 + offsetChange);


    }
    

    switch (mainImage) {
      case 2:
          setMainImage(1);
          break;
      case 1:
          setMainImage(3);
          break;
      case 3:
          setMainImage(2);
          break;
      default:
          // Puedes manejar el caso en que mainImage no sea 1, 2 o 3, si es necesario.
          break;
  }
  };

  const imageStyle1 = {
    transform: `translateX(${offset1}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out",
  };

  const imageStyle2 = {
    transform: `translateX(${offset2}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out",
  };

  const imageStyle3 = {
    transform: `translateX(${offset3}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out",
  };

  return (
    <div className="w-full h-[979px] bg-[#555555] bg-cover bg-center relative overflow-hidden">
      <p className="  texto-vinos-botellas">MAIN IMAGE {mainImage}</p>
      <p className="  texto-vinos-botellas">OFFSET 1 {offset1}</p>
      <p className="  texto-vinos-botellas">OFFSET 2 {offset2}</p>
      <p className="  texto-vinos-botellas">OFFSET 3 {offset3}</p>

      <div className=" flex justify-between">
        <div className=" relative left-[100px]">
          <div onClick={moveLeft}>
            <img
              src={flechaIzquierda}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>
        <div className="flex justify-between w-6/12 h-[700px]  " id="caja">
          
          {/* imagen 1 */}
          <div
            className="  z-10 flex flex-col items-center mt-48 "
            style={imageStyle1}
            id="div1"
            ref={div1Ref}
          >1
            <img
              className="h-1/3"
              src={vino1}
              alt="Vino 1"
              style={{
                height: mainImage === 1 ? "489px" : "417px",
                marginTop: mainImage === 1 ? "-40px" : "0",
                transition:
                  "height 0.5s ease-in-out, margin-top 0.5s ease-in-out",
              }}
            />
          </div>
          {/* imagen 2 */}

          <div
            className=" z-10 flex flex-col items-center mt-48 "
            style={imageStyle2}
            id="div2"
            ref={div2Ref}
          >2
            <img
              className="h-1/3"
              src={vino2}
              alt="Vino 2"
              style={{
                height: mainImage === 2 ? "489px" : "417px",
                marginTop: mainImage === 2 ? "-40px" : "0",
                transition:
                  "height 0.5s ease-in-out, margin-top 0.5s ease-in-out",

              }}
            />
          </div>

          {/* imagen 3 */}

          <div
            className="  z-10 flex flex-col items-center mt-48 "
            style={imageStyle3}
            id="div3"
            ref={div3Ref}
          >3
            <img
              className="h-1/3"
              src={vino3}
              alt="Vino 3"
              style={{
                height: mainImage === 3 ? "489px" : "417px",
                marginTop: mainImage === 3 ? "-40px" : "0",
                transition:
                  "height 0.5s ease-in-out, margin-top 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
        <div className=" relative right-[156px]">
          <div onClick={moveRight}>
            <img
              src={flechaDerecha}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NuestrosVinos;
