# Guía del Facilitador - Clase 05: Programación Imperativa

> Tiempo de lectura: 8 minutos | Primera clase del M2 | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Variable global**: `let movimientos = []` declarado fuera de funciones, accesible y mutable desde cualquier parte del script.
- **Validación con `if`**: patrón `if (condicion_invalida) { alert(...); return; }` antes de modificar estado.
- **Bucle `while`**: itera mientras una condición sea verdadera; el usuario controla la salida.
- **Función imperativa**: modifica estado externo (variables globales) y/o produce efectos como `prompt`/`console.log`. **No retorna nada útil.**
- **Acoplamiento**: las funciones dependen del estado externo. Cambia el estado → cambia el comportamiento. Es el "olor" que C06 (funcional) y C07 (OOP) van a resolver.

---

## 🔗 Analogías Útiles

**Variable global <> Pizarra del salón de clase:**
Cualquier estudiante puede acercarse y escribir, borrar o cambiar lo que está en la pizarra. Todos leen lo mismo. Funciona en una clase de 10, se vuelve caos en una de 200.

**Función imperativa <> Receta de cocina paso a paso:**
Te dice cómo hacer cada paso, en qué orden. Si saltas un paso o cambias el orden, no obtienes el plato. La receta modifica la cocina (ingredientes consumidos, ollas sucias), no solo retorna información.

**Bucle `while` <> Filtro de migraciones:**
"¿Tiene visa? Sí → entra siguiente. ¿Tiene visa? No → cierra el counter." Sigue mientras la condición se cumpla. El usuario (o la condición) decide cuándo termina.

**Validación con `if` antes de mutar <> Portero del bar:**
Antes de dejar entrar a alguien, el portero verifica la edad. Si no cumple, NO entra. La validación protege el estado del bar (del array de movimientos).

---

## 📚 Contexto Actual

### El paradigma imperativo en la industria hoy

JavaScript empezó como un lenguaje 100% imperativo en 1995. Brendan Eich lo diseñó en 10 días para manipular el DOM con instrucciones secuenciales: "tomá este botón, cambialo, mostralo". Veinte años después, lenguajes como React introdujeron pensamiento declarativo, pero **debajo de cada framework moderno sigue habiendo código imperativo**: bucles, asignaciones, mutaciones.

> **Para contar en clase:** "Cuando aprenden imperativo no aprenden 'lo viejo' — aprenden el lenguaje base sobre el que se construye todo lo demás. Cada `useState` de React es azúcar sobre asignaciones imperativas."

### Por qué arrancamos con `prompt()` y no con un form HTML

`prompt()` no es producción real, es la rueda de entrenamiento más simple posible: una línea de código captura input del usuario. Permite enfocarse en variables, condicionales y bucles **sin la complejidad del DOM**. El alumno verá forms reales en C07 (M2) y los manipulará dinámicamente en M3.

**Fuentes:** [MDN — Window.prompt()](https://developer.mozilla.org/es/docs/Web/API/Window/prompt){:target="_blank"}, [JavaScript: A Decade in Review (Mozilla)](https://hacks.mozilla.org/2015/05/es6-in-depth-introduction/){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Demo Principal

**Qué mostrar:** Tres minutos en vivo, en `app.js`:

1. Declarar `let movimientos = []` en pizarra mental: "esta es nuestra pizarra única, todo lo demás la consulta".
2. Capturar 1 movimiento con `prompt` + validar con `if` + `push`.
3. Mostrar `console.log(movimientos)` con 1 elemento.
4. Intentar uno inválido (`tipo = "pinguino"`) → alert salta → array queda intacto.

**Script sugerido:**
```
Facilitador: "Voy a registrar un movimiento. Miren mi consola.
[código en vivo, ~2 min]
Ahora intento meter datos basura. ¿Qué creen que pase?"
[Demo del path inválido]
Facilitador: "El array NO se contaminó. ESA es la diferencia entre validar antes de mutar
y mutar primero y arrepentirse después."
```

**Plan B (si la demo falla):** Tener un archivo `app.js` pre-escrito en otra ventana de VS Code. Lo abres y narras línea por línea.

### Transición al Lab

**Momento crítico:** El lab tiene **3 partes con sub-pasos hiperespecíficos**. NO son HUs con criterios de aceptación libres — son recetas. Si los estudiantes intentan "improvisar P1 a su manera", los pierdes.

**Script sugerido:**
```
Facilitador: "Hoy el lab es como una partitura: sigan los sub-pasos en orden.
La libertad creativa va en los Logros Adicionales al final.
Si terminan antes, no se adelanten a P2 — usen los retos autónomos."
```

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "El estado en la pizarra"

Antes de empezar P1, pide a 3 estudiantes que pasen al frente. Tú narras: "Yo voy a llamar a `registrarMovimiento()`. ¿Quién va a sostener `movimientos`?". Uno levanta la mano: ese es el "array global".

**Dinámica sugerida:**
```
Facilitador: "Ahora yo registro 'Cena, gasto, 45'. ¿Quién apunta al array global?"
[Estudiante levanta papel con array vacío]
Facilitador: "Bien. Mi función push agrega un elemento. ¿Qué hace el estudiante con el array?"
[Estudiante escribe: [{nombre:'Cena',...}] ]
Facilitador: "¿Y si llamo registrarMovimiento de nuevo, qué pasa?"
```

Visualizar el acoplamiento físicamente ayuda más que cualquier diagrama.

### Dinámica 2: "Romper el programa a propósito"

Después del Checkpoint 1, propón:

> "Intenten meter datos basura. ¿Qué pasa si el monto es texto? ¿Si el tipo está vacío?"

**Dinámica sugerida:**
```
Facilitador: "Quien rompa el programa con el input más creativo y aún así el array
quede limpio, gana puntos imaginarios. Compartan en el chat lo que probaron."
```

Esto refuerza el valor de la validación y enseña a pensar en edge cases.

### Dinámica 3: "El acoplamiento se nota"

Antes del cierre, plantea esta pregunta para discusión grupal:

> "Si su programa tuviera 20 funciones que TODAS modifican `movimientos`, ¿qué problemas aparecen?"

**Dinámica sugerida:**
```
Facilitador: "Levanten la mano si su función registrarMovimiento depende del array global.
¿Y la calcularTotalSaldo? ¿Y mostrarResumen?
Todas dependen de la misma pizarra. Si una función bug, contamina las otras.
ESTO es lo que vamos a resolver en C06 (funcional) y C07 (OOP)."
```

---

## 💡 Ejemplos Listos para Usar

### Ejemplo 1: Validación robusta

**Cuándo usarlo:** Si alguien valida solo con `if (nombre)` y se olvida del tipo o monto.

```javascript
if (!nombre || (tipo !== 'ingreso' && tipo !== 'gasto') || isNaN(valor) || valor <= 0) {
  alert('Datos inválidos.');
  return;
}
```

**Tip de facilitación:** En pizarra, dibuja la "puerta del bar" con 3 candados: nombre, tipo, monto. Si CUALQUIERA falla, no entra.

### Ejemplo 2: Bucle `while` con condición controlada

**Cuándo usarlo:** En P2, cuando alguien usa `for` por costumbre.

```javascript
let continuar = 'si';
while (continuar === 'si') {
  registrarMovimiento();
  continuar = prompt('¿Otro? (si/no):');
}
```

**Tip:** Pregunta: "¿Cuántas veces se ejecuta este `while`?" Respuesta: depende del usuario. Eso es lo que `for` no permite naturalmente.

### Ejemplo 3: Función imperativa que NO retorna

**Cuándo usarlo:** Si alguien intenta hacer `return movimientos` dentro de `registrarMovimiento()`.

```javascript
function registrarMovimiento() {
  // ... captura, valida, push ...
  // Sin return. La función modifica la global. Eso es su efecto.
}
```

**Tip:** "Una función imperativa hace cosas. Una función pura retorna cosas. Hoy hacemos las primeras. En C06 hacemos las segundas."

---

## ⚠️ Errores Comunes

| Síntoma | Qué está pasando | Qué hacer |
|---|---|---|
| `movimientos is not defined` dentro de una función | Variable declarada con `let` dentro de otra función | Mover `let movimientos = []` al scope global, al inicio de `app.js` |
| `NaN` en el saldo | `parseFloat(prompt())` falló porque el usuario escribió texto | Validar con `isNaN(valor)` antes del push |
| Bucle infinito en P2 | Olvidó actualizar `continuar` al final del loop | Mover la línea `continuar = prompt(...)` al **último** sub-paso dentro del while |
| El form de la página se "recarga" | Confusión con C07 — aquí NO hay form, solo `prompt` | Aclarar: forms HTML llegan en C07, hoy solo `prompt()` y consola |
| `mostrarResumen()` muestra `undefined` | Olvidó retornar valor en `calcularTotalSaldo()` | Esa función SÍ retorna (es de cálculo, no de efecto). Imperativa ≠ "todas las funciones sin return" |
| El alumno "improvisa" sus propias HUs | Trata el lab como C06/C07 donde había libertad | Recordar: los sub-pasos son partitura. Logros autónomos para libertad |

---

## ✅ Señales de Comprensión

### El estudiante ENTIENDE cuando:
- Predice qué pasa con `movimientos` antes de ejecutar el código.
- Explica por qué `registrarMovimiento()` no necesita `return`.
- Identifica que el `while` depende de una variable externa para terminar.

### El estudiante NECESITA AYUDA cuando:
- Pone `let movimientos = []` dentro de cada función.
- Hace `return movimientos.push(...)` (mezcla mutación con retorno).
- No puede explicar por qué la función `calcularTotalSaldo()` SÍ retorna pero `registrarMovimiento()` NO.

---

## 🎯 Checkpoints de Validación

| Tiempo | Checkpoint | Cómo validar |
|---|---|---|
| ~30' | P1 lista | Consola muestra `movimientos` con 1 elemento tras prompt válido. Alert salta y array queda vacío con input inválido. |
| ~70' | P2 lista | Tras registrar 3 movimientos y responder `no`, el bucle termina y la consola muestra los 3 elementos. |
| ~110' | P3 lista | Las 3 funciones declaradas. `mostrarResumen()` imprime cantidad y saldo correctos. |

Si alguien NO llega al Checkpoint 2 en 70 min: ofrécele saltar P3 y enfocarse en consolidar P2. Es preferible terminar 2 partes bien que las 3 a medias.

---

## 🧑‍🏫 Tips de Facilitación

### Si el grupo está callado:
- "Vamos a una pregunta específica: ¿qué pasa si registro 0 movimientos y llamo a `mostrarResumen()`?" — fuerza pensamiento sobre edge cases.

### Si alguien ya programa en otro lenguaje:
- Pídele que compare con el imperativo de Python/Java. Las diferencias son sutiles y validan su experiencia.

### Si la mayoría termina P3 antes:
- Ofrece el Reto Autónomo de P3 (desglose por tipo en `mostrarResumen`). NO el contenido de C06 — preserva la sorpresa pedagógica.

### Si hay preguntas sobre arrow functions, clases o `let` vs `var`:
> "Excelente pregunta. `let` lo usamos hoy y es la forma moderna. Arrow functions y clases las verán en C07 y M4. Hoy quédense con `function nombre() {}` clásica."

---

## ❓ Preguntas Frecuentes

### P: ¿Por qué no usamos `forEach` para recorrer el array en `calcularTotalSaldo()`?
**R:** `forEach` se enseña formalmente en C06 (programación funcional). Hoy usamos `for` clásico para mantener el paradigma imperativo puro y dejar la sorpresa para la próxima clase.

### P: ¿Por qué `prompt()` y no un formulario HTML?
**R:** `prompt` es la rueda de entrenamiento más simple posible. El alumno usa forms HTML reales en C07 (capturando con `querySelector().value`). Mantén el foco en variables/condicionales/bucles, no en DOM.

### P: ¿Puedo usar `const` en vez de `let` para `movimientos`?
**R:** No. `const` impide reasignar, pero NO impide mutar el array (`push` funciona). Aún así, por consistencia conceptual, usa `let` para enfatizar que es estado mutable.

### P: ¿Esto se parece a Python imperativo?
**R:** Sí, mucho. Si conocen Python, la analogía es directa. Aprovecha para que enseñen a sus compañeros la comparación.

---

## 🔗 Conexiones del Curriculum

### Esta clase construye sobre:

| Clase | Concepto | Cómo se conecta |
|---|---|---|
| C00 (prework) | Sintaxis básica de JS | Hoy se aplica con propósito a un proyecto real |
| C01–C04 (M1) | Repo GitHub | Hoy crean `personal-budget` como nuevo proyecto víctima del M2 |

### Conexión con la Próxima Clase (C06)

Al cerrar, planta la semilla:

> "Hoy crearon 3 funciones que TODAS dependen del array global. Si quisieran agregar 20 funciones más, esto se vuelve frágil. La próxima clase aprenden **programación funcional**: funciones puras que reciben todo lo que necesitan y retornan resultados, sin tocar el estado externo. Mismo proyecto, otro paradigma."

**Pre-work / Tarea implícita:** Que prueben con 10 movimientos en su programa hoy y observen cómo crece la lógica. Esa fricción es el insumo emocional de C06.

---

## 🪞 Reflexión Post-Clase

### Preguntas para el facilitador:
- ¿Cuántos estudiantes intentaron declarar `movimientos` dentro de una función? Si más del 30%, refuerza el concepto de scope al inicio de C06.
- ¿Quién terminó P3 con tiempo de sobra? Identificalos como mentores de pares para C06.
- ¿La analogía del bar / portero funcionó para validación? Si no, prueba otra en C06.
- ¿Algún estudiante usó `forEach` o `map` sin que se lo enseñaras? Si sí, marcalos para preguntarles en C06 si pueden explicar por qué eligen esa forma.
