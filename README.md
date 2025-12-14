# 🌟 José Castro - Portafolio Profesional

[![Website](https://img.shields.io/badge/Website-Live-success)](https://ajcastrob.github.io/portafolio-minimalista/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-blue)](https://pages.github.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Portafolio profesional minimalista y moderno para José Castro - Full-Stack Developer & Periodista.

## 🚀 Demo en Vivo

👉 **[Ver Portafolio](https://ajcastrob.github.io/portafolio-minimalista/)**

## 📋 Descripción

Sitio web profesional que combina desarrollo Full-Stack con periodismo digital. Presenta proyectos de tecnología, artículos periodísticos y una experiencia de usuario impactante con efectos visuales modernos.

## ✨ Características

- 🎨 **Diseño Minimalista**: Interfaz limpia y profesional
- 🌓 **Modo Oscuro/Claro**: Tema adaptable a preferencias del usuario
- ⚡ **Efectos Visuales Avanzados**: 
  - Constelación con partículas conectadas
  - Efectos de luz en botones
  - Animaciones de entrada al scroll
  - Typewriter effect
- 📱 **Totalmente Responsive**: Optimizado para todos los dispositivos
- ♿ **Accesible**: Cumple con estándares WCAG
- 🔍 **SEO Optimizado**: Meta tags, Open Graph, Schema.org
- ⚡ **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías

- **React** 19.2.3
- **TypeScript** 5.8.2
- **Vite** 6.2.0
- **Tailwind CSS** (vía CDN)
- **Lucide React** (iconos)
- **Canvas API** (efectos visuales)

## 📂 Estructura del Proyecto

```
portafolio-minimalista/
├── components/
│   ├── Navbar.tsx           # Navegación con foto de perfil
│   ├── Hero.tsx             # Sección principal con efectos
│   ├── Constellation.tsx    # Efecto de partículas
│   ├── About.tsx            # Sobre mí con biografía
│   ├── Projects.tsx         # Proyectos destacados
│   ├── Journalism.tsx       # Artículos periodísticos
│   └── Footer.tsx           # Contacto y redes sociales
├── public/
│   ├── profile.jpg          # Foto de perfil
│   ├── robots.txt           # SEO
│   ├── sitemap.xml          # Mapa del sitio
│   └── manifest.json        # PWA
├── App.tsx                  # Componente principal
├── index.html               # HTML con meta tags SEO
└── vite.config.ts           # Configuración Vite

```

## 🚀 Instalación y Desarrollo

### Prerequisitos

- Node.js 18+
- npm o yarn

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/ajcastrob/portafolio-minimalista.git

# Entrar al directorio
cd portafolio-minimalista

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en el navegador
http://localhost:3000/portafolio-minimalista/
```

## 📦 Build y Deploy

```bash
# Construir para producción
npm run build

# Vista previa del build
npm run preview

# Desplegar a GitHub Pages
npm run deploy
```

## 🎨 Personalización

### Colores

Edita los colores en `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        accent: '#2563eb',      // Color principal
        accentHover: '#1d4ed8', // Color hover
      }
    }
  }
}
```

### Contenido

- **Proyectos**: Edita `components/Projects.tsx` → `projectsData`
- **Artículos**: Edita `components/Journalism.tsx` → `articlesData`
- **Biografía**: Edita `components/About.tsx`
- **Contacto**: Edita `components/Footer.tsx`

## 🔍 SEO

El sitio incluye:

- ✅ Meta tags completos (title, description, keywords)
- ✅ Open Graph para redes sociales
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD (Person)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Manifest.json para PWA

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lazy loading de imágenes
- Code splitting automático (Vite)

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📱 Contacto

- **Email**: a.j.castro.b@gmail.com
- **GitHub**: [@ajcastrob](https://github.com/ajcastrob)
- **LinkedIn**: [José Castro](https://www.linkedin.com/in/josé-castro-b600791a4/)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Imágenes de fondo: [Unsplash](https://unsplash.com)
- Iconos: [Lucide Icons](https://lucide.dev)
- Hosting: [GitHub Pages](https://pages.github.com)

---

**Desarrollado con ❤️ por José Castro**

© 2024 José Castro
