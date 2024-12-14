import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { SiJavascript, SiCodeigniter, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-400" /> },
    { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-400" /> },
  ];

  // Duplicate the skills array for seamless scrolling
  const repeatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 overflow-hidden"
    >
      <div className="container max-w-6xl mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Skills
        </h2>

        {/* Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex space-x-8 animate-scrollLeft"
            style={{ width: `${repeatedSkills.length * 200}px` }}
          >
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="w-52 h-52 flex-shrink-0 p-6 
                bg-gray-800/60 rounded-2xl shadow-2xl 
                hover:scale-105 hover:shadow-xl 
                transition-all duration-300 
                flex flex-col items-center justify-center 
                border border-gray-700/50 backdrop-blur-sm"
              >
                <div 
                  className="text-6xl mb-4 
                  transition-transform duration-300 
                  group-hover:rotate-12"
                >
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-white/90">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlay */}
        <div 
          className="absolute top-0 left-0 right-0 h-full 
          bg-gradient-to-r from-transparent via-transparent to-transparent 
          pointer-events-none"
        />
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-scrollLeft {
          animation: scrollLeft 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;