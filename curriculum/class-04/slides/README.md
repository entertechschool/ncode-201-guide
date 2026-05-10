# Clase 04 – CSS Moderno y Git Workflow

## 🎯 Objetivo General

Consolidar tu base de frontend profesional: **CSS Variables (`:root`)**, **formularios validados con HTML nativo** y un **Git workflow completo** (branch + PR + merge + resolver conflicto).

---

## 💡 ¿Por qué estos 3 temas juntos?

* Las **Variables CSS** te dan consistencia sin agregar librería.
* La **validación nativa** te ahorra escribir JS para lo más común.
* El **flujo Git profesional** es lo que cualquier equipo te va a pedir desde el primer día.

> "El M1 cierra con las habilidades que vas a usar en cada clase del resto del curso."

---

## 🛠️ Variables CSS — el patrón base

```css
:root {
  --color-primary: #0066cc;
  --space-md: 1rem;
  --radius: 8px;
}

button {
  background: var(--color-primary);
  padding: var(--space-md);
  border-radius: var(--radius);
}
```

* Defines los tokens una vez en `:root`.
* Los aplicas con `var(--token)`.
* Cambiar UN token actualiza TODO el sitio.

> "Cuando el branding cambia, gracias a las variables, cambia un solo lugar."

---

## 📝 Validación nativa — sin JavaScript

```html
<input type="email" required minlength="3">
<input type="tel" pattern="[0-9]{9}" required>
<select required>
  <option value="">Selecciona</option>
  <option value="a">A</option>
</select>
<input type="checkbox" required>
```

* `required` → no puede estar vacío.
* `type="email"` → debe ser un email válido.
* `pattern="..."` → debe matchear la regex.
* `minlength` / `maxlength` → rango de longitud.

> "El navegador valida. Tú no escribes una línea de JS."

---

## 🌳 Git Workflow profesional

```bash
git checkout -b feature/algo
# ... cambios + commits ...
git push -u origin feature/algo
# abrir PR en GitHub → revisar → merge
git checkout main
git pull
```

* **Nunca pushees directo a `main`** en proyectos reales.
* El PR es donde el equipo revisa antes de mergear.
* Después de merge, sincronizas tu local con `git pull`.

---

## 💥 Merge Conflict — qué hacer

```
<<<<<<< HEAD
  background: blue;
=======
  background: red;
>>>>>>> main
```

1. Lee ambas versiones.
2. Decide (o combina).
3. **Elimina los marcadores** `<<<<<<<`, `=======`, `>>>>>>>`.
4. `git add .` + `git commit -m "merge: resuelve conflicto en ..."`.

> "No es magia. Es elegir entre versiones de líneas."

---

## 🧪 Laboratorio — 5 partes, CALIFICADO

* **P1 — CSS Variables (~20m)**: refactorizar el landing con tokens.
* **P2 — Formulario validado (~25m)**: `required`, `type`, `pattern`, `<select>`, checkbox.
* **P3 — Git workflow (~20m)**: branch + commits + push + PR + merge.
* **P4 — Desafío Merge Conflict (~15m)**: resolver conflicto prefabricado.
* **P5 — Deploy (~10m)**: GitHub Pages funcional + README actualizado.

---

## 🤔 Discusión Final

* ¿Cuándo Variables CSS reemplazan a un framework completo? ¿Cuándo NO?
* ¿Qué tipo de validación necesita JS? ¿Cuáles bastan con HTML nativo?
* ¿Qué pasa si dos personas modifican la misma línea en ramas distintas? ¿Cómo lo resuelves sin perder trabajo?

> **Reflexiones:**
>
> * ¿Qué de hoy aplicarás en TODO proyecto futuro?
> * ¿Qué superpoder profesional sentiste que ganaste?
