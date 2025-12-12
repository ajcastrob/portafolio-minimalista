import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1740&auto=format&fit=crop"
          alt="Workspace background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
          Full-Stack Developer <br className="hidden md:block" />
          <span className="text-accent">&</span> Periodista
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Combino la lógica del código con el arte de la comunicación para crear experiencias web impactantes, accesibles y centradas en el usuario.
        </p>

        <div className="flex justify-center">
          <a
            href="#proyectos"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-accent hover:bg-accentHover transition-all duration-300 transform hover:-translate-y-1"
          >
            Ver Proyectos
            <ArrowDown className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;