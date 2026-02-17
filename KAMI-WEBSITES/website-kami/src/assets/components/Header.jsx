import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-1/3 md:h-24 z-50 text-white">
      <div className="flex items-start justify-between md:justify-center px-6 py-6 md:border-b md:border-gray-300/20 h-auto">

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex overflow-y-hidden items-start text-3xl md:hidden z-50"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* MENU */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"}
            flex-col items-start justify-center
            absolute top-15 left-10 w-auto h-auto
            gap-4 text-xl text-shadow-lg/30 

            md:static md:flex md:flex-row md:h-auto md:bg-transparent
            md:gap-12 md:text-base
          `}
        >
          <li className="hover:font-bold">
            <Link to="/about" onClick={() => setIsOpen(false)}>about</Link>
          </li>

          <li className="hover:font-bold">
            <Link to="/contact" onClick={() => setIsOpen(false)}>contact</Link>
          </li>

          <li className="hover:font-bold">
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>portfolio</Link>
          </li>

          </ul>

        {/* LOGO */}
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-10 md:absolute md:left-10 md:top-4"
          />
        </Link>

      </div>
    </nav>
  );
}

export default Header;
