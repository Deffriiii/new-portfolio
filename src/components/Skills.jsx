import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp } from "react-icons/fa";
import { SiJavascript, SiCodeigniter, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-700" /> },
    { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-500" /> },
  ];

  // Duplicate the skills array for seamless scrolling
  const repeatedSkills = [...skills, ...skills];

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-secondary to-white dark:bg-dark text-dark dark:text-light py-10 transition-colors duration-500 overflow-hidden"
    >
      <div className="container relative overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>

        {/* Scrolling Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex space-x-8 animate-scrollLeft"
            style={{ width: `${repeatedSkills.length * 200}px` }}
          >
            {repeatedSkills.map((skill, index) => (
              <div
                key={index}
                className="w-48 h-48 flex-shrink-0 p-4 bg-dark text-light rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 flex flex-col items-center justify-center"
              >
                <div className="text-5xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
