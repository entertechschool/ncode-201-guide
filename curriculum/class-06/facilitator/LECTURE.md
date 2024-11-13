# Notas de la Clase

<!-- NOTA PARA EL INSTRUCTOR: Si haces algún cambio en la clase, haz los cambios correspondientes en el README.md -->

## Revisión del código

- Habla del laboratorio 5, pídele a los estudiantes que menciones cualquer dificultad que encontraron en este laboratorio. Esto puede incluir pruebas fallidas, errores de sintaxis y problemas de flujo de trabajo de GitHub.
  - Demuestra cómo solucionar los problemas del laboratorio, sin entrar en mucho detalle acerca de cada línea, ya que todos los estudiantes ya debieron haber completado el laboratorio, o por lo menos debieron haber enviado lo que han completado.
- Es más importante hablar de POR QUÉ las soluciones están escritas de esa forma y enfatizar la capacidad de acceder a los valores de retorno con el bracket notation. Este también es su primer contacto con los callbacks, así que señala que la función interna se evaluará primero y después se utilizará como argumento para la función externa, como  las funciones `sumAndMultiply` y `sumArray`.
- Algunos estudiantes pueden haber resuelto estos problemas de una forma distinta. Está bien hablar de esto, pero evita irte por las ramas.

Hay tres grandes conceptos para abarcar hoy:

## Objetos de JavaScript

 Objetos literales. La clave para esto es no permitir que los estudiantes utilicen constructores por hoy. Haz que construyan, a mano, un puñado de objetos literales para familiarizarse con la sintaxis y la estructura, y demostrar/incentivar la práctica a cómo acceder y modificar las propiedades/métodos en la consola de JS. Pasaremos a las funciones constructoras en el siguiente laboratorio. Recuerda que el objetivo con los objetos de JS es modelar las entidades reales que tienen características (propiedades) y comportamientos (métodos). También ayuda relacionarlo con la gramática, y describe las propiedades como sustantivos, los valores como adjetivos y los métodos como verbos.

En JavaScript, un objeto es una entidad que contiene propiedades que describen el estado y comportamiento del objeto. Las propiedades que describen el comportamiento también se llaman métodos.  Estos "objetos" tienen el propósito de imitar objetos reales como un carro, una persona, un gato, una cada, etc...

JavaScript es lo que llamamos un lenguaje basado en objetos. Casi todo en JavaScript es un objeto. Creamos objetos directamente mediante una plantilla (ya hablaremos de esto después), y no mediante clases, como otros lenguajes. Las clases también se usan en JavaScript, pero no tocaremos esto en este curso. 

Hay dos formas de crear un objeto en JavaScript que hemos abarcado en el curso 201:

1. Objetos literales
1. Instanciar objetos con la nueva palabra clave mediante una función constructora

Vamos a centrarnos en los objetos literales hoy y hablaremos de las funciones constructoras mañana. Si estás lo suficientemente cómodo para instanciarlos directamente, siéntete libre de mostrárselos también. 

### Objetos Literales

Los objetos literales son la forma más simple de crear un objeto en JS. La sintaxis para esto está mayormente basada en los pares key/value. Esto significa que cuando creas un objeto, defines las propiedades (keys) de un objeto y también debes darle un valor.

Este es un ejemplo de cómo se ve un objeto en JS:

```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University]
};
```

Señala algunas cosas acerca del objeto:

1. Creamos objetos de la misma forma en la que creamos variables. Comenzamos con la declaración de la variable seguido de los datos a los que estamos asignando el valor. 
1. El valor completo del objeto está encapsulado con llaves `{}`
1. Cada conjunto de datos en el objeto se conoce como una propiedad. Esto se muestra mediante un par key/value. El "key" es el nombre de la propiedad, y el "value" es el valor almacenado en la propiedad. Por ejemplo, la propiedad `name` es el key, y el valor de `"Grace Hopper"` es el value. Esto significa que el "name" de la persona es "Grace Hopper". Lo mismo es válido para el valor del key `age`. El key es `age`, el value es `85`. 
1. Después de cada propiedad, si le sigue otra colocamos una coma `,` al final.
1. Las propiedades pueden almacenar cualquier valor de javascript válido, incluso otros objetos.  


```js
console.log(person.name) // Grace Hopper
console.log(person.age) // 85
console.log(person.education) // Vassar College, Yale University
```

#### Métodos de Objetos

Los métodos en un objeto son comportamientos/acciones de un objeto. Por ejemplo, nuestro objeto `person` debería ser capar de "hacer" cosas, no solo contener propiedades. Nuestro `person` debería ser capaz de... caminar. Esto significa que deberíamos darle esta capacidad a nuestro person. Lo haremos mediante un método de llamada. A primera vista, los métodos se ven como propiedades. Eso es porque lo son, método es el nombre que la damos a las "propiedades" que tienen los valores de las funciones.  Este es un ejemplo, utilizando nuestro `person` de antes:

```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log('I am walking....");
  }
 };
```

Lo primero que notamos acerca de nuesto método recién agregado es que es una función anónima. Esto significa que la función no tiene un "nombre", simplemente tiene una propiedad asociada. 

Si queremos "llamar" a este método dentro de nuestro objeto, simplemente deberíamos llamarlo especificando el objeto y luego el nombre del método. 

```js
person.walk(); // output: I am walking....
```

#### 'this' contextual

El término `this` es un poco difícil de entender al comienzo. La forma más fácil es explicar lo que es `this`, explicándoles que el `this` habla directamente acerca del objeto que está siendo manipulado. Por ejemplo, si queremos modificar el método actual `person.walk()` para obtener el nombre de nuestro person, deberíamos de utilizar el `this` contextual. 


```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log( this.name + ' am walking....");
  }
 };
```

Lo que está pasando es que cuando llamamos `person.walk`, va a tomar el objeto que está en el contexto y está siendo llamado, y va a utilizar ese dato al momento de obtener el output del nombre. 

Si creáramos 2 objetos literales diferentes:

```js
const person1 = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log( this.name + ' is walking....");
  }
 };

const person2 = {
	name: "Sally Joe",
	age: 30,
	computerScientist: true,
    education: [Harvard University],
    walk: function() {
  	console.log( this.name + ' is walking....");
  }
 };

person1.walk() // output: Grace Hopper is walking
person2.walk() // output: Sally Joe is walking
```


#### Objeto anidado 

Además de tener un objeto con propiedades y métodos, también tenemos objetos "anidados" en un objeto de JS. Este es un ejemplo:

```js
const person = {
	name: "Grace Hopper",
	age: 85,
	computerScientist: true,
    education: [Vassar College, Yale University],
    walk: function() {
  	console.log('I am walking....");
  },
   birthplace: {
       date: December 9 1906,
       location: New York City, USA
   }
 };

```

Nota el nuevo objeto anidado `birthplace` en nuestro objeto. Como puedes ver, podemos "crear" objetos fácilmente al declarar explícitamente los métodos y propiedades desde dentro de ellos. 

#### Añadiendo nuevas propiedades

Cuando añadimos NUEVOS métodos de propiedad, utilizamos el  `=` en vez del `.` ya que estamos asignando un valor al objeto. Ejemplo:

```js
person.serviceBranch = 'United States Navy';
```

Como resultado, ahora `person` tiene una propiedad recién añadida llamada `serviceBranch` con un valor de `United States Navy`.

### Dot vs Bracket Notation

Al acceder a las propiedades del objeto, hay dos formas diferentes de hacerlo, dot notation y bracket notation.

Dot notation es un enfoque más común y popular para acceder a las propiedades de un objeto. Dot notation especifica el objeto directamente y llama al nombre de la propiedad mediante un punto `.`. La razón por la que esto se prefiere por encima de los corchetes es porque es más fácil de leer y ocupa menos caracteres. 

Ejemplo: `foo.bar` <-- foo es el nombre del objeto; bar es el nombre de la propiedad. 

Bracket notation es cuando accedemos a la propiedad de un objeto mediante el uso de los corchetes `[]`. Específicamente, acceder al nombre de la propiedad adjunta al objeto. Utilizando el mismo ejemplo de antes, accederíamos a la propiedad `bar` del objeto `foo` escribiendo `foo['bar']`

[ESTE](https://codeburst.io/javascript-quickie-dot-notation-vs-bracket-notation-333641c0f781) es un artículo que explica lo mas importante de los dos notations.  

## El DOM

"El DOM" (Modelo de Objeto de Documento) es donde el HTML y el CSS que hemos estado aprendiendo todo este tiempo se juntan para crear un documento que utilizaremos en nuestro navegadores. En nuestro navegador, cuando miramos una página web, vemos el HTML y CSS juntándose para crear una estructura que podemos ver en los encabezados, imágenes, enlaces, etc...

Los navegadores representan el documento html como un objeto de JS. Esto significa que podemos acceder a componentes individuales del "DOM" de la misma forma en la que accederíamos a componentes individuales de un objeto de JS. 

Este es un ejercicio rápido para demostrar este punto: 

1. escribe `document` en la consola de tu navegador
1. encuentra `document.body`
1. escribe en el `document.body`
1. cambia el document.body.textContext = 'a otra cosa'
1. mira a las opciones en el dot notation `document.`.

En el objeto `document`, tenemos un método llamado `getElementById`. Esto nos permite "obtener un elemento específico dentro del HTML especificando el id"

Algo que señalar es que **solo se puede añadir una cosa a la vez**.

Si queremos añadir una etiqueta `<p>` a nuestra página, dentro de, por ejemplo, un `<article>`, podemos hacerlo. Pero este article al que queremos añadirle la etiqueta `p` **debe tener un id único adjunto**. 

```HTML
<article id="parentElement">
</article>
```

Este es un código JS para añadirle una etiqueta `p` a nuestro `article`

```javascript
const parent = document.getElementById('parentElement');  
const child = document.createElement('p');  
child.textContent = 'Some words we want in our p element';  
parent.appendChild(child);
```

```HTML
<div id="parent">
  <p>Some words we want in our p element</p>
</div>
```

Hay un montón de potenciar en la manipulación del DOM y los objetos de JS. Potencialmente podemos hacer un método `render` a uno de los objetos de JS que puede renderizar estas nuevas etiquetas HTML a nuestra página cuando las llamamos:

```js
render: function(){
  const parent = document.getElementById('parentElement');
    for(let i=0; i < myArray.length; i++){
      const newTag = document.createElement('li');
      newTag.textContent = myArray[i];
      parent.appendChild(newTag);
    }
}
```


## Modelos de Dominio

Un buen recurso para la introducción a los Modelos de Dominio es [ESTE](https://www.scaledagileframework.com/domain-modeling/).

Los Modelos de Dominio es una forma de describir entidades del mundo real y sus relaciones entre sí. Podemos tomar una descripción del problema y extraer de él los requisitos del sistema determinando qué entiedades están involucradas y las relaciones necesarias. Por lo general el arquitecto de sistemas es el responsable del modelo de dominio y lo emula mediante dibujos que resaltan los "verbos" de cada acción que toma lugar dentro del sistema y cómo se enlaza con el flujo de datos general. El modelo de dominio permite que los intersados y los equipos de desarrollo entiendan mejor las necesidades de la aplicación y que componentes/entidades se necesitan. 

En última instancia todo depende cómo se organiza y define el problema. Es importante resaltar que no hay ningún sustituto para la buena planeación, y si un problema parece muy grande para definir efectivamente, entonces necesita descomponerse más. Hay dos artículos acerca de este tema, [uno creado por un ex instructor de Code Fellows instructor (Ryan Sobol)](https://github.com/codefellows/domain_modeling#domain-modeling) y otro de [un empresario de la educación tecnológica](https://simpleprogrammer.com/2013/07/15/understanding-the-problem-domain-is-the-hardest-part-of-programming/). Es un buen momento para hablar de las partes empresariales de la industria tecnológica y la economía básica de cómo se le paga a la gente para hacer este trabajo.


## Plantillas Literales

Un tema más pequeño para el dia de hoy es la introducción a las plantillas literales de ES6. Muéstrale a los estudiantes cómo refactorizar la concatenación de la semana 1 a plantillas literales.
