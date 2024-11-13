# Objetos de JavaScript y Const

## Const

- **¿Por qué?**
  - Cuando no necesitamos cambiar una variable, deberíamos establecerla como const para que nunca cambie. Esto previene los errores y crea un código más limpio.
- **¿Qué?**
  - Abarca const
- **¿Cómo?**
  - Demuestra en un repl corto lo que ocurre cuando vuelves a declarar un const, utilizaremos const cada vez que sea posible en el curso 201.
  - Muestra que los arrays pueden ser const incluso cuando se le añaden valores.

## ¿Qué es un Objeto?

Los objetos de JavaScript son formas convenientes y poderosas de agrupar datos y funciones. Almacenan datos como **propiedades**, las cuales están representadas como parejas `key: value`, y pueden tener **métodos**, los cuales son funciones asociadas al objeto.

Similar a los arrays, pero con nombres de elementos semánticos:

```javascript
const myArray = ['a', 'b', 'c'];

const myObject = {
	0: 'a',
	1: 'b',
	2: 'c'
};
```

Los arrays son buenos para almacenar datos similares, pero pueden volverse confusos si contienen datos mixtos.

```javascript
const samArray = ['Sam', null, 'Hamm', 0, true, ['Nadia', 'Spencer', 'Dan']];
```


```javascript
const person = {
	name: "Adam Wallraff",
	age: 30,
	isWalking: false,
	walk: function(){
		console.log(this.name + ' is now walkin down the streetz');
		this.isWalking = true;
  };
};
```

## Notation

Podemos declarar objetos utilizando notaciones de objetos literales.

1. llaves `{}`
1. pares key: value - dos punto entre k/v, una coma después de cada par (excepto el último)
1. propiedades - cualquier tipo de dato, incluyendo otros objetos
1. métodos - función(es) asociadas con el objeto

```javascript
const emptyObject = {};
const oneLineObject = { a: 1, b: 2 };

const genericObject = {
  key1: value1,
  key2: value2,
  'multi-word key': value3,
  method: function() {
    // haz algo
  }
};
```

```javascript
const sam = {
  //propiedades
  firstName: 'Sam',
  middleName: null,
  lastName: 'Hamm',
  rating: 0,
  isABoss: true,
  underlings: ['Nadia', 'Spencer', 'Dan'],

  //métodos
  getRating: function() {
  	return this.rating;
  },
  setRating: function(num) {
  	return this.rating = num;
  }
 };
```

## Accediendo a Propiedades y Métodos de Llamada

1. acceder a las propiedades
   1. dot notation
   1. bracket notation - con un string, fuera de la variable, keys con múltiples palabras
1. métodos de llamada
   1. `objectName.method();`
   1. los métodos declarados en el contexto de un objeto deben ser llamados en ese contexto, así que llamar a `method();` da un error

## Modificando Objetos

1. añadiendo nuevas propiedades, métodos
	1. utiliza `=` en vez de `:` porque estamos asignando un valor

```javascript
sam.employer = {
  name: 'Code Fellows',
  location: 'Seattle'
};

sam.logName = function() {
	console.log(this.firstName + ' ' + this.lastName);
};
```

1. limpiando y removiendo
   1. establece el valor como '', 0, o null
   1. operador `delete`

## Objetos Incorporados

1. String, Array, Document, Math

## Prototipos

1. Cada objeto tiene un prototipo. Se puede asignar específicamente, o se puede establecer al objeto global por defecto.
1. Todos los objetos tienen propiedades y métodos de su prototipo
1. Si una propiedad o método no se puede encontrar en el objeto, el intérprete de JS buscará la cadena de prototipos correspondiente

## this

1. ¡complicado!
1. cambia en base al contexto.
1. al llamar un método en el contexto de un objeto, `this = el objeto`

```javascript
sam.whatIsThis = function() {
  console.log(this);
}

sam.whatIsThis(); //aparece el objeto sam
```


# Añadiendo algo al DOM

**Solo podemos añadir UNA COSA A LA VEZ.**

Como ejemplo, añadiremos un `<p>` a un `<div>` existente

Este es nuestro HTML existente:

```HTML
<div id="parentElement">
</div>
```

### Pasos

1. Haz una referencia JavaScript (una variable) al elemento padre
1. Crea el elemento hijo que queremos añadir y guárdalo como una variable
1. Dale contenido a este elemento - en este caso, el contenido es texto
1. Agrega el elemento hijo al elemento padre

**JavaScript:**

```javascript
const parent = document.getElementById('parentElement');  
const child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
```

**HTML Terminado:**

```HTML
<div id="parent">
  <p>Some words we want in our p element</p>
</div>
```
