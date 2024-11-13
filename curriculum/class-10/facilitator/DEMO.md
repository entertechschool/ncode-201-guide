# Depuración

## Orden de ejecución:

```javascript
showMsg();
msgExpression();

function showMsg() {
  console.log('I am the showMsg function');
}

const msgExpression = function() {
  console.log('I am the msgExpression function expression');
};
```

1. crea un nuevo scope
1. lee todas las declaraciones de variables/funciones y crea valores
1. ejecuta: asigna valores a los var, ejecuta funciones y declaraciones


## Contexto de Ejecución

```javascript

//scope global
const name = 'Dan';
function globalFunc() {
  console.log('I can be called anywhere');
}

//scope de la función
function scopyFunc(doggy) {
  function privateFunc() {
    const privatelet = 'woof!';
    return doggy + ' says ' + privateVar;
  }
  console.log(privateVar);
  console.log('doggy is only defined inside scopyFunc: ' + doggy );
  return privateFunc();
}

scopyFunc('Fido');

//contexto del objeto
const teacherBot = {
  first: 'Dan',
  last: 'Schwartz',
  age: 35,
  speak: function() {
    return 'Hello humanoid, I am ' + this.first + ' ' + this.last;
  }
};

teacherBot.age    //35
teacherBot.speak  //'Hello humanoid, I am Dan Schwartz'
age               //age is not defined
```

## The Stack

```javascript
function add(x,y) {
  console.log('now running add');
  return x + y;
}

function multiply(x,y) {
  console.log('now running multiply');
  return x * y;
}

function report(x,y) {
  console.log('now running report');
  const sum = 'The sum of ' + x + ' and ' + y + ' is ' + add(x,y);
  const product = 'The product of ' + x + ' and ' + y + ' is ' + multiply(x,y);
  return 'The sum is ' + sum + '. The product is ' + product;
}

report(2,4);
```

## Errores

- SyntaxError: usualmente son errores tipográficos
- ReferenceError: intenta referenciar a una variable o función que no existe o está fuera del alcance:
  - undefined vs. not defined
  - `const a = b;`
  - `someFunc();`

- TypeError: intetna operar un tipo de dato equivocado. Por lo general significa un error con el objeto de datos. Puede ser causado por tratar de ejecutar una coerción de tipo ilegal

```javascript
const someObj = {
  a: 10,
  b: 9
};

someObj.push(20);
```

- RangeError: trata de llamar a una función con un valor número no aceptable:

```javascript
const price = 10;
price.toFixed(25);

const impossibleArray = new Array(-1);
```

```javascript
try {
  //intenta hacer esto
} catch (exception) {
  //haz esto si hay una excepción
} finally {
  //siempre haz esto
}
```

## Depuración

- La carpeta adyacente `debugging-salmon-cookies` contiene una serie de errores separados por tipo. Haz que los estudiantes se turnen identificando el tipo de error y su mensaje, encontrando la ubicación del error y arreglándolo
