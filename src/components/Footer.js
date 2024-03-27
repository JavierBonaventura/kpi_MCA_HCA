import React from "react";
import logo_footer from "../images/logoConCalidad.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import instagram from "../images/icon-instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#252323] lg:pt-24 space-y-16">
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row w-full justify-between  gap-y-6 lg:gap-y-0 ">
          <div className="w-full lg:w-1/5 lg:-mt-8">
            <Link to="/">
              <img
                className="w-32 lg:w-40 -ml-2"
                src={logo_footer}
                alt="Logo"
              />
            </Link>

            <div className="flex lg:ml-7">
              <a
                href="https://www.linkedin.com/company/vinosdelaluz/"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                <img src={linkedin} alt="instagram" className="w-7" />
              </a>
              <a
                href="https://www.facebook.com/callejoncrimen"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                <img src={facebook} alt="facebook" className="w-7" />
              </a>
              <a
                href="https://www.instagram.com/callejoncrimen/"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                <img src={instagram} alt="instagram" className="w-7" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-4/5 flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0">
            <div className="space-y-3 lg:space-y-5">
              <p className="text-sm lg:text-lg lg:leading-[20px] tracking-[4px] text-white font-gotham-700">
                CONTACTO
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.google.com/maps/place/Armani,+Tunuy%C3%A1n,+Mendoza/data=!4m2!3m1!1s0x967c25c55264fbc9:0x98a8695ef02d48a5?sa=X&ved=1t:242&ictx=111"
                  target="_blank"
                  className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                >
                  Calle Armani S/N, M5563 <br /> Villa Seca, Mendoza
                </a>
                <p className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px]">
                  (+ 54 11) 4328.4868 / 3883
                </p>
                <div className="mt-1">
                  <a
                    href="mailto:info@vinosdelaluz.com"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    info@vinosdelaluz.com
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-3 lg:space-y-5">
              <p className="text-sm lg:text-lg lg:leading-[20px] tracking-[4px] text-white font-gotham-700">
                LINKS
              </p>
              <div className="flex flex-col gap-y-3">
                <Link
                  to="/bodega"
                  target="_blank"
                  className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                >
                  Bodega
                </Link>
                <Link
                  to="/nosotros"
                  target="_blank"
                  className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                >
                  Nosotros
                </Link>
                <Link
                  to="/vinedos"
                  target="_blank"
                  className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                >
                  Viñedos
                </Link>
                <Link
                  to="/press"
                  target="_blank"
                  className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                >
                  Press Kit
                </Link>
                <Link
                  to="/contacto"
                  target="_blank"
                  className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                >
                  Contacto
                </Link>
              </div>
            </div>
            <div className="space-y-3 lg:space-y-5">
              <p className="text-sm lg:text-lg lg:leading-[20px] tracking-[4px] text-white font-gotham-700 uppercase">
                Nuestros vinos
              </p>
              <div className="flex gap-x-10">
                <div className="flex flex-col gap-y-3">
                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Iluminado
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Gran Callejón
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Blend de Terroir
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Single Vineyard
                  </Link>

                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Gran Reserva
                  </Link>
                </div>
                <div className="flex flex-col gap-y-3">
                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Reserva
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Relatos
                  </Link>
                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Perlas
                  </Link>

                  <Link
                    to=""
                    target="_blank"
                    className="font-gotham-regular text-white text-sm lg:text-lg lg:leading-[22px] hover:underline"
                  >
                    Episodio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500">
        <div
          className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-5
        "
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-y-2 ">
            <p className="text-white text-xs lg:text-sm lg:leading-[14px] tracking-[4px] uppercase font-gotham">
              © 2024 callejón del crimen
            </p>
            <p className="text-white text-xs lg:text-sm lg:leading-[14px] tracking-[4px] uppercase font-gotham">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
