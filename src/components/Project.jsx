import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Updated projects data with multiple images
const projectsData = [
  {
    id: 1,
    title: "Dynamic Gallery",
    description: "Galeri Dinamis, menampilkan galeri gambar responsif dengan pembaruan waktu nyata dan navigasi yang mulus.",
    technologies: ["React", "css", "Unsplash API"],
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
    <div className="relative w-full h-48 overflow-hidden group">
      {/* Slider Images */}
      <div className="w-full h-full transition-transform duration-500 ease-in-out">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} slide ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay with Links */}
      <div className="absolute inset-0 bg-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="flex space-x-4">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark text-light px-4 py-2 rounded-lg hover:bg-secondary"
          >
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-dark text-light px-4 py-2 rounded-lg hover:bg-secondary"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
      {project.images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute top-1/2 left-2 -translate-y-1/2 
            bg-dark/50 text-light p-2 rounded-full 
            hover:bg-secondary transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute top-1/2 right-2 -translate-y-1/2 
            bg-dark/50 text-light p-2 rounded-full 
            hover:bg-secondary transition-colors"
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
                ? 'bg-secondary' 
                : 'bg-dark/50'
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
        bg-white/70 rounded-lg overflow-hidden shadow-lg 
        transform transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        hover:scale-105 hover:shadow-xl
        flex flex-col h-full  // Added to ensure consistent height
      `}
    >
      <ProjectImageSlider project={project} isVisible={isVisible} />
      <div className="p-6 flex flex-col flex-grow"> {/* Added flex-grow */}
        <h3 className="text-xl font-bold mb-2 text-dark">{project.title}</h3>
        <p className="text-dark/70 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 items-center justify-start"> {/* Added alignment */}
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="
                bg-secondary/20 text-dark 
                px-1 py-1 rounded-full 
                text-xs 
                inline-block  // Ensures consistent sizing
                whitespace-nowrap  // Prevents wrapping
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
        py-16 bg-gradient-to-b from-white to-secondary
        transition-all duration-1000 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="container">
        <h2
          className={`
            text-3xl md:text-5xl font-bold text-center mb-12 text-dark
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