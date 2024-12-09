import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

function Topbar() {
  return (
    <div className="w-full hidden md:flex p-3 items-center justify-between border-r-4 border-b-slate-500">
      <div className="max-w-7xl container mx-auto flex items-center justify-between">
        <CiSearch />
        <h1 className="text-2xl text-[22202E]">Avion</h1>
        <div className="flex gap-2 mr-4">
          <MdOutlineShoppingCart />
          <FaRegUserCircle />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
