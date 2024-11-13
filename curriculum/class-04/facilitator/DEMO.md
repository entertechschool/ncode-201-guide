# Demostración de la Clase 04

## Funciones

**Las declaraciones de función tienen las siguientes partes:**

1. Nombre de la función: este es el nombre que utilizas cuando llamas a la función
1. Parámetro(s): variable(s) local(es) que se utilizarán en las declaraciones de la función. Los parámetros toman los valores que se transmiten como argumentos cuando se llama a la función, y así hacen que la función sea más flexible 
1. Declaraciones: lo que queremos que haga nuestra función
1. Sentencia return: Esto es opcional. Especifica qué valor (si es que hay uno) la función deberá retornar para ser usada en otro lado.

**Las llamadas a funciones tienen las siguientes partes:**

1. el nombre de la función
1. paréntesis: al añadir los paréntesis, llamamos a la función
1. argumento(s): estos van dentro de los paréntesis. Son valores que queremos utilizar en la función. Algunas funciones no tienen parámetros, así que los paréntesis se quedan vacíos

```javascript
//DECLARA una función sin parámetros
function someFunction() {
 console.log('I wish I had parameters');
}

//LLAMA a la función.
someFunction();
//ya que no estamos utilizando parámetros,
//no necesitamos colocar algumentos en la llamada a la función
//pero eso significa que la función siempre hará lo mismo.
//siempre devolverá 'I wish I had parameters.'

//DECLARA una función con parámetros
function multiply(num1, num2) {
 console.log(num1);
 return num1 * num2;
}

//LLAMA a la función
multiply(2, 3);
//Los valores en los paréntesis son los argumentos de esta llamada a la función.
//Cuando la función se ejecuta, num1 y num2 tomarán los valores de estos argumentos.
//Esta llamada devolerá 2 en la consola del navegador y retornará 6

//si queremos guardar el resultado en una variable, lo podemos hacer
let result1 = multiply(2, 3);
let result2 = multiply(4, 5);
//ahora result1 = 6 - el valor de retorno de la primera llamada a la función
//y result2 = 20 - el valor de retorno de la segunda llamada

// si la función no tiene una sentencia return, result1 y result2 serían undefined
```

## Retornar múltiples valores

Una función terminará tan pronto como encuentre una sentencia `return`, así que se espera que una función de llamada solo realice un `return`. Para retornar múltiples valores, agrúpalos en un array u objeto y retórnalo.

```javascript
function circleProps(radius) {
 let area = Math.PI * radius * radius;
 let circumference = 2 * Math.PI * radius;
 let props = [area, circumference];

 return props;
}

let circle3 = circleProps(3);

//o simplemente
function circleProps(radius) {
 let area = Math.PI * radius * radius;
 let circumference = 2 * Math.PI * radius;

 return [area, circumference];
}
```

## Funciones Anónimas y Expresiones Function 

Una función ubicada donde normalmente estaría una expresión se llama *función anónima*. No se incluye un nombre en una expresión function. Declarar una función de esta forma no afecta a la sintaxis de la llamada a la función, aunque la llamada no puede aparecer antes de la declaración. Este es un patrón común para las *funciones callback* y los *gestores de eventos*.

```javascript
let circleProps = function(radius) {
 let area = Math.PI * radius * radius;
 let circumference = 2 * Math.PI * radius;

 return [area, circumference];
}

let circle3 = circleProps(3);

//callback del gestor de eventos utilizando una función anónima
document.getElementById('login-button')
    .addEventListener('click', function () {
     console.log('the user logged in.');
    })
```

## Scope

La disponibilidad de una variable depende del lugar donde ha sido declarada. El lugar donde se puede ser y utilizar es conocido como el *scope* de la variable. Las funciones en JS crean su propio scope, así que las variables declaradas dentro de funciones solo están disponibles dentro de la función que las contiene.

1. las variables globales (declaradas fuera de cualquier función) están disponibles en todas partes
1. las variables locales (declaradas dentro de una función) solo están disponibles dentro de la función.

```javascript
let globalVariable = 'universal';

function scoper(param) {
 let localVariable = 'I like my privacy.';

 console.log('inside the function we can see param = ' + param);
 console.log('we can also see localVariable = ' + localVariable);
 console.log('and we can see globalVariable = ' + globalVariable);

 for (let i = 0; i < 3; i++) {
  console.log('the value of "i" in the loop is ' + i);
 }

 console.log('can we see "i" outside the loop? ' + i);
}

scoper('argument');

console.log('globally we can see globalVariable: ' + globalVariable);
console.log('but not localVariable: ' + localVariable);
console.log('or param: ' + param);
```

## Forks en Git y pair programming

Como preparación

1. Escoge a un alumno al azar y prepárate para hacerle un fork a su proyecto "About Me"
   - Elige algo común para añadir o arreglar, como envolver parte de su lógica en una función o hacer algunos logs adicionales.
3. Lee los [requisitos del laboratorio](https://entertechschool.github.io/code-201-guide/curriculum/class-04/lab/) con la clase, y prepárate para seguir el mismo procedimiento.
4. Realiza una demostración con uno de los instructores (o un alumno) para recrear un comportamiento "perfecto" de pair programming utilizando GitFlow.

Nota, como navigator, utiliza comandos estándar con tu driver (no le digas "abre una llave" ...) para que los estudiantes puedan traducir las palabras a código, y también ver la eficiencia de programar como una mente dual.

Por ejemplo:

- Quiero tomar las variables result1 y result2, y multiplicarlas
- Declaremos una variable result3 y vamos a asignarle la llamada a la función multiplicar.
- Necesitamos que result1 y result2 sean sus parámetros
