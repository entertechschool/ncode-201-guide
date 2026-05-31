> 📦 **Módulo 2:** Clase 3 de 4

# Clase 07: Objetos Literales + Programación Orientada a Objetos

## Resumen

En esta clase resuelves el dolor de los **2 arrays paralelos** de C05/C06 con dos conceptos nuevos: **objetos literales** (`{ key: value }`) y **funciones constructoras** (`function Movimiento() { this.x = ... }`). El proyecto **Gestor de Presupuesto Personal** sufre su refactor más dramático: cada movimiento pasa de ser dos entradas separadas en `nombres[]` y `valores[]` a UN objeto `{ nombre, tipo, valor }` dentro de un solo array. Al final conectas tu modelo OOP con un **formulario HTML** — primer puente JS↔HTML del curso — capturando inputs reales con `querySelector` + `addEventListener('submit')` + `event.preventDefault()`. Es un momento clave: comprendes cómo OOP organiza datos + comportamiento y por qué objetos eliminan la fragilidad del paradigma anterior.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---|---|---|
| **1. Introducción y Contexto** | 15 min | Repaso del dolor de C05/C06 (arrays paralelos) + motivación: ¿y si todo fuera un solo array de objetos? |
| **2. Demo Técnica** | 20 min | Demo en vivo: objeto literal → array de objetos → constructora con `new`. |
| **3. Laboratorio (4 partes)** | 105 min | P0 Objetos literales (~15 min) · P1 Refactor del modelo (~25 min) · P2 Constructoras (~30 min) · P3 Puente JS↔HTML (~35 min). |
| **4. Cierre y Síntesis** | 15 min | Discusión: ¿qué cambió al pasar de arrays paralelos a objetos? + semilla C08 (prototipos). |

## 🎯 Objetivos de aprendizaje

Al finalizar esta clase, serás capaz de:

1. **Crear objetos literales** con `{ key: value }` y manipular sus propiedades con `.prop`.
2. **Implementar funciones constructoras** con `function Constructor()`, `this` y `new`.
3. **Refactorizar** el modelo de 2 arrays paralelos a UN array de objetos.
4. **Conectar JS con HTML** capturando inputs desde un formulario — primer puente JS↔HTML del curso.

---

## 📌 Preparación para la clase

> Antes de llegar a clase, investiga y prepárate:

#### 🔍 Misión de Investigación

**1. Objetos literales en JavaScript:**
- Investiga: ¿Cómo se declara un objeto con `{}` y cómo se accede a sus propiedades?
- Encuentra: 3 ejemplos de datos del mundo real modelados como objetos (persona, libro, producto).
- Prepárate para explicar: ¿Cuál es la diferencia entre un array y un objeto?

**2. La palabra clave `this`:**
- Investiga: ¿Qué representa `this` dentro de una función constructora?
- Encuentra: Un ejemplo de constructora simple en MDN o JavaScript.info.
- Prepárate para explicar: ¿Por qué `this` cambia según el contexto?

**3. Función constructora vs función normal:**
- Investiga: ¿Por qué la convención dicta que el nombre empiece en mayúscula?
- Encuentra: Qué pasa si llamas una constructora SIN `new`.
- Prepárate para explicar: ¿Qué hace `new` por debajo?

**4. Acceso al DOM con `querySelector`:**
- Investiga: ¿Cómo se obtiene el valor escrito en un `<input>` desde JavaScript?
- Encuentra: La diferencia entre `querySelector('#id')` y `getElementById('id')`.
- Prepárate para explicar: ¿Para qué sirve `event.preventDefault()` en un submit?

#### 🧠 Preguntas de reflexión

- ¿Qué propiedades crees que debería tener un objeto `Movimiento`? ¿Y un objeto `Presupuesto`?
- Si tuvieras 100 movimientos guardados como objetos, ¿qué métodos del array (`filter`, `map`, `reduce`) podrías aplicarles?
- ¿Por qué crees que es útil agrupar datos y funciones que actúan sobre esos datos en un solo lugar?

#### 📚 Recursos sugeridos

1. **MDN — Trabajando con objetos**
   [https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics){:target="_blank"}

2. **JavaScript Tutorial — Constructor Functions**
   [https://www.javascripttutorial.net/javascript-constructor-function/](https://www.javascripttutorial.net/javascript-constructor-function/){:target="_blank"}

3. **MDN — Document.querySelector**
   [https://developer.mozilla.org/es/docs/Web/API/Document/querySelector](https://developer.mozilla.org/es/docs/Web/API/Document/querySelector){:target="_blank"}

---

## Resultados esperados

### Podrán hacer
1. **Declarar objetos literales** y leer/modificar sus propiedades.
2. **Crear funciones constructoras** con `this` para datos y métodos.
3. **Instanciar** múltiples objetos con `new` desde la misma constructora.
4. **Refactorizar** el modelo del proyecto: de 2 arrays paralelos a array de objetos.

### Podrán explicar
1. **Diferencia entre array y objeto** — orden por índice vs. acceso por propiedad nombrada.
2. **Por qué objetos resuelven el dolor de arrays paralelos** — los datos viajan juntos por integridad.
3. **Cuándo usar constructora vs objeto literal directo** — cuando creas muchos del mismo "tipo" con mismas propiedades/métodos.

### Podrán implementar
1. **Modelo OOP completo** del Gestor de Presupuesto con `Movimiento` y `Presupuesto`.
2. **Métodos encapsulados** (`esIngreso`, `agregar`, `saldo`, `resumen`) dentro de las constructoras.
3. **Primer puente JS↔HTML** capturando input desde un `<form>` con `querySelector('#id').value` + `addEventListener('submit', ...)` + `event.preventDefault()`.

> 📝 **Nota:** En esta clase NO escribes HTML/CSS — el template del form ya viene listo. Solo escribes ~5-8 líneas de JS para conectarlo. DOM completo (`createElement`, render dinámico, eventos múltiples) llega en M3.

---

## Glosario de Nuevos Términos

- **Objeto literal:** Colección de pares `key: value` declarada con `{}`. Ej. `{ nombre: 'Ana', edad: 30 }`.
- **Propiedad:** Cada par `key: value` de un objeto. Se accede con `obj.key`.
- **Shorthand property:** Atajo cuando la key es igual al nombre de la variable. `{ nombre }` equivale a `{ nombre: nombre }`.
- **Función constructora:** Función que crea objetos cuando se invoca con `new`. Convención: nombre en mayúscula.
- **`new`:** Operador que invoca la constructora, crea un objeto vacío, lo asigna a `this`, ejecuta el cuerpo y devuelve el objeto.
- **`this`:** Dentro de una constructora, apunta al objeto que se está creando.
- **Método:** Función dentro de un objeto. Se invoca con `obj.metodo()`.
- **Encapsulación:** Agrupar datos (propiedades) y comportamientos (métodos) relacionados dentro de un mismo objeto.
- **Instancia:** Objeto específico creado a partir de una constructora. Ej. `salario = new Movimiento(...)`.
- **`document.querySelector('#id')`:** Encuentra un elemento por su `id`.
- **`.value`:** Lee o escribe el contenido de un `<input>` o `<select>`.
- **`addEventListener('evento', fn)`:** Llama `fn` cuando ocurre el evento.
- **`event.preventDefault()`:** Evita el comportamiento por defecto del navegador (en submit: recargar la página).
