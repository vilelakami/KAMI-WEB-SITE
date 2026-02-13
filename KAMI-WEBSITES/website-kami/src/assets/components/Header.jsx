import React from "react";
import { useState } from "react"; //biblioteca que avisa ao react que o estado de algum componente mudou, 
// por exemplo, tenho um botão e quero que quando apertar nele ele exiba algo na tela

function Header(){
    const [isOpen, setIsOpen] = useState(false);

        return(
            <nav className="fixed top-0 left-0 w-full bg-transparent p-6 z-50 text-white">
                <div className="flex items-start justify-center">
                {/* botão hamburger: para celular */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} class="text-2xl flex w-auto h-auto relative z-[60]">{isOpen ? '✕' : '☰'}</button>
                </div>
                <ul className={`${isOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row 
                    absolute md:static 
                    top-20 left-6 md:top-0 md:left-0
                    w-48 md:w-auto 
                    bg-black/80 md:bg-transparent 
                    items-start md:items-center 
                    space-y-6 md:space-y-0 md:space-x-10 
                    p-6 md:p-0 rounded-lg md:rounded-none`}>
                    <li><a href="#">about</a></li>
                    <li><a href="#">contact</a></li>
                    <li><a href="#">portfolio</a></li>
                </ul>
                </div>
            </nav>

    );
}
export default Header