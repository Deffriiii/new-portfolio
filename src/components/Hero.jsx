import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);

  // Array teks yang akan ditampilkan secara bergantian
  const texts = ["A Front-End Developer", "Web Developer"];

  useEffect(() => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
      // Menambahkan karakter satu per satu
      setCurrentText((prev) => texts[index].slice(0, charIndex + 1));
      charIndex++;

      // Jika sudah selesai mengetik satu teks, jeda dan mulai mengetik teks berikutnya
      if (charIndex === texts[index].length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % texts.length); // Beralih ke teks berikutnya
        }, 50); // Jeda 2 detik sebelum mengganti teks
      }
    }, 100); // Kecepatan mengetik 100ms

    return () => clearInterval(typeInterval);
  }, [index]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center text-center pt-16 
      bg-gradient-to-br from-secondary/90 via-secondary to-primary/80"
    >
      <div className="max-w-2xl space-y-6">
        <h1 
          className="text-4xl md:text-6xl font-bold text-light mb-4"
        >
          Halo, I am <span className="text-dark">Defri Prasetyo</span>
        </h1>
        <p className="text-xl text-dark mb-8">{currentText}|</p>
        <div 
          className="flex justify-center space-x-4"
        >
          <a 
            href="#projects" 
            className="bg-yellow text-dark px-6 py-3 rounded-lg 
            hover:bg-light transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 
            shadow-md hover:shadow-xl"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="border border-yellow text-dark px-6 py-3 rounded-lg 
            hover:bg-dark hover:text-white transition-all duration-300 
            transform hover:-translate-y-1 hover:scale-105 
            shadow-md hover:shadow-xl"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;