import React from "react";

function CTA(){
    return(
        <div className="absolute top-65 left-0 w-full h-auto text-white">
            <h1 className="text-center text-3xl leading-12 md:text-6xl text-shadow-lg/30 md:leading-20">Let’s build <br></br>something together</h1>
            <div className="flex justify-center m-5 md:m-9">
                <button onClick={() => window.open("https://www.instagram.com/kamiwebsites/", "_blank")} className="hover:bg-sky-700 text-shadow-lg/30 backdrop-blur-md border border-white/20 text-white
                px-6 py-2 rounded-full z-[50] hover:bg-blue/20 transition">
                    contact me
                </button>
            </div>
        </div>
    );
}
export default CTA;