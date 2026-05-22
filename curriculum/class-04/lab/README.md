# Laboratorio 04: CSS Moderno y Git Workflow

> **Lab CALIFICADO** — última clase del Módulo 1. 5 partes, ~90 min en clase + post-clase si la P4 (Merge Conflict) no alcanza.

En este laboratorio consolidas tres habilidades profesionales: refactorizar tu landing con **CSS Variables**, agregar **validación nativa** al formulario de C01 y aplicar un **flujo Git profesional** completo, incluyendo la resolución de un conflicto.

> 🎯 **Continuidad del M1:** este es el lab calificado del módulo sobre **tu producto** (el que elegiste en C01). Las CSS Variables que extraigas deben reflejar el branding de tu producto (colores, tipografía). El form validado de P2 captura datos relevantes a tu producto/servicio.

---

### 🎯 Objetivos de Aprendizaje

* Refactorizar el CSS del landing usando Custom Properties (`:root { --token }`).
* Validar el formulario con HTML nativo (`required`, `type`, `pattern`, `<select>`, `<input type="checkbox">`).
* Aplicar el flujo Git completo: branch → commits → push → PR → merge → resolver conflicto.

### 🔑 Conceptos Clave

* **CSS Custom Properties:** `:root { --color-primary }` + `color: var(--color-primary)`. Tokens centralizados.
* **Validación nativa HTML:** el navegador valida sin JS si el form tiene `required`/`type`/`pattern`.
* **Git workflow:** `git checkout -b`, `git commit`, `git push -u origin <rama>`, Pull Request en GitHub, merge a `main`.
* **Merge conflict:** identificar marcadores `<<<<<<<`, `=======`, `>>>>>>>` y elegir la versión correcta antes de commitear.

---

## Parte 1 – CSS Variables (~20 min)

> **Requisitos previos:** Tener tu landing de C01–C03 con su CSS. Hay reglas que repiten colores y espacios — vamos a centralizar.

1. En `styles.css`, antes de tus reglas, define los tokens:

```css
:root {
  --color-primary: #0066cc;
  --color-text: #1a1a1a;
  --color-bg: #f5f5f5;
  --color-danger: #cc0000;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;
  --font-base: system-ui, sans-serif;
  --radius: 8px;
}
```

2. Refactoriza al menos **5 reglas** del CSS existente para usar `var(--token)` en vez de valores hardcoded:

```css
body {
  font-family: var(--font-base);
  color: var(--color-text);
  background: var(--color-bg);
}

button, .btn {
  background: var(--color-primary);
  color: white;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius);
}

.card {
  padding: var(--space-md);
  border-radius: var(--radius);
}
```

3. Verifica visualmente: el sitio se ve **idéntico** que antes. Las variables son refactoring, no rediseño.

✅ **Checkpoint:** abres el sitio, se ve igual que antes pero tu CSS tiene `:root` con al menos 6 tokens y los aplicas con `var()` en al menos 5 reglas.

🏆 **Reto autónomo:** cambia `--color-primary` a otro color y observa cómo TODOS los botones cambian a la vez. Eso es el poder de las variables.

---

## Parte 2 – Formulario validado (~25 min)

> Sobre el formulario de contacto que construiste en C01, agregas **validación nativa**.

1. Modifica los inputs existentes y agrega 2 nuevos:

```html
<form id="formContacto">
  <label for="nombre">Nombre (mín. 3 caracteres)</label>
  <input type="text" id="nombre" name="nombre" required minlength="3">

  <label for="email">Correo electrónico</label>
  <input type="email" id="email" name="email" required>

  <label for="telefono">Teléfono (9 dígitos)</label>
  <input type="tel" id="telefono" name="telefono" pattern="[0-9]{9}" required>

  <label for="motivo">Motivo del contacto</label>
  <select id="motivo" name="motivo" required>
    <option value="">Selecciona un motivo</option>
    <option value="consulta">Consulta</option>
    <option value="reclamo">Reclamo</option>
    <option value="sugerencia">Sugerencia</option>
  </select>

  <label>
    <input type="checkbox" id="acepto" name="acepto" required>
    Acepto los términos y condiciones
  </label>

  <button type="submit">Enviar</button>
</form>
```

2. Verifica los **3 escenarios** de validación nativa:
   - Submit con el form vacío → el navegador bloquea el envío y muestra el error en el primer campo `required`.
   - Email mal formado (ej. `abc`) → el navegador rechaza con "Por favor, incluye '@'".
   - Teléfono con letras o menos de 9 dígitos → el `pattern` rechaza.

3. Solo cuando TODOS los campos son válidos, el navegador permite el submit.

✅ **Checkpoint:** intenta enviar el form vacío → ves el error nativo. Llénalo con datos válidos → el submit pasa. NO escribiste una sola línea de JavaScript para esto.

🏆 **Reto autónomo:** agrega un `<input type="date">` y observa que el navegador renderiza un calendario nativo. Eso también es validación nativa.

---

## Parte 3 – Git workflow (~20 min)

> Hasta ahora trabajaste directo en `main`. Hoy aplicas el flujo profesional.

1. Asegúrate que tu trabajo de P1 y P2 está commiteado en `main` (commits separados):

```bash
git status
git add styles.css
git commit -m "refactor: extrae tokens de color y espacio a :root"

git add index.html
git commit -m "feat: agrega validación nativa al formulario de contacto"
```

2. Ahora crea una rama nueva para una mejora adicional:

```bash
git checkout -b feature/contacto-validado
```

3. En esa rama, agrega un mensaje de éxito al form (texto debajo del botón submit, oculto por defecto) y un commit:

```bash
git add index.html
git commit -m "feat: agrega mensaje de confirmación al envío del form"
```

4. Push de la rama:

```bash
git push -u origin feature/contacto-validado
```

5. En GitHub, abre un **Pull Request** desde `feature/contacto-validado` hacia `main`. Lee el diff. Mergea.

6. Vuelve a tu local, sincroniza:

```bash
git checkout main
git pull
```

✅ **Checkpoint:** tu GitHub muestra el PR mergeado. Tu `main` local tiene el commit del PR.

---

## Parte 4 – Desafío: Merge Conflict (~15 min)

> ⚠️ Para esta parte tu facilitador te dará un **repo template con un conflicto prefabricado** entre dos ramas. Sigue las instrucciones.

1. Clona el repo template y haz checkout a la rama `featA`. Lee el CSS actual.
2. Cámbiate a `main` y haz `git merge featB`. Git aplicará los cambios sin conflicto.
3. Cámbiate a `featA` y haz `git merge main`. Aquí aparece el **conflicto**.
4. Abre el archivo conflictuado. Verás:

```css
.btn {
<<<<<<< HEAD
  background: blue;
=======
  background: red;
>>>>>>> main
  padding: 16px;
}
```

5. **Resuelve el conflicto manualmente**: elimina los marcadores y elige (o combina) la versión correcta. Ejemplo de resolución:

```css
.btn {
  background: var(--color-primary);
  padding: 16px;
}
```

6. Commit de la resolución:

```bash
git add .
git commit -m "merge: resuelve conflicto en .btn (usa variable CSS)"
```

✅ **Checkpoint:** `git log --oneline` muestra el commit de merge. El archivo ya no tiene marcadores `<<<<<<<`.

> Si esta parte la haces post-clase, **pide al facilitador el link al repo template** antes de irte.

---

## Parte 5 – Deploy (~10 min)

1. Verifica que `main` tenga todo tu trabajo: P1 (variables), P2 (form validado), P3 (commit del PR).

2. Push final:

```bash
git push origin main
```

3. Abre GitHub Pages (Settings → Pages → branch `main`) y verifica que tu sitio se publica.

4. Agrega al `README.md` del repositorio:
   - URL del repo
   - URL del sitio en GitHub Pages
   - Tabla con los tokens CSS que definiste
   - Lista de validaciones nativas aplicadas

✅ **Checkpoint:** tu URL pública muestra el sitio funcionando con form validado y variables aplicadas.

---

## 📝 Entrega (Lab CALIFICADO)

| Entregable | Dónde |
|---|---|
| URL del repositorio | Blackboard |
| URL de GitHub Pages funcional | Blackboard |
| Screenshot del PR mergeado | Blackboard |
| Screenshot del commit de resolución de conflicto | Blackboard (puede ser post-clase) |
| README actualizado con tokens + validaciones | En el repo |

### Rúbrica (referencial)

- **P1 — CSS Variables (20%)**: al menos 6 tokens en `:root`, ≥5 reglas usando `var()`, sitio se ve igual que antes.
- **P2 — Formulario validado (25%)**: `required` + `type=email` + `pattern` + `<select>` + `checkbox` — los 3 escenarios de fallo bloquean el submit.
- **P3 — Git workflow (25%)**: rama feature creada, commits atómicos, PR abierto y mergeado.
- **P4 — Merge conflict (15%)**: conflicto resuelto manualmente, commit de merge presente.
- **P5 — Deploy (15%)**: sitio público funcional, README documentado.

---

## 💡 Tips finales

* Las **CSS Variables** brillan cuando tu landing tiene "branding": colores y tipografía repetidos. Sin repetición, no aportan tanto.
* La validación nativa es la **primera línea de defensa**. JS es para validaciones de negocio (ej. "el email no existe en nuestra DB" — eso necesita servidor).
* Si pusheas directo a `main` por costumbre, **rompiste el ejercicio**. La P3 evalúa el flujo, no solo el resultado.
* Si un conflicto te asusta, recuerda: solo eliges entre versiones de líneas. No es magia. Lee, decide, borra los marcadores, commit.
