import React from "react";
import Insta from '../images/logo-ig.png';
import Gmail from '../images/logo-gmail.png';
import Wpp from '../images/logo-wpp.png';

function Contact(){
    return(
        <main className="absolute w-full h-auto top-70 md:top-80 left-0 text-white z-50">
        {/* meus contatos (sem links) apenas organizados */}
                <div className="flex w-auto h-auto items-center justify-center overflow-hidden g-2">
                    <img className="w-10 text-white" src={Insta} alt="..." />
                    <h1>@kamiwebsites</h1>
                </div>
                <div className="flex w-auto h-auto items-center justify-center overflow-hidden g-4">
                    <img className="w-10" src={Gmail} alt="..." />
                    <h1>vilelakamy18@gmail.com</h1>
                </div>
                <div className="flex w-auto h-auto items-center justify-center overflow-hidden g-2">
                    <img className="w-10" src={Wpp} alt="..." />
                    <h1>(11) 91342-0180</h1>
                </div>

        </main>
    );
}
export default Contact;