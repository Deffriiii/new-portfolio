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
        threshold: 0.1
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
        min-h-screen relative overflow-hidden
        bg-gradient-to-b from-black via-slate-950 to-black
        background-animate text-white py-24 transition-all duration-1000 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full 
          bg-gradient-to-br from-amber-900/5 via-transparent to-slate-800/10 opacity-60"></div>
        <div className="absolute top-20 right-20 w-96 h-96 
          bg-gradient-to-r from-amber-700/5 to-slate-800/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 
            className={`
              text-3xl md:text-5xl font-bold text-white
              transition-all duration-1000 ease-in-out delay-300
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            About Me
          </h2>
        </div>

        <div 
          className={`
            flex flex-col md:flex-row items-center md:items-start 
            space-y-8 md:space-y-0 md:space-x-12
            transition-all duration-1000 ease-in-out delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          {/* Profile Image with enhanced styling */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-700 
              rounded-full opacity-40 group-hover:opacity-60 blur transition duration-500"></div>
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className={`
                relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover 
                shadow-2xl border-4 border-amber-600/50 transform transition-all duration-500
                hover:scale-105 hover:border-amber-500
                ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
              `}
            />
          </div>

          {/* Enhanced Content Container */}
          <div 
            className={`
              max-w-2xl space-y-6 
              bg-gradient-to-br from-slate-900/90 via-black/90 to-slate-950/90
              p-8 rounded-2xl shadow-2xl backdrop-blur-sm
              border border-slate-800/50
              transition-all duration-1000 ease-in-out delay-700
              hover:shadow-amber-900/5
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
          >
            <p className="text-lg leading-relaxed text-gray-300">
              Hi, I'm <span className="font-bold bg-gradient-to-r from-amber-500 to-amber-600 
              bg-clip-text text-transparent">Defri Prasetyo</span>, 
              a passionate <span className="text-amber-500">Front-End Developer </span> 
              with a strong interest in creating interactive, user-friendly, and visually
              appealing web applications. I specialize in crafting clean and responsive designs 
              using modern tools like React.js and Tailwind CSS. While my primary focus is
              on front-end development, I'm also eager to explore opportunities in backend and 
              full-stack development.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-700/20 to-transparent my-6"></div>

            <p className="text-lg leading-relaxed text-gray-300">
              As a recent graduate in Software Engineering, I've built a solid foundation in web 
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