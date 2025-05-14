import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Placeholder images - replace with your actual project images
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: " Visitor Management System",
      description:
        " A app for colleges to digitize visitor  check-ins/outs. Features include QR generation, scanning,notifications, and an admin dashboard.",
      tags: ["Flutter","Firebase"],
      links: {
        github: "https://github.com/artherbhion/Makethon",
        demo: "https://makethon-22.web.app/",
      },
      image: project1,
      // featured: true,
    },
    {
      title: " Chat App",
      description:
        " Developed a real-time chat application using Flutter and Firebase with user authentication and messaging features.",
      tags: ["Flutter", "Firebase"],
      links: {
        github: "https://github.com/artherbhion/ChatApp",
        demo: "https://arther-chat-app.web.app/",
      },
      image: project2,
      featured: false,
    },
    {
      title: "BIS Game",
      description:
        " Developed a game in Flutter to raise awareness about the Bureau of Indian Standards.",
      tags: ["Flutter", "Firebase"],
      links: {
        github: "https://github.com/artherbhion/Bis-Game",
        demo: "https://bisgame-deb64.web.app/",
      },
      image: project3,
      featured: false,
    },
    {
      title: "Quote Generator",
      description:
        "Generates random quotes from a custom list using JavaScript.",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      links: {
        github: "https://github.com/artherbhion/Quote-Generator",
        demo: "https://artherbhion.github.io/Quote-Generator/",
      },
      image: project4,
      featured: false,
    },
    {
      title: "Form-App ",
      description:
        "A user data submission form built with React, integrating Google Apps Script API for seamless data handling and storage.",
      tags: ["React","Google Sheets"],
      links: {
        github: "https://github.com/artherbhion/form_app_deploy",
        demo: "https://form-app-deploy.vercel.app/",
      },
      image: project5,
      featured: false,
    },
    {
      title: "Biodiesel Engine Analysis Tool",
      description:
        "performs energy, exergy, and emissions analysis for multi-fuel engines with variable compression ratios. It calculates efficiency, losses, and emissions for diesel-biodiesel blends (B20 to B100) using thermodynamic principles. Interactive charts visualize energy distribution, exergy destruction, and pollutant levels for performance optimization.",
      tags: ["HTML5","CSS","JS"],
      links: {
        github: "https://github.com/artherbhion/Exnergy",
        demo: "https://artherbhion.github.io/Exnergy/",
      },
      image: project6,
      featured: false,
    },
  ];

  const handleDemoClick = (demoUrl) => {
    window.open(demoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-40 min-h-screen bg-gradient-to-b from-[#020617] via-[#0a0f1f] to-[#000D1A]/90 p-8 text-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg`}
          >
            {/* Image Section - Clickable */}
            <div 
              className="md:w-1/2 overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleDemoClick(project.links.demo)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text Section */}
            <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
              <MacOsButtons />

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    {project.featured && (
                      <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                        Featured Project
                      </div>
                    )}
                    <CardTitle className="text-slate-100 text-3xl font-bold">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.links.github}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.links.demo}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;