import React, { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiCodeigniter, SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si";

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-400" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "PHP", icon: <FaPhp className="text-purple-400" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-500" /> },
    { name: "CodeIgniter", icon: <SiCodeigniter className="text-red-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Enhanced background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-slate-800/10 opacity-60" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-700/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center py-24">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white animate-[fadeDown_1s_ease_forwards]">
              My Skills
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`
                  skill-card opacity-0 translate-y-8 
                  group relative overflow-hidden rounded-2xl 
                  bg-gradient-to-br from-slate-900/90 via-black/90 to-slate-950/90
                  backdrop-blur-sm border border-slate-800/50 p-6
                  transform hover:scale-105 transition-all duration-500 ease-out
                  hover:shadow-lg hover:shadow-amber-900/20
                `}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transitionProperty: 'all',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDuration: '600ms'
                }}
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700/0 via-amber-700/5 to-amber-700/0 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                
                <div className="relative flex flex-col items-center justify-center space-y-3">
                  <div className="text-5xl transform transition-all duration-500 ease-out
                    group-hover:scale-110 group-hover:rotate-12 group-hover:drop-shadow-lg">
                    {skill.icon}
                  </div>
                  <h3 className="text-sm font-medium text-gray-300 transition-all duration-300
                    group-hover:text-white group-hover:font-semibold">
                    {skill.name}
                  </h3>
                </div>

                {/* Enhanced gradient glow effect */}
                <div className="absolute -inset-x-full -inset-y-full z-0 opacity-0 
                  group-hover:opacity-30 transition-all duration-700 ease-out
                  bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700
                  blur-3xl animate-[gradient_15s_ease_infinite]">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes gradient {
            0%, 100% { transform: translate(0%, 0%); }
            25% { transform: translate(25%, 25%); }
            50% { transform: translate(-25%, -25%); }
            75% { transform: translate(-25%, 25%); }
          }
          
          @keyframes fadeDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
};

export default Skills;