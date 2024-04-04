import React from "react";
import File from "../../images/file.png";
import Download from "../../images/icon-download.png";
import Img1 from "../../images/press-card-1.jpg";
import Img2 from "../../images/press-card-2.jpg";
import Img3 from "../../images/press-card-3.jpg";

function Files() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  return (
    <div className="bg-[#252323]">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-16 lg:!py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="relative  rounded-xl  transition-all ease-in-out duration-300 transform hover:-translate-y-1">
            <div className="">
              <div
                className="py-32 bg-cover	bg-center border rounded-xl shadow-2xl brightness-80	"
                style={{ backgroundImage: `url(${Img1})` }}
              ></div>
            </div>
            <div className="">
              <div className="absolute top-10 left-0 bg-[#460377] text-white px-5 border border-white rounded-e-lg">
                <h1 className="text-base lg:text-lg font-gotham mt-2 lg:mt-0">
                  Logos
                </h1>
              </div>
              <div className="absolute bottom-10 right-6">
                <a href="">
                  <img
                    src={Download}
                    alt=""
                    className="w-12 border border-[#460377] mx-auto  transform hover:translate-y-1 ease-in-out duration-300 hover:bg-white rounded-full hover:p-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative  rounded-xl  transition-all ease-in-out duration-300 transform hover:-translate-y-1">
            <div className="">
              <div
                className="py-32 bg-cover	bg-center border rounded-xl shadow-2xl brightness-80	"
                style={{ backgroundImage: `url(${Img2})` }}
              ></div>
            </div>
            <div className="">
              <div className="absolute top-10 left-0 bg-[#460377] text-white px-5 border border-white rounded-e-lg">
                <h1 className="text-base lg:text-lg font-gotham mt-2 lg:mt-0">
                  Imágenes
                </h1>
              </div>
              <div className="absolute bottom-10 right-6">
                <a href="">
                  <img
                    src={Download}
                    alt=""
                    className="w-12 border border-[#460377] mx-auto  transform hover:translate-y-1 ease-in-out duration-300 hover:bg-white rounded-full hover:p-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="relative  rounded-xl  transition-all ease-in-out duration-300 transform hover:-translate-y-1">
            <div className="">
              <div
                className="py-32 bg-cover	bg-center border rounded-xl shadow-2xl brightness-80	"
                style={{ backgroundImage: `url(${Img3})` }}
              ></div>
            </div>
            <div className="">
              <div className="absolute top-10 left-0 bg-[#460377] text-white px-5 border border-white rounded-e-lg">
                <h1 className="text-base lg:text-lg font-gotham mt-2 lg:mt-0">
                  Material completo
                </h1>
              </div>
              <div className="absolute bottom-10 right-6">
                <a href="">
                  <img
                    src={Download}
                    alt=""
                    className="w-12 border border-[#460377] mx-auto  transform hover:translate-y-1 ease-in-out duration-300 hover:bg-white rounded-full hover:p-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Files;
