import React from "react";

export const Nav = () => {
  return (
    <>
      <div className="w-full h-[10%] flex bg-[#362A00] p-5">
        <div className="flex w-[33%]">
          <h1 className="text-white">LOGO</h1>
        </div>
        <div className="flex w-[33%] justify-center gap-12">
          <h1 className="text-[#938C84] hover:text-white transform transition hover:scale-105">
            Inicio
          </h1>
          <h1 className="text-[#938C84] hover:text-white transform transition hover:scale-105">
            Productos
          </h1>
          <h1 className="text-[#938C84] hover:text-white transform transition hover:scale-105">
            Contacto
          </h1>
        </div>
      </div>
    </>
  );
};

export default Nav;
