# Estructura de JavaScript

1. Declara las Variables Globales 
1. Declara las Funciones constructoras - ¡sus nombres deberán comenzar con mayúsculas!
1. Declara los métodos de prototipo
1. Declara las funciones regulares
1. Añade event listeners
1. Llama a las funciones

```javascript
//declara las variables globales al inicio de tu archivo
const globalVariable1 = 'hello';
const globalVariable2 = [0, 1, 2];
const myForm = document.getElementById('my-form');

//crea una instancia de PersonConstructor y la guarda en la variable sam
//ten en cuenta que hacemos esto antes de la declaración de la función constructora
const sam = new PersonConstructor('Sam', 'Hamm');
//ahora sam = { firstName: 'Sam', lastName: 'Hamm' }

//ahora pon los objetos constructores
function PersonConstructor(first, last) {
 this.firstName = first;
 this.lastName = last;
}

//luego pon las funciones de prototipo que van con el objeto constructor
//llama a esta función en una instancia de PersonConstructor
PersonConstructor.prototype.sayHello = function() {
 console.log('Hello, my name is ' + this.firstName);
}

//luego coloca las declaraciones de función regulares
function firstFunction(parameter) {
 console.log(parameter);
}

function secondFunction(myArray) {
 for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
 }
}

function formHandler(event) {
 console.log(event.target);
}

//luego añade los event listeners
myForm.addEventListener('submit', formHandler);

//por último, llama a tus funciones
firstFunction(globalVariable1);
//el resultado es 'hello'
secondFunction(globalVariable2);
//el resultado es  0
//  1
//  2
sam.sayHello();
//el resultado es 'Hello, my name is Sam'
