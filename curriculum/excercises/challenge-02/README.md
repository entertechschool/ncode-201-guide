> **Code 201** / Ejercicios de Repaso 🚴‍♂️

# Calculadora IMC

## Contexto

### Problema / Oportunidad
Con la creciente necesidad de herramientas digitales que promuevan el bienestar y la salud, surge la oportunidad de crear una calculadora de Índice de Masa Corporal (IMC). Muchos usuarios desean conocer su estado nutricional de forma rápida y sencilla, y una herramienta interactiva que calcule y explique el resultado puede ser de gran ayuda para fomentar hábitos saludables y prevenir problemas asociados al sobrepeso u obesidad.

### Solución
Desarrollar una aplicación web responsiva que permita a los usuarios ingresar su peso y altura para calcular el IMC. La calculadora no solo mostrará el resultado numérico con dos decimales, sino que también interpretará el resultado (por ejemplo: "Bajo peso", "Peso normal", "Sobrepeso" u "Obesidad") y ofrecerá elementos visuales dinámicos, como cambio de color y una barra de progreso, para mejorar la experiencia del usuario.

### Historias de Usuario
- **Usuario Curioso:** Como usuario, quiero ingresar mis datos (peso y altura) en un formulario sencillo, para poder calcular mi IMC y entender mi estado nutricional de forma inmediata.
- **Usuario Visual:** Como usuario, deseo ver una representación visual del resultado (por ejemplo, a través de colores o una barra de progreso) que me ayude a interpretar rápidamente mi resultado, sin tener que leer demasiado texto.
- **Usuario Histórico:** Como usuario, me gustaría que la calculadora almacene mis últimos cálculos para poder comparar y monitorear mi evolución en el tiempo.

### Fórmulas
La fórmula utilizada para calcular el IMC es:
```
IMC = [ Peso (kg) / altura (m) ] ^ 2
```

El resultado se mostrará con dos decimales y se interpretará según la siguiente clasificación:
- Menor a 18.5: Bajo peso
- Entre 18.5 y 24.9: Peso normal
- Entre 25.0 y 29.9: Sobrepeso
- 30.0 o más: Obesidad

---

## ☑️ TO-DO:

### 1. Repositorio y Estructura
- **Crear el repositorio:**
  - Nombre: `calculadora-imc`
  - Visibilidad: Público
  - Incluir un README y la Licencia MIT
- **Clonar el repositorio** en tu entorno local.
- **Estructura de archivos:**  
  Organiza el proyecto de la siguiente manera:
```
calculadora-imc/ 
├── index.html 
├── styles.css 
└── app.js
```

### 2. Semántica HTML
- En el archivo `index.html`, crea un formulario que incluya:
- **Campos de entrada:**  
  - Campo para ingresar el **peso** (en kilogramos).
  - Campo para ingresar la **altura** (en metros).
- **Botón de acción:**  
  - Un botón para calcular el IMC.
- **Secciones para la salida:**  
  - Una sección para mostrar el resultado numérico del IMC.
  - Una sección para mostrar la interpretación del resultado.
- Utiliza etiquetas semánticas como `<header>`, `<main>` y `<footer>` según consideres necesario para estructurar la página.

### 3. Estilos con CSS
- En el archivo `styles.css`, aplica estilos para:
- **Diseño y distribución:**  
  - Centrar la calculadora en la página.
  - Garantizar que la interfaz sea intuitiva y fácil de usar.
- **Diseño responsivo:**  
  - Implementa Media Queries para adaptar el diseño a dispositivos móviles, tabletas y escritorios.
- **Identidad visual:**  
  - Utiliza una paleta de colores que transmita una sensación médica o deportiva.
- **Visualización de resultados:**  
  - Establece estilos para que el resultado numérico y la interpretación sean claros y atractivos.
  - *(Logro adicional)* Cambia dinámicamente el color del resultado según la categoría del IMC y agrega una barra de progreso que represente visualmente el valor del IMC.

### 4. Funcionalidades con Javascript
- En el archivo `app.js`, implementa la funcionalidad de la calculadora:
1. **Captura de datos:**  
   - Asocia eventos (por ejemplo, `click` o `submit`) al formulario para capturar los valores de peso y altura ingresados por el usuario.
2. **Validación:**  
   - Asegúrate de que los datos ingresados sean números positivos.
3. **Cálculo del IMC:**  
   - Utiliza la fórmula:
     ```js
     imc = peso / (altura * altura);
     ```
   - Muestra el resultado con dos decimales en la sección correspondiente.
4. **Interpretación del resultado:**  
   - Muestra un mensaje interpretativo basado en el valor calculado:
     - Menor a 18.5: "Bajo peso"
     - Entre 18.5 y 24.9: "Peso normal"
     - Entre 25.0 y 29.9: "Sobrepeso"
     - 30.0 o más: "Obesidad"
5. *(Logro adicional)* **Historial de cálculos:**
   - Guarda y muestra en una tabla los últimos 5 cálculos realizados para que el usuario pueda visualizar su evolución.

### 5. Documentación y Despliegue
- **Documentación:**  
- Actualiza el archivo `README.md` con:
  - Una descripción del proyecto.
  - La estructura de archivos.
  - Las funcionalidades implementadas.
  - Instrucciones de uso y cualquier requerimiento especial.
- **Despliegue:**  
- Publica tu sitio utilizando GitHub Pages y comparte la URL para que pueda ser revisada.
