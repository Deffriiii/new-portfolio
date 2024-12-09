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
        bg-gradient-to-br from-secondary/90 via-secondary to-primary/80 
        text-dark py-16 transition-all duration-1000 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
      `}
    >
      <div className="container">
        <h2 
          className={`
            text-3xl md:text-5xl font-bold text-center mb-8 text-dark
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
                shadow-lg border-4 border-yellow/50 transform transition 
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
              max-w-2xl space-y-4 bg-white/70 p-6 rounded-lg shadow-md
              transition-all duration-1000 ease-in-out delay-700
              ${isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
              }
            `}
          >
            <p className="text-lg leading-relaxed">
              Hi, I'm <span className="font-bold text-dark">Defri Prasetyo</span>, 
              a passionate <span className="text-yellow">Front-End Developer</span> 
              with a focus on building interactive and user-friendly web applications. 
              I love crafting clean and responsive designs using modern tools like 
              React.js and Tailwind CSS.
            </p>
            <p className="text-lg leading-relaxed">
              Over the past years, I've honed my skills in creating efficient, 
              dynamic, and visually appealing user interfaces. I'm continuously 
              learning and expanding my knowledge to stay up-to-date with the 
              latest industry trends and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;