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
      className="relative w-full aspect-video overflow-hidden rounded-xl group bg-gray-900"
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
              absolute top-0 left-0 w-full h-full object-contain
              transition-all duration-700 ease-in-out
              ${index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}
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
              bg-black/30 backdrop-blur-sm text-white p-2 rounded-full
              hover:bg-black/50 transition-all duration-300
              opacity-0 group-hover:opacity-100 transform -translate-x-4 
              group-hover:translate-x-0
              z-30
            "
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => handleNavigation(
              (currentImageIndex + 1) % project.images.length
            )}
            className="
              absolute top-1/2 right-4 -translate-y-1/2 
              bg-black/30 backdrop-blur-sm text-white p-2 rounded-full
              hover:bg-black/50 transition-all duration-300
              opacity-0 group-hover:opacity-100 transform translate-x-4 
              group-hover:translate-x-0
              z-30
            "
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {project.images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`
              h-1.5 transition-all duration-300 rounded-full
              ${index === currentImageIndex 
                ? 'w-6 bg-white' 
                : 'w-1.5 bg-white/50 hover:bg-white/80'}
            `}
          />
        ))}
      </div>
    </div>
  );
});

const DetailModal = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl animate-modal-in"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-95" />
        
        <div className="relative max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-black/50 backdrop-blur-md p-6 border-b border-white/10 flex justify-between items-center z-20">
            <h3 className="text-3xl font-bold text-white">
              {project.title}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <Calendar className="text-amber-500" size={24} />
                    Overview
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
                  <h4 className="text-xl font-semibold text-white mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-amber-500/10 text-amber-400 px-6 py-2 rounded-lg text-sm font-medium border border-amber-500/20
                        hover:bg-amber-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all duration-300
                      hover:transform hover:-translate-y-1 border border-white/10"
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
                      className="flex items-center gap-3 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-all duration-300
                      hover:transform hover:-translate-y-1"
                    >
                      <Globe size={20} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.8s' }}>
                <h4 className="text-xl font-semibold text-white mb-4">Gallery</h4>
                <ProjectImageSlider project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = memo(({ project, isVisible, delay }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          group rounded-xl overflow-hidden 
          transform transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
          hover:shadow-2xl hover:shadow-amber-500/10 relative
          border border-gray-700/50
        `}
        style={{ 
          animationDelay: `${delay}ms`,
          transform: isHovered ? 'translateY(-8px)' : 'none'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transform transition-transform duration-700 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
        
        <div className="relative p-6 bg-gradient-to-b from-gray-800 to-gray-900">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>
          
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="bg-amber-500/10 text-amber-400 px-3 py-1 rounded-lg text-xs
                  transform transition-transform duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <button
              onClick={() => setShowDetail(true)}
              className="w-full bg-white/5 text-white py-3 rounded-lg
                hover:bg-amber-500 transition-all duration-300
                group-hover:border-amber-500"
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
      className="relative min-h-screen w-full py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes modalIn {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-modal-in {
          animation: modalIn 0.5s ease-out forwards;
        }

        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Projects;