import React, { useState, useEffect, useRef, memo } from "react";
import { ChevronLeft, ChevronRight, X, Github, Globe, Calendar, Code2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const ProjectImageSlider = memo(({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    const preloadImages = () => {
      project.images.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, src]));
        };
      });
    };
    preloadImages();
  }, [project.images]);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % project.images.length
        );
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused, project.images.length]);

  const handleNavigation = (index) => {
    setCurrentImageIndex(index);
    setIsPaused(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div 
      className="relative w-full h-[600px] overflow-hidden group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full h-full">
        {project.images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${project.title} slide ${index + 1}`}
            className={`
              absolute top-0 left-0 w-full h-full object-contain bg-gray-900
              transition-all duration-500 ease-in-out
              ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              ${loadedImages.has(src) ? '' : 'invisible'}
            `}
          />
        ))}
      </div>

      {project.images.length > 1 && (
        <>
          <button 
            onClick={() => handleNavigation(
              currentImageIndex === 0 
                ? project.images.length - 1 
                : currentImageIndex - 1
            )}
            className="
              absolute top-1/2 left-4 -translate-y-1/2 
              bg-black/50 text-white p-3 rounded-full
              hover:bg-teal-600 transition-colors 
              opacity-0 group-hover:opacity-100
              z-30
            "
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => handleNavigation(
              (currentImageIndex + 1) % project.images.length
            )}
            className="
              absolute top-1/2 right-4 -translate-y-1/2 
              bg-black/50 text-white p-3 rounded-full
              hover:bg-teal-600 transition-colors 
              opacity-0 group-hover:opacity-100
              z-30
            "
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {project.images.map((_, index) => (
          <span
            key={index}
            onClick={() => handleNavigation(index)}
            className={`
              h-2 w-2 rounded-full cursor-pointer transition-colors
              ${index === currentImageIndex ? 'bg-teal-500' : 'bg-white/50'}
            `}
          />
        ))}
      </div>
    </div>
  );
});

const DetailModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm p-6 border-b border-gray-800 flex justify-between items-center z-20">
          <div className="flex items-center gap-3">
            <Code2 className="text-teal-500" size={28} />
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Calendar className="text-teal-500" size={20} />
                  Overview
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-teal-500/10 text-teal-400 px-4 py-2 rounded-lg text-sm font-medium border border-teal-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition-colors"
                  >
                    <Globe size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-white mb-3">Gallery</h4>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <ProjectImageSlider project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = memo(({ project, isVisible }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div
       className={`
        group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden 
        transform transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:shadow-2xl hover:shadow-teal-500/10
        flex flex-col
        border border-gray-700/50
        max-w-sm
      `}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
        
        <div className="p-4 flex flex-col flex-grow"> 
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm line-clamp-2">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <div className="grid grid-cols-4 gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="bg-teal-500/10 text-teal-400 px-2 py-1 rounded-lg text-xs text-center truncate"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <button
              onClick={() => setShowDetail(true)}
              className="w-full bg-white/10 text-white py-3 rounded-lg 
                hover:bg-teal-500 transition-all duration-300
                transform hover:translate-y-[-2px]"
            >
              View Project
            </button>
          </div>
        </div>
      </div>

      {showDetail && (
        <DetailModal 
          project={project} 
          onClose={() => setShowDetail(false)} 
        />
      )}
    </>
  );
});

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
      { threshold: 0.1 }
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
      className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;