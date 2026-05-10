# Guía del Facilitador - Clase 04: CSS Moderno y Git Workflow

> Tiempo de lectura: 8 minutos | Lab CALIFICADO | Prepárate ANTES de clase

---

## 📦 Antes de Llegar (Preparativos Obligatorios)

Esta clase tiene **una preparación que NO puedes dejar para la sesión**: el repo template del **merge conflict prefabricado** de la Parte 4.

### Repo template con conflicto

1. En tu organización de GitHub, crea un repo `code-201-m1-conflict-template` con un `styles.css` simple.
2. Desde `main`, crea dos ramas: `featA` (cambia `.btn { background: blue; padding: 1rem; }`) y `featB` (cambia `.btn { background: red; padding: 1rem; }`).
3. Mergea `featB` a `main` primero. Cuando el alumno intente mergear `featA` a `main`, GitHub provocará el conflicto.
4. Comparte el link del template como tarea pre-clase para que clonen.

Sin este setup, la P4 no se puede ejecutar en vivo y queda como solo lectura.

---

## 🔑 Conceptos Clave

- **CSS Custom Properties (Variables)**: tokens definidos en `:root` con `--nombre` y usados con `var(--nombre)`.
- **Validación nativa HTML**: el navegador valida sin JS si el form tiene `required`, `type`, `pattern` o `minlength`.
- **Git workflow profesional**: `branch → commits → push → PR → merge → pull`. Nunca `main` directo.
- **Merge conflict**: marcadores `<<<<<<<`, `=======`, `>>>>>>>` que Git inserta cuando no puede resolver automáticamente.

---

## 🔗 Analogías Útiles

**CSS Variables <> Receta con ingredientes en una lista al inicio:**
Una buena receta declara los ingredientes arriba ("2 tazas de azúcar") y los menciona por nombre en los pasos. Si quieres reducir azúcar, cambias UN número y toda la receta se ajusta. Eso son las CSS Variables en `:root`.

**Validación nativa <> Portero del bar:**
El portero (navegador) verifica edad antes de dejar entrar. Tú (servidor) ya no necesitas verificarlo otra vez. La validación nativa hace de portero gratis. JS se reserva para reglas que el portero no puede saber ("esta persona ya entró hoy").

**Git branches <> Hojas paralelas del cuaderno:**
`main` es la hoja oficial. Cada `feature/...` es una hoja paralela donde experimentas. El Pull Request es cuando pides revisión antes de pegar tu hoja paralela en la oficial.

**Merge conflict <> Dos editores corrigiendo el mismo párrafo:**
Si dos editores cambian la misma línea de un libro, alguien tiene que decidir qué versión queda. Git no decide por ti — te muestra ambas y te pide que elijas.

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
| Intro | 15 min | Por qué Variables + Validación + Git en la misma clase. |
| Demo Técnica | 20 min | Refactor en vivo: hardcoded → `:root` con tokens. Form sin validar → con `required/type/pattern`. |
| Debate Conceptual | 25 min | Variables vs frameworks, validación nativa vs JS, por qué nadie pushea a `main`. |
| Lab (P1–P5) | 90 min | Variables → Form validado → Git workflow → Merge conflict → Deploy. |
| Cierre | 15 min | Demos finales, retrospectiva, preview de M2. |

---

## 🎯 Momentos Clave de la Clase

### Demo Principal

**Qué mostrar:** Refactor en vivo del CSS de la landing. Antes: `color: #0066cc` repetido en 8 reglas. Después: `:root { --color-primary: #0066cc; }` + `var(--color-primary)`. Cambia el token a `#ff0000` → el sitio entero cambia.

**Script sugerido:**
```
Facilitador: "Cuento las veces que aparece '#0066cc' en este CSS... 8 veces.
Si cambia el branding mañana, tengo que tocar 8 líneas y rezar por no olvidar una.
Miren esto..."
[Refactoriza a :root con var()]
Facilitador: "Ahora cambio UN valor y se actualiza todo. Eso es lo que van a hacer
en su landing en los próximos 20 minutos."
```

**Plan B (si la demo falla):** Hacer el ejercicio en CodePen pre-creado. Tener el snippet listo en una pestaña abierta.

### Transición al Lab

**Momento crítico:** El lab tiene 5 partes. Si gastan 30 min en P1, no llegan a P4. Avisar explícitamente al inicio:

```
Facilitador: "Regla de tiempo: si en 25 min no terminaron Variables, levanten la mano.
La P4 (merge conflict) puede ser post-clase. Lo que NO puede quedar fuera es P1, P2 y P5.
Esas tres son la nota mínima del lab."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Token explorer"

Cuando varios estudiantes terminan P1, hacer pausa de 3 minutos:

> "Levanten la mano quienes definieron más de 6 tokens. ¿Cuáles? Compartan en chat."

**Dinámica sugerida:**
```
Facilitador: "¿Quién definió un --space-xs? ¿--space-2xl?
¿Alguien definió un --font-heading separado de --font-body?
[Recoger ideas en pizarra]
Esos son sus sistemas de diseño embrionarios."
```

### Dinámica 2: "Romper el form a propósito"

En P2, después de validar el form lleno con datos correctos:

> "Ahora intenten romperlo. Email sin @. Teléfono con letras. Submit vacío."

**Dinámica sugerida:**
```
Facilitador: "Su navegador es su primer QA. Vamos a verlo trabajar:
- Vacíen el form, click en Enviar. ¿Qué dice el navegador?
- Escriban 'abc' en el email. Click Enviar. ¿Qué dice?
- Pongan 5 dígitos en el teléfono. Click Enviar.
Si el navegador NO los detuvo, su validación está mal escrita."
```

### Dinámica 3: "Tú eres el PR reviewer"

Cuando alguien termine P3, pedirle que **revise el PR de otro compañero** antes de mergear:

```
Facilitador: "Alex ya tiene su PR abierto. Maru: entra a su PR y déjale un
comentario sobre el código. No es para criticar, es para practicar leer
código ajeno. Después Maru abre el suyo y Alex revisa."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Tokens mínimos viables

**Cuándo usarlo:** Si alguien dice "no sé qué poner en `:root`".

```css
:root {
  --color-primary: #0066cc;
  --color-text: #1a1a1a;
  --color-bg: #f5f5f5;
  --space-md: 1rem;
  --radius: 8px;
  --font-base: system-ui, sans-serif;
}
```

**Tip:** Pedir que copien esto en pizarra (no entregarlo digital). Copiar a mano refuerza.

### Ejemplo 2: Validación nativa en 30 segundos

**Cuándo usarlo:** Demo del navegador como QA.

```html
<input type="email" id="email" required>
<input type="tel" id="tel" pattern="[0-9]{9}" required>
<button type="submit">Enviar</button>
```

**Tip:** Submit con el form vacío. El navegador hace toda la magia. Ni una línea de JS.

### Ejemplo 3: Resolver un conflict en vivo

**Cuándo usarlo:** Demo de P4.

```css
.btn {
<<<<<<< HEAD
  background: blue;
=======
  background: red;
>>>>>>> main
  padding: 1rem;
}
```

**Tip:** Resolver eligiendo `var(--color-primary)` — muestra cómo P1 (variables) y P4 (conflict) se conectan.

---

## ⚠️ Errores Comunes

| Señal | Qué está pasando | Qué hacer |
|---|---|---|
| `var(--color-primary)` no se aplica | El token no está en `:root` o tiene typo (`--color-primay`) | Abrir DevTools → Computed → ver si el navegador lo reconoce |
| El form se envía aunque esté vacío | Falta el atributo `required` o el botón no es `type="submit"` | Verificar atributos del input y del botón |
| `pattern` no rechaza letras | La regex está mal escrita | `pattern="[0-9]{9}"` exacto. Si quiere espacios o guiones, agregar a la regex |
| Push directo a `main` "porque era más fácil" | Saltarse P3 | Pedirle reverso: `git reset --hard HEAD~1` solo en local, después seguir el flujo |
| Marcadores `<<<<<<<` siguen en el archivo después del merge | Olvidó borrarlos manualmente | "Borrar los marcadores es PARTE del merge. Git no lo hace por ti." |
| `git pull` después del merge da error | No hizo `git checkout main` antes | Recordar la secuencia: checkout main → pull → trabajar |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Puede explicar por qué `--color-primary` en `:root` reemplaza a 8 ocurrencias hardcoded.
- Diferencia `required` (obligatorio) de `pattern` (formato) sin dudar.
- Puede dictar el flujo `branch → commit → push → PR → merge → pull` sin mirar apuntes.

### El estudiante NECESITA AYUDA cuando:
- Copia los tokens del ejemplo sin renombrarlos a sus necesidades.
- No revisa el feedback nativo del navegador y agrega JS para validar lo que `type="email"` ya valida.
- Mergea su PR sin abrirlo (botón "Merge" sin leer el diff).

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~25' | P1 lista | El alumno cambia un token en `:root` y demuestra que afecta ≥3 elementos visualmente. |
| ~50' | P2 lista | Submit vacío → bloqueado. Submit con email mal → bloqueado. Submit válido → pasa. |
| ~70' | P3 lista | GitHub muestra el PR mergeado. `git log` local incluye el commit del PR. |
| ~85' | P4 lista (o pendiente post-clase) | `git log --merges` muestra commit de merge. Archivo sin marcadores. |
| ~90' | P5 lista | URL pública funcional + README documentado. |

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado en el debate:
- "Pregunta para todos: ¿alguien ha visto un proyecto donde se cambia el color de marca? ¿Cuánto tomó?"

### Si alguien ya sabía Git:
- Mandarlo a hacer el reto del README (tabla de tokens) o a ayudar a un compañero atrasado.

### Si el lab se está pasando:
- A los 75 min: anunciar que P4 es ahora post-clase. Asegurar P1, P2, P3, P5 en clase.

### Si alguien usa JavaScript para validar el form:
- "Tu JS funciona, pero el reto era validación nativa. Quita tu JS y prueba con `required`/`type`/`pattern`. Vas a ver que el navegador hace lo mismo."

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué no usar `width` en vez de `flex-basis`?
**R:** No es de esta clase, pero si surge: `flex-basis` interactúa con `flex-grow`/`flex-shrink`; `width` no. Es la diferencia entre "tamaño objetivo" y "tamaño rígido".

### P: ¿`pattern` reemplaza a regex en JS?
**R:** Para validar formato de input, sí. Para reglas de negocio (ej. "el email no está duplicado"), no — eso requiere servidor.

### P: ¿Puedo trabajar el conflict en GitHub web en vez de local?
**R:** Sí, GitHub permite resolver conflictos simples en su UI. Pero la P4 evalúa que sepas hacerlo en la consola, que es lo que vas a necesitar cuando el conflicto sea complejo.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C01 | `<form>`, `<label for>`, `<input>` | El form se enriquece con validación nativa. |
| C01 | Repositorio Git | El workflow profesional se monta sobre el repo que ya existe. |
| C02–C03 | CSS hardcoded (colores, espacios) | Se refactoriza con Variables. |

### Conexión con la Próxima Clase (C05)

Al cerrar, planta la semilla:

> "El M1 cierra hoy. La próxima clase ya no es CSS — entran a JavaScript con variables, condicionales y bucles. Su landing seguirá ahí; en C07 le pondrán JS al formulario que hoy validaron con HTML."

**Pre-work implícito:** Que pusheen su sitio a GitHub Pages y compartan la URL en el canal de la cohorte.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos estudiantes completaron P4 (merge conflict) en vivo vs post-clase?
- ¿Alguno usó JS para validar el form a pesar de la indicación? → seguimiento individual.
- ¿Qué tokens definieron en `:root` que NO esperabas? → posible patrón para próximas cohortes.
- ¿Qué estudiantes nunca pushearon directo a `main` y entendieron el flujo desde el inicio?

> Lab calificado: tras la clase, revisar los PR mergeados y los commits de resolución de conflict para calificar contra la rúbrica del lab/README.md.
