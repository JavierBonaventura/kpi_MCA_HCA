import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../images/swiper-home-1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const gothamBlack = {
  fontFamily: "Gotham Black",
};

export default function App() {
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
              className="text-white text-3xl lg:text-[2.5rem] lg:leading-[50px] text-center"
              style={gothamBlack}
            >
              PAMPA EL CEPILLO
            </h1>
            <div className="flex">
              <div className="inline-block mx-auto z-10">
                <a
                  href=""
                  className="border border-white text-white px-10 py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                >
                  VER MÁS
                </a>
              </div>
            </div>
          </div>
          <img
            src={Slider1}
            alt=""
            className="object-cover h-full w-full brightness-[0.6]"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute text-white flex justify-start pt-20 lg:pt-0 lg:justify-center items-center  h-full flex-col w-full z-50  gap-y-3 ">
            <span className="font-gotham text-xs lg:text-sm lg:leading-[13px] tracking-[4px] text-white">
              VIÑEDOS - VALLE DE UCO 1
            </span>
            <h1
              className="text-white text-3xl lg:text-[2.5rem] lg:leading-[50px] text-center"
              style={gothamBlack}
            >
              PAMPA EL CEPILLO
            </h1>
            <div className="flex">
              <div className="inline-block mx-auto z-10">
                <a
                  href=""
                  className="border border-white text-white px-10 py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                >
                  VER MÁS
                </a>
              </div>
            </div>
          </div>
          <img
            src={Slider1}
            alt=""
            className="object-cover h-full w-full brightness-[0.6]"
          />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute text-white flex justify-start pt-20 lg:pt-0 lg:justify-center items-center  h-full flex-col w-full z-50  gap-y-3 ">
            <span className="font-gotham text-xs lg:text-sm lg:leading-[13px] tracking-[4px] text-white">
              VIÑEDOS - VALLE DE UCO 2
            </span>
            <h1
              className="text-white text-3xl lg:text-[2.5rem] lg:leading-[50px] text-center"
              style={gothamBlack}
            >
              PAMPA EL CEPILLO
            </h1>
            <div className="flex">
              <div className="inline-block mx-auto z-10">
                <a
                  href=""
                  className="border border-white text-white px-10 py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                >
                  VER MÁS
                </a>
              </div>
            </div>
          </div>
          <img
            src={Slider1}
            alt=""
            className="object-cover h-full w-full brightness-[0.6]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
