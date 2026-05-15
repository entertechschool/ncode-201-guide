# Image Prompts — Clase 08: Prototipos en JavaScript

> Prompts para generar imágenes con AI. Cada imagen corresponde a un `<img src="...">` en `index.html`.

---

## prototype-chain.png

Diagrama vertical que muestra la cadena de prototipos de un objeto JavaScript. Debe mostrar tres niveles conectados con flechas hacia arriba etiquetadas con `__proto__`:

- **Nivel 1 (abajo):** Una caja etiquetada `salario (instancia)` con propiedades: `nombre: "Salario"`, `tipo: "ingreso"`, `valor: 3000`
- **Flecha** `__proto__` apuntando hacia arriba
- **Nivel 2 (medio):** Una caja etiquetada `Movimiento.prototype` con métodos: `esIngreso()`, `formatear()`
- **Flecha** `__proto__` apuntando hacia arriba
- **Nivel 3 (arriba):** Una caja etiquetada `Object.prototype` con métodos: `toString()`, `hasOwnProperty()`

Al costado derecho del diagrama, una nota que diga: "Si JS no encuentra el método aquí, sube al siguiente nivel."

**OBLIGATORIO (colores):**
- Fondo: #0d1117
- Texto/labels: #e2e8f0
- Caja de instancia (nivel 1) y su borde: #d946ef (púrpura)
- Caja de Constructor.prototype (nivel 2) y su borde: #4ade80 (verde)
- Caja de Object.prototype (nivel 3) y su borde: #93c5fd (azul)
- Flechas __proto__: #fb923c (naranja)

**PROHIBIDO:**
- Fondo blanco o claro
- Colores fuera de la paleta (#d946ef, #4ade80, #93c5fd, #fb923c)
- Texturas, gradientes 3D, elementos decorativos

**GRAYSCALE (todo lo demás):**
- Texto de propiedades dentro de las cajas: #94a3b8
- Superficies de fondo de cajas: #161b22
- Texto de etiquetas secundarias: #64748b

DIMENSIONS: 960x540 pixels
