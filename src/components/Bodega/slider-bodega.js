import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slider1 from "../../images/slider-bodega-1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <style>{`
            .swiper-button-next:after, .swiper-rtl .swiper-button-prev:after {
                color: white;
                font-size: 24px;              
            }

            .swiper-button-next {
                background: transparent;
                border-radius: 9999px;
                padding: 1.7rem 1.7rem;
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 300ms;
                right: 150px;
            }

            .swiper-button-next:hover {
                background: #460377;
                border-radius: 9999px;
            }


            .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after {
                color: white;
                font-size: 24px;
            }

            .swiper-button-prev {
                background: transparent;
                border-radius: 9999px;
                padding: 1.7rem 1.7rem;
                transition-property: all;
                transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
                transition-duration: 300ms;
                left: 150px;
            }

            .swiper-button-prev:hover {
                background: #460377;
                border-radius: 9999px;
            }
          `}</style>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper  h-[70vh]"
      >
        <SwiperSlide>
          <img
            src={Slider1}
            alt=""
            className="object-cover h-full w-full brightness-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider1}
            alt=""
            className="object-cover h-full w-full brightness-75"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Slider1}
            alt=""
            className="object-cover h-full w-full brightness-75"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
