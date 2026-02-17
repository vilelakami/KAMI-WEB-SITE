import React from "react";
import Github from '../images/github.png';
import Fundo from '../images/fundo.png';

function Portfolio(){
    return(
        <section className="absolute w-full h-full top-50 md:top-50 md:top-50 left-0 z-50 p-2">
            <div className="flex flex-col w-auto items-center justify-center overflow-hidden z-50 gap-4 text-white text-shadow-lg/30">
                <img className="w-10 h-15" src={Github} alt="ícone do github" />
                <img className="w-100 md:h-80 h-55 rounded-md shadow-lg" src={Fundo} alt="fundo do próprio site" />
                <a className="hover:font-bold" href="https://github.com/vilelakami" target="_blank">github.com/vilelakami</a>
            </div>
        </section>
    );
}
export default Portfolio;