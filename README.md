# Portfolio — Jesús Emanuel Funes Costa

Base del portfolio personal.

## Estructura

```text
portfolio/
│
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── jesus-funes.jpg
│       ├── bianti-placeholder.svg
│       ├── fitness-placeholder.svg
│       ├── ganado-placeholder.svg
│       └── web-placeholder.svg
```

## Enlaces ya configurados

- GitHub: https://github.com/ABTJ2
- LinkedIn: https://www.linkedin.com/in/jesus-funes-02b1a942a/
- Email: jesus.funes2@gmail.com
- Celular: +54 264 410-1980

## Antes de publicar la versión definitiva

### 1. BIANTI
En `index.html`, buscá:

```html
Agregar URL del catálogo
```

Reemplazá el `href="#"` por la URL pública real del catálogo y quitá:

```html
class="text-link disabled" aria-disabled="true"
```

Dejalo, por ejemplo:

```html
<a class="text-link" href="https://TU-URL" target="_blank" rel="noopener noreferrer">
  Ver catálogo ↗
</a>
```

### 2. Capturas de proyectos
Podés reemplazar los SVG de `assets/images/` por capturas reales.

Ejemplo:

```html
<img src="assets/images/bianti-home.webp" alt="Catálogo público de BIANTI">
```

Recomendado:
- WebP o JPG.
- Entre 1400 y 1800 px de ancho.
- Sin información sensible.
- Para Fitness Club y el sistema ganadero, publicar solo material autorizado.

### 3. Foto
La foto actual está en:

```text
assets/images/jesus-funes.jpg
```

Para cambiarla, reemplazá ese archivo conservando el mismo nombre.

## Cloudflare Pages

Como es un sitio estático, la carpeta que subas debe contener directamente:

```text
index.html
assets/
```

No debe quedar `index.html` enterrado dentro de otra carpeta adicional.

## Diseño

- HTML semántico.
- CSS separado.
- JavaScript separado.
- Sin frameworks.
- Responsive.
- Animaciones suaves con IntersectionObserver.
- Menú móvil.
- Indicador de progreso de lectura.
- Navegación activa según la sección visible.
- `prefers-reduced-motion` respetado para accesibilidad.

## CV

El CV no forma parte de esta versión todavía. Más adelante puede agregarse un archivo:

```text
assets/docs/CV-Jesus-Funes.pdf
```

y un botón "Descargar CV".
