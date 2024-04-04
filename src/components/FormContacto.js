import React from "react";
import fondoContacto from "../images/fondoContacto.png";

function FormContacto() {
  const firaSans = {
    fontFamily: "Fira Sans",
  };

  const gothamBlack = {
    fontFamily: "Gotham Black",
  };

  return (
    <div
      className="bg-[#252323]"
      style={{
        backgroundImage: `url(${fondoContacto})`,
        backgroundSize: "40%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
      }}
    >
      <div className="container mx-auto max-w-screen-xl 2xl:max-w-screen-2xl !py-24">
        <form className="max-w-xl mx-auto  rounded shadow-md ">
          <div className="grid grid-cols-2 gap-5 lg:gap-10">
            <div>
              <label
                htmlFor="name"
                className="block text-white font-gotham-700 text-base lg:text-lg tracking-[4px] mb-1 uppercase"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white font-gotham-700 text-base lg:text-lg tracking-[4px] mb-1 uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label
                htmlFor="service"
                className="block text-white font-gotham-700 text-base lg:text-lg tracking-[4px] mb-1 uppercase"
              >
                Servicio
              </label>
              <select
                id="service"
                name="service"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="" disabled selected hidden>
                  Seleccionar
                </option>
                <option value="Servicio 1">Servicio 1</option>
                <option value="Servicio 2">Servicio 2</option>
                <option value="Servicio 3">Servicio 3</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-white font-gotham-700 text-base lg:text-lg tracking-[4px] mb-1 uppercase"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="col-span-2">
              <label
                htmlFor="message"
                className="block text-white font-gotham-700 text-base lg:text-lg tracking-[4px] mb-1 uppercase"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-start">
              <div className="flex">
                <div className="inline-block mr-auto z-10">
                  <a
                    href=""
                    className="border border-white text-white px-10 pt-5 pb-3 lg:py-2 hover:bg-[#460377] transition-all ease-in-out duration-300 font-gotham text-xs lg:text-sm lg:leading-[14px] tracking-[4px] text-center"
                  >
                    ENVIAR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormContacto;
