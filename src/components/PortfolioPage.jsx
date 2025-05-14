import React from "react";
import profileImage from "../assets/images/profile.png";

const AboutMe = () => {
  return (
    <section
      className="about-section bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 text-white py-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          I’m Arther Bhion C, a passionate front-end developer with a creative and problem-solving mindset. I love crafting interactive and visually appealing user experiences with HTML, CSS, and JavaScript. My curiosity drives me to constantly explore new technologies and improve my skills. As a mechanical engineering student, I bring a unique perspective to development, combining analytical thinking with creativity. I thrive in collaborative environments and enjoy tackling challenges that push me to grow.
          </p>
        </div>
        <div className="image-container" >
          <img
            src={profileImage}
            alt="Profile"
            className="w-auto h-80 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
