# Clase 03 – CSS Grid esencial + Flexbox profundo

## 🎯 Objetivo General

Construir layouts responsivos reales combinando **Grid esencial** (lo mínimo para reconocerlo) y **Flexbox profundo** (`flex-wrap`, `flex-basis`, `align-self`), verificados con un breakpoint en DevTools.

---

## 💡 ¿Cuándo usar Grid vs Flex?

* **Grid** → layouts **2D**: filas y columnas controladas simultáneamente. Grilla de tarjetas, dashboards.
* **Flex** → layouts **1D**: una sola dirección. Navbars, listas horizontales, cards individuales.

> "El mismo layout puede resolverse con ambas. Elige la que comunique mejor tu intención."

---

## 🧬 Parte 1: Grid esencial

### Lo mínimo que necesitas saber:

```css
.testimonios {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
```

* `display: grid` activa el modelo.
* `grid-template-columns: repeat(N, 1fr)` define N columnas iguales.
* `gap` separa filas y columnas.

> 🔹 **Tip**: con esto resuelves el 80% de los casos. Las áreas nombradas y `auto-fit` son útiles pero se pueden explorar después.

### Reto:

Aplica este patrón a una grilla de 6 tarjetas de testimonios.

---

## 🤠 Parte 2: Flexbox profundo

### Propiedades clave de los hijos:

```css
.compra {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.producto { flex-basis: 400px; flex-grow: 1; }
.resumen { flex-basis: 250px; align-self: flex-start; }
.extras { flex-basis: 100%; }
```

* **`flex-wrap: wrap`**: permite que los ítems bajen de línea si no caben.
* **`flex-basis`**: tamaño base sugerido del ítem (antes de crecer/encogerse).
* **`align-self`**: sobreescribe `align-items` del contenedor para ESTE ítem específico.

> "`align-self` es tu salida de emergencia cuando un ítem necesita comportarse distinto al resto."

### Reto:

En `compra.html`, hacer que `.resumen` se alinee arriba aunque los otros se estiren.

---

## 🔮 Parte 3: Media query verificable

### Objetivo:

Configurar un breakpoint que **cambia el layout** y validarlo en **DevTools modo responsive**.

```css
@media (max-width: 768px) {
  .testimonios { grid-template-columns: 1fr; }
  .compra { flex-direction: column; }
}
```

### Cómo verificar:

1. F12 → DevTools → ícono de dispositivo móvil (o `Ctrl+Shift+M`).
2. Arrastra el ancho del viewport por debajo de 768px.
3. El layout debe cambiar visiblemente.
4. **Toma screenshot del antes/después** y súbelo al README.

> 🔹 **Tip**: si tu layout no cambia, abre DevTools → Elements y verifica que el `@media` aparezca en el panel de Styles del elemento.

### Reto:

Agregar un segundo breakpoint a 1024px que pase a 4 columnas.

---

## ✨ Logros Adicionales

### WhatsApp con mensaje dinámico

* Enlace que abre WhatsApp con mensaje prellenado.

### Explorar Grid avanzado

* `grid-template-areas`, `auto-fit` con `minmax()` — útil cuando lo necesites en M5.

---

## 🤔 Discusión Final

* ¿En qué caso te resultaría más natural Grid? ¿En cuál Flex?
* ¿Tu media query realmente cambió el layout o solo movió cosas?
* ¿Qué propiedad de Flex profundo te resultó más útil hoy?

> **Reflexiones:**
>
> * ¿Qué te resultó más intuitivo?
> * ¿Qué podrías explicar hoy a otra persona con confianza?
> * ¿Qué mejorarías de tu solución?
