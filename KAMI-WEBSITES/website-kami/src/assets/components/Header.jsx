import React from "react";
import { useState } from "react"; //biblioteca que avisa ao react que o estado de algum componente mudou, 
// por exemplo, tenho um botão e quero que quando apertar nele ele exiba algo na tela

function Header(){
    const [isOpen, setIsOpen] = useState(false);

        return(
            <nav className="fixed top-0 left-0 w-full bg-transparent p-6 z-50 text-white">
                <div className="flex-col items-center justify-start">
                {/* botão hamburger: para celular */}
                <div className="w-auto h-auto md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} class="text-2xl relative z-[60]">{isOpen ? '✕' : '☰'}</button>
                </div>
                <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:flex-row 
                    w-auto h-auto md:w-auto space-y-2 md:space-y-0 md:space-x-15 
                    p-4 md:p-0 md:justify-center`}>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                    <li><a href="#">portfolio</a></li>
                </ul>
                </div>
            </nav>

    );
}
export default Header