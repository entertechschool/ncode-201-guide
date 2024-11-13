# Control de flujo en JavaScript

Es decir *¿En qué orden deberíamos hacer las cosas?*

Los scripts sin Puntos de Decisión no son útiles, así que utilizaremos condicionales para decidir qué partes de nuestro script deberemos ejecutar. Todos los condicionales retornan `true` o `false` y utilizaremos este valor para decidir utilizar `if / else if / else`.

## Evaluando Comparaciones

1. sintaxis: `( <operando> <operador> <operando> )`
1. cada operando puede ser un valor, una variable, o una expresión
1. las comparaciones generalmente estarán envueltas con un `()`
1. si comparamos las expresiones utilizando un operador lógico:
   1. evalúa cada expresión para obtener `true` o `false`
   1. utiliza los booleans para evaluar la expresión lógica

```javascript
1 === 1     -> true
1 == '1'    -> true
1 === '1'   -> false

let a = 10;
let b = 100;
a < b         -> true
a >= 50       -> false

(a + b === 110) -> (10 + 100 === 110)
                -> (110 === 110)
                -> true

(a + b > a - b) -> (110 > -90)
                -> true

(a === b && true) -> (false && true)
                  -> false

((a !== b) || (a < b)) -> (true || true)
                       -> true
```

## Declaraciones 'if...else'

Evalúa un condicional y procese en base a si el resultado es `true` o `false`. Todas las condiciones `if` y `else if` son verificadas, incluso si se encuntra una correspondencia.

```javascript
if (condition === true) {
  // haz esto
} else if (condition2 === true) {
  // haz otra cosa
} else {
  // haz esto último
}
```

## Declaraciones 'switch'

Verifica una variable local llamada el *valor switch* frente a *casos* que representan valores posibles para la variable. No sigue verificando casos una vez que se encuentra y ejecuta un caso correspondiente.

```javascript
switch (faveColor) {

  case 'red':
    console.log('The user\'s favorite color is red');
    break;

  case 'green':
    console.log('The user\'s favorite color is green');
    break;

  default:
    console.log('The user has poor taste.');
    break;
}
```

## Coerción de Tipos, Tipado Débil, y Valores verdadero/falso

Se dice que JavaScript es de *débilmente tipado* porque los valores pueden cambiar de un tipo de dato a otro. Los lenguajes que no permiten esto son *fuertemente tipados*. Al realizar verificaciones de igualdad regulares, JS realiza una *coerción de tipos* para ver si los valores son iguales y se envalúan como si tuvieran el mismo tipo de dato.

```javascript
let a = 5;
a = 'cookie'; //esto es legítimo en JS

'10' > 1 -> true
```

| Verdadero | Falso   |
| ------- | ------- |
| true    | false   |
| 1       | 0       |
| 'mom'   | ''      |
| 5 / 2   | '5' / 2 |
|         | let a;  |
| 'true'  |         |
| 'false' |         |
| '0'     |         |

Cualquier valor existente es considerado verdadero, así que podemos utilizar una condicional para verificar si algo existe:

```javascript
let a = 10;
let obj = {};

if (a) {
  console.log('a exists');
}

if (a && obj) {
  console.log('they both exist');
}
```

## Valores Cortocircuito

Los operadores lógicos funcionan de izquierda -> derecha, y se detienen tan pronto como encuentren un resultado. Cuando se detienen, retornan cualquier valor que los detuvo, así que podemos escribir expresiones lógicas que retornen un valor diferente a `true` o `false`. Esto se puede utilizar para establecer valores por defecto.

```javascript
let name1 = 'Dan';
let name2 = '';

let userName1 = (name1 || 'unknown'); -> userName = 'Dan'
let userName2 = (name2 || 'unknown'); -> userName2 = 'unknown'
```

## Bucles

Verifica una condición. Si la `condición === true`, ejecuta un bloque de código repetidamente hasta que la condición se vuelva `false`.

1. Palabras clave
   1. `break` - detiene el bucle y va a la siguiente declaración fuera del bucle
   1. `continue` - detiene el bucle, vuelve a verificar la condición del bucle y continúa con el bucle si la `condición === true`

## Bucles 'for'

Utiliza un bucle `for` cuando quieras ejecutar un bucle un número determinado de veces. Monitorea cuántas veces se ha ejecutado el bucle utilizando una variable counter.

Orden de operaciones:

1. establece que counter = <valor inicial>
1. verifica si el counter cumple con la <condición para detenerse>. si esta expresión es verdadera, continúa
1. ejecuta la declaración del bucle una vez
1. incrementa el counter
1. repite los pasos 2 - 4 hasta que se cumpla la <condición para detenerse>

```javascript
for (let counter = <valor inicial>; <condición para detenerse>; <incremento>) {
  // haz algo
}

// utiliza console log para los valores en un array
let arr = ['a', 2, false, {}, 'I am last'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## Bucles 'while' y 'do...while'

Utiliza un bucle `while` cuando no sabes cuantas veces tienes que realizar el bucle - quizás sean cero veces. Utiliza un bucle 'do...while' cuando sabes que quieres ejecutar el bucle una vez, pero no sabes cuántas veces más.

Estos bucles seguirán ejecutándose hasta que la `condición === false`, así que debes asegurarte de que la condición sea falsa en algún punto. Si no lo haces, obtendrás un bucle infinito.

```javascript
let myNumber = 3;
let userNumber = prompt('What number am I thinking of?');

while (userNumber != myNumber) {
  userNumber = prompt('What number am I thinking of?');
}

let i = 1;

do {
  console.log(i);
  i++;
} while (i < 1);
```

Bucle for:  

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```  

Bucles while y do while:  

```javascript
let index = 0;
while (index < 100) {
  console.log(index);
  index++;
}

do {
  console.log('The index is shrinking!!! Index: ' + index);
  index--;
} while (index > 0);
```
