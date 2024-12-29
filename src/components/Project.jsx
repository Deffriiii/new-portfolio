import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Updated projects data with multiple images (same as original code)
const projectsData = [
  {
    id: 1,
    title: "Dynamic Gallery",
    description: "Galeri Dinamis, menampilkan galeri gambar responsif dengan pembaruan waktu nyata dan navigasi yang mulus.",
    technologies: ["React", "CSS", "Unsplash API"],
    images: [
      "/images/projects/dynamic-gallery/Dynamic-Gallery.png",
      "/images/projects/dynamic-gallery/Dynamic-Gallery-1.png",
      "/images/projects/dynamic-gallery/Dynamic-Gallery-2.png"
    ],
    githubLink: "https://github.com/Deffriiii/Dynamic_Gallery",
    liveLink: "https://dynamic-gallery-mu.vercel.app/",
  },
  {
    id: 2,
    title: "Anime Finder",
    description: "Platform penemuan anime yang menyediakan pencarian komprehensif dan informasi detail untuk menemukan anime favorit Anda.",
    technologies: ["React", "CSS", "Jikan API"],
    images: [
      "/images/projects/Anime-Finder/Anime-Finder.png",
      "/images/projects/Anime-Finder/Anime-Finder-2.png",
      "/images/projects/Anime-Finder/Anime-Finder-3.png"
    ],
    githubLink: "https://github.com/Deffriiii/Anime_Finder",
    liveLink: "https://anime-finder-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Sebuah website e-commerce yang dibangun dengan CodeIgniter 4 dan Bootstrap, dilengkapi dengan fitur multi-login untuk admin dan pengguna.",
    technologies: ["Codeigniter", "Bootstrap", "PHP"],
    images: [
      "/images/projects/ecommerce/ecommerce.png",
      "/images/projects/ecommerce/ecommerce-1.png",
      "/images/projects/ecommerce/ecommerce-2.png",
      "/images/projects/ecommerce/ecommerce-3.png",
      "/images/projects/ecommerce/ecommerce-4.png"
    ],
    githubLink: "https://github.com/Deffriiii/e-commerce/",
    liveLink: "#",
  },
  {
    id: 4,
    title: "Movie Finder",
    description: "Sebuah website responsif yang dirancang untuk memudahkan pengguna dalam mencari, menjelajahi, dan menemukan berbagai film favorit mereka dengan mudah.",
    technologies: ["Vite+React", "Tailwind Css", "TmdbApi"],
    images: [
      "/images/projects/movie-finder/movie-finder.png",
      "/images/projects/movie-finder/movie-finder-2.png",
      "/images/projects/movie-finder/movie-finder-3.png",
      "/images/projects/movie-finder/movie-finder-4.png",
      "/images/projects/movie-finder/movie-finder-5.png",
      "/images/projects/movie-finder/movie-finder-6.png",
      "/images/projects/movie-finder/movie-finder-7.png",
      "/images/projects/movie-finder/movie-finder-8.png"
    ],
    githubLink: "https://github.com/Deffriiii/movie-finder",
    liveLink: "https://movie-finder-bice-six.vercel.app/",
  },
  {
    id: 5,
    title: "Hotel Reservation",
    description: "Proyek ini adalah sistem reservasi hotel berbasis web yang dibangun dengan Laravel untuk backend dan React.js untuk frontend, menggunakan Tailwind CSS untuk desain responsif. Sistem mendukung multi-login untuk admin dan user. Admin dapat mengelola data kamar dan reservasi, sementara user dapat mencari, dan memesan kamar. Proyek ini dirancang untuk memberikan pengalaman pengguna yang modern, cepat, dan efisien.",
    technologies: ["Vite+React", "Tailwind Css", "Laravel 10"],
    images: [
      "/images/projects/hotel-reservation/hotel-reservation.png",
      "/images/projects/hotel-reservation/hotel-reservation-2.png",
      "/images/projects/hotel-reservation/hotel-reservation-3.png",
      "/images/projects/hotel-reservation/hotel-reservation-4.png",
      "/images/projects/hotel-reservation/hotel-reservation-5.png",
      "/images/projects/hotel-reservation/hotel-reservation-6.png",
      "/images/projects/hotel-reservation/hotel-reservation-7.png",
      "/images/projects/hotel-reservation/hotel-reservation-8.png",
      "/images/projects/hotel-reservation/hotel-reservation-9.png",
      "/images/projects/hotel-reservation/hotel-reservation-10.png",
      "/images/projects/hotel-reservation/hotel-reservation-11.png",
      "/images/projects/hotel-reservation/hotel-reservation-12.png",
      "/images/projects/hotel-reservation/hotel-reservation-13.png",
      "/images/projects/hotel-reservation/hotel-reservation-14.png",
      "/images/projects/hotel-reservation/hotel-reservation-15.png",
      "/images/projects/hotel-reservation/hotel-reservation-16.png",
      "/images/projects/hotel-reservation/hotel-reservation-17.png",
      "/images/projects/hotel-reservation/hotel-reservation-18.png"
    ],
    githubLink: "https://github.com/Deffriiii/hotel-reservation",
    liveLink: "#",
  },
];

const ProjectImageSlider = ({ project, isVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-64 overflow-hidden group">
      {/* Slider Images */}
      <div className="w-full h-full transition-transform duration-500 ease-in-out">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} slide ${currentImageIndex + 1}`}
          className="w-full h-full object-contain bg-gray-900"
        />
      </div>

      {/* Overlay with Links */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex space-x-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
          >
            GitHub
          </a>
          {project.liveLink !== "#" && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 text-white px-4 py-2 rounded-lg hover:bg-teal-600 hover:border-teal-600 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      {project.images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute top-1/2 left-2 -translate-y-1/2 
            bg-black/50 text-white p-2 rounded-full 
            hover:bg-teal-600 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute top-1/2 right-2 -translate-y-1/2 
            bg-black/50 text-white p-2 rounded-full 
            hover:bg-teal-600 transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Indicator Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {project.images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`
              h-2 w-2 rounded-full cursor-pointer
              ${index === currentImageIndex 
                ? 'bg-teal-500' 
                : 'bg-white/50'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, isVisible }) => {
  return (
    <div
      className={`
        bg-gray-800/70 rounded-lg overflow-hidden shadow-2xl 
        transform transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        hover:scale-105 hover:shadow-xl
        flex flex-col
        border border-gray-700/50
      `}
    >
      <ProjectImageSlider project={project} isVisible={isVisible} />
      <div className="p-6 flex flex-col flex-grow"> 
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2"> 
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="
                bg-teal-500/20 text-teal-300 
                px-2 py-1 rounded-full 
                text-xs
                inline-block 
                whitespace-nowrap
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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
        threshold: 0.1,
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
      id="projects"
      className={`
        py-16 bg-gradient-to-b from-black via-gray-900 to-black
        transition-all duration-1000 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="container">
        <h2
          className={`
            text-4xl font-bold text-center mb-12 text-white
            transition-all duration-1000 ease-in-out delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          My Projects
        </h2>

        <div
          className={`
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
            transition-all duration-1000 ease-in-out delay-500
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;