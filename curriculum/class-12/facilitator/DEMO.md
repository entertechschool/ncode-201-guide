# Código de la Clase  

El código de la clase de hoy estará basado en construir una aplicación simple de ejempo con `Charts.js`  
Se recomienda que sigas la documentación de chartJs frente a los estudiantes [https://www.chartjs.org/docs/latest/getting-started/](https://www.chartjs.org/docs/latest/getting-started/)

Comienza creando tu `index.html`:  

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
    <script type="text/javascript" src="app.js"></script>
  </body>
</html>
```  

Luego, en `style.css`:

```css
canvas {
  width: 75%;
  height: 500 px;
}
```  

Añade un archivo `app.js`:

```JavaScript
'use strict';

const ctx = document.getElementById('chart').getContext('2d');

const data = [12, 19, 3, 5, 2, 3];
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelColors,
    datasets: [{
      label: '# of Votes',
      data: data,
      backgroundColor: labelColors
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
```  

Muéstrale a los estudiantes que también pueden cambiar los datos utilizando `.` notation:  

```javascript
myChart.data.datasets[0].data = [100,200,300,50,10];
```

Por último, pregúntale a los estudiantes si les gustaría cambiar algo de nuestro gráfico. Trata de utilizar la documentación para encontrar e integrar sus sugerencias a la demostración.
