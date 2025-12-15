import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center px-8 py-3 bg-gray-900 text-gray-200 
        transition-colors duration-300 hover:bg-gray-800 shadow-lg">

      <div className="logo font-extrabold text-cyan-400 text-xl tracking-wide cursor-pointer 
         hover:text-cyan-300 transition">
        iTask
      </div>

      <div className="flex gap-4 font-semibold">
        <button className="text-white bg-gray-700/40 hover:bg-emerald-300 hover:text-gray-900 
            transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 
            rounded-lg py-1.5 px-4 shadow-md">
          Home
        </button>

        <button className="text-white bg-gray-700/40 hover:bg-emerald-300 hover:text-gray-900 
            transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 
            rounded-lg py-1.5 px-4 shadow-md">
          To Do Page
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
