# Desmostración

## Local Storage en la Consola

Para enseñar acerca del local storage, comienza abriendo las herramientas para desarrolladores de tu navegador y ve a donde se almacena el local storage. Si estás utilizando Chrome, es en la pestaña "aplicación". Si estás utilizando Edge, es en la pestaña "aplicación".

### Set Item

Verás "almacenamiento local" como una opción en la parte izquierda. Ahí es donde se van a almcenar nuestros datos. Para practicar, vuelve a la consola de tu navegador e ingresa lo siguiente:

`localStorage.setItem('name', 'Jane Smith');`

La sintaxis de `setItem()` necesita de 2 argumentos que debes proporcionar. Estos valores se guardarán directamente al local storage con el key y value como los datos que has enviado.

> `setItem(key, value)`  

### Get Item

Dirígente a donde está almacenado tu local storage y deberás ver una nueva entrada, con 'name' como key y 'Jane Smith' como value.

Para recuperar un elemento, vuelva a la consola e ingresa lo siguiente:

`localStorage.getItem('name');`

Recibirás el value de 'Jane Smith'. `getItem()` solo requiere el argumento del key.

> `getItem(key)`

Reucerda que el key y el value deben ser un string, así que asegúrate de solo ingresar strings como argumentos de la función.

### Actualiza un elemento

El local storage se rige con los pares key/value. Esto significa que podemos actualizar fácilmente un valor en específico siempre que tengamos un key.

Utilizando el ejemplo anterior, si queremos cambiar el value 'name' a "William Shakespeare", todo lo que tendría que hacer sería ejecutar el siguinete código en nuestra consola:

`localStorage.setItem('name', 'William Shakespeare');`

Revisa el local storage y encontrarás que el nombre ha sido actualizado de 'Jane Smith' a 'William Shakespeare'

### Remove Item

Para eliminar una entrada en específico en el local storage, todo lo que debes hacer es llamar a la función `removeItem()`. El único argumento que enviarás será el key de los datos que quieres eliminar.

> `removeItem(key)`

Ve a tu consola en el navegador e ingresa:

`localStorage.removeItem('name')`;

Puedes confirmar que tu 'name' ha sido eliminado volviendo al local storage y verificando que el key 'name' ha sido eliminado con su value.

### Limpiar Local Storage

Para limpiar todos lo values en el local storage, solo se debe llamar a la función
 `localStorage.clear()`. Esta función no necesita de argumentos y puede limpiar todos los datos de tu local storage.

Ve a tu consola y añade varias entradas a tu local storage.

 `setItem('name', 'Jack Shepard')`  
 `setItem('age', '35')`  
 `setItem('color', 'red')`

Una vez que tengas varios elementos en tu local storage, ejecuta un

`localStorage.clear()`

Notarás que tu local storage ahora está totalmente vacío. También puedes verificar que está vacío ejecutando el comando

`localStorage` solo en la consola. Recibirás el length de los elementos en tu local storage. Verás que el valor es 0.
  
## Local Storage en VSCode

Para esta demostración, mostrarás cómo utilizar los comandos anteriores en la aplicación. Es *posible* que necesites código de inicio para tu demostración. Revisa el código de inicio proporcionado en la carpeta "site-settings-starter-code" como punto de partida. Esto signifca que necesitarás pasar los primeros minutos revisando el estado inicial de código con los estudiantes. Si sientes que tienes suficiente tiempo, modifica el código de incio con ellos.

Unas cosas que resaltar del código de inicio:

1. Esto contiene un modo claro/oscuro, un menú acordeón y un elemento textarea. El estado de la aplicación se guardará como un objeto literal global.
1. El propósito de esta aplicación es guardar el estado de la configuración del sitio en el local storage, para que persista al actualizarse la página.
1. Esta es una buena oportunidad para presentar el concepto del estado a la clase.

Nuestro objetivo con esta aplicación es guardar el estado de la configuración del sitio. Queremos que los datos persistan aunque se actualice la página o se cierre el navegador.


### Guardar en Local Storage

```js
// guardar en local storage
function saveSettings() {
  let stringify = JSON.stringify(settings);
  localStorage.setItem("settings", stringify);
  // console.log(stringify); 
}
```


### Cargar desde Local Storage

```js
// cargar desde local storage
function loadSettings() {
  let getSettings = localStorage.getItem("settings");
  if (getSettings) {
    console.log(getSettings); //
    settings = JSON.parse(getSettings);
    console.log(settings); //
  }
}
```


### Hacer que el modo oscuro/claro funcione con el local storage

Añade saveSettings() al final de las funciones enterDarkMode y enterLightMode.

```js
function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");

  // local storage
  settings.darkMode = true;
  saveSettings();  // <------ añade esta línea
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");

  // local storage
  settings.darkMode = false;
  saveSettings();  // <------ añade esta línea
}
```

### Haz que la configuración se cargue desde local storage al momento de cargar la página
Defina una función page load que cargue el objeto de configuración desde el local storage.

```js
// utilizar la configuración del local storage al momento de cargar la página
function pageLoad() {
  let savedSettings = localStorage.getItem("settings");
  if (!savedSettings) {
    return;
  }
  settings = JSON.parse(savedSettings);
  if (settings.darkMode) {
    enterDarkMode();
  } else {
    enterLightMode();
  }
  if (settings.open !== null) {
    details[settings.open].setAttribute("open", "open")
  }
  commentBox.value = settings.comment;
}
```

¡No te olvides de llamar a la función al final de app.js!

```js
// cargar la página con la configuración guardada
pageLoad();
```

## Logros Adicionales:
Si alcanza el tiempo, puedes añadir la funcionalidad local storage a los details y la caja de comentarios al final de la página. Cuando el local storage se utiliza de esta forma la pestaña details se mantendrá abierta y el comentario en progreso se mantendrá cuando la página se actualice.



### Guardando Details Abiertos:
Añade el código con el bloque de comentarios a la función callback adjunta a los elementos details:

```js
// añade un event listener a todos los details
for (let i = 0; i < details.length; i++) {
  details[i].addEventListener("click", function () {

////////////////////////////////////////////////////////////////////////////////////////    
    // guarda el detail abierto y el local storage
    if (settings.open === i) { // cláusula de protección para que los details que se cierren se queden cerrados
      settings.open = null;
      saveSettings();
      return
    }
    openDetail = i;
    settings.open = i;
    saveSettings();
////////////////////////////////////////////////////////////////////////////////////////   

    // elimina el atributo 'open' de los otros details
    for (let j = 0; j < details.length; j++) {
      if (j !== openDetail) {
        details[j].removeAttribute("open");
      }
    }
  });
}
```

### Guardando un comentario en progreso:
Añade el event listener y la función callback a la caja de comentarios. Este es un buen momento para hablar del evento "input".

```js
commentBox.addEventListener("input", function () {
  settings.comment = commentBox.value;
  saveSettings();
});
```