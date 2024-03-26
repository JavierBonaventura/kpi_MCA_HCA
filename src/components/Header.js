import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-white.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import instagram from "../images/icon-instagram.svg";
import menuMobile from "../images/menu-mobile.svg";

function Header() {
  return (
    <header className="bg-[#252323]">
      <div
        id="menu-desk"
        className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl text-header lg:flex justify-between hidden "
      >
        <div className="flex w-[40%] justify-between">
          <Link
            to="/bodega"
            className="h-full flex items-center px-2 hover:bg-[#460377] transition-all ease-in-out duration-300 uppercase py-1"
          >
            Bodega
          </Link>
          <Link
            to="/nuestrosVinedos"
            className="h-full flex items-center px-2 hover:bg-[#460377] transition-all ease-in-out duration-300 uppercase py-1"
          >
            Viñedos
          </Link>
          <Link
            to="/vinos"
            className="h-full flex items-center px-2 hover:bg-[#460377] transition-all ease-in-out duration-300 uppercase py-1"
          >
            Vinos
          </Link>
        </div>
        <div className="w-[20%] mx-auto">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-28 mx-auto py-1 hover:bg-[#460377] transition-all ease-in-out duration-300"
            />
          </Link>
        </div>
        <div className="flex w-[40%] justify-between items-center">
          <Link
            to="/nosotros"
            className="h-full flex items-center px-2 hover:bg-[#460377] transition-all ease-in-out duration-300 uppercase py-1"
          >
            Nosotros
          </Link>
          <Link
            to="/press"
            className="h-full flex items-center px-2 hover:bg-[#460377] transition-all ease-in-out duration-300 uppercase py-1 text-center"
          >
            Press kit
          </Link>
          <Link
            to="/contacto"
            className="h-full flex items-center px-2 hover:bg-[#460377] transition-all ease-in-out duration-300 uppercase py-1"
          >
            Contacto
          </Link>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <div className="flex">
              <a
                href=""
                className="text-white bg-transparent hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                EN
              </a>
              |
              <a
                href=""
                className="text-white bg-transparent hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                ES
              </a>
            </div>
            <div className="flex">
              <a
                href=""
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                <img
                  src={linkedin}
                  alt="instagram"
                  className="w-6 h-6 flex-shrink-0"
                />
              </a>
              <a
                href="https://www.facebook.com/callejoncrimen"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="w-6 h-6 flex-shrink-0"
                />
              </a>
              <a
                href="https://www.instagram.com/callejoncrimen/"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
                <img
                  src={instagram}
                  alt="facebook"
                  className="w-6 h-6 flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="menu-mobile"
        className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl text-header lg:hidden justify-between flex items-center"
      >
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-20 mx-auto py-1 hover:bg-[#460377] transition-all ease-in-out duration-300"
          />
        </Link>

        <div>
          <img src={menuMobile} alt="" className="w-8" />
        </div>
      </div>
    </header>
  );
}

export default Header;
