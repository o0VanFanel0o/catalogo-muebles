# Catálogo de Muebles 🪑

Aplicación web full stack para catálogo y contacto de muebles a medida.
Frontend construido con React + Vite, conectado a una API REST propia
desplegada en servidor local con Docker y PostgreSQL.

## 🔗 Links

- 🌐 Demo en vivo: [catalogo-muebles-phi.vercel.app](https://catalogo-muebles-phi.vercel.app)
- 💻 Frontend (este repo): [github.com/o0VanFanel0o/catalogo-muebles](https://github.com/o0VanFanel0o/catalogo-muebles)
- ⚙️ Backend: [github.com/o0VanFanel0o/catalogo-muebles_api](https://github.com/o0VanFanel0o/catalogo-muebles_api)

## 📸 Vista previa

![Vista previa](screenshot.gif)

## 🛠️ Stack tecnológico

**Frontend**
- React + Vite
- React Router DOM
- CSS modular con variables
- Deploy en Vercel

**Backend**
- Node.js + Express
- PostgreSQL 16
- Docker + red personalizada
- Nodemailer — envío de correos reales
- Tailscale Funnel — acceso HTTPS público seguro

## ✨ Funcionalidades

- Catálogo de productos con imágenes múltiples por producto
- Filtros por espacio (recámara, sala, cocina, comedor, baño)
- Filtros por tipo de mueble y material
- Formulario de contacto con envío de correo real vía Gmail
- Base de datos con 10 productos y 36 imágenes
- Diseño cálido y artesanal adaptado a la identidad del negocio

## 📁 Estructura
```
catalogo-muebles/
│
├── public/
│   ├── catalogo-muebles/
│   │   └── BD-1/
│   │       ├── buro-001/
│   │       ├── closet-001/
│   │       ├── cocina-001/
│   │       ├── cocina-002/
│   │       ├── escaleras-001/
│   │       ├── escritorio-001/
│   │       ├── gabinete-001/
│   │       ├── lavadero-001/
│   │       ├── separador-001/
│   │       └── servicio-001/
│   ├── fonts/
│   ├── logo/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── FeaturedProducts.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── SpaceCategories.jsx
│   ├── pages/
│   │   ├── CatalogPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   └── MaterialsPage.jsx
│   ├── styles/
│   │   ├── CatalogPage.css
│   │   ├── ContactPage.css
│   │   ├── FeaturedProducts.css
│   │   ├── fonts.css
│   │   ├── Footer.css
│   │   ├── Hero.css
│   │   ├── NavBar.css
│   │   ├── ProductCard.css
│   │   └── SpaceCategories.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## ⚙️ Variables de entorno

Crea un archivo `.env` en la raíz:

```bash
VITE_API_URL=tu_url_publica_de_la_api
```

## 🚀 Instalación local

```bash
git clone https://github.com/o0VanFanel0o/catalogo-muebles
cd catalogo-muebles
npm install
npm run dev
```

## 👤 Autor

- GitHub: [@o0VanFanel0o](https://github.com/o0VanFanel0o)