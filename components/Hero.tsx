import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Constellation from './Constellation';

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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden" role="banner" aria-label="Sección principal">
      {/* Constellation Effect */}
      <Constellation />

      {/* Background Image with Animations */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1740&auto=format&fit=crop"
          alt="Workspace background"
          className="w-full h-full object-cover animate-ken-burns"
        />
        {/* Gradient Overlay with animation */}
        <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-sm transition-colors duration-300 animate-gradient-overlay"></div>
        
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide-x"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-slide-x-reverse"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-slate-900 dark:text-white transition-colors duration-300">
            Full-Stack Developer
          </span>
          <span className="block mt-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            & Periodista
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed min-h-[120px] transition-colors duration-300">
          {text}
          {text.length > 0 && <span className="animate-blink">|</span>}
        </p>

        <div className="flex justify-center">
          <a
            href="#proyectos"
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
              <span className="font-bold tracking-wide">Ver Proyectos</span>
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce transition-all duration-300" />
            </span>
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

        /* Ken Burns effect for background image */
        @keyframes ken-burns {
          0% { transform: scale(1) translateX(0); }
          50% { transform: scale(1.05) translateX(-2%); }
          100% { transform: scale(1) translateX(0); }
        }

        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }

        /* Gradient overlay pulse */
        @keyframes gradient-overlay {
          0%, 100% { opacity: 0.85; }
          50% { opacity: 0.9; }
        }

        .animate-gradient-overlay {
          animation: gradient-overlay 5s ease-in-out infinite;
        }

        /* Sliding border lines */
        @keyframes slide-x {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-slide-x {
          animation: slide-x 3s linear infinite;
        }

        @keyframes slide-x-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }

        .animate-slide-x-reverse {
          animation: slide-x-reverse 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
