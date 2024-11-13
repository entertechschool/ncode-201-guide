```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Charts Demo</title>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
  </head>
  <body>
    <canvas id="chart"></canvas>
    <script type="text/javascript" src="chartdata.js"></script>
  </body>
</html>
```

Ahora, habla del `chartdata.js` de la demostración de la clase anterior:

```javascript
const context = document.getElementById('my-chart').getContext('2d');

const dataSet = [12, 6, 24, 5, 3, 9];
const itemNames = ['clock', 'watch', 'bigfoot', 'apple', 'TV', 'Blingy Red Shoes'];
const chartColors = ['black', 'white', 'brown', 'green', 'blue', 'red'];

const myChart = new Chart(context, {
  type: 'bar',
  data: {
    labels: itemNames,
    datasets: [{
      label: '# of Votes',
      data: dataSet,
      backgroundColor: chartColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
```

Ahora, de vuelta en `app.js`, añade la siguiente función:

```javascript
//función para guardar en localStorage
function saveStatsToLocalStorage(dataSet){
  const productStats = [];
  for (let i = 0; i < dataSet.length; i++) {
    productStats.push(dataSet[i]);
  }
  console.log(JSON.stringify(productStats));
  localStorage.productStats = JSON.stringify(productStats);
}

saveStatsToLocalStorage(dataSet);
```

Luego, en `app.js`, comenta lo siguiente:

```javascript
// const data = [12, 4, 9, 3, 100, 55, 31];
```

Luego añade lo siguiente en donde estaba `data`:

```javascript
const dataSet = JSON.parse(localStorage.productStats);
console.log(dataSet);
```

## Animaciones en CSS

Un buen recurso para los pseudoselectores de css:
<https://css-tricks.com/pseudo-class-selectors/>

En `index.html`, añade el siguiente `div` debajo del `div` de nuestro gráfico:

```html
<div class="hello"></div>
```

en css, añade lo siguiente:

```css
.hello {
  width: 400 px;
  height: 400 px;
  background: #2db34a;
  border-radius: 6 px;
  transition: background .2s linear, border-radius .5s ease-in, width .25s ease-in-out;
}

.hello:hover {
  width: 1000 px;
  background: #ff7b29;
  border-radius: 50%;
}
```
