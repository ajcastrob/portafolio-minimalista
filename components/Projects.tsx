import React from 'react';
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
  return (
    <section id="proyectos" className="py-24 bg-slate-50 px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Proyectos Destacados</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Soluciones tecnológicas aplicadas a finanzas y medios de comunicación, integrando Inteligencia Artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="relative overflow-hidden group h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 text-base leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 group-hover:shadow-sm"
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