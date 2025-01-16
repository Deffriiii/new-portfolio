import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the component is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (  
    <section 
      ref={sectionRef}
      id="about" 
      className={`
       bg-gradient-to-b from-black via-gray-900 to-black
      background-animate text-white py-16 transition-all duration-1000 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
      `}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <h2 
          className={`
            text-3xl md:text-5xl font-bold text-center mb-12 text-white
            transition-all duration-1000 ease-in-out delay-300
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }
          `}
        >
          About Me
        </h2>
        <div 
          className={`
            flex flex-col md:flex-row items-center md:items-start 
            space-y-8 md:space-y-0 md:space-x-12
            transition-all duration-1000 ease-in-out delay-500
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }
          `}
        >
          {/* Gambar Profil */}
          <div className="flex-shrink-0">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className={`
                w-48 h-48 md:w-64 md:h-64 rounded-full object-cover 
                shadow-2xl border-4 border-teal-500/50 transform transition 
                hover:scale-105 hover:shadow-xl
                ${isVisible 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-90'
                }
              `}
            />
          </div>

          {/* Konten Teks */}
          <div 
            className={`
              max-w-2xl space-y-6 bg-gray-800/60 p-8 rounded-2xl shadow-2xl
              transition-all duration-1000 ease-in-out delay-700
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
              }
            `}
          >
            <p className="text-lg leading-relaxed text-white/90">
              Hi, I'm <span className="font-bold text-teal-400">Defri Prasetyo</span>, 
              a passionate <span className="text-teal-500">Front-End Developer </span> 
              with a strong interest in creating interactive, user-friendly, and visually
               appealing web applications. I specialize in crafting clean and responsive designs 
               using modern tools like React.js and Tailwind CSS. While my primary focus is
                on front-end development, I’m also eager to explore opportunities in backend and 
                full-stack development.
            </p>
            <p className="text-lg leading-relaxed text-white/90">
            As a recent graduate in Software Engineering, I’ve built a solid foundation in web 
            development and am committed to continuous learning. I stay updated with the latest
            industry trends and technologies to deliver innovative and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;