# Guía del Facilitador - Clase 04: CSS Variables + Forms Validados + Git Workflow

> Tiempo de lectura: 8 minutos | Lab CALIFICADO | Prepárate ANTES de clase

---

## 🔑 Conceptos Clave

- **CSS Custom Properties (Variables)**: tokens definidos en `:root` con `--nombre` y usados con `var(--nombre)`. Hoy es donde el alumno define la ESTÉTICA de su producto (colores, tipografía, radius, shadow), no solo refactoriza.
- **Validación nativa HTML**: el navegador valida sin JS si el form tiene `required`, `type`, `pattern` o `minlength`. Primera línea de defensa.
- **Git workflow profesional**: `git branch` → `git checkout -b` → commits → `git push -u` → Pull Request → merge → `git checkout main` → `git pull`. Nunca `main` directo cuando se trabaja en equipo.
- **GitFlow básico**: convención donde `main` siempre está estable y desplegada, y cada feature vive en su propia rama hasta ser revisada en PR.

---

## 🔗 Analogías Útiles

**CSS Variables <> Receta con ingredientes en una lista al inicio:**
Una buena receta declara los ingredientes arriba ("2 tazas de azúcar") y los menciona por nombre en los pasos. Si quieres reducir azúcar, cambias UN número y toda la receta se ajusta. Eso son las CSS Variables en `:root`.

**Validación nativa <> Portero del bar:**
El portero (navegador) verifica edad antes de dejar entrar. Tú (servidor) ya no necesitas verificarlo otra vez. La validación nativa hace de portero gratis. JS se reserva para reglas que el portero no puede saber ("esta persona ya entró hoy").

**Git branches <> Hojas paralelas del cuaderno:**
`main` es la hoja oficial. Cada `feature/...` es una hoja paralela donde experimentas. El Pull Request es cuando pides revisión antes de pegar tu hoja paralela en la oficial.

**`git pull` <> Sincronizar tu carpeta con Dropbox:**
Alguien (en este caso, GitHub al mergear el PR) modificó archivos en el remoto. `git pull` baja esos cambios a tu local. Sin él, tu `main` local queda desfasado.

---

## 📚 Contexto Actual

### CSS Variables: del hack al estándar

Antes de 2017, los proyectos grandes usaban preprocesadores como Sass o Less solo para tener variables. Cuando Chrome y Firefox completaron soporte para Custom Properties, muchos equipos eliminaron sus preprocesadores. Hoy frameworks como Tailwind, Bootstrap 5 y Material UI las usan internamente.

> **Para contar en clase:** "Lo que están aprendiendo hoy es lo que reemplazó a herramientas que se enseñaban como obligatorias hace 5 años."

### Git Workflow: por qué nadie pushea a main

GitHub publicó en su Octoverse Report que el 87% de los repos activos protegen `main` y exigen PR para mergear. No es paranoia — es práctica estándar. El flujo `branch + PR + merge` es lo que cualquier entrevista técnica espera que sepas explicar.

**Fuente:** [GitHub Octoverse](https://octoverse.github.com){:target="_blank"}, [W3C CSS Custom Properties](https://www.w3.org/TR/css-variables-1/){:target="_blank"}

---

## 🎯 Estructura Resumida

| **Fase** | **Tiempo** | **Foco** |
|---|---|---|
| Intro | 15 min | Hasta C03 solo layout/espaciado. Hoy le das identidad visual al producto. Por qué validación nativa antes de JS. Por qué nadie pushea a `main`. |
| Demo Técnica | 15 min | Refactor en vivo: hardcoded → `:root` con tokens. Agregar shadow + hover. Crear una rama y mergear vía PR. |
| Lab (P1–P5) | 95 min | Variables (estética) → Crear rama → Form validado en rama → Push + PR + merge + pull → Deploy. |
| Cierre | 15 min | Retrospectiva, preview de M2 (JavaScript). |

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — refactor + estética en vivo

**Qué mostrar:** Tomar el CSS de las 3 páginas (C01-C03), contar cuántas veces aparece `#1a1a1a`, `#e0e0e0`, `8px`. Refactorizar a `:root` y agregar `box-shadow` + `transition` + `:hover` a las cards. El sitio gana profundidad visual ante los ojos del alumno.

**Script sugerido:**
```
Facilitador: "Cuento las veces que aparece '#e0e0e0' en mi CSS... 5 veces.
Si cambio mi paleta mañana, son 5 líneas a tocar y rezar.
Pero más importante: ¿notan que las cards se ven planas? Sin sombra,
sin hover, sin profundidad. Hoy arreglamos las dos cosas."
[Refactoriza a :root con var() + agrega shadow y hover]
Facilitador: "Cambio --color-accent y todos los hovers cambian.
Eso es ESTÉTICA controlada con variables."
```

**Plan B (si la demo falla):** Tener un CodePen pre-creado con el ejemplo funcionando. Mostrar el cambio de token y el efecto visual.

### Transición al Lab — la regla de oro de las ramas

**Momento crítico:** P2 introduce ramas. Es donde más se confunden. Refuerza:

```
Facilitador: "P1 lo commitean a main porque ese es el estado actual
de su flujo: 'todo a main'. Pero a partir de P2 cambia el juego.
Repitan conmigo: NUNCA pushees al main directo cuando trabajas en equipo.
La rama feature es donde el experimento vive hasta que esté listo."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Token explorer"

Cuando varios estudiantes terminan P1, hacer pausa de 3 minutos:

> "Levanten la mano quienes definieron `--color-accent` distinto a `#0066cc`. ¿Qué color escogieron? ¿Por qué encaja con su producto?"

**Dinámica sugerida:**
```
Facilitador: "Su paleta es la primera decisión de marca que toman.
¿Por qué Velocity es negro y no morado? ¿Por qué Foodly es naranja?
Compartan en chat su accent y por qué."
```

### Dinámica 2: "Romper el form a propósito"

En P3, después de validar el form lleno con datos correctos:

> "Ahora intenten romperlo. Email sin @. Teléfono con letras. Submit vacío. Checkbox sin marcar."

**Dinámica sugerida:**
```
Facilitador: "Su navegador es su primer QA. Vamos a verlo trabajar:
- Vacíen el form, click en Enviar. ¿Qué dice el navegador?
- Escriban 'abc' en el email. Click Enviar. ¿Qué dice?
- Pongan 5 dígitos en el teléfono. Click Enviar.
Si el navegador NO los detuvo, su validación está mal escrita."
```

### Dinámica 3: "Tú eres el PR reviewer"

Cuando alguien termine P3 (form en la rama) y abra el PR (P4.2), pedirle que **revise el PR de otro compañero** antes de mergear:

```
Facilitador: "Alex ya tiene su PR abierto. Maru: entra a su PR y déjale un
comentario sobre el código. No es para criticar, es para practicar leer
código ajeno. Después Maru abre el suyo y Alex revisa."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Paleta mínima viable

**Cuándo usarlo:** Si alguien dice "no sé qué poner en `:root`".

```css
:root {
  --color-primary: #1a1a1a;
  --color-accent: #0066cc;
  --color-text: #1a1a1a;
  --color-bg: #ffffff;
  --color-bg-soft: #f5f5f5;
  --color-border: #e0e0e0;

  --font-text: system-ui, sans-serif;
  --font-size: 16px;
  --font-size-title: 28px;

  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 32px;

  --radius: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.12);
}
```

**Tip:** Pedir que copien esto en pizarra (no entregarlo digital). Copiar a mano refuerza.

### Ejemplo 2: Validación nativa en 30 segundos

**Cuándo usarlo:** Demo del navegador como QA.

```html
<input type="email" id="email" required>
<input type="tel" id="tel" pattern="[0-9]{9}" required>
<select required>
  <option value="">Selecciona</option>
  <option value="a">A</option>
</select>
<input type="checkbox" required>
<button type="submit">Enviar</button>
```

**Tip:** Submit con el form vacío. El navegador hace toda la magia. Ni una línea de JS.

### Ejemplo 3: Flujo completo de un feature

**Cuándo usarlo:** Si alguien se pierde entre P2, P3 y P4.

```bash
# Estoy en main, paleta ya commiteada
git branch                              # confirmar dónde estoy
git checkout -b feature/form-validado   # crear y cambiar

# ... editar index.html ...
git add index.html
git commit -m "feat: agrega validacion nativa al form"
git push -u origin feature/form-validado

# Ir a GitHub, abrir PR, mergear

git checkout main
git pull                                # traer el merge a local
git branch -d feature/form-validado     # limpiar
```

**Tip:** Pegar el bloque en pizarra y resaltar la secuencia. Es la columna vertebral de P2 + P4.

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|---|---|---|
| `var(--color-primary)` no se aplica | El token no está en `:root` o tiene typo (`--color-primay`) | Abrir DevTools → Computed → ver si el navegador lo reconoce |
| El form se envía aunque esté vacío | Falta el atributo `required` o el botón no es `type="submit"` | Verificar atributos del input y del botón |
| `pattern` no rechaza letras | La regex está mal escrita | `pattern="[0-9]{9}"` exacto. Si quiere espacios o guiones, agregar a la regex |
| El `<select>` permite enviar sin elegir | La primera opción no tiene `value=""` | Cambiar la primera opción a `<option value="">Selecciona...</option>` |
| `git push` da "src refspec ... does not match any" | Ejecutó `git push` sin `-u` la primera vez | Usar `git push -u origin feature/...` la primera vez |
| `git pull` da error "no tracking information" | Está en una rama local sin remoto | Hacer `git checkout main` antes de `git pull` |
| Quiere borrar la rama feature pero `git branch -d` falla | La rama no fue mergeada todavía | Confirmar merge en GitHub y `git pull` antes de borrar |
| Push directo a `main` "porque era más fácil" | Saltarse P2 | Hacer reset suave: `git reset HEAD~1`, mover los cambios a una rama feature, repetir el flujo |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Puede explicar por qué `--color-primary` en `:root` reemplaza a múltiples ocurrencias hardcoded.
- Diferencia `required` (obligatorio) de `pattern` (formato) sin dudar.
- Puede dictar el flujo `branch → commit → push → PR → merge → pull` sin mirar apuntes.

### El estudiante NECESITA AYUDA cuando:
- Copia los tokens del ejemplo sin renombrarlos a sus necesidades ni adaptar los colores a su producto.
- No revisa el feedback nativo del navegador y agrega JS para validar lo que `type="email"` ya valida.
- Mergea su PR sin abrirlo (botón "Merge" sin leer el diff).
- Olvida `git pull` después del merge y empieza a trabajar en un `main` local desfasado.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~35' | P1 lista | El alumno cambia `--color-accent` en `:root` y demuestra que afecta ≥2 elementos (hover de nav + algo más) en vivo. Cards tienen sombra visible. |
| ~50' | P2 lista | `git branch` muestra `feature/form-validado` con asterisco. Aún no hay commits nuevos en la rama. |
| ~80' | P3 lista | Submit vacío → bloqueado. Submit con email mal → bloqueado. Submit válido → pasa. `git log` muestra el commit en la rama feature. |
| ~100' | P4 lista | GitHub muestra el PR mergeado. `git log` local en `main` incluye el commit de merge tras `git pull`. |
| ~110' | P5 lista | URL pública funcional con las 3 páginas + README del repo documentado con tokens y validaciones. |

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado en el debate:
- "Pregunta para todos: ¿alguien ha visto un proyecto donde se cambia el color de marca? ¿Cuánto tomó?"

### Si alguien ya sabía Git:
- Mandarlo a hacer el reto del README (tabla de tokens) o a ayudar a un compañero atrasado.

### Si el lab se está pasando:
- A los 80 min: asegurar que P4 (push + PR + merge) esté en curso. P5 puede ser tarea inmediata post-clase pero el flujo Git debe completarse antes de terminar.

### Si alguien usa JavaScript para validar el form:
- "Tu JS funciona, pero el reto era validación nativa. Quita tu JS y prueba con `required`/`type`/`pattern`. Vas a ver que el navegador hace lo mismo."

### Si alguien pregunta por `merge conflict`:
- "Hoy no lo vemos. Si tu `git pull` te da conflicto, avisa — lo resolvemos juntos. Pero la clase no evalúa eso."

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué definir `--color-text` y `--color-primary` si son el mismo `#1a1a1a`?
**R:** Porque sirven a roles distintos. Si mañana decides que tu texto es gris oscuro (`#333`) pero los botones siguen negros, cambias `--color-text` sin tocar `--color-primary`. **Los tokens reflejan ROLES, no valores.**

### P: ¿`pattern` reemplaza a regex en JS?
**R:** Para validar formato de input, sí. Para reglas de negocio (ej. "el email no está duplicado"), no — eso requiere servidor.

### P: ¿Puedo mergear sin abrir PR (con `git merge` local)?
**R:** Sí técnicamente, pero la clase evalúa el flujo profesional. En equipos reales el PR es donde sucede la revisión.

### P: ¿Qué pasa si me equivoco en la rama y commiteo a main?
**R:** No es destructivo. Puedes hacer `git reset HEAD~1` (deshace el último commit manteniendo cambios) y repetir el flujo correcto. Pero si ya pusheaste a main, es más difícil — por eso el flujo importa.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C01 | `<form>`, `<label for>`, `<input>`, `<textarea>` | El form de `<section id="contacto">` se enriquece con validación nativa + campos nuevos. |
| C01 | Repositorio Git + GitHub Pages | El workflow profesional se monta sobre el repo que ya existe; el deploy verifica las 3 páginas. |
| C02 | CSS con `#1a1a1a`, `#e0e0e0`, `#f5f5f5`, padding/border-radius hardcoded | Refactorizado con `var(--token)`. |
| C03 | `.plan`, `.faq-layout`, `.faq-nav`, `.logos` con colores y radius hardcoded | Refactorizado con `var(--token)`. Las cards y plans ganan `box-shadow` por primera vez. |

### Conexión con la Próxima Clase (C05)

Al cerrar, planta la semilla:

> "El M1 cierra hoy. La próxima clase ya no es CSS — entran a JavaScript con variables, condicionales y bucles. Su landing seguirá ahí; en M2 le pondrán JS al formulario que hoy validaron con HTML."

**Pre-work implícito:** Que pusheen su sitio a GitHub Pages y compartan la URL en el canal de la cohorte.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos estudiantes adaptaron `--color-accent` a su producto vs lo dejaron en azul default?
- ¿Alguno usó JS para validar el form a pesar de la indicación? → seguimiento individual.
- ¿Cuántos PRs se mergearon sin que nadie revisara el diff? → reforzar la lección de revisión en C08.
- ¿Quiénes olvidaron `git pull` y trabajaron sobre un `main` desfasado? → enseñar a verificar con `git status` antes de empezar.

> Lab calificado: tras la clase, revisar los PR mergeados y el sitio en GitHub Pages para calificar contra la rúbrica del lab/README.md.
