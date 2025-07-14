
# 🎉 Entrega Final - Proyecto eCommerce: MangaShop

## 📝 Descripción General

**MangaShop** es una tienda online de mangas desarrollada como entrega final del curso Talento Tech. Esta aplicación simula una experiencia real de eCommerce, incluyendo funcionalidades clave como autenticación de usuarios, carrito de compras, administración de productos con MockAPI, diseño responsivo y optimización para despliegue.

---

## ✅ Funcionalidades Implementadas

### 🔐 Autenticación de Usuarios
- Login simulado utilizando `localStorage`.
- Rutas protegidas que restringen el acceso a secciones privadas (como el carrito o la administración de productos).
- Gestión de sesión con `AuthContext`.

### 🛒 Carrito de Compras
- Implementado con `Context API`.
- Permite agregar, eliminar y vaciar productos.
- Estado persistente mientras el usuario navega.

### 📦 CRUD de Productos con MockAPI
- Crear, editar y eliminar productos desde la interfaz.
- Formulario controlado con validaciones.
- Confirmación antes de eliminar y manejo de errores con `Toastify`.

### 🔍 Búsqueda y Paginación
- Búsqueda dinámica por nombre de producto.
- Paginador funcional con navegación fluida entre páginas.

### 🎨 Diseño y Responsividad
- Sistema de grillas de `Bootstrap` para adaptar el sitio a todos los dispositivos.
- Estilización con `styled-components` para componentes reutilizables y limpios.
- Interactividad con `React Icons` y `React Toastify`.

### 🌐 Preparación para Despliegue
- Aplicación completamente responsiva.
- Optimización del código.
- Configuración de SEO con `React Helmet`.
- Desplegado en Vercel: [manga-shop-talento-tech.vercel.app](https://manga-shop-talento-tech.vercel.app)

---

## ⚙️ Tecnologías Utilizadas
- **React.js**
- **React Router DOM**
- **Context API**
- **Bootstrap 5**
- **Styled-Components**
- **MockAPI**
- **React Icons**
- **React Toastify**
- **React Helmet**
- **Vercel**

---

## 📦 Instalación Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/mati-d-s/MangaShop_TalentoTech.git
   cd MangaShop_TalentoTech
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Ejecutar el proyecto en modo desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir en el navegador:
   ```
   http://localhost:5173
   ```

---
