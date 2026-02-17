import React from "react";
import Foto from "../images/eu.jpeg";
import ProfileCard from "./ProfileCard.jsx";

function About() {
    return(
      <section className="absolute w-full h-auto top-50 left-0 overflow-hidden z-50">
        <div className="flex items-center justify-center text-white g-10">
          <ProfileCard className="pc-responsive"
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
            hello<br></br>
            hello<br></br>
          </p>
        </div>
      </section>
    );
}

export default About;
