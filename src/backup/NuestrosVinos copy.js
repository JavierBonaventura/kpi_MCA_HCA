import React, { useState } from "react";
import fondoVinos from "../images/fondoVinos.png";
import vino1 from "../images/vino1.png";
import vino2 from "../images/vino2.png";
import vino3 from "../images/vino3.png";
import flechaIzquierda from "../images/flechaIzquierda.png";
import flechaDerecha from "../images/flechaDerecha.png";

function NuestrosVinos() {
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [offset4, setOffset4] = useState(0);
  const [offset5, setOffset5] = useState(0);
  const [offset6, setOffset6] = useState(0);
  const [offset7, setOffset7] = useState(0);
  const [mainImage, setMainImage] = useState(2);

  const moveLeft = () => {
    if (mainImage < 3) {
      setOffset1(offset1 - 425);
      setOffset2(offset2 - 425);
      setOffset3(offset3 - 425);
      setOffset4(offset4 - 425);
      setOffset5(offset5 - 425);
      setOffset6(offset6 - 425);
      setOffset7(offset7 - 425);
  
      setMainImage(mainImage + 1);
    }
  };
  
  const moveRight = () => {
    if (mainImage > 1) {
      setOffset1(offset1 + 425);
      setOffset2(offset2 + 425);
      setOffset3(offset3 + 425);
      setOffset4(offset4 + 425);
      setOffset5(offset5 + 425);
      setOffset6(offset6 + 425);
      setOffset7(offset7 + 425);  
      setMainImage(mainImage - 1);
    }
  };
  

  const imageStyle1 = {
    transform: `translateX(${offset1}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out", 
    // height: mainImage === 1 ? "250px" : "200px",
  };
  

  const imageStyle2 = {
    transform: `translateX(${offset1}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out", 
    // height: mainImage === 2 ? "250px" : "200px",
  };

  const imageStyle3 = {
    transform: `translateX(${offset3}px)`,
    transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out", 
    // height: mainImage === 3 ? "250px" : "200px",
  };

  // const imageStyle4 = {
  //   transform: `translateX(${offset4}px)`,
  //   transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out", 
  //   height: mainImage === 0 ? "250px" : "200px",
  // };

  // const imageStyle5 = {
  //   transform: `translateX(${offset5}px)`,
  //   transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out", 
  //   height: mainImage === 4 ? "250px" : "200px",
  // };
  // const imageStyle6 = {
  //   transform: `translateX(${offset6}px)`,
  //   transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out", 
  //   height: mainImage === -1 ? "250px" : "200px",
  // };
  // const imageStyle7 = {
  //   transform: `translateX(${offset7}px)`,
  //   transition: "transform 0.5s ease-in-out, height 0.5s ease-in-out", 
  //   height: mainImage === 5 ? "250px" : "200px",
  // };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.63)",
  };

  return (
    <div
      className="w-full h-[879px]  bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${fondoVinos})` }}
    >
      <div className="text-center relative z-10 top-[78px] mx-32">
        <div className="w-[682px] h-[50px]">
          <h1 className="mb-4 texto-vinos text-black font-black absolute ">
            VINOS
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="relative left-[100px]">
          <div className={`cursor-pointer z-10 h-14 w-14 rounded-full flex items-center justify-center absolute top-1/3 ${mainImage === 3 ? 'bg-[#555555]' : 'bg-[#460377]'} transition-background duration-500`} onClick={moveLeft}>
            <img
              src={flechaIzquierda}
              alt="Flecha Izquierda"
              className="h-6 w-3.5"
              
            />
          </div>
        </div>
      {/* <div className="z-10 flex justify-center items-center"></div> */}
      <div className="flex justify-between w-full h-[700px] " id="caja">
        <div className="ml-48 z-10 flex flex-col items-center mt-48" style={imageStyle1}>
        <img className="h-1/3" src={vino1} alt="Vino 1" style={{ height: mainImage === 1 ? "400px" : "300px", transition: "height 0.5s ease-in-out" }} />
          <p className=" mt-16 texto-vinos-botellas">malbec</p>
        </div>

        <div className="z-10 flex flex-col items-center mt-48" style={imageStyle2}>
          <img className="h-1/3" src={vino2} alt="Vino 2" style={{ height: mainImage === 2 ? "400px" : "300px", transition: "height 0.5s ease-in-out" }}/>
          <div className="flex flex-col items-center flex-shrink-0 w-1/2 justify-center">
            <p className=" mt-16 texto-vinos-botellas">cabernet sauvignon</p>
          </div>
        </div>
        <div className="mr-48 z-10 flex flex-col items-center mt-48" style={imageStyle3}>
          <img className="h-1/3" src={vino3} alt="Vino 3" style={{ height: mainImage === 3 ? "400px" : "300px", transition: "height 0.5s ease-in-out" }}/>
          <p className=" mt-16 texto-vinos-botellas">malbec</p>
        </div>
        </div>
        {/* <div className="z-10 flex justify-center items-center"></div> */}
        <div className="relative right-[165px]">
        <div className={`cursor-pointer z-10 h-14 w-14 rounded-full flex items-center justify-center absolute top-1/3 ${mainImage === 1 ? 'bg-[#555555]' : 'bg-[#460377]'} transition-background duration-500`} onClick={moveRight}>
  <img
    src={flechaDerecha}
    alt="Flecha Izquierda"
    className="h-6 w-3.5"             
  />
</div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center items-center z-10 w-[220px] h-[40px] flex-shrink-0 border border-white relative  flex flex-col items-center">
          <p className="text-ver-mas">ver mas</p>
        </div>
      </div>

      <div className="z-0" style={overlayStyle}></div>
    </div>
  );
}

export default NuestrosVinos;
