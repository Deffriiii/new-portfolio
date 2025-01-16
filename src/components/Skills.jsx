import React, { useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { SiJavascript, SiCodeigniter, SiTailwindcss, SiNextdotjs } from "react-icons/si";

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
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
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
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Background gradient that extends beyond the content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      {/* Main content container */}
      <div className="relative z-10 w-full min-h-screen flex flex-col justify-center py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white animate-fade-down">
            My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card opacity-0 translate-y-8 group relative overflow-hidden rounded-xl 
                         bg-gray-800/60 border border-gray-700/50 p-4
                         transform hover:scale-105 transition-all duration-300 ease-in-out
                         hover:shadow-lg hover:shadow-blue-500/20"
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="text-4xl transform transition-all duration-500 ease-in-out
                                group-hover:scale-110 group-hover:rotate-12">
                    {skill.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white/90 transition-all duration-300
                                group-hover:text-white">
                    {skill.name}
                  </h3>
                </div>

                <div className="absolute -inset-x-2/3 -inset-y-2/3 z-0 opacity-0 group-hover:opacity-50
                              transition-all duration-300 ease-in-out
                              bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                              blur-2xl group-hover:animate-gradient">
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { transform: translate(0%, 0%); }
          25% { transform: translate(25%, 25%); }
          50% { transform: translate(-25%, -25%); }
          75% { transform: translate(-25%, 25%); }
        }

        .animate-gradient {
          animation: gradient 15s ease infinite;
        }

        .animate-fade-down {
          animation: fade-down 1s ease forwards;
        }

        @keyframes fade-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-card.show {
          opacity: 1;
          transform: translateY(0);
        }

        /* Ensure the background covers any potential gaps */
        #skills::before {
          content: '';
          position: absolute;
          bottom: -100px; /* Extra coverage for scroll momentum */
          left: 0;
          right: 0;
          height: 100px;
          background: black;
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default Skills;