# Clase 08 — Tailwind CSS: la interfaz del Gestor
### Code 201 · Módulo 2 (cierre)

---

## 🎯 Objetivo de la Clase

- Instalar **Tailwind** por CDN y entender **utility-first**.
- Construir la UI del Gestor **por grupos de clases**, por capas.
- Distinguir **clases-propiedad** de **prefijos-modificador**.
- **Conectar el formulario** con JS → el Gestor funciona.

---

## 📖 De CSS a mano → Tailwind

En M1 escribías CSS en un archivo:

```css
.tarjeta { padding: 24px; background: white; border-radius: 12px; }
```

Hoy lo escribes como **clases utilitarias** en el HTML:

```html
<div class="p-6 bg-white rounded-xl">...</div>
```

> Mismo CSS. Otra notación. No es una bestia nueva.

---

## 🧩 Las 2 clases de Tailwind

```html
<!-- clase-propiedad: 1 clase = 1 propiedad CSS -->
<p class="text-lg font-bold text-gray-800">...</p>

<!-- prefijo-modificador: aplica una clase BAJO una condición -->
<button class="bg-blue-600 hover:bg-blue-700 md:w-auto">...</button>
```

* **Propiedad** = el vocabulario (construye el look).
* **Prefijo** (`hover:`, `md:`) = la gramática (cuándo aplica).

> Primero el vocabulario, luego la gramática.

---

## 🪜 Mejora progresiva por capas

Se pega el esqueleto del Gestor **sin clases** y cada parte aplica **un grupo** a toda la página:

| Parte | Grupo |
|---|---|
| **P1** | Layout (Flexbox + Grid) |
| **P2** | Caja (espaciado + tamaño) |
| **P3** | Estética (tipografía, color, bordes/sombra) |
| **P4** | Modificadores (estados + responsive) |
| **P5** | Conectar con JavaScript |

> La UI se transforma capa por capa.

---

## 🧱 P1 — Layout (lo que ya sabes)

| CSS (M1) | Tailwind |
|---|---|
| `display: flex` (C02) | `flex` |
| `justify-content` | `justify-between` |
| `display: grid` (C03) | `grid` |
| `grid-template-columns: 1fr 1fr` | `grid-cols-2` |
| `gap` | `gap-6` |

```html
<section class="grid grid-cols-2 gap-6">
```

---

## 📦 P2 — Caja · 📐 escala fija

```html
<div class="p-6 mt-4">
<input class="w-full p-2">
```

| CSS | Tailwind |
|---|---|
| `padding` / `margin` | `p-6`, `mt-4` |
| `width` / `max-width` | `w-full`, `max-w-4xl` |

> La escala es fija: `p-2`=8px, `p-4`=16px, `p-6`=24px. No inventas píxeles.

---

## 🎨 P3 — Estética (los simples)

```html
<h1 class="text-3xl font-bold text-gray-800">
<li class="bg-green-50 border-l-4 border-green-500 rounded">
```

* Tipografía: `text-3xl`, `font-bold`
* Color: `text-gray-800`, `bg-green-50` (¡las variables de C04!)
* Borde/sombra: `rounded-xl`, `shadow`

> Color semántico: verde = ingreso, rojo = gasto.

---

## 📱 P4 — Modificadores

```html
<!-- estado: al pasar el mouse / al enfocar -->
<button class="bg-blue-600 hover:bg-blue-700 transition">

<!-- responsive: base = móvil, md: agrega desktop -->
<section class="grid grid-cols-1 md:grid-cols-2">
```

* `hover:` / `focus:` = el `:hover` de C02-C03.
* `md:` = una media query, en notación corta.

> **Mobile-first de verdad:** el look base ES el móvil.

---

## 🔌 P5 — Conectar el Gestor (JS)

```javascript
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const tipo   = document.getElementById('tipo').value;
  const valor  = parseFloat(document.getElementById('monto').value);
  presupuesto.agregar(new Movimiento(nombre, tipo, valor));
  render();
  e.target.reset();
});
```

> Reusas tus clases de C07. El JS es solo el **cable** entre el form y tu modelo.

---

## ⚙️ Estructura del Lab

| Parte | Tiempo | Contenido |
|---|---|---|
| **P0** | ~20 min | CDN + esqueleto + mapa de grupos |
| **P1** | ~30 min | Layout (flex + grid) |
| **P2** | ~20 min | Caja (espaciado + tamaño) |
| **P3** | ~25 min | Estética (tipografía/color/bordes/sombra) |
| **P4** | ~30 min | Modificadores (estados + responsive) |
| **P5** | ~20 min | Conectar el formulario con JS |

---

## 🏁 Cierre del Módulo 2

```
C05  Imperativo   → variables, arrays, bucles
C06  Funcional    → map/filter/reduce, funciones puras
C07  OOP          → class, objetos, encapsulación
C08  Interfaz     → Tailwind + el Gestor FUNCIONA
```

> Empezaste con `console.log`. Terminas con una **app real, desplegada**.

---

## 🤔 Discusión Final

- ¿Qué te resultó más rápido: escribir CSS a mano (M1) o utilidades?
- ¿Por qué responsive va con prefijos al final y no al inicio?
- ¿Notas cómo el formulario reusa TODO lo de C07 sin reescribir lógica?

> **Reflexión:** Tailwind no reemplaza saber CSS — lo acelera. Y hoy tu proyecto del módulo quedó **completo y funcional**.

---

## ¡Gracias! 🙌
### Code 201 · Enter Tech School
