# Portafolio React + Vite

Bienvenido a mi portafolio web personal desarrollado con **React**, **Vite** y **TypeScript**. Este proyecto incluye animaciones con **Framer Motion**, diseño moderno con **Tailwind CSS** y modelos 3D interactivos integrados mediante **Spline**. Está desplegado utilizando **GitHub Pages** y **GitHub Actions** para lograr una integración y despliegue continuo sin complicaciones.  
¡Siéntete libre de revisar el código o contactarme si tienes alguna pregunta! 🤝

🔗 **Demo en vivo**: [https://stvdn.github.io/react_portfolio/](https://stvdn.github.io/react_portfolio/)

---

## 🚀 Características

- ⚛️ React con Vite para una experiencia de desarrollo rápida y moderna
- 🛠️ TypeScript para mayor fiabilidad en el código
- 🎨 Estilado dinámico y responsivo con Tailwind CSS
- 🎞️ Animaciones fluidas usando Framer Motion
- 🧊 Integración de elementos 3D con Spline
- 📦 Despliegue estático usando GitHub Pages
- 🔄 Automatización CI/CD con GitHub Actions

---

## 🛠️ Clonar e Instalar el Proyecto

Sigue estos pasos si deseas probar o modificar este portafolio localmente:

````bash
# 1. Clona el repositorio
git clone https://github.com/stvdn/react_portfolio.git

# 2. Entra al directorio del proyecto
cd react_portfolio

# 3. Instala las dependencias
npm install

# 4. Ejecuta el proyecto en modo desarrollo
npm run dev

---

## 📦 Pasos para el Despliegue

> 💡 Este repositorio usa el nombre `react_portfolio`, por lo que la ruta base en Vite debe coincidir.

### 1. Habilitar GitHub Actions

Habilita GitHub Actions en tu repositorio desde la pestaña **Actions** en GitHub.

---

### 2. Configurar la Ruta Base en Vite

Edita tu archivo `vite.config.ts` para establecer la ruta base correcta (debe coincidir con el nombre del repositorio):

```ts
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/react_portfolio/", // 🔧 Asegúrate que coincida con el nombre del repo
  plugins: [react(), tailwindcss()],
});
````
