# Portafolio Minimalista - José Castro

Un sitio web de portafolio profesional, minimalista y responsivo diseñado para un Desarrollador Full-Stack y Periodista.

## 🚀 Tecnologías

- **React** 19.2.3
- **TypeScript** 5.8.2
- **Vite** 6.2.0
- **Tailwind CSS** (vía CDN)
- **Lucide React** (iconos)

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa del build
npm run preview
```

## 🌐 Despliegue en GitHub Pages

### Opción 1: Despliegue Automático con GitHub Actions (Recomendado)

El proyecto ya está configurado con GitHub Actions para despliegue automático.

**Pasos:**

1. **Sube el proyecto a GitHub:**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/portafolio-minimalista.git
   git push -u origin main
   ```

2. **Activa GitHub Pages en tu repositorio:**

   - Ve a: `Settings` > `Pages`
   - En **Source**, selecciona: `GitHub Actions`

3. **¡Listo!** Cada vez que hagas push a `main`, el sitio se desplegará automáticamente.

Tu sitio estará disponible en: `https://TU_USUARIO.github.io/portafolio-minimalista/`

### Opción 2: Despliegue Manual con gh-pages

Si prefieres desplegar manualmente:

```bash
# Instalar gh-pages (ya está en devDependencies)
npm install

# Desplegar
npm run deploy
```

Esto construirá el proyecto y lo publicará en la rama `gh-pages`.

**Luego activa GitHub Pages:**

- Ve a: `Settings` > `Pages`
- En **Source**, selecciona: `Deploy from a branch`
- En **Branch**, selecciona: `gh-pages` y carpeta `/ (root)`

## ⚙️ Configuración

### Cambiar la URL base

Si vas a usar un dominio personalizado o cambiar el nombre del repositorio, actualiza el `base` en `vite.config.ts`:

```typescript
// Para dominio personalizado o username.github.io
base: '/',

// Para repositorio específico
base: '/nombre-del-repositorio/',
```

### Variables de entorno

El proyecto incluye configuración para Gemini API (opcional). Crea un archivo `.env.local`:

```
GEMINI_API_KEY=tu_api_key_aqui
```

## 📁 Estructura del Proyecto

```
portafolio-minimalista/
├── components/
│   ├── Navbar.tsx      # Navegación
│   ├── Hero.tsx        # Sección principal
│   ├── Projects.tsx    # Proyectos destacados
│   └── Footer.tsx      # Contacto
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions
├── App.tsx             # Componente principal
├── index.html          # HTML base
├── index.tsx           # Entry point
├── vite.config.ts      # Configuración Vite
└── package.json        # Dependencias
```

## 🎨 Personalización

### Colores

Los colores principales se configuran en `index.html`:

```javascript
theme: {
  extend: {
    colors: {
      accent: '#2563eb',        // Color principal
      accentHover: '#1d4ed8',  // Color hover
    }
  }
}
```

### Proyectos

Edita el array `projectsData` en `components/Projects.tsx` para agregar o modificar proyectos.

### Información de contacto

Actualiza los links y email en `components/Footer.tsx`.

## 📝 Licencia

© 2024 José Castro. Todos los derechos reservados.

## 🤝 Contribuciones

Este es un proyecto personal, pero sugerencias y feedback son bienvenidos.

---

**Desarrollado con ❤️ por José Castro**
