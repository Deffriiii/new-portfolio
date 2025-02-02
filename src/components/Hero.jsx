import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  const texts = ["A Front-End Developer", "Web Developer"];

  useEffect(() => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      setCurrentText((prev) => texts[index].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === texts[index].length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length);
        }, 50);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [index]);

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center justify-center text-center pt-16 
      bg-gradient-to-b from-black via-slate-950 to-black
      background-animate text-gray-100"
    >
      {/* Enhanced gradient background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full 
          bg-gradient-to-br from-amber-900/10 via-transparent to-slate-800/20 opacity-60"></div>
        <div className="absolute top-20 left-20 w-96 h-96 
          bg-gradient-to-r from-amber-700/5 to-slate-800/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 
          bg-gradient-to-l from-slate-800/10 to-amber-900/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-3xl mx-4 space-y-8 
        bg-gradient-to-br from-slate-900/70 via-black/70 to-slate-950/70 
        p-12 rounded-3xl shadow-2xl 
        backdrop-blur-sm border border-slate-800/50 
        transform hover:scale-[1.02] transition-all duration-300">
        <div className="space-y-4">
         
          <h1 className="text-4xl md:text-6xl font-bold text-gray-100 tracking-tight">
            Halo, I am <br className="md:hidden" />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent relative">
              Defri Prasetyo
              <span className="absolute bottom-0 left-0 w-full h-0.5 
                bg-gradient-to-r from-amber-600 to-amber-700 opacity-30"></span>
            </span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 font-light">
          <span className="text-amber-600">{currentText}</span>
          <span className="animate-pulse">|</span>
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="group bg-gradient-to-r from-amber-700 to-amber-600 
            text-gray-100 px-8 py-3.5 rounded-xl 
            hover:from-amber-600 hover:to-amber-700 transition-all duration-300 
            transform hover:-translate-y-1 hover:shadow-xl 
            shadow-lg shadow-amber-900/20 font-medium"
          >
            <span className="flex items-center justify-center gap-2">
              View Projects
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          <a
            href="#contact"
            className="group border-2 border-amber-700 text-amber-600 px-8 py-3.5 rounded-xl 
            hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-600 
            hover:text-gray-100 hover:border-transparent
            transition-all duration-300 transform hover:-translate-y-1 
            hover:shadow-xl shadow-lg shadow-amber-900/10"
          >
            <span className="flex items-center justify-center gap-2">
              Contact Me
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M20 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M12 15l3-3m0 0l-3-3m3 3H4" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;