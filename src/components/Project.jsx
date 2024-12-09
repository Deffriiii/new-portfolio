import React, { useState, useEffect, useRef } from "react";

// Dummy project data (you can replace with your actual projects)
const projectsData = [
  {
    id: 1,
    title: "Dynamic Gallery",
    description: "Full-stack e-commerce platform with admin management.",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "/images/projects/Dynamic-Gallery.png",
    githubLink: "#",
    liveLink: "https://dynamic-gallery-mu.vercel.app/",
  },
  {
    id: 2,
    title: "Anime Finder",
    description: "lorem.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: "/images/projects/Anime-Finder.png",
    githubLink: "#",
    liveLink: "https://anime-finder-zeta.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather tracking application with geolocation.",
    technologies: ["React", "OpenWeatherAPI", "Geolocation"],
    imageUrl: "/images/projects/weather.jpg",
    githubLink: "#",
    liveLink: "#",
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative task tracking and project management tool.",
    technologies: ["React", "Firebase", "Redux"],
    imageUrl: "/images/projects/taskmanager.jpg",
    githubLink: "#",
    liveLink: "#",
  },
];

const ProjectCard = ({ project, isVisible }) => {
  return (
    <div
      className={`
        bg-white/70 rounded-lg overflow-hidden shadow-lg 
        transform transition-all duration-500 ease-in-out
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
        hover:scale-105 hover:shadow-xl
      `}
    >
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-dark/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
              className="border border-dark text-light px-4 py-2 rounded-lg hover:bg-yellow hover:bg-secondary"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-dark">{project.title}</h3>
        <p className="text-dark/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-secondary/20 text-dark px-2 py-1 rounded-full text-xs"
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
