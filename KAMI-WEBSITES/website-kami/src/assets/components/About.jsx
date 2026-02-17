import React from "react";
import Foto from "../images/eu.jpeg";
import ProfileCard from "./ProfileCard.jsx";

//sessão about (onde vai minha foto com efeito react bits + texto)
function About() {
    return(
      //section para organizar em cima do color bends
      <section className="absolute w-full h-auto top-35 md:top-50 left-0 overflow-hidden z-50">
        <div className="flex flex-col md:flex-row w-auto items-center justify-center text-white text-center md:gap-6 md:gap-x-10 text-xs md:text-xl text-shadow-lg/30">
          {/* usage do profilecard.reactbits */}
          <ProfileCard className="pc-sm scale-65 md:scale-100"
            name="Kami Vilela"
            title="IS student"
            handle="kamicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl={Foto}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt
            onContactClick={() => console.log('Contact clicked')}
            behindGlowColor="rgba(125, 190, 255, 0.67)"
            behindGlowEnabled
            innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
          <p>
            Information Systems student and front-end developer. <br></br> 
            Creating clean and interactive digital experiences. <br></br> 
            Passionate about React, automation, and artificial intelligence. <br></br> 
            Building the web through Kami WebSites.
          </p>
        </div>
      </section>
    );
}

export default About;
