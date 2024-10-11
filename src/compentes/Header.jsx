import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  

  return (
    <header className="bg-slate-500 text-white flex justify-between items-center px-8 h-10 ">
      <div>logo</div>
      <nav>
        <ul className="flex justify-between items-center gap-4">
          <li className="hover:text-cyan-500 cursor-pointer ">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:text-cyan-500 cursor-pointer ">
            <NavLink to="/login">login</NavLink>
          </li>
          <li className="hover:text-cyan-500 cursor-pointer ">
            <NavLink to="singin">sing in</NavLink>
          </li>
          <li className="hover:text-cyan-500 cursor-pointer ">
            <NavLink to="test">Test</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
