import React from "react";
// import logo_footer from "../images/logo_footer.png";
import logo_footer from "../images/logoConCalidad.png";

import instagram from "../images/instagram.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";

function Footer() {
  return (
    <div>
      <div className="w-full h-[450px] bg-[#252323] flex justify-between">
        <div className="w-1/4 flex flex-col justify-center items-center mb-32">
          <img className="w-[194px]" src={logo_footer} alt="Logo" />
          <div className="mt-4 flex">
            <img src={instagram} alt="instagram" className="w-6 h-6 mr-2" />
            <img src={google} alt="google" className="w-6 h-6 mr-2" />
            <img src={facebook} alt="facebook" className="w-6 h-6" />
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-left mb-24 ">
          <div className="align-middle">
            <p className="text-footer-titulos">CONTACTO</p>
          </div>
          <div className="w-[270px] h-[37px] py-12 align-middle">
            <p className="text-footer-sub-titulos">
              Calle Armani S/N, M5563 Villa Seca, Mendoza
            </p>
          </div>
          <div className="w-[270px] py-6 align-middle">
            <p className="text-footer-sub-titulos">
              (+ 54 11) 4328.4868 / 3883
            </p>
          </div>
          <div className="w-[270px] py-6 align-middle">
            <p className="text-footer-sub-titulos">alexei@getcraftwork.com</p>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-left mb-20 ml-24">
          <div className="align-middle">
            <p className="text-footer-titulos">LINKS</p>
          </div>
          <div className="w-[85px] h-[37px] py-12 align-middle">
            <p className="text-footer-sub-titulos">Bodega</p>
          </div>
          <div className="w-[85px] py-2 align-middle">
            <p className="text-footer-sub-titulos">Nosotros</p>
          </div>
          <div className="w-[85px] py-2 align-middle">
            <p className="text-footer-sub-titulos">Nuestros Viñedos</p>
          </div>
          <div className="w-[85px] py-2 align-middle">
            <p className="text-footer-sub-titulos">Press Kit</p>
          </div>
          <div className="w-[85px] py-2 align-middle">
            <p className="text-footer-sub-titulos">Contacto</p>
          </div>
        </div>
        <div className="w-1/4 flex flex-col justify-center items-left mb-32 mr-16">
          <div className="align-middle">
            <p className="text-footer-titulos">Nuestros vinos</p>
          </div>
          <div className="flex">
            <div id="columna1" className=" w-40">
              <div className="h-[37px] pt-2 mt-10 align-middle">
                <p className="text-footer-sub-titulos">Iluminado</p>
              </div>
              <div className=" py-2 align-middle">
                <p className="text-footer-sub-titulos">Gran Callejón</p>
              </div>
              <div className="py-2 align-middle">
                <p className="text-footer-sub-titulos">Single Vineyard</p>
              </div>
              <div className=" py-2 align-middle">
                <p className="text-footer-sub-titulos">Blend de Terroir</p>
              </div>
              <div className="py-2 align-middle">
                <p className="text-footer-sub-titulos">Gran Reserva</p>
              </div>
            </div>
            <div className="px-16" id="columna2">
              <div className="w-[85px] h-[37px]  pt-2 mt-10 align-middle">
                <p className="text-footer-sub-titulos">Relatos</p>
              </div>
              <div className="w-[85px] py-2 align-middle">
                <p className="text-footer-sub-titulos">Perlas</p>
              </div>
              <div className="w-[85px] py-2 align-middle">
                <p className="text-footer-sub-titulos">Reserva</p>
              </div>
              <div className="w-[85px] py-2 align-middle">
                <p className="text-footer-sub-titulos">Episodio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[100px] bg-[#252323] flex justify-between border-t-2 border-stone-500 flex justify-center items-center">
        <div className="align-middle px-24">
          <p className="text-footer-sub-titulos-footer">
            © 2023 callejón del crimen
          </p>
        </div>
        <div className="align-middle pr-24">
          <p className="text-footer-sub-titulos-footer ">
            All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
