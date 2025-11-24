# Examen de Admisión - Code 301

Este examen valida que candidatos externos poseen los conocimientos fundamentales de Code 201 necesarios para ingresar directamente al programa **Code 301 - Intermediate Software Development**.

---

## ¿Qué evalúa?

- **HTML5 y CSS Layouts** (estructura semántica, accesibilidad, Flexbox, Grid)
- **Fundamentos de JavaScript** (control de flujo, arrays, POO, prototipos)
- **DOM y Event Handling** (manipulación del DOM, callbacks, eventos, manejo de errores)
- **Estado y Persistencia** (clases ES6, patrón Store, JSON, LocalStorage)

---

## Formato

- 20 preguntas de opción múltiple
- 90 minutos de duración
- 100 puntos totales (5 puntos por pregunta)

---

## Aprobación

- ✅ **≥70 puntos:** Admitido a Code 301
- ❌ **<70 puntos:** Se recomienda completar Code 201 primero

---

## Instrucciones

1. Lee cada escenario y fragmento de código cuidadosamente
2. Selecciona la respuesta más apropiada
3. No se permite consultar materiales externos
4. Todas las preguntas tienen el mismo valor

---

**¡Éxito en tu evaluación!**

---

## BLOQUE 1: HTML5 y CSS Layouts (25 puntos)

### Pregunta 1 (5 pts) - HTML Semántico

Analiza el siguiente código HTML:

```html
<div class="header">
  <div class="logo">Mi Sitio</div>
  <div class="menu">
    <div class="link">Inicio</div>
    <div class="link">Servicios</div>
    <div class="link">Contacto</div>
  </div>
</div>
<div class="content">
  <div class="title">Bienvenidos</div>
  <div class="text">Este es el contenido principal...</div>
</div>
<div class="bottom">
  <div class="copy">© 2024</div>
</div>
```

**¿Cuál es el problema principal de este código y cómo afecta a los usuarios que usan lectores de pantalla?**

- A) El código funciona correctamente; los lectores de pantalla pueden interpretar las clases CSS para entender la estructura
- B) Falta usar `<div id="header">` en lugar de `<div class="header">` para que sea accesible
- C) El uso exclusivo de `<div>` elimina la información semántica que los lectores de pantalla necesitan para comunicar la estructura de la página (navegación, contenido principal, etc.)
- D) El problema es que faltan atributos `alt` en los elementos `<div>`

**Respuesta correcta:** C

---

### Pregunta 2 (5 pts) - Flexbox: Comportamiento

Dado el siguiente CSS aplicado a un contenedor con 5 elementos hijos de 200px de ancho cada uno:

```css
.container {
  display: flex;
  width: 800px;
  justify-content: space-between;
}

.item {
  width: 200px;
  flex-shrink: 0;
}
```

**¿Qué sucederá visualmente con los elementos?**

- A) Los 5 elementos se distribuirán uniformemente dentro de los 800px, reduciéndose proporcionalmente
- B) Los elementos desbordarán el contenedor porque `flex-shrink: 0` impide que se reduzcan, y 5×200px = 1000px > 800px
- C) Los elementos se apilarán verticalmente porque no caben en el contenedor
- D) El navegador ignorará `flex-shrink: 0` y forzará a los elementos a caber en 800px

**Respuesta correcta:** B

---

### Pregunta 3 (5 pts) - CSS Grid: Análisis de Layout

Observa el siguiente código CSS Grid:

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  height: 100vh;
}
```

**¿Cuál de las siguientes afirmaciones es CORRECTA sobre este layout?**

- A) La columna central (`main`) ocupará exactamente el doble de ancho que las columnas laterales
- B) El `sidebar` ocupará 2 columnas porque está definido junto a `main main`
- C) El `header` ocupará 1/4 del alto total de la pantalla
- D) La fila del medio (`sidebar main main`) ocupará todo el espacio vertical disponible después de restar header y footer

**Respuesta correcta:** D

---

### Pregunta 4 (5 pts) - Media Queries y Responsividad

Un desarrollador escribió el siguiente código para hacer su sitio responsivo:

```css
/* Estilos base */
.container {
  display: flex;
  flex-direction: row;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}

@media (max-width: 480px) {
  .container {
    flex-direction: row;
  }
}
```

**En un dispositivo con pantalla de 400px de ancho, ¿cuál será el valor de `flex-direction`?**

- A) `column`, porque 400px es menor que 768px
- B) `row`, porque la última media query que aplica (max-width: 480px) sobreescribe las anteriores
- C) `row`, porque es el estilo base y las media queries no aplican en móviles
- D) El navegador mostrará un error porque hay conflicto entre las media queries

**Respuesta correcta:** B

---

### Pregunta 5 (5 pts) - Accesibilidad y ARIA

Un equipo de desarrollo creó el siguiente botón personalizado:

```html
<div class="btn-custom" onclick="submitForm()">
  Enviar Formulario
</div>
```

```css
.btn-custom {
  background: blue;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
}
```

**¿Qué problemas de accesibilidad tiene este código y cuál sería la solución MÁS apropiada?**

- A) Solo falta agregar `tabindex="0"` para que sea accesible por teclado
- B) El `<div>` no es anunciado como botón por lectores de pantalla, no es enfocable por teclado, y no responde a la tecla Enter. La solución es usar `<button>` nativo
- C) El problema es que falta el atributo `alt="Enviar Formulario"` en el div
- D) Solo falta agregar `role="button"` y el código será completamente accesible

**Respuesta correcta:** B

---

## BLOQUE 2: Fundamentos de JavaScript (25 puntos)

### Pregunta 6 (5 pts) - Control de Flujo

Analiza el siguiente código:

```javascript
let contador = 0;

for (let i = 1; i <= 4; i++) {
  contador += i;
}

console.log(contador);
```

**¿Qué valor se imprimirá en la consola?**

- A) 4
- B) 10
- C) 0
- D) 5

**Respuesta correcta:** B

---

### Pregunta 7 (5 pts) - Métodos de Array

Dado el siguiente código:

```javascript
const numeros = [1, 2, 3, 4, 5];

const resultado = numeros.filter(n => n > 2);

console.log(resultado);
```

**¿Qué se imprimirá en la consola?**

- A) `[1, 2]`
- B) `[3, 4, 5]`
- C) `3`
- D) `true`

**Respuesta correcta:** B

---

### Pregunta 8 (5 pts) - Funciones Puras

Observa la siguiente función:

```javascript
let total = 0;

function sumar(valor) {
  total += valor;
  return total;
}

console.log(sumar(5));
console.log(sumar(5));
```

**¿Qué se imprimirá en la consola?**

- A) `5` y luego `5`
- B) `5` y luego `10`
- C) `10` y luego `10`
- D) `0` y luego `5`

**Respuesta correcta:** B

---

### Pregunta 9 (5 pts) - Funciones Constructoras

Analiza el siguiente código:

```javascript
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

const item = new Producto('Laptop', 1200);

console.log(item.nombre);
console.log(item.precio);
```

**¿Qué se imprimirá en la consola?**

- A) `undefined` y `undefined`
- B) `Producto` y `1200`
- C) `Laptop` y `1200`
- D) Un error porque falta `return`

**Respuesta correcta:** C

---

### Pregunta 10 (5 pts) - Prototipos

Dado el siguiente código:

```javascript
function Auto(marca) {
  this.marca = marca;
}

Auto.prototype.arrancar = function() {
  return `${this.marca} arrancando...`;
};

const miAuto = new Auto('Toyota');

console.log(miAuto.arrancar());
```

**¿Qué se imprimirá en la consola?**

- A) `undefined arrancando...`
- B) `Toyota arrancando...`
- C) `Auto arrancando...`
- D) Un error porque `arrancar` no existe en el objeto

**Respuesta correcta:** B

---

## BLOQUE 3: DOM y Event Handling (25 puntos)

### Pregunta 11 (5 pts) - Selección de Elementos

Dado el siguiente HTML:

```html
<div class="card">
  <h2 class="title">Producto 1</h2>
  <p class="price">$100</p>
</div>
<div class="card">
  <h2 class="title">Producto 2</h2>
  <p class="price">$200</p>
</div>
```

Y el siguiente JavaScript:

```javascript
const precio = document.querySelector('.price');
console.log(precio.textContent);
```

**¿Qué se imprimirá en la consola?**

- A) `["$100", "$200"]`
- B) `$100`
- C) `$200`
- D) `undefined`

**Respuesta correcta:** B

---

### Pregunta 12 (5 pts) - Manipulación del DOM

Observa el siguiente código:

```javascript
const lista = document.querySelector('#mi-lista');
const nuevoItem = document.createElement('li');
nuevoItem.textContent = 'Nuevo elemento';
lista.appendChild(nuevoItem);
```

**¿Qué hace este código?**

- A) Reemplaza todos los elementos de la lista con "Nuevo elemento"
- B) Crea un elemento `<li>` con el texto "Nuevo elemento" y lo agrega al final de la lista
- C) Crea un elemento `<li>` vacío y lo agrega al inicio de la lista
- D) Muestra una alerta con el texto "Nuevo elemento"

**Respuesta correcta:** B

---

### Pregunta 13 (5 pts) - Event Listeners

Analiza el siguiente código:

```javascript
const boton = document.querySelector('#btn');

boton.addEventListener('click', function(event) {
  console.log(event.target.id);
});
```

**Cuando el usuario hace clic en el botón, ¿qué se imprime en la consola?**

- A) `click`
- B) `#btn`
- C) `btn`
- D) `undefined`

**Respuesta correcta:** C

---

### Pregunta 14 (5 pts) - Callbacks

Dado el siguiente código:

```javascript
function procesarDatos(datos, callback) {
  const resultado = datos.toUpperCase();
  callback(resultado);
}

procesarDatos('hola mundo', function(texto) {
  console.log(texto);
});
```

**¿Qué se imprimirá en la consola?**

- A) `hola mundo`
- B) `HOLA MUNDO`
- C) `undefined`
- D) Un error porque `callback` no está definido

**Respuesta correcta:** B

---

### Pregunta 15 (5 pts) - Manejo de Excepciones

Analiza el siguiente código:

```javascript
function dividir(a, b) {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  console.log('Error capturado');
} finally {
  console.log('Operación finalizada');
}
```

**¿Qué se imprimirá en la consola?**

- A) `Infinity` y luego `Operación finalizada`
- B) Solo `Error capturado`
- C) `Error capturado` y luego `Operación finalizada`
- D) `No se puede dividir por cero` y luego `Operación finalizada`

**Respuesta correcta:** C

---

## BLOQUE 4: Estado y Persistencia (25 puntos)

### Pregunta 16 (5 pts) - Clases ES6

Analiza el siguiente código:

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const juan = new Persona('Juan', 25);
console.log(juan.saludar());
```

**¿Qué se imprimirá en la consola?**

- A) `Hola, soy undefined`
- B) `Hola, soy Juan`
- C) `undefined`
- D) Un error porque falta `return` en el constructor

**Respuesta correcta:** B

---

### Pregunta 17 (5 pts) - JSON.stringify

Dado el siguiente código:

```javascript
const usuario = {
  nombre: 'Ana',
  edad: 30,
  activo: true
};

const texto = JSON.stringify(usuario);
console.log(texto);
```

**¿Qué se imprimirá en la consola?**

- A) `[object Object]`
- B) `{"nombre":"Ana","edad":30,"activo":true}`
- C) `{nombre: 'Ana', edad: 30, activo: true}`
- D) `undefined`

**Respuesta correcta:** B

---

### Pregunta 18 (5 pts) - JSON.parse

Analiza el siguiente código:

```javascript
const datos = '{"producto":"Laptop","precio":1500}';

const objeto = JSON.parse(datos);
console.log(objeto.precio);
```

**¿Qué se imprimirá en la consola?**

- A) `"1500"`
- B) `1500`
- C) `undefined`
- D) Un error porque el string no es válido

**Respuesta correcta:** B

---

### Pregunta 19 (5 pts) - LocalStorage setItem

Observa el siguiente código:

```javascript
const config = { tema: 'oscuro', idioma: 'es' };

localStorage.setItem('config', config);
const guardado = localStorage.getItem('config');

console.log(guardado);
```

**¿Qué se imprimirá en la consola?**

- A) `{"tema":"oscuro","idioma":"es"}`
- B) `[object Object]`
- C) `{ tema: 'oscuro', idioma: 'es' }`
- D) `null`

**Respuesta correcta:** B

---

### Pregunta 20 (5 pts) - LocalStorage con JSON

Dado el siguiente código:

```javascript
const carrito = [
  { nombre: 'Camisa', precio: 50 },
  { nombre: 'Pantalón', precio: 80 }
];

localStorage.setItem('carrito', JSON.stringify(carrito));
const recuperado = JSON.parse(localStorage.getItem('carrito'));

console.log(recuperado[1].nombre);
```

**¿Qué se imprimirá en la consola?**

- A) `Camisa`
- B) `Pantalón`
- C) `undefined`
- D) Un error porque localStorage no puede guardar arrays

**Respuesta correcta:** B
