import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import Constellation from "./Constellation";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const fullText =
    "Combino la lógica del código con el arte de la comunicación para crear experiencias web impactantes, accesibles y centradas en el usuario.";

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
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      role="banner"
      aria-label="Sección principal"
    >
      {/* Constellation Effect */}
      <Constellation />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=1740&auto=format&fit=crop"
          alt="Workspace background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-white/85 dark:bg-slate-950/85 backdrop-blur-sm transition-colors duration-300"></div>
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
            className="group relative inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden"
          >
            {/* Glow effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 animate-glow"></span>
            <span className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 animate-border-glow"></span>

            {/* Content */}
            <span className="relative z-10 flex items-center">
              Ver Proyectos
              <ArrowDown className="ml-2 h-5 w-5" />
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

        @keyframes glow {
          0%, 100% { transform: scale(1); opacity: 0; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(96, 165, 250, 0.5), 0 0 10px rgba(96, 165, 250, 0.3); }
          50% { box-shadow: 0 0 15px rgba(96, 165, 250, 0.8), 0 0 30px rgba(96, 165, 250, 0.5); }
        }

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
