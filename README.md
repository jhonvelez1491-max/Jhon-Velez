# EcoVisual - Plataforma Educativa Ambiental (MVP)

Prototipo interactivo desarrollado con React 19, TypeScript, Vite y Tailwind CSS.

## 🚀 Inicio Rápido (Local)

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Construir para producción:**
   ```bash
   npm run build
   ```
   Los archivos listos para producción se generarán en la carpeta `dist/`.

4. **Probar la versión de producción localmente:**
   ```bash
   npm run preview
   ```

---

## 🌐 Opciones de Despliegue en la Nube

### Opción 1: Vercel
1. Instala el CLI de Vercel con `npm i -g vercel` o conecta tu repositorio en [vercel.com](https://vercel.com).
2. El comando de build es `npm run build` y el directorio de salida es `dist`.

### Opción 2: Netlify
1. Arrastra la carpeta `dist/` directamente en [app.netlify.com/drop](https://app.netlify.com/drop) para un despliegue instantáneo en 10 segundos sin configuración.

### Opción 3: GitHub Pages
1. Sube el código a GitHub.
2. Configura GitHub Actions para compilar con Vite o usa el paquete `gh-pages`.

---

## 📦 Estructura del Proyecto

- `src/`
  - `components/`: Componentes modulares (Hero, Navbar, FeaturesSection, FeaturedModuleSection, ModuleView, InteractiveActivity, ResourcesView, ContactView, Footer, etc.)
  - `data/`: Datos pedagógicos y enlaces a los recursos visuales (`mockData.ts`).
  - `types.ts`: Definición de tipos TypeScript.
  - `assets/images/`: Ilustraciones y gráficos del proyecto.
- `public/`: Archivos estáticos y paquete de exportación.
