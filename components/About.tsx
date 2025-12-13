import React, { useState } from 'react';
import { User, Book, Code, ChevronDown, Quote } from 'lucide-react';

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="sobre-mi" className="py-24 bg-slate-900 dark:bg-slate-950 px-4 scroll-mt-16 relative overflow-hidden transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Quote Section */}
        <div className="text-center mb-12">
          <Quote className="w-12 h-12 mx-auto mb-6 text-blue-500" />
          <blockquote className="text-2xl md:text-3xl font-serif italic text-white mb-6 leading-relaxed px-4">
            "Todos piensan en cambiar el mundo, pero nadie piensa en cambiarse a sí mismo."
          </blockquote>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-blue-500/50"></div>
            <p className="text-slate-400 uppercase tracking-wider text-sm font-medium">León Tolstói</p>
            <div className="h-px w-12 bg-blue-500/50"></div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-500/50 rounded-full text-white font-medium transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1"
          >
            <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            {isExpanded ? 'Ocultar historia' : 'Conoce mi historia'}
            <ChevronDown 
              className={`w-5 h-5 transition-all duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        {/* Bio Section - Expandable */}
        <div 
          className={`transition-all duration-700 ease-in-out ${
            isExpanded ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-600/20 rounded-full">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Sobre mí</h3>
            </div>

            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p className="text-lg">
                Ante todo, soy un <span className="text-white font-semibold">apasionado de los libros</span>; la ficción es mi gran refugio. Fue gracias a mi experiencia en medios digitales y escritura que encontré mi camino hacia la tecnología.
              </p>

              <p className="text-lg">
                Hoy, me dedico a <span className="text-white font-semibold">combinar soluciones eficientes con herramientas digitales</span>, siempre con el propósito de construir y dar vida a las historias que tanto me inspiran.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-10 pt-8 border-t border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg flex-shrink-0">
                    <Book className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Periodista</h4>
                    <p className="text-sm text-slate-400">
                      Experiencia en medios digitales, storytelling y comunicación efectiva.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600/20 rounded-lg flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Full-Stack Developer</h4>
                    <p className="text-sm text-slate-400">
                      Desarrollo web con Python, React, TypeScript y tecnologías modernas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-slate-400 mb-4 uppercase tracking-wider font-medium">Intereses</p>
                <div className="flex flex-wrap gap-3">
                  {['Literatura', 'Inteligencia Artificial', 'Periodismo de Datos', 'Storytelling Digital', 'Tecnología & Sociedad'].map((interest) => (
                    <span 
                      key={interest}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
