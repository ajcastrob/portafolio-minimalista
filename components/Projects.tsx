import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Finance Tracker",
    description: "Asistente personal de finanzas con IA. Gestiona ingresos y egresos con visualizaciones interactivas y análisis conversacional mediante Google Gemini y Streamlit.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Streamlit", "Gemini API", "Plotly"],
    link: "https://github.com/ajcastrob/finance_tracker"
  },
  {
    id: 2,
    title: "News to Speech Pipeline",
    description: "Pipeline automatizado que extrae noticias, las clasifica utilizando Inteligencia Artificial y las convierte en archivos de audio MP3 mediante TTS.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
    tags: ["Python", "Gemini API", "OpenAI API"],
    link: "https://github.com/ajcastrob/news_to_speech"
  }
];

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} id="proyectos" className="py-24 bg-slate-50 dark:bg-slate-950 px-4 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-title transition-colors duration-300">
            <span className="inline-block hover:scale-110 transition-transform duration-300">P</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">r</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">o</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">y</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">e</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">c</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">t</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">o</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">s</span>
            <span className="inline-block mx-2"></span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">D</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">e</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">s</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">t</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">a</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">c</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">a</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">d</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">o</span>
            <span className="inline-block hover:scale-110 transition-transform duration-300">s</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            Soluciones tecnológicas aplicadas a finanzas y medios de comunicación, integrando Inteligencia Artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base leading-relaxed flex-grow transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Ver Repositorio
                  <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
