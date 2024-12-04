# Laboratorio 05: Gestión de Presupuesto Personal 🏦

## Descripción
En este laboratorio, construirás una aplicación web para gestionar presupuestos personales que permite a los usuarios registrar y visualizar sus ingresos y gastos. Este ejercicio te ayudará a practicar conceptos fundamentales de JavaScript como condicionales, arreglos y bucles.

## 🎯 Objetivos de Aprendizaje
- Implementar lógica de programación usando estructuras de control
- Manipular arreglos para almacenar y gestionar datos
- Crear funciones que procesen entrada de usuario
- Actualizar el DOM dinámicamente basado en datos

## 🚀 Setup Inicial

### 1. Crea y configura el Repositorio
- En tu cuenta de Github crea un nuevo repositorio llamado: `personal-budget`
>
> (Recuerda agregar un README.md desde la creación).
>
- En tu sistema operativo, clona el repositorio.
```bash
# Clonar el repositorio de git
cd dev
git clone [https://...]
```

### 2. Estructura de Archivos
```
personal-budget/
├── index.html
├── styles.css
├── app.js
```

### 3. Aprendiendo con IA
Para este laboratorio, necesitarás aprender a nivel inicial, cómo manejar el evento del envío de un formulario en HTML, para que desde Javascript puedas capturar los datos. Por esto, vas a usar un agente de IA para lograr hacerlo.

- Utiliza un prompt similar al ejemplo para lograr aprender este nuevo concepto:

```
Soy estudiante de desarrollo web y estoy aprendiendo JavaScript. Necesito ayuda para entender cómo trabajar con formularios HTML y JavaScript.

Específicamente necesito:
1. Entender cómo obtener los datos cuando el usuario envía un formulario
2. Aprender a usar el evento onSubmit
3. Ver un ejemplo básico de cómo prevenir que el formulario recargue la página

Mi conocimiento actual incluye:
- HTML básico y formularios
- JavaScript: variables, funciones, condicionales
- Conceptos básicos del DOM

¿Podrías mostrarme un ejemplo simple paso a paso que incluya:
- El HTML del formulario
- El JavaScript necesario para capturar los datos
- Una explicación de cada parte del código?
```

## Instrucciones

### 1. HTML (index.html)
Debe incluir:
- Formulario con:
  - Campo para el monto
  - Selector de tipo (ingreso/gasto)
  - Botón de submit
- Sección para mostrar balance total
- Lista para mostrar transacciones
- Enlaces a archivos CSS y JavaScript

### 2. JavaScript (app.js)

- Define un array vacío `transacciones` para almacenar las transacciones.

- Implementa la función `registrarTransaccion` que:

    - Reciba los parámetros tipo y monto.
    - Use condicionales (if/else) para validar y clasificar la transacción.
    - Almacene la transacción como un string en el formato "Ingreso: 500".

- Implementa un bucle for para iterar sobre las transacciones y mostrarlas en el navegador.

### 3. CSS (styles.css)

- Aplica un diseño de layout responsivo usando media-queries.

## Logros adicionales

Si completas las instrucciones principales, intenta implementar las siguientes mejoras:

1. **Ordenar transacciones**: Usa el método `sort` para mostrar las transacciones en orden descendente o ascendente según el monto.
2. **Validaciones avanzadas**:
    - Asegúrate de que los montos sean números positivos.
    - Muestra un mensaje de error si el campo de monto está vacío o es inválido.
3. **Estilizar interacciones**:
    - Aplica estilos dinámicos para diferenciar visualmente los ingresos y gastos en la lista.


## Instrucciones de envío
- Publica la página usando GitHub Pages.
- Envía el enlace de tu repositorio en GitHub y tu sitio publicado.
