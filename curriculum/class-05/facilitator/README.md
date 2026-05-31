# Guía del Facilitador — Clase 05: Programación Imperativa + Arrays

> Tiempo de lectura: 8 minutos | Primera clase del M2 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Array** (estructura nueva): `[]`, `.push()`, `.length`, indexación `arr[i]`. Es lo nuevo más importante de la clase.
- **Arrays paralelos**: 2 (o más) arrays donde `nombres[i]` y `valores[i]` describen el mismo registro. Patrón frágil — el alumno DEBE sentir esa fragilidad para que C07 (objetos) le haga sentido.
- **Bucles**: `while` cuando el usuario controla el fin · `for (let i = 0; i < arr.length; i++)` para recorrer arrays.
- **APIs del navegador**: `prompt()`, `alert()` — la rueda de entrenamiento más simple para input/output.
- **Conversión y validación**: `parseFloat()` para string → número · `isNaN()` para detectar inválido · falsy (`""`, `0`, `null`) para validar con `!nombre`.
- **Función imperativa**: modifica estado externo (variables globales) y/o produce efectos. **No siempre retorna** — `registrarMovimiento` NO retorna, `calcularSaldo` SÍ.

---

## 🔗 Analogías Útiles

**Array <> Casilleros numerados de un gimnasio:**
Cada casillero tiene un número (índice). Pones algo en el casillero `0`, en el `1`, etc. `length` te dice cuántos casilleros hay ocupados. `push` ocupa el siguiente vacío.

**Arrays paralelos <> Dos listas de asistencia separadas:**
Una con nombres, otra con notas. La fila 3 de "nombres" debe corresponder a la fila 3 de "notas". Si insertas en una y olvidas la otra, todas las notas siguientes quedan corridas. **Esa fragilidad es la motivación para objetos en C07.**

**`while` <> Filtro de migraciones:**
"¿Tiene visa? Sí → entra siguiente. ¿No? → cierra el counter." Sigue mientras la condición se cumpla.

**`for` sobre array <> Pasar lista en clase:**
Empiezas en el alumno 0, vas al 1, al 2... hasta el último. `for` con índice es exactamente eso.

**Función imperativa <> Receta de cocina:**
Te dice cómo hacer cada paso, en qué orden. Modifica la cocina (ingredientes consumidos, ollas sucias) — no solo retorna información.

---

## 📚 Contexto Actual

### Arrays: la estructura más usada de JavaScript

Cualquier app real (catálogo, lista de tareas, posts, tweets) es **un array de algo**. En C05 el alumno aprende los mecanismos básicos: agregar, contar, leer. Los **métodos funcionales** (`.map`, `.filter`, `.reduce`) llegan en C06 — hoy mantenemos arrays con `for` clásico para reforzar el paradigma imperativo.

### Por qué arrays paralelos (y no objetos todavía)

Es un patrón frágil intencional. El alumno tiene que SENTIR el dolor de mantener `nombres[i]` y `valores[i]` sincronizados. Cuando C07 introduce `{ nombre, tipo, valor }` el alivio será emocional, no abstracto.

> **Para contar en clase:** "Hoy mantienen 2 arrays sincronizados. Funciona. Pero presten atención al esfuerzo mental. En 2 clases verán cómo objetos eliminan ese esfuerzo de raíz."

### Por qué arrancamos con `prompt()` y no con un form HTML

`prompt()` es la rueda de entrenamiento más simple posible. Permite enfocarse en variables, arrays, condicionales y bucles **sin la complejidad del DOM**. Los forms HTML reales llegan en C07; el DOM dinámico (`createElement`, eventos múltiples) en M3.

**Fuentes:** [MDN — Arrays](https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays){:target="_blank"}, [MDN — Window.prompt()](https://developer.mozilla.org/es/docs/Web/API/Window/prompt){:target="_blank"}

---

## 🎯 Estructura Resumida

| Fase | Tiempo | Foco |
|---|---|---|
| Intro + repaso | 15 min | Variables/if/funciones de Code 101 + ¿qué es una "estructura de datos"? |
| Demo Técnica | 20 min | Array literal en vivo: `.push`, `.length`, `arr[i]`, recorrer con `for`. |
| Lab (P1–P3) | 105 min | P1 Arrays + prompt + validación · P2 while + for · P3 funciones imperativas + reporte. |
| Cierre | 15 min | El dolor de arrays paralelos: semilla para C07. |

---

## 🎯 Momentos Clave de la Clase

### Demo Principal — arrays en vivo

**Qué mostrar (3 min):** un array de frutas creciendo en consola.

```javascript
let frutas = [];
console.log(frutas.length);   // 0
frutas.push('manzana');
frutas.push('pera');
frutas.push('uva');
console.log(frutas);          // ['manzana', 'pera', 'uva']
console.log(frutas[0]);        // 'manzana'
console.log(frutas[2]);        // 'uva'
console.log(frutas.length);    // 3
```

**Script sugerido:**
```
Facilitador: "Empiezo con un array vacío. Cada push agrega al FINAL.
Para leer uso CORCHETES con el número de POSICIÓN.
La primera posición es CERO, no UNO. ¿Por qué cero? Convención histórica
de C — y todos los lenguajes modernos lo heredaron.
Repitan conmigo: 'cero es el primero'."
```

**Plan B (si la demo falla):** CodePen con el array listo y vas haciendo `console.log` paso por paso.

### Demo de "arrays paralelos" en pizarra (5 min)

Antes de P1.2, dibuja dos listas en pizarra:

```
nombres:  [ Salario ]  [ Cena ]  [ Freelance ]
valores:  [  3000   ]  [ -45.50] [    500   ]
```

Borra `nombres[1]` (la "Cena") pero deja `valores[1]` intacto.

```
nombres:  [ Salario ]  [        ]  [ Freelance ]
valores:  [  3000   ]  [ -45.50 ]  [    500   ]
```

Pregunta: "¿Cuánto vale `valores[1]`?" Respuesta: `-45.50`. "Pero ¿de quién es ese gasto?" Silencio incómodo.

**Lección visceral**: el sistema mintió silenciosamente. Sin objetos, esta es la realidad.

### Transición al Lab

```
Facilitador: "El lab tiene 3 partes con sub-pasos hiperespecíficos.
NO son user stories libres — son recetas. Sigan en orden.
Logros adicionales al final son donde improvisan.
Si terminan antes, retos autónomos. NO se adelanten a C06."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Sincronicen los arrays"

Antes de P1.2: pide a 2 alumnos al frente. Uno sostiene una pizarra con `nombres`, otro con `valores`. Tú narras "registramos Cena" y ambos tienen que actualizar simultáneamente.

```
Facilitador: "Ahora yo grito 'Salario, 3000'. Ambos escriben.
Ahora 'Cena, -45.50'. Ambos escriben.
[Le dices a UNO solo:] tú no escribas el siguiente.
[Al otro:] 'Freelance, 500'. Tú escribes.
[Pregunta al grupo:] ¿qué pasa ahora con valores[2]? ¿De quién es?"
```

Es difícil olvidar este momento.

### Dinámica 2: "Romper la indexación"

Después del Checkpoint 1: pídeles que pongan `console.log(nombres[10])`.

```
Facilitador: "¿Qué imprime? ¿Por qué `undefined` y no error?
Es una particularidad de JS: leer fuera del array NO crash, da undefined.
En otros lenguajes esto es un error grave. En JS hay que ser cuidadoso."
```

### Dinámica 3: "El acoplamiento global"

Antes del cierre:

> "Si su programa tuviera 20 funciones que TODAS modifican `nombres` y `valores`, ¿qué problemas aparecen?"

```
Facilitador: "Levanten la mano si su registrarMovimiento depende del array global.
¿Y calcularSaldo? Todas dependen de la misma pizarra.
Si una función tiene bug, contamina las otras.
ESTO es lo que C06 (funcional) y C07 (OOP) van a resolver."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Validación con falsy + isNaN

**Cuándo usarlo:** si alguien valida solo con `if (nombre)` y olvida tipo o monto.

```javascript
if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(monto) || monto <= 0) {
  alert('Datos inválidos.');
  return;
}
```

**Tip:** En pizarra, dibuja una puerta con 4 candados: nombre, tipo, monto numérico, monto positivo. Si CUALQUIERA falla, no entra.

### Ejemplo 2: Push paralelo coherente

**Cuándo usarlo:** si alguien hace `nombres.push()` y olvida el `valores.push()`.

```javascript
const valor = tipo === 'ingreso' ? monto : -monto;
nombres.push(nombre);   // SIEMPRE juntos
valores.push(valor);    // SIEMPRE juntos
```

**Tip:** "Si uno sube, el otro sube. Si pones uno solo, en C07 ven cómo objetos hacen esto imposible de equivocar."

### Ejemplo 3: For sobre array con signo

**Cuándo usarlo:** en P2.2 para calcular saldo.

```javascript
let saldo = 0;
for (let i = 0; i < valores.length; i++) {
  saldo = saldo + valores[i];  // signos hacen el trabajo
}
```

**Tip:** "Ingresos positivos suman, gastos negativos restan. Si tuviéramos `tipo` por separado, necesitaríamos un `if` adentro del `for`. El signo nos lo ahorró."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `nombres is not defined` dentro de una función | Variable declarada con `let` dentro de otra función | Mover `let nombres = []` y `let valores = []` al scope global |
| `NaN` en el saldo | `parseFloat(prompt())` falló porque el usuario escribió texto | Validar con `isNaN(monto)` antes del push |
| Saldo siempre positivo (no resta gastos) | Olvidó convertir gasto a negativo | Verificar `const valor = tipo === 'ingreso' ? monto : -monto` |
| `nombres[i]` y `valores[i]` no coinciden | Hizo push solo en uno | Recordarles: SIEMPRE push paralelo. Si separan, todo se descalibra |
| Bucle infinito en P2 | Olvidó actualizar `continuar` al final del `while` | Mover `continuar = prompt(...)` al **último** lugar dentro del bucle |
| `mostrarResumen()` muestra `undefined` | Olvidó retornar valor en `calcularSaldo()` | Esa función SÍ retorna. Imperativa ≠ "ninguna función retorna" |
| Lee `arr[arr.length]` y obtiene `undefined` | Off-by-one — el último índice es `length - 1` | "El primero es 0, el último es length-1. El índice `length` NO existe" |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Predice qué imprime `nombres[2]` antes de ejecutar.
- Explica por qué `registrarMovimiento()` no retorna pero `calcularSaldo()` sí.
- Identifica que el `for` recorre desde `0` hasta `length - 1`.
- Reconoce que push paralelo es frágil.

### El estudiante NECESITA AYUDA cuando:
- Pone `let nombres = []` dentro de cada función.
- Confunde `arr.length` con `arr[length]`.
- Hace `nombres.push()` y olvida `valores.push()`.
- No conecta que ingresos positivos + gastos negativos hace innecesario un `if` en `calcularSaldo`.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | P1 lista | Tras prompt válido, consola muestra ambos arrays con 1 elemento alineado. Input inválido → alert + arrays vacíos. |
| ~65' | P2 lista | Tras registrar 3 movimientos y responder `no`, consola muestra los 3 elementos en ambos arrays + saldo con signo correcto. |
| ~105' | P3 lista | Las 3 funciones declaradas. `mostrarResumen()` imprime cantidad y saldo. |

Si alguien NO llega al Checkpoint 2 en 65 min: ofrécele saltar P3 y consolidar P2.

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado:
- "¿Qué pasa si registro 0 movimientos y llamo a `mostrarResumen()`?" — fuerza pensar en edge cases.

### Si alguien ya programa en otro lenguaje:
- Pídele comparar arrays con su lenguaje (Python lists, Java arrays). Aprovecha como puente.

### Si la mayoría termina P3 antes:
- Ofrece el Reto Autónomo de desglose por tipo. NO adelantes contenido de C06.

### Si surgen preguntas sobre `forEach`/`map`:
> "Esos llegan en C06 (próxima clase). Hoy `for` clásico — refuerza el paradigma imperativo."

### Si surgen preguntas sobre objetos `{}`:
> "Llegan en C07. Hoy 2 arrays paralelos. Presten atención al esfuerzo de sincronizarlos — eso es lo que objetos van a resolver."

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué no usamos un objeto `{ nombre, tipo, valor }` desde ya?
**R:** Pedagógicamente intencional. C07 introduce objetos. Si los usamos hoy, el alumno los aprende de manera implícita y mal. Hoy: 2 arrays paralelos para SENTIR la fragilidad. C07: la solución elegante.

### P: ¿Por qué `prompt()` y no un formulario HTML?
**R:** `prompt` es la rueda de entrenamiento más simple. Forms HTML reales en C07. DOM dinámico en M3.

### P: ¿Puedo usar `const` para `nombres` y `valores`?
**R:** Técnicamente sí (`const` impide reasignar pero permite mutar con `.push()`). Por consistencia conceptual usa `let` para enfatizar que es estado mutable.

### P: ¿Por qué números con signo y no `if (tipo === 'ingreso')`?
**R:** El signo permite escribir `calcularSaldo` sin un `if` adentro — más limpio. Y en C07 cuando volvemos a tener `tipo` explícito, el contraste es revelador.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| Code 101 M3 (C09-C11) | Variables, if/else, funciones | Hoy se aplican a un proyecto + se agregan arrays + bucles |
| C01-C04 (M1) | Repo GitHub | Hoy crean `personal-budget` como nuevo proyecto víctima del M2 |

### Conexión con C06 (Funcional)

Al cerrar:

> "Hoy escribieron un `for` para calcular saldo. En C06 ese `for` desaparece — `valores.reduce((acc, v) => acc + v, 0)` hace lo mismo en una línea. Y van a conocer las **arrow functions** (`=>`). Mismo proyecto, otro paradigma."

### Conexión con C07 (OOP)

> "Hoy mantuvieron 2 arrays paralelos. En C07 los 2 arrays se vuelven UNO solo de objetos: `[{ nombre, tipo, valor }]`. Si borran un movimiento, borran todo junto. No más sincronización manual."

**Pre-work implícito:** Que prueben con 10 movimientos y observen el esfuerzo mental. Esa fricción es el insumo emocional de C06 y C07.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos estudiantes olvidaron uno de los `push` paralelos al menos una vez? Si fue común, refuerza el patrón al inicio de C06.
- ¿Quién terminó P3 con tiempo de sobra? Identifícalos como mentores de pares.
- ¿Algún alumno usó `forEach`/`map` sin que se lo enseñaras? Marca para preguntarle en C06 si puede explicar por qué.
- ¿La dinámica de pizarra con `nombres`/`valores` desincronizados hizo "click"? Si no, prueba otra analogía en C07.
