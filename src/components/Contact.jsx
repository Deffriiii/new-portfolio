import React, { useState, useEffect, useRef } from "react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Send 
} from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef(null);

  // Social Media Links (replace with your actual links)
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Deffriiii",
      name: "GitHub"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/defriprasetyo/",
      name: "LinkedIn"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/deffriiiiii/?hl=id",
      name: "Instagram"
    },
    {
      icon: Mail,
      url: "mailto:defriprasetyo1902@gmai.com",
      name: "Email"
    }
  ];

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementasi pengiriman form (contoh: bisa sambungkan dengan email service)
    console.log("Form submitted", formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="contact"
      className={`
        py-16 bg-gradient-to-b from-black via-gray-900 to-black
        transition-all duration-1000 ease-in-out
        ${isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
      `}
    >
      <div className="container">
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
          Contact Me
        </h2>

        <div 
          className={`
            flex flex-col md:flex-row gap-8
            transition-all duration-1000 ease-in-out delay-500
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
            }
          `}
        >
          {/* Social Media Links */}
          <div className="md:w-1/3 space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Social Media
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-center gap-2
                      bg-gray-900 p-3 rounded-lg text-white 
                    hover:bg-teal-400 transition-all duration-300
                    transform hover:scale-105 hover:shadow-md
                  "
                >
                  <social.icon className="w-6 h-6" />
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3 font- bg-gray-900 p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-white font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-2 rounded-lg border 
                    border-dark focus:outline-none 
                    focus:ring-2 focus:ring-yellow
                  "
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-white font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full px-4 py-2 rounded-lg border 
                    border-secondary/50 focus:outline-none 
                    focus:ring-2 focus:ring-yellow
                  "
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-white font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="
                    w-full px-4 py-2 rounded-lg border 
                    border-secondary/50 focus:outline-none 
                    focus:ring-2 focus:ring-yellow
                  "
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="
                  w-full bg-teal-400 text-dark py-3 rounded-lg 
                  hover:bg-white transition-all duration-300
                  flex items-center justify-center gap-2
                  font-semibold
                "
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;