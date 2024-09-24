import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header_Home() {
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
    <header className="bg-[#252323] fixed z-[100] w-full shadow-2xl">
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
            to="/vinedos"
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
                href="https://www.linkedin.com/company/vinosdelaluz/"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >

              </a>
              <a
                href="https://www.facebook.com/callejoncrimen"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >

              </a>
              <a
                href="https://www.instagram.com/callejoncrimen/"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >

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

        </Link>

        <a href="#" onClick={toggleMobileMenu}>
        </a>

        <div
          className={`block lg:hidden fixed top-0 right-0 lg:!z-50  ${
            isMobileMenuOpen ? "lg:!z-50" : "translate-x-full"
          } h-screen bg-[#252323] w-full md:w-[24rem] md:pl-5 transition-all ease-in-out duration-700 pt-[1.9rem]  lg:!z-50`}
        >
          <div className="px-5">
            <div className="flex justify-end items-center  ">
              <span className="" id="menu-close" onClick={closeMobileMenu}>
              </span>
            </div>
          </div>

          <div className="px-5">
            <div className="flex flex-col  border-b border-white ">
              {/* Mobile menu items start */}
              <div className="flex flex-col items-start gap-y-5  py-10   font-gotham text-white text-base tracking-[4px] uppercase ">
                <Link
                  to="/bodega"
                  className="text-white flex gap-x-2 items-center justify-center"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-[#460377]  rounded-full py-2 px-3">
                    </div>
                    <span className="mt-3">Bodega</span>
                  </div>
                </Link>

                <Link
                  to="/vinedos"
                  className="text-white flex gap-x-2 items-center justify-center"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-[#460377]  rounded-full py-2 px-3">
                    </div>
                    <span className="mt-3">Viñedos</span>
                  </div>
                </Link>

                <Link
                  to="/vinos"
                  className="text-white flex gap-x-2 items-center justify-center"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-[#460377]  rounded-full py-2 px-3">
                    </div>
                    <span className="mt-3">Vinos</span>
                  </div>
                </Link>

                <Link
                  to="/nosotros"
                  className="text-white flex gap-x-2 items-center justify-center"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-[#460377]  rounded-full py-2 px-3">
                    </div>
                    <span className="mt-3">Nosotros</span>
                  </div>
                </Link>

                <Link
                  to="/press"
                  className="text-white flex gap-x-2 items-center justify-center"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-[#460377]  rounded-full py-2 px-3">
                    </div>
                    <span className="mt-3">Press kit</span>
                  </div>
                </Link>

                <Link
                  to="/contacto"
                  className="text-white flex gap-x-2 items-center justify-center"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center gap-x-3">
                    <div className="bg-[#460377]  rounded-full py-2 px-3">
                    </div>
                    <span className="mt-3">Contacto</span>
                  </div>
                </Link>
              </div>
            </div>
            {/* Mobile menu items end */}

            {/* Mobile icons social media start */}
            <div
              className="flex justify-center items-center gap-x-5 w-full py-10"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 400 }}
            >
              <a
                href="https://www.linkedin.com/company/vinosdelaluz/"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
              </a>
              <a
                href="https://www.facebook.com/callejoncrimen"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
              </a>
              <a
                href="https://www.instagram.com/callejoncrimen/"
                target="_blank"
                className="hover:bg-[#460377] transition-all ease-in-out duration-300"
              >
              </a>
            </div>
            {/* Mobile icons social media end */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header_Home;
