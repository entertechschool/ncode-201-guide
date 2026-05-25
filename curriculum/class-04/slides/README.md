# Clase 04 – CSS Variables + Forms Validados + Git Workflow

## 🎯 Objetivo General

Consolidar tu base de frontend profesional: definir la **estética de tu producto con CSS Variables**, validar **formularios con HTML nativo** y aplicar un **flujo Git profesional con ramas y Pull Requests**.

---

## 💡 ¿Por qué estos 3 temas juntos?

* En C01-C03 aplicaste layout + espaciado. Hoy le das **identidad visual** a tu producto con Variables CSS.
* La **validación nativa** te ahorra escribir JS para lo más común — primera línea de defensa.
* El **flujo Git profesional** es lo que cualquier equipo te va a pedir desde el primer día.

> "El M1 cierra con las habilidades que vas a usar en cada clase del resto del curso."

---

## 🛠️ CSS Variables — la paleta de tu producto

```css
:root {
  /* Colores */
  --color-primary: #1a1a1a;
  --color-accent: #0066cc;
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
  --color-bg-soft: #f5f5f5;
  --color-border: #e0e0e0;

  /* Tipografía */
  --font-text: system-ui, -apple-system, sans-serif;
  --font-size: 16px;
  --font-size-title: 28px;

  /* Espacios */
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;

  /* Estética */
  --radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
}
```

* Defines los tokens una vez en `:root`.
* Los aplicas con `var(--token)`.
* Cambiar UN token actualiza TODO el sitio.

> "Cuando el branding cambia, cambia un solo lugar."

---

## ✨ Estética NUEVA: shadows + accent

```css
.card, .plan {
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, transform 0.2s;
}

.card:hover, .plan:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

nav a:hover {
  color: var(--color-accent);
}
```

* Las cards "flotan" sutilmente al pasar el mouse.
* Los links del nav cambian al color de marca al hover.
* **Estos efectos NO existían en C01-C03** — hoy los agregas.

---

## 📝 Validación nativa — sin JavaScript

```html
<input type="text" required minlength="3">
<input type="email" required>
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
* `minlength` → mínimo de caracteres.
* `<select>` con primera opción `value=""` + `required` → obliga a elegir.

> "El navegador valida. Tú no escribes una línea de JS."

---

## 🌳 Git: ramas y GitFlow básico

```
main:               A───B───C─────────M  (← merge del PR)
                              \      /
feature/form-validado:         D───E/
```

* `main` siempre estable y desplegada.
* Cada feature en su rama (`feature/...`).
* PR en GitHub revisa el diff antes de mergear.

> "Nunca pushees directo a `main` en proyectos reales."

---

## 🛠️ Comandos Git esenciales

```bash
git branch                              # ver mis ramas locales
git checkout -b feature/form-validado   # crear y cambiar
git status                              # qué cambió
git add . && git commit -m "feat: ..."  # commit en la rama
git push -u origin feature/form-validado  # subir al remoto

# Después de mergear el PR en GitHub:
git checkout main
git pull                                # sincronizar main local
git branch -d feature/form-validado     # borrar rama mergeada
```

* **`-u`** vincula tu rama local con la remota — solo la primera vez.
* **`git pull`** = `git fetch` + `git merge`. Trae lo del remoto a tu local.

---

## 🔁 El flujo completo de un feature

1. `git checkout -b feature/x` ← arrancas
2. Cambias código, `git add`, `git commit` ← trabajas
3. `git push -u origin feature/x` ← subes
4. PR en GitHub ← revisas el diff
5. Merge en GitHub ← integras a `main`
6. `git checkout main` + `git pull` ← sincronizas local

> Este flujo lo vas a repetir en cada feature del resto del curso.

---

## 🧪 Laboratorio — 5 partes, CALIFICADO

* **P1 — Estética con CSS Variables (~30m)**: define paleta + refactor + estética nueva. Commit a `main`.
* **P2 — Crear rama feature (~10m)**: `git branch`, `git checkout -b`.
* **P3 — Formulario validado en la rama (~25m)**: `required`, `type`, `pattern`, `<select>`, checkbox.
* **P4 — Cerrar flujo Git (~20m)**: push + PR + merge + `git pull`.
* **P5 — Deploy (~10m)**: GitHub Pages + README actualizado.

---

## 🤔 Discusión Final

* ¿Cuándo Variables CSS reemplazan a un framework completo? ¿Cuándo NO?
* ¿Qué tipo de validación necesita JS? ¿Cuáles bastan con HTML nativo?
* ¿Qué te parece el flujo de ramas + PR comparado con pushear directo a `main`?

> **Reflexiones:**
>
> * ¿Qué de hoy aplicarás en TODO proyecto futuro?
> * ¿Qué superpoder profesional sentiste que ganaste?
