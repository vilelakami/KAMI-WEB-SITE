import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-55 text-white">
      {/* Container Principal */}
      <div className="flex items-center justify-between px-6 py-6 md:justify-center md:border-b md:border-gray-300/20 md:h-24">
        {/* BOTÃO MOBILE - Z-index alto para ficar acima do menu aberto */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[60] w-10 h-10 flex items-center justify-center border border-white/20 rounded-md"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* MENU */}
        <ul
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            /* Mobile styles */
            flex-col items-center justify-center
            fixed inset-0 bg-black/95 z-[55]
            gap-8 text-xl
            
            /* Desktop styles */
            md:static md:flex md:flex-row md:bg-transparent
            md:gap-12 md:text-base md:z-auto
          `}
        >
          <li className="hover:font-bold transition-all">
            <Link to="/about" onClick={() => setIsOpen(false)}>
              about
            </Link>
          </li>
          <li className="hover:font-bold transition-all">
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              contact
            </Link>
          </li>
          <li className="hover:font-bold transition-all">
            <Link to="/portfolio" onClick={() => setIsOpen(false)}>
              portfolio
            </Link>
          </li>
        </ul>

        {/* LOGO */}
        <Link to="/" className="z-50">
          <img
            src={Logo}
            alt="logo"
            className="w-10 md:absolute md:left-10 md:top-7"
          />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
