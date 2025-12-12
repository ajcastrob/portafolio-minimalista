import React from 'react';
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
  return (
    <section id="periodismo" className="py-24 bg-white px-4 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Newspaper className="w-8 h-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Periodismo</h2>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Historias que conectan, informan y transforman perspectivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {articlesData.map((article) => (
            <div key={article.id} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="relative overflow-hidden group h-56">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-accent">{article.publication}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-sm text-slate-500">{article.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">{article.title}</h3>
                <p className="text-slate-600 mb-6 text-base leading-relaxed flex-grow">
                  {article.description}
                </p>

                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200 group-hover:shadow-sm"
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
    </section>
  );
};

export default Journalism;
