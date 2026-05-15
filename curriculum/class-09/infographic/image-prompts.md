# Image Prompts — Clase 09: DOM como API de Objetos

> Prompts para generar imágenes con AI. Cada imagen corresponde a un `<img src="...">` en `index.html`.

---

## dom-tree.png

Diagrama de árbol jerárquico que muestra la estructura del DOM. El árbol tiene esta jerarquía:

- **Raíz:** `document`
  - `<html>`
    - `<head>` (izquierda)
      - `<title>`
      - `<meta>`
    - `<body>` (derecha)
      - `<header>`
        - `<nav>`
      - `<main>`
        - `<h1>`
        - `<p>`
      - `<footer>`

Las conexiones entre nodos se muestran como líneas. Cada nodo es una caja rectangular con el nombre de la etiqueta. Las cajas del mismo nivel (hermanos) están al mismo nivel horizontal. El árbol fluye de arriba hacia abajo.

**OBLIGATORIO (colores):**
- Fondo: #0d1117
- Texto de etiquetas: #e2e8f0
- Caja del nodo `document`: borde y texto #d946ef (púrpura) — el nodo raíz
- Cajas de `<html>`, `<head>`, `<body>`: borde #4ade80 (verde)
- Cajas de elementos hijos: borde #93c5fd (azul)
- Líneas de conexión: #475569

**PROHIBIDO:**
- Fondo blanco o claro
- Colores fuera de la paleta (#d946ef, #4ade80, #93c5fd, #fb923c)
- Texturas, gradientes 3D, elementos decorativos

**GRAYSCALE (todo lo demás):**
- Superficies de las cajas: #161b22
- Texto secundario: #94a3b8

DIMENSIONS: 960x540 pixels
