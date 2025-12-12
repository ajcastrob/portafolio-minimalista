import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = 'Combino la lógica del código con el arte de la comunicación para crear experiencias web impactantes, accesibles y centradas en el usuario.';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

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
        <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-sm transition-colors duration-300"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in">
          <span className="text-slate-900 dark:text-white transition-colors duration-300">Full-Stack Developer</span>
          <br className="hidden md:block" />
          <span className="text-accent animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto]">
            & Periodista
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed min-h-[120px] animate-fade-in-delay transition-colors duration-300">
          {text}
          <span className="animate-blink">|</span>
        </p>

        <div className="flex justify-center animate-fade-in-delay-2">
          <a
            href="#proyectos"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-accent hover:bg-accentHover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Ver Proyectos
            <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.3s forwards;
        }
        
        .animate-fade-in-delay-2 {
          opacity: 0;
          animation: fade-in 0.8s ease-out 0.6s forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
