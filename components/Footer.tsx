import React, { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contacto"
      className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-16 px-4 scroll-mt-16 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`flex flex-col items-center space-y-4 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="mailto:a.j.castro.b@gmail.com"
            className="flex items-center text-lg text-slate-900 dark:text-white hover:text-accent dark:hover:text-accent transition-all duration-300 font-medium group"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="relative">
              a.j.castro.b@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>

          <div className="flex space-x-6 mt-6">
            <a
              href="https://github.com/ajcastrob"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-300 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 border border-transparent hover:border-slate-100 dark:hover:border-slate-700 transform hover:scale-110 hover:-translate-y-1"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/josé-castro-b600791a4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 text-slate-400 hover:text-[#0077b5] transition-all duration-300 rounded-full hover:bg-blue-50 border border-transparent hover:border-blue-100 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div
          className={`mt-16 text-sm text-slate-400 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          &copy; {new Date().getFullYear()} José Castro
        </div>
      </div>
    </footer>
  );
};

export default Footer;
