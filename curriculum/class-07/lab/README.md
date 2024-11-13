# Laboratorio: Salmon Cookies parte 2

## Descripción del problema

¡La descripción del problema de [Pat's Salmon Cookies](https://entertechschool.github.io/code-201-guide/curriculum/class-06/lab/){:target="_blank"} se puede encontrar aquí!

## Instrucciones

1. Crea una nueva rama para el laboratorio de hoy. Asegúrate de que tenga todos tus cambios del laboratorio 06 para que puedas extender su funcionalidad.

1. Reemplaza todos los objetos literales para el puesto de galletas de salmón con una sola función constructora que, cuando se llame con una 'nueva' palabra clave, se cree una nueva instancia.

1. Reemplaza las listas de tus datos para cada tienda y en su lugar arma una sola tabla de datos. Se deberá ver parecido a lo siguiente:

    Muestra los datos de cada tienda en formato de tabla similar a como se ve a continuación. Divide cada columna por horas y completa cada file con un "Total diario de la ubicación".

|         | 6:00am | 7:00am | 8:00am | 9:00am | 10:00am | 11:00am | 12:00pm | 1:00pm | 2:00pm | 3:00pm | 4:00pm | 5:00pm | 6:00pm | 7:00pm | Total diario de la ubicación |
| ------- | ------ | ------ | ------ | ------ | ------- | ------- | ------- | ------ | ------ | ------ | ------ | ------ | ------ | ------ | -------------------- |
| Seattle |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Tokyo   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Dubai   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Paris   |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Lima    |        |        |        |        |         |         |         |        |        |        |        |        |        |        |
| Total  |        |        |        |        |         |         |         |        |        |        |        |        |        |        |

1. Cada ubicación de puesto de galletas deberá tener un métodos render() separado que cree y añada su fila a la tabla
1. La fila del header y del footer serán creadas con su propia función individual.
   > NOTA: Por favor utiliza una casilla de header tanto para la fila del header (que contiene las horas de la tienda), como para la fila del footer (que contiene el total de horas y el total general de todas las tiendas).

### Logros Adicionales

- Continúa trabajando en el diseño de la página pública.
- Ejecuta un informe de Accesibilidad de Lighthouse y aspira a obtener una puntuación de 65-80. Haz las mejoras necesarias para que tu sitio entre en ese rango. Añade una captura de pantalla con tu puntuación a tu README.md.
- Crea una guía de estilo, utilizando [Starbucks React Components Pattern Library](https://www.starbucks.com/developer/pattern-library/guidelines/) o [Starbucks - High level Guide](https://creative.starbucks.com/) como modelo.
- Crea una segunda tabla que ayude a Pat a administrar el personal. Tomando como base que un solo vendedor de galletas de salmón puede servir a 20 clientes por hora, y que cada ubicación debe tener un mínimo de dos vendedores de galletas de salmón de turno en todo momento, calcula cuántos vendedores de galletas de salmón se necesitan en cada local por hora.
- Los estudios sobre el flujo de clientes de Pat han demostrado que a las 8am, 11am y 3pm suelen tener más clientes que a otras horas, y que las horas con la menor cantidad de clientes son 1pm y 6pm. Utiliza una curva de control en las cifras de ventas previstas para reflejar esas fluctuaciones diarias. El siguiente array representa el porcentaje de tráfico máximo que ocurre durante cada una de las horas de 6am a 8pm, y que se pueden utilizar para escalar el flujo de clientes previsto por hora a valores más precisos.

`[0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]`

### Guía de estilo de desarrollo

Además de los requisitos mencionados anteriormente, por favor asegúrate de que tu proyecto también contenga lo siguiente de acuerdo a nuestra guía de estilo:

- Buen uso de las funciones constructoras; el estilo y la sintaxis están correctamente implementadas
- El código duplicado ha sido eliminado y los principios DRY son evidentes
- Se trabaja en una rama no-main, con un historial de commits regular. Básicamente, cada vez que consigas que algo funcione, deberás hacer un commit. Pero solo necesitas hacer un push cada par de horas aproximadamente, a lo mucho.

## Recursos

No se necesitan recursos adicionales para este laboratorio. Utiliza tu demostración de código y

## Instrucciones de envío

- Envía el enlace a tu repositorio de GitHub para este proyecto.
- Despliega tu repositorio de GitHub utilizando [Github Pages](https://docs.github.com/es/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site){:  target="_blank"}. Envía el enlace a tu repositorio de GitHub para este proyecto.
- Añade un comentario a tu envío en Canvas con las respuestas a las siguientes preguntas
  - ¿Cómo te fue, en general?
  - ¿Qué observaciones o preguntas tienes acerca de lo que hemos aprendido hasta ahora?
  - ¿Cuánto tiempo te tomó terminar esta tarea? Y, antes de que comenzaras, ¿cuánto tiempo creiste que te tomaría terminar esta tarea?
