import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-white border-t border-slate-100 py-16 px-4 scroll-mt-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">¿Trabajamos juntos?</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          Siempre estoy abierto a discutir nuevos proyectos, ideas creativas o oportunidades para ser parte de tus visiones.
        </p>

        <div className="flex flex-col items-center space-y-4">
          <a 
            href="mailto:a.j.castro.b@gmail.com" 
            className="flex items-center text-lg text-slate-900 hover:text-accent transition-colors font-medium"
          >
            <Mail className="w-5 h-5 mr-2" />
            a.j.castro.b@gmail.com
          </a>

          <div className="flex space-x-6 mt-6">
            <a 
              href="https://github.com/ajcastrob" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-100"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/josé-castro-b600791a4/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 text-slate-400 hover:text-[#0077b5] transition-colors rounded-full hover:bg-blue-50 border border-transparent hover:border-blue-100"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-16 text-sm text-slate-400">
          &copy; {new Date().getFullYear()} José Castro. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;