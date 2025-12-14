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
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-2 border-blue-400/30 rounded-full text-white font-semibold transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
          >
            {/* Animated background gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-[length:200%_100%] animate-shimmer-bg"></span>
            
            {/* Outer glow effect */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-75 blur-2xl transition-opacity duration-500 animate-pulse-slow"></span>
            
            {/* Rotating border effect */}
            <span className="absolute inset-0 rounded-full border-4 border-transparent animate-rotate-border" style={{borderImage: 'linear-gradient(90deg, rgba(96,165,250,0.8), rgba(168,85,247,0.8), rgba(96,165,250,0.8)) 1'}}></span>
            
            {/* Inner shine effect */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></span>
            </span>

            {/* Particles effect */}
            <span className="absolute inset-0 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-particle-1"></span>
              <span className="absolute w-1.5 h-1.5 bg-blue-300 rounded-full top-1/2 left-1/3 animate-particle-2"></span>
              <span className="absolute w-2 h-2 bg-purple-300 rounded-full top-3/4 right-1/4 animate-particle-3"></span>
            </span>
            
            <span className="relative z-10 flex items-center gap-3">
              <User className="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
              <span className="font-bold tracking-wide">{isExpanded ? 'Ocultar historia' : 'Conoce mi historia'}</span>
              <ChevronDown 
                className={`w-5 h-5 transition-all duration-500 ${isExpanded ? 'rotate-180' : ''} group-hover:animate-bounce`} 
              />
            </span>
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

      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(96, 165, 250, 0.3), 0 0 10px rgba(96, 165, 250, 0.2); }
          50% { box-shadow: 0 0 15px rgba(96, 165, 250, 0.6), 0 0 30px rgba(96, 165, 250, 0.4); }
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes shimmer-bg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-shimmer-bg {
          animation: shimmer-bg 3s ease infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(1.05); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }

        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-rotate-border {
          animation: rotate-border 4s linear infinite;
        }

        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(20px, -20px) scale(1.5); opacity: 1; }
        }

        .animate-particle-1 {
          animation: particle-1 2s ease-in-out infinite;
        }

        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(-15px, 15px) scale(1.3); opacity: 1; }
        }

        .animate-particle-2 {
          animation: particle-2 2.5s ease-in-out infinite 0.5s;
        }

        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0; }
          50% { transform: translate(10px, -25px) scale(1.4); opacity: 1; }
        }

        .animate-particle-3 {
          animation: particle-3 3s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default About;
