import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, ArrowLeft, BookOpen } from 'lucide-react';
import Constellation from './Constellation';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  content: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tiempo para eso y mucho más",
    excerpt: "Un relato que explora la vulnerabilidad de la infancia y la responsabilidad moral en espacios cotidianos.",
    date: "15 Nov, 2024",
    readTime: "4 min lectura",
    category: "Narrativa",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-4">
          Cuido a la niña, pero ella ni siquiera me dice algo. No me mira a mí porque está concentrada en su videojuego. Así que si la escucho, sé que ahí pasa algo con su amiga en línea.
        </p>
        <p className="mb-4 font-semibold text-slate-700 dark:text-slate-300">
          —Somos millonarias.
        </p>
        <p className="mb-4 font-semibold text-slate-700 dark:text-slate-300">
          —Pero ahora tenemos que robar el banco.
        </p>
        <p className="mb-4">
          Salen disparando y a veces luchan por escapar de la policía. Riendo a gritos, ansiosas por huir. ¿Y el tuyo cómo va? Sostiene la computadora encima del sofá y grita. La pantalla se llena de colores y luces. Ruidos que, por alguna razón, a mí me parecen hasta curiosos, como una casa a punto de volar en pedacitos. ¡Fuego, fuego! Me llevo la mano al bolsillo y repaso con un dedo las hendiduras de una llave. Decido dejarla allí.
        </p>
        <p className="mb-4">
          Camino desde la sala hasta la cocina. Le sirvo Coca-Cola.
        </p>
        <p className="mb-4 font-semibold text-slate-700 dark:text-slate-300">
          —Fíjate en el dinero.
        </p>
        <p className="mb-4 font-semibold text-slate-700 dark:text-slate-300">
          —Podemos comprarnos hasta un camión.
        </p>
        <p className="mb-4">
          Tiene los audífonos inalámbricos puestos, pero empieza a subir y bajar el volumen cada tanto. Se bebe la Coca-Cola de un jalón.
        </p>
        <p className="mb-4">
          A continuación, me dedico a mirar el espacio entre ella y la pantalla. Cuento la distancia en este mini-apartamento. Solo un espacio entre sala y comedor. Una única llave que lo abre todo, la puerta principal.
        </p>
        <p className="mb-4">
          Me echo en una silla con respaldo y eso. Pongo mucho cuidado en cada uno de sus gestos, que en este punto son un reflejo del videojuego. Frena un carro y agacha su cabeza. Da vueltas y ladea su cuerpo. Va a marcha atrás y recuesta su espalda sobre el fieltro del sillón.
        </p>
        <p className="mb-4">
          Compruebo que aún tengo la llave en mi bolsillo y su mamá se ha echado un par de horas en el paseo con el ingeniero ese. Qué clase de mujer hace eso. Delante la niña da muestras de disfrutar con los ruidos de escopetas y pistolas. Me pongo a pensar que ni a patadas alguien llamará a emergencias.
        </p>
        <p className="mb-4 font-semibold text-slate-700 dark:text-slate-300">
          —Le voy a pegar más fuerte.
        </p>
        <p className="mb-4 font-semibold text-slate-700 dark:text-slate-300">
          —¿Quieres robarte su carro?
        </p>
        <p className="mb-4">
          Antes de pasarme a girar el candado sobre la puerta, me quedo de pie allí y pienso que toda la vida a esa pequeña le quedará la cicatriz de este momento. La hora en la que mamá la dejó ahí con una sola puerta en un apartamentito. Sin nadie alrededor más que otro desconocido con el que no quiso hablar.
        </p>
        <p className="mb-4">
          Introduzco la llave y dejo pasar el sonido de la cerradura al cerrarse. Tengo tiempo para eso y mucho más.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: "Autoayuda",
    excerpt: "Una reflexión metafórica sobre la soledad y los intentos personales de superación a través de rituales íntimos.",
    date: "8 Nov, 2024",
    readTime: "3 min lectura",
    category: "Ensayo",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-4">
          Ese mes empecé solo con mis propias miniolimpiadas. Tenía una silla plástica y sin hacer ningún esfuerzo me trepé a una escalera. Enseguida me encontré conmigo mismo, leyendo amenamente encima del techo de mi casa. Un suelo de cemento muy duro. Los días hasta ese momento eran parecidos unos a otros, como una pista de correr sin ningún atleta cerca.
        </p>
        <p className="mb-4">
          Tenía también globos ahí arriba y sentía que podía reventarlos en cualquier momento. Eran del tamaño de una pelota, pero sin nada de aire adentro. Se inflaban solo con las ideas que yo iba perdiendo una tras otra. Lo genial era que no había ningún récord ni un listón demasiado alto para reventar los globos.
        </p>
        <p className="mb-4">
          Y con mis dedos sobre las páginas, me las arreglaba para hacer una especie de deporte o atletismo muy ligero. Tenía eso de agrupar unas palabras y formar mis propias miniolimpiadas contra la idea de estar muy solo.
        </p>
        <p className="mb-4">
          El deporte consistía en seguir a un globo como si se tratara de algo muy curioso. Una idea simple se formaba y a la tercera o cuarta vez, terminaba volando por los aires. Hasta que alcanzaba cierta altura y ya no había forma de contener ese último respiro. Reventaba con sumo éxito sin traerme nada nuevo.
        </p>
        <p className="mb-4">
          Cabe pensar que eso me ponía muy mal. No haber ganado nada y después mirar fijamente el vacío de otro globo. ¿Lo estoy haciendo bien? Me preguntaba a veces a mí mismo.
        </p>
        <p className="mb-4">
          Entonces intentaba otra cosa. Subía el listón, pero no muy alto. El tamaño era ahora semejante a una esfera. Era ya una hazaña que esos globos se perdieran así de golpe. Varios metros en el cielo. El aire caliente hasta yo lo podía sentir. Y luego volvían a explotar, chupándose todo con una mayor velocidad.
        </p>
        <p className="mb-4">
          Pero al final siempre aparecía una ventisca gigantesca que podía moverme muchas veces. Mi silla plástica se tambaleaba. Las pequeñas páginas se perdían entre mis dedos y yo ya no podía responder con mayor habilidad a eso de formar palabras. Había casi soplado otro globo y este era una prueba muy necesaria para superar a gritos ese obstáculo casi infantil que se llama estar muy solo.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: "Notas sobre el relato policial",
    excerpt: "Un análisis sobre la construcción del suspenso y el papel del asesino en la literatura de crimen, desde Poe hasta Chesterton.",
    date: "25 Oct, 2024",
    readTime: "5 min lectura",
    category: "Crítica Literaria",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop",
    content: (
      <>
        <p className="mb-4">
          Creo que fue un tal Edgar Allan Poe quien inició toda esa sensación del terror asociada al crimen. E incluso ejecutó una teoría que dejó a lo largo de sus muy bien conocidos cuentos.
        </p>
        <p className="mb-4">
          Porque para Poe una muerte prematura e inesperada, pues no le generaba mucha gracia. Hay ya reglas establecidas sobre esto.
        </p>
        <p className="mb-4">
          Para empezar hay un orden para este tipo de cosas, ya que por regla el asesino es casi siempre lo primero.
        </p>
        <p className="mb-4">
          Chesterton, otro genial autor de ensayos sobre cuentos policiales, dijo una vez que una novela policíaca es casi la única novela en la que el protagonista puede convertirse en el villano de la historia o viceversa. Y si bien es cierto que eso no asegura del todo un giro inesperado, en última instancia sí ayuda a abstenerse de aplicar ciertas leyes hacia los culpables. Dicho sea de paso, gente del poder o dueños en un único sentido de sus acciones propias. Nada de dementes ni locos pasionales.
        </p>
        <p className="mb-4">
          Otra regla es que en vez de otro montón de grandes detalles, la acción empieza por unas migajitas que siempre vemos junto al cadáver y en una estricta secuencia se viene a la cabeza quién dejó eso allí. ¿Fue un descuido o un despiste?
        </p>
        <p className="mb-4">
          La sangre y las vísceras vienen luego. Son puestas como parte de las migajas que se llevan las hormigas, de modo que el lector ni pueda imaginarse cómo trepan por una pared y se pierden en un lugar oscuro y secreto: la habitación del asesino.
        </p>
        <p className="mb-4">
          Más aún en el relato policial, el asesino sigue siendo una incógnita por varios trucos verbales. Más bien es un exceso considerar que el crimen sea la cualidad más relevante de estos relatos. Y esto es evidente en <em>Crímenes de la Calle Morgue</em>, donde Poe revela todo a través de una simple frase: "Dupin, este cabello no es humano", y de inmediato resuena en la cabeza lo bestial de ese asesinato.
        </p>
        <p className="mb-4">
          Sin el uso de este detalle, la descripción que se nos hace al principio se perdería como una de las tantas que alguien más hubiese escrito por ahí. Pero Poe, por supuesto, no era cualquiera. Sabía que achacarle el crimen a un orangután no era suficiente sin haber creado esa especie de artificio verbal que eran cada una de sus historias.
        </p>
        <p className="mb-4">
          A todas estas, el elogio de la descomposición de un cadáver no genera tampoco gran cosa. Hay demasiadas notas rojas que ya hacen eso. Lo que quita el aliento, en verdad, es ver algo vivo. Mirar al asesino cómo ordena sus pensamientos y esconde su existencia, a la espera de ejecutar sus ideas en un instante, sin vacilar ni siquiera un segundo.
        </p>
        <p className="mb-4">
          Es muy simple matar a alguien. Al menos en literatura. Lo difícil es construir un plan para que el villano crea en su moral como el peso de un edificio. No solo son las hormigas, sino que todo va a volver hacia el homicida. Puede que en el camino se haya enterado uno que otro lector, pero paredes adentro se encuentra el verdadero nido de todo buen relato policial.
        </p>
      </>
    )
  }
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closePost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="blog" className="py-24 bg-slate-900 dark:bg-slate-950 px-4 scroll-mt-16 transition-colors duration-300 relative overflow-hidden">
      {/* Constellation Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <Constellation />
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float-delay"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-indigo-500 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-accent animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-accent to-slate-900 dark:from-white dark:via-accent dark:to-white bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto] transition-colors duration-300">
              Escritos
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300">
            Narrativa, ensayos y reflexiones sobre literatura, tecnología y la vida cotidiana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col h-full bg-white/5 dark:bg-slate-800/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 dark:border-slate-700/50 hover:border-accent/50 dark:hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20">
              {post.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-400 dark:text-slate-500 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                  <span className="text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white dark:text-white mb-3 group-hover:text-accent transition-colors duration-300 cursor-pointer" onClick={() => openPost(post)}>
                  {post.title}
                </h3>
                
                <p className="text-slate-300 dark:text-slate-400 mb-6 flex-grow leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50 mt-auto">
                  <button 
                    onClick={() => openPost(post)}
                    className="inline-flex items-center text-sm font-semibold text-accent hover:text-accentHover transition-colors focus:outline-none"
                  >
                    Leer completo <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal del artículo */}
      {selectedPost && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm animate-fadeIn">
          <div className="min-h-screen px-4 py-12 md:py-20 flex justify-center">
            <div className="w-full max-w-3xl bg-white dark:bg-slate-900 shadow-2xl rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 relative">
              
              <button 
                onClick={closePost}
                className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-full hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors z-10"
              >
                <X size={24} />
              </button>

              {selectedPost.image && (
                <div className="h-64 md:h-80 w-full relative">
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
                </div>
              )}

              <div className="p-8 md:p-12 -mt-20 relative">
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-md">
                    {selectedPost.category}
                  </span>
                  <span className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-medium">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center text-slate-500 dark:text-slate-400 text-sm font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    {selectedPost.readTime}
                  </span>
                </div>

                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed">
                  {selectedPost.content}
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <button 
                    onClick={closePost}
                    className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent font-medium transition-colors"
                  >
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Volver a escritos
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes gradient-text {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-text {
          animation: gradient-text 4s ease infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        .animate-float {
          animation: float 20s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 25s ease-in-out infinite;
          animation-delay: -5s;
        }

        .animate-float-slow {
          animation: float 30s ease-in-out infinite;
          animation-delay: -10s;
        }
      `}</style>
    </section>
  );
};

export default Blog;
