import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Gualtallary from "../images/Gualtallary.png";
import Flores from "../images/vistaFlores.png";
import Cepillo from "../images/swiper-home-1.png";
import Altamira from "../images/ParajeAltamira.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const gothamBlack = {
  fontFamily: "Gotham Black",
};

export default function SliderHome() {
  return (
    <>
      <style>{`
            .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
                color: white;
                font-size: 24px;              
            }

            .swiper-button-next {
                background: #460377;
                border-radius: 9999px;
                padding: 1.7rem 1.7rem;
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 300ms;
                right: 10px;
            }

            .swiper-button-next:hover {
              opacity: 0.7;
            }


            .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
                color: white;
                font-size: 24px;
            }

            .swiper-button-prev {
                background: #460377;
                border-radius: 9999px;
                padding: 1.7rem 1.7rem;
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 300ms;
                left: 10px;
            }

            .swiper-button-prev:hover {
              opacity: 0.7;
            }

            @media (min-width: 1024px) {
              .swiper-button-next{
                right: 150px;
              }

              .swiper-button-prev {
                left: 150px;
              }
            }
          `}</style>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper  h-[70vh]"
      >
        <SwiperSlide className="relative ">
          <div className="absolute text-white flex justify-start pt-20 lg:pt-0 lg:justify-center items-center  h-full flex-col w-full z-50  gap-y-3 ">
            <span className="font-gotham text-xs lg:text-sm lg:leading-[13px] tracking-[4px] text-white">
              VIÑEDOS - VALLE DE UCO
            </span>
            <h1
              className="text-white text-3xl lg:text-[2.5rem] lg:leading-[50px] text-center uppercase"
              style={gothamBlack}
            >
              Gualtallary
            </h1>
            <div className="hidden lg:inline-block mx-auto z-10">
              <div className="border border-white text-white h-8 w-48 flex justify-center items-center hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center">
                <Link to="/vinedos">VER MÁS</Link>
              </div>
            </div>
            <div className="flex lg:hidden">
              <div className="inline-block mx-auto z-10">
                <Link
                  to="/vinedos"
                  href=""
                  className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
          </div>
          <img
            src={Gualtallary}
            alt=""
            className="object-cover h-full w-full brightness-[0.6]"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute text-white flex justify-start pt-20 lg:pt-0 lg:justify-center items-center  h-full flex-col w-full z-50  gap-y-3 ">
            <span className="font-gotham text-xs lg:text-sm lg:leading-[13px] tracking-[4px] text-white">
              VIÑEDOS - VALLE DE UCO
            </span>
            <h1
              className="text-white text-3xl lg:text-[2.5rem] lg:leading-[50px] text-center uppercase"
              style={gothamBlack}
            >
              Vista Flores
            </h1>
            <div className="hidden lg:inline-block mx-auto z-10">
              <div className="border border-white text-white h-8 w-48 flex justify-center items-center hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center">
                <Link to="/vinedos">VER MÁS</Link>
              </div>
            </div>
            <div className="flex lg:hidden">
              <div className="inline-block mx-auto z-10">
                <Link
                  to="/vinedos"
                  className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
          </div>
          <img
            src={Flores}
            alt=""
            className="object-cover h-full w-full brightness-[0.6]"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute text-white flex justify-start pt-20 lg:pt-0 lg:justify-center items-center  h-full flex-col w-full z-50  gap-y-3 ">
            <span className="font-gotham text-xs lg:text-sm lg:leading-[13px] tracking-[4px] text-white">
              VIÑEDOS - VALLE DE UCO
            </span>
            <h1
              className="text-white text-3xl lg:text-[2.5rem] lg:leading-[50px] text-center"
              style={gothamBlack}
            >
              PAMPA EL CEPILLO
            </h1>
            <div className="hidden lg:inline-block mx-auto z-10">
              <div className="border border-white text-white h-8 w-48 flex justify-center items-center hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center">
                <Link to="/vinedos">VER MÁS</Link>
              </div>
            </div>
            <div className="flex lg:hidden">
              <div className="inline-block mx-auto z-10">
                <Link
                  to="/vinedos"
                  className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
          </div>
          <img
            src={Cepillo}
            alt=""
            className="object-cover h-full w-full brightness-[0.6]"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute text-white flex justify-start pt-20 lg:pt-0 lg:justify-center items-center  h-full flex-col w-full z-50  gap-y-3 ">
            <span className="font-gotham text-xs lg:text-sm lg:leading-[13px] tracking-[4px] text-white">
              VIÑEDOS - VALLE DE UCO
            </span>
            <h1
              className="text-white text-3xl lg:text-[2.5rem] lg:leading-[50px] text-center uppercase"
              style={gothamBlack}
            >
              Paraje Altamira
            </h1>
            <div className="hidden lg:inline-block mx-auto z-10">
              <div className="border border-white text-white h-8 w-48 flex justify-center items-center hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center">
                <Link to="/vinedos">VER MÁS</Link>
              </div>
            </div>
            <div className="flex lg:hidden">
              <div className="inline-block mx-auto z-10">
                <Link
                  to="/vinedos"
                  className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                >
                  VER MÁS
                </Link>
              </div>
            </div>
          </div>
          <img
            src={Altamira}
            alt=""
            className="object-cover h-full w-full brightness-[0.6]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
