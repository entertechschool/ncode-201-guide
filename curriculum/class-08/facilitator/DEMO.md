# Desmostración

Consulta el [flexbox-demo code](flexbox-demo) inicial. Esta demostración incluye archivo html y css iniciales. Utiliza VSCode para esta demostración.

Utiliza los siguientes pasos de la demostración en el archivo [style.css](flexbox-demo/css/style.css)

## Propiedades de Flexbox

### `display: flex`

### `flex-direction: row` o `flex-direction: column`

La propiedad `flex-direction` establece cómo los elementos de flex se colocan en el flex container definiendo el ***main axis** y la dirección.

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     flex-direction: row;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Pasos para demostrar `display: flex` y `flex-direction`:

1. AÑADE: la propiedad `display` con el valor `flex` - en el elemento container.
1. AÑADE: añade la propiedad `flex direction`. La opción por defecto es row pero muestra la diferencia al cambiarlo a `flex-direction: column`.
1. Al demostrar `flex-direction: column`, cambia la propiedad height en este container.
    1. Con el height actual de `500px`, el height de cada div no es `200px` como se indica en el código inicial. Se encogen para entrar en el container. Cambia el height a `1200px` para ver que los divs tendrán suficiente espacio y mantendrán su height de `200px`. Luego cambia el height de vuelta a `500px`.

### `justify-content`

La propiedad `justify-content` determina cómo se distribuye el contenido por el **main axis** (izquierda a derecha).

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Pasos para demostrar `justify-content`:

1. AÑADE: la propiedad `justify-content`. El valor por defecto es flex-start.
1. DEMUESTRA los otros valores para `justify-content`:
    1. `center`: se centra a lo largo del main axis.
    1. `space-between`: toma todo el espacio extra y lo distribuyes entre los elementos pero NO en los border externos.
    1. `space-around`: le da a cada elemento la misma cantidad de espacio alrededor.
    1. `space-evenly`: se asegura de que el espacio sea igual entre cada elemento.

### `flex-wrap`

La propiedad `flex-wrap` determina si los elementos se envuelven a lo largo del main axis a una nueva línea si es horizontal o una nueva columna si es vertical.

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     justify-content: flex-start;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Pasos para demostrar `flex-wrap`:

1. CAMBIA: `flex-direction` a `column`. Los divs se encogerán para entrar al height de`500px` del contenedor.
1. CAMBIA (opcional): `justify-content` a `flex-start`.
1. AÑADE: la propiedad `flex-wrap` y establece el valor a `wrap`. Esto creará nuevas columnas y los divs ahora mantendrán su height de `200px` mientras se ajustan.
1. DEMUESTRA `flex-wrap` con un `flex-direction` de `row`.
    1. CAMBIA el width en los divs a un width más largo para ver cómo se ajustan.

### `align-items`

La propiedad `align-items` determina cómo se distribuye el contenido a lo largo del **cross axis** (de arriba a abajo).

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     align-items: flex-start;
     flex-direction: row;
     justify-content: center;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

```

Pasos para demostrar `align-items`:

1. CAMBIA: `flex-direction` a `row` si no está así.
1. CAMBIA: `justify-content` a `center`.
1. AÑADE: la propiedad `align-items`. La opción por defecto esc`flex-start` la cual alineará los elementos a la parte superior del container, sin modificaciones.
1. DEMUESTRA algunos otros valores de `align-items`:
    1. `flex-end`: alínea los elementos a la parte inferior del container.
    1. `center`: centra los elementos verticalmente.
1. CAMBIA: `flex-direction` a `column` y utiliza `align-items` para mostrar cómo se crean las columnas.

### `align-self`

La propiedad `align-self` es parecida a `align-items` pero se puede añadir a los elementos en el flex container.

```css
   #container {
     background-color: #003049;
     border: 5px solid #003049;
     height: 500px;
     margin: 0 auto;
     width: 90%;
     display: flex;
     align-items: flex-start;
     flex-direction: row;
     justify-content: center;
   }

   #container div {
     height: 200px;
     width: 200px;
   }

   div:nth-of-type(3){
       align-self: center;
   }

```

Pasos para demostrar `align-self`:

1. CAMBIA: `flex-direction` a `row` si no está así.
1. CAMBIA: `justify-content` a `center` si no está así.
1. CAMBIA: `align-items` a `flex-start` si no está así.
1. SELECCIONA uno de los divs y añade la propiedad `align-self`.
1. DEMUESTRA los siguientes valores de `align-self`:
    1. `center`: esto alineará este div al centro del cross axis.
    1. `flex-start`: esto alineará al div a la parte superior del cross axis.
    1. `flex-end`: esto alineará al div a la parte inferior del cross axis.

## Demostración de Layout utilizando Flex

Consulta el [layout simple](whiteboard-diagrams/flex-layout.png) para demostrar cómo utilizar flex para hacer el layout de una página.

Utiliza CodePen o VSCode e ingresa lo siguiente:

### HTML

```html
<body>
  <header>
    <nav>
      <ul>
        <li>Nav 1</li>
        <li>Nav 2</li>
        <li>Nav 3</li>
      </ul>
    </nav>
  </header>
  <main>
    <aside></aside>
    <article>
      <img src="https://via.placeholder.com/300/000" alt="placeholder-img">
      <img src="https://via.placeholder.com/300/000" alt="placeholder-img">
      <img src="https://via.placeholder.com/300/000" alt="placeholder-img">
    </article>
  </main>
  <footer></footer>
</body>
```

### CSS

Haz la demostración utilizando VSCode, incluye un reset.css.

```css
header {
  background-color: lightgrey;
  border: 1 px solid black;
}

nav ul {
  align-items: center;
  display: flex;
  height: 150 px;
  justify-content: space-around;
  margin: auto;
  width: 80%;
}

li {
  font-size: 2em;
}

main {
  display: flex;
}

aside {
  background-color: lightpink;
  border: 1 px solid black;
  height: 1000 px;
  width: 30%;
}

article {
  align-items: flex-end;
  background-color: lightblue;
  border: 1 px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 70%;
}

img {
  margin-bottom: 50 px;
}

footer {
  background-color: lightgrey;
  border: 1 px solid black;
  height: 150 px;
}
```
