# Notas de la Clase

<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el README.md -->

## Herramientas en línea

- Esta es una buena oportunidad para enseñarle a los estudiantes herramientas en línea útiles, si es que aún no las conocen 
  - [Code Pen](https://codepen.io/pen/)
  - [repl.it](https://repl.it/languages/javascript)

## Contenido Misceláneo

- Evita utilizar`typeof` y `parseInt` por hoy. Dale la oportunidad a los estudiantes de que descubran la solución por su cuenta o que busquen ayuda de sus compañeros o los instructores.
- Puede ser de ayuda abordar las demostraciones con pseudocódigo primero. Esto tiene dos propósitos: guiarlos con la lógica a nivel avanzado, y mostrarle a los estudiantes cómo escribir pseudocódigo.

## Operadores de Comparación

Compara dos valores y obtén un resultado en forma de `true` o `false`  

| Operador | Nombre | Evalúa |
| -------- | ---- | --------- |
| a == b | igual regular que | igualdad de los **valores** de a & b |
| a === b | igual estricto que | igualdad de los **valores y tipos** de a & b |
| a != b | no igual que | desigualdad de los **valores** de a & b |
| a !== b | no igual estricto que | desigualdad de los **valores y tipos** de a & b |
| a > b | mayor que | es un valor mayor que el valor de b |
| a < b | menor que | es un valor menor que el valor de b |
| a >= b | mayor o igual que | es un valor mayor O igual que el valor de b |
| a <= b | menor o igual que | es un valor menor O igual que el valor de b |

## Operadores Lógicos

Compara los resultados de múltiples operadores de comparación y (por lo general) obtén un resultado final `true` o `false`

| Operador | Nombre | Evalúa |
| -------- | ---- | --------- |
| a && b   | y | a y b son *ambos* true |
| a &#124;&#124; b   | o   | a *o* b es true |
| !a       | no  | invierte el valor del boolean de a |

## Evaluando Comparaciones

Consulta `Demo.md` para más ayuda

## if...else

Puedes utilizar los operadores de comparación en una declaración "if" (o if...else) para determinar qué hacer cuando se cumple una situación.

```js
if(condition){
// haz algo
}
```

o

```js
if(condition){
// haz algo
} else{

}
```

El else siempre se ejecutará si no se cumple la condición.

## Switch

Consulta `Demo.md` para más ayuda

## Coerción de tipos

Consulta `Demo.md` para más ayuda

## Cortocircuito

Consulta `Demo.md` para más ayuda

## Control de flujo (bucles)

¿Qué son los bucles? ¿Por qué los necesitamos? Presenta el concepto de los bucles y habla de la importancia de estos.

Una buena forma de presentar el concepto de los bucles es hablar acerca de cómo algo se debe repetir una y otra vez, como mezclar ingredientes en una receta.

Explícale a los alumnos cómo "saben que han terminado" con las indicaciones.

En la programación, podemos crear bucles de diferenes formas.

### Bucles for

Los bucles `for` se utilizan principalmente al iterar por los arrays. Un bucle for se ejecuta "el número de veces especificadas", este es el resumen general de un bucle for. La sintaxis es la siguiente:

```javascript
  for(starting val; condition; increment) {
    haz algo un número finito de veces
  }
```

El secreto de los bucles for es que el valor de inicio siempre será evaluado al comienzo de cada iteración. Esto significa que la "condición" es evaluada antes de cada ejecución para asegurarse de que aún se cumpla. Indícale a los alumnos que una vez que se llegue a la "llave inferior" del bucle for, el "incremento" (o acción) se ejecutará.

Consulta `Demo.md` para más ayuda

### Bucles while

```javascript
  while(condition) {
    haz algo hasta que la condición sea falsa
  }
```

### Bucles do...while

Los bucles do...while pueden garantizar que una iteración ocurra al menos una vez, el código "do" se ejecutará inicialmente antes de que la condición "while" sea evaluada.

```javascript
  do {
    haz algo por lo menos una vez hasta que la condición sea falsa
  } while (condition)
```

## Box Model

Repasa los conceptos básicos del box model

1. Margin
1. Padding
1. Border

Layout utilizando CSS con el Box Model
