import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo-white.png";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import instagram from "../images/icon-instagram.svg";
import menuMobile from "../images/menu-mobile.svg";

function HeaderMobile() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div
      id="menu-mobile"
      className={`block lg:hidden fixed top-0 right-0 lg:!z-50  ${
        isMobileMenuOpen ? "lg:!z-50" : "translate-x-full"
      } h-screen bg-[#005F84] w-full md:w-[24rem] md:pl-5 transition-all ease-in-out duration-700 pt-[1.9rem]  lg:!z-50`}
    >
      <div className="px-5">
        <div className="flex justify-end items-center   py-6 border-b bordw7">
          <span className="" id="menu-close" onClick={closeMobileMenu}>
            <img src="" alt="close" className="w-6 cursor-pointer" />
          </span>
        </div>
      </div>

      <div className="px-5">
        <div className="flex flex-col  border-b border-white ">
          {/* Mobile menu items start */}
          <div
            className="flex flex-col items-start gap-y-5  py-10  text-lg tracking-widest"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
            }}
          >
            <Link
              to="/nosotros"
              className="text-white flex gap-x-2 items-center justify-center"
              onClick={closeMobileMenu}
            >
              <div className="h-full flex items-center">
                <div className="bg-white p-1 lg:p-2 rounded-full inline-block"></div>
              </div>
              <span className="border-b border-white ">Nosotros</span>
            </Link>
            <Link
              to="/servicios"
              className="text-white flex gap-x-2 items-center justify-center"
              onClick={closeMobileMenu}
            >
              <div className="h-full flex items-center">
                <div className="bg-white p-1 lg:p-2 rounded-full inline-block"></div>
              </div>
              <span className="border-b border-white ">Servicios</span>
            </Link>

            <Link
              to="/tecnologia"
              className="text-white flex gap-x-2 items-center justify-center"
              onClick={closeMobileMenu}
            >
              <div className="h-full flex items-center">
                <div className="bg-white p-1 lg:p-2 rounded-full inline-block"></div>
              </div>
              <span className="border-b border-white ">Tecnología</span>
            </Link>

            <Link
              to="/patologias"
              className="text-white flex gap-x-2 items-center justify-center"
              onClick={closeMobileMenu}
            >
              <div className="h-full flex items-center">
                <div className="bg-white p-1 lg:p-2 rounded-full inline-block"></div>
              </div>
              <span className="border-b border-white ">Patologías</span>
            </Link>

            <Link
              to="/medicos"
              className="text-white flex gap-x-2 items-center justify-center"
              onClick={closeMobileMenu}
            >
              <div className="h-full flex items-center">
                <div className="bg-white p-1 lg:p-2 rounded-full inline-block"></div>
              </div>
              <span className="border-b border-white ">Médicos</span>
            </Link>

            <Link
              to="/investigacion"
              className="text-white flex gap-x-2 items-center justify-center"
              onClick={closeMobileMenu}
            >
              <div className="h-full flex items-center">
                <div className="bg-white p-1 lg:p-2 rounded-full inline-block"></div>
              </div>
              <span className="border-b border-white ">Investigación</span>
            </Link>

            <Link
              to="/novedades"
              className="text-white flex gap-x-2 items-center justify-center"
              onClick={closeMobileMenu}
            >
              <div className="h-full flex items-center">
                <div className="bg-white p-1 lg:p-2 rounded-full inline-block"></div>
              </div>
              <span className="border-b border-white ">Novedades</span>
            </Link>
          </div>
        </div>
        {/* Mobile menu items end */}

        {/* Mobile topmenu items start */}
        <div
          className="grid grid-cols-1  tracking-widest text-sm  py-4  gap-y-2"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
        >
          <div className="">
            <Link
              to="/pacientes"
              className="text-white"
              onClick={closeMobileMenu}
            >
              Pacientes
            </Link>
          </div>
          <div className="">
            <Link
              to="/coberturas"
              className="text-white"
              onClick={closeMobileMenu}
            >
              Coberturas
            </Link>
          </div>
          <div className="">
            <Link
              to="/contacto"
              className="text-white"
              onClick={closeMobileMenu}
            >
              Contacto
            </Link>
          </div>
          <div className="">
            <Link
              to="/instructivos"
              className="text-white"
              onClick={closeMobileMenu}
            >
              Instructivos
            </Link>
          </div>
        </div>
        {/* Mobile topmenu items end */}

        {/* Mobile icons social media start */}
        <div
          className="flex justify-center items-center gap-x-10 w-3/4 mx-auto tracking-widest text-base py-10"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
        >
          <a
            href="https://www.facebook.com/centrodeurologia"
            target="_blank"
          ></a>
          <a
            href="https://www.linkedin.com/company/cdu-centro-de-urolog%C3%ADa/"
            target="_blank"
          >
            <img src="" alt="icon Instagram" className="w-5" />
          </a>

          <a href="https://twitter.com/cduargentina" target="_blank">
            <img src="" alt="icon Twitter" className="w-5" />
          </a>

          <a
            href="https://www.instagram.com/centrodeurologiacdu/"
            target="_blank"
          >
            <img src="" alt="icon Instagram" className="w-7" />
          </a>

          <a href="https://www.youtube.com/@redessociales4632" target="_blank">
            <img src="" alt="icon Instagram" className="w-6" />
          </a>
        </div>
        {/* Mobile icons social media end */}
      </div>
    </div>
  );
}

export default HeaderMobile;
