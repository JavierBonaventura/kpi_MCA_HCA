import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logoConCalidad.png";
import instagram from "../images/instagram.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";

function Header() {
  return (
    <header>
      <div className="w-full h-[100px] flex justify-between bg-[#252323] text-header items-center pl-20 pr-8">
        <div className="h-full flex items-center text-[#252323]">BODEGA</div>
        <Link
          to="/bodega"
          className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer"
        >
          <div>BODEGA</div>
        </Link>
        <Link
          to="/nuestrosVinedos"
          className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer"
        >
          <div>VIÑEDOS</div>
        </Link>

        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer pr-8 pl-8">
          VINOS
        </div>
        <div className="h-full flex items-center text-[#252323]"></div>
        <div className="h-full flex items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-28 flex-shrink-0" />
          </Link>
        </div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">
          NOSOTROS
        </div>
        <div className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer">
          PRESS KIT
        </div>
        <Link
          to="/contacto"
          className="h-full flex items-center px-2 hover:bg-[#460377] hover:cursor-pointer"
        >
          <div>CONTACTO</div>
        </Link>

        <div className="h-full flex items-center">
          <img
            src={instagram}
            alt="instagram"
            className="w-6 h-6 flex-shrink-0"
          />
          {/* <img src={google} alt="google" className="w-6 h-6 flex-shrink-0" /> */}
          <img
            src={facebook}
            alt="facebook"
            className="w-6 h-6 flex-shrink-0"
          />
        </div>
        <div className="h-full flex items-center text-header-idiomas ">
          EN | ES
        </div>
      </div>
    </header>
  );
}

export default Header;
