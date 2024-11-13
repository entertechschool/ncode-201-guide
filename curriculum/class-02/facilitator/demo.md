# Desmostración

## Guía General

- Comienza esta demostración creando un repositorio de git y clonándolo a tu equipo.
- Después de cada parte de la demostración, haz un commit con un mensaje descriptivo.

## Tipos de Datos

Hay tres tipos de datos principales en javascript:

1. string
   - Ejemplo: 'esto es un string'
1. number
   - Ejemplo: 4, 8, 15
1. boolean
   - Ejemplo: true, false

podemos determinar el tipo de dato de un valor específico utilizando el operador `typeof`.

Fuente: [MDN - typeof operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

## Condicionales

Existen 2 tipos de condicionales:

1. declaraciones if/if....else
1. declaraciones switch

Con la incorporación de los condicionales y el conocimiento previo del alumno acerca de los bucles for, podemos hablar del scope. Da ejemplos de la diferencia entre variables declaradas dentro de un bloque de código con la palabra clave `var` y con la palabra clave `let`. Lo más destacable será que si queremos utilizar el valor de una variable más adelante en nuestro código, debemos declararla en el scope global.

```js
if(true){
  var username = 'Robin';
}
console.log('username :', username);

if(true){
  let favoriteColor = 'orange';
}
console.log('favoriteColor :', favoriteColor);
```

### Declaraciones If

Los condicionales if son parte del prework, así que no necesitas repasarlos a profundidad.

El punto de una declaración if es determinar "SI" se cumple una condición.

ejemplo:

```js
let name = 'Jane Smith';
if(name === "string"){
    console.log('this is a string');
}
```

## Instrucciones de la demostración

(consulta el archivo app.js en el folder demo):

1. Habla con los estudiantes acerca del concepto "Separación de Intereses". Crea un nuevo archivo `app.js` y guárdalo de forma externa del archivo `index.html`.
1. Añade la etiqueta `<script>` con el nuevo archivo `app.js` en tu archivo html justo antes del `</body>`.
1. Escribe el código para que se le indique al usuario para obtener un input con `Prompt()` o `Confirm()`. Toma la respuesta y escribe una declaración condicional que sea evaluada. Sigue el archivo app.js como una guía para el código.
1. Muéstrale a los estudiantes la diferencia entre el operador && (y) y el operador || (o).

## Declaraciones Switch

Las declaraciones switch son similares a las condicionales if, excepto que evalúan el valor en diferentes 'casos'. Este es un ejemplo:

```js
let expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // output esperado: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}
```

Fuente: [MDN switch statements](https://developer.mozilla.org/es/docs/web/javascript/reference/statements/switch)

## Demostración de Página web

1. Añade más a tu código al hacerle una pregunta al usuario.
1. Evalúa la respuesta utilizando una declaración switch.

## Arrays

**Ten en cuenta de que esta parte de la clase es una vista previa de temas que no serán necesarios para el laboratorio de hoy. Si no tienes mucho tiempo, sáltate esta conversación sobre arrays.**

Esta demostración funciona mejor en [repl.it](https://repl.it/). Este es un buen lugar para mostrar y ejecutar código javascript sin tener que crear un nuevo proyecto desde cero. Los alumnos no utilizarán Arrays en su laboratorio hoy, así que mantener esto separado del código de la demostración es una buena idea. *De todas formas puedes mostrar el resultado de tu repl.it con la clase al final.*

Los arrays son conceptos nuevos para los alumnos. Los arrays son una forma de agrupar datos en una ubicación. Un array, en esencia, es una acumulación de datos, similar a una lista, que se puede utilizar para retener información para utilizarla después.

Hay muchas formas de crear arrays en javascript.

```javascript
// Crea un array vacío
let emptyArray = [];

// Crea un array lleno de "respuestas a un cuestionario" poniendo los valores directamente en un nuevo array
let quizAnswers = ['b', 'd', 'a', 'a', 'c'];

// ¡incluso podemos crear un array de arrays!
let nestedArray = [ ['yes', 'y'], ['no', 'n'], ['no', 'n'] ];
// esto es igual que el nestedArray anterior, solo que con un formato ligeramente diferente.
let multiLineArray = [
                      ['yes', 'y'],
                      ['no', 'n'],
                      ['no', 'n']
                    ];

// no siempre tenemos que comprometernos a un solo tipo de datos en un array. Este es un ejemplo de un array con datos de diferentes tipos.
let mixedArray = ['Harry', 'Potter', 10, true, 'luxurious'];
```

Los arrays son ***indexados***. Esto significa que cada elemento en el array está ubicado en un index/locación específica del array. Los index de un array comienzan desde 0 e incrementan en uno por cada posición en la que están desde el inicio.

Por ejemplo, en el array `[4,8,15,16,23,42]`:

- El valor 4 está en el index 0.
- El valor 8 está en el index 1.
- El valor 42 está en el index 5.

Este array tiene una longitud de 6, y tiene un rango de index de 0-5.

Si queremos cambiar el valor de un index específico en el array, podemos "ubicarlo" especificando el index en el array directamente.

Este es un ejemplo:

```js
let myArray = ['a' 'b', 'c'];
myArray[0] = 'z'; // myArray ahora es igual a ['z' 'b', 'c']
```

Podemos revisar fácilmente si un index específico en el array es igual a un valor específico

```js
let myArray = ['a' 'b', 'c'];
if(myArray[1] === 'b')
{
    // haz algo aquí
}
```

Si queremos "añadir" un elemento al final de array, podemos hacerlo con el método `.push()`.

```js
let myArray = [1,2,3,4,5];
myArray.push(6);
// myArray ahora es igual a [1,2,3,4,5,6]
```

Para eliminar un elemento del final de un array, utiliza `.pop()`.

```js
let myArray = [1,2,3,4,5];
myArray.pop();
// myArray ahora es igual a [1,2,3,4]
```

Siéntete libre de explicar `shift()` y `unshift()` si tienes tiempo. No es obligatorio, pero puede valer la pena hablarlo si ves que la clase está lista para ello.

## Git vs GitHub

Estas son cosas que debes resaltar mientras hablas sobre la diferencia entre git y GitHub:

- git es lo que tenemos en nuestra máquina local para monitorear los cambios en nuestros proyectos mediante una serie de commits y ramas.
- GitHub es "la nube" que almacena nuestro código para que podramos compartir/colaborar entre equipos.
- Utilizamos git en nuestra máquina local y mandamos los cambios a GitHub.

### Guía de Github

Guía a los estudiantes a través del proceso de crear un nuevo repositorio en GH y clonarlo a sus directorios `~/entertechschool/201/` a sus máquinas locales.

Mientras estén en `main`, haz que configuren sus `app.js`, `index.html`, y `style.css` con toda la plantilla de código necesaria para que trabajen juntos. Luego, que todo el grupo haga `A-C-P` hacia `main`.

Asegúrate de mostrarles el documento de [instrucciones de preparación para el laboratorio](../project-setup.md) para ayudarlos en la creación de sus futuros repositorios de GitHub.
