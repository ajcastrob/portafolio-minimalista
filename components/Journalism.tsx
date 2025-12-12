import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Newspaper } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  publication: string;
  date: string;
  link: string;
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "Dijo que todo iba a estar bien",
    description: "Un artículo que explora las complejidades de la esperanza y las promesas en tiempos difíciles.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    publication: "La Vida de Nos",
    date: "2024",
    link: "https://www.lavidadenos.com/dijo-que-todo-iba-a-estar-bien"
  }
];

const Journalism: React.FC = () => {
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
    <section ref={sectionRef} id="periodismo" className="py-24 bg-white dark:bg-slate-950 px-4 scroll-mt-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-accent animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-accent to-slate-900 dark:from-white dark:via-accent dark:to-white bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]">
              Periodismo
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            Historias que conectan, informan y transforman perspectivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articlesData.map((article, index) => (
            <div
              key={article.id}
              className={`bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-accent animate-shimmer">{article.publication}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-500">{article.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-base leading-relaxed flex-grow transition-colors duration-300">
                  {article.description}
                </p>

                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                >
                  <Newspaper className="mr-2 h-4 w-4" />
                  Leer Artículo
                  <ExternalLink className="ml-2 h-4 w-4 opacity-50" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-text {
          animation: gradient-text 4s ease infinite;
        }
        
        @keyframes shimmer {
          0% { opacity: 1; }
          50% { opacity: 0.7; }
          100% { opacity: 1; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Journalism;
