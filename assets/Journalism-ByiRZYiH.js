import{c as l,r,j as e}from"./index-5kTuVH1E.js";import{E as c}from"./external-link-MA7vwSdA.js";/**
 * @license lucide-react v0.560.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2",key:"39pd36"}],["rect",{width:"8",height:"4",x:"10",y:"6",rx:"1",key:"aywv1n"}]],i=l("newspaper",d),m=[{id:1,title:"Dijo que todo iba a estar bien",description:"Un artículo que explora las complejidades de la esperanza y las promesas en tiempos difíciles.",image:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",publication:"La Vida de Nos",date:"2024",link:"https://www.lavidadenos.com/dijo-que-todo-iba-a-estar-bien"}],h=()=>{const[o,n]=r.useState(!1),a=r.useRef(null);return r.useEffect(()=>{const t=new IntersectionObserver(([s])=>{s.isIntersecting&&n(!0)},{threshold:.1});return a.current&&t.observe(a.current),()=>{a.current&&t.unobserve(a.current)}},[]),e.jsxs("section",{ref:a,id:"periodismo",className:"py-24 bg-white dark:bg-slate-950 px-4 scroll-mt-16 transition-colors duration-300",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[e.jsx(i,{className:"w-8 h-8 text-accent animate-pulse"}),e.jsx("h2",{className:"text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 via-accent to-slate-900 dark:from-white dark:via-accent dark:to-white bg-clip-text text-transparent animate-gradient-text bg-[length:200%_auto]",children:"Periodismo"})]}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors duration-300",children:"Historias que conectan, informan y transforman perspectivas."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:m.map((t,s)=>e.jsxs("div",{className:`bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group ${o?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${s*200}ms`},children:[e.jsxs("div",{className:"relative overflow-hidden h-56",children:[e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"})]}),e.jsxs("div",{className:"p-8 flex flex-col flex-grow",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-sm font-medium text-accent animate-shimmer",children:t.publication}),e.jsx("span",{className:"text-slate-400",children:"•"}),e.jsx("span",{className:"text-sm text-slate-500",children:t.date})]}),e.jsx("h3",{className:"text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-accent transition-colors duration-300",children:t.title}),e.jsx("p",{className:"text-slate-600 dark:text-slate-400 mb-6 text-base leading-relaxed flex-grow transition-colors duration-300",children:t.description}),e.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"group/btn relative w-full inline-flex items-center justify-center px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white hover:border-slate-900 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 overflow-hidden",children:[e.jsx("span",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 opacity-0 group-hover/btn:opacity-20 blur-lg transition-opacity duration-300"}),e.jsx("span",{className:"absolute inset-0 rounded-xl border-2 border-slate-400/30 opacity-0 group-hover/btn:opacity-100 animate-button-glow"}),e.jsxs("span",{className:"relative z-10 flex items-center",children:[e.jsx(i,{className:"mr-2 h-4 w-4"}),"Leer Artículo",e.jsx(c,{className:"ml-2 h-4 w-4 opacity-50"})]})]})]})]},t.id))})]}),e.jsx("style",{children:`
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

        @keyframes button-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(148, 163, 184, 0.3), 0 0 10px rgba(148, 163, 184, 0.2); }
          50% { box-shadow: 0 0 15px rgba(148, 163, 184, 0.5), 0 0 25px rgba(148, 163, 184, 0.3); }
        }

        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }
      `})]})};export{h as default};
