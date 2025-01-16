# Laboratorio 14: Eventos en Vote Tracker 🎮

## Descripción
En este laboratorio, implementarás la interactividad del Vote Tracker mediante el manejo de eventos. Aprenderás a capturar y gestionar las interacciones del usuario, trabajar con el objeto Event y usar addEventListener para crear una experiencia de votación fluida y responsive.

## 🎯 Objetivos de Aprendizaje
- Implementar manejo de eventos del usuario en JavaScript
- Trabajar con el objeto Event y sus propiedades
- Utilizar addEventListener para múltiples tipos de eventos

## 🧠 Conceptos Clave
1. Event Object y sus propiedades más utilizadas
2. Event Delegation para elementos dinámicos
3. Prevención de comportamientos por defecto
4. Tipos de eventos del mouse y teclado

## 🚀 Setup Inicial

1. Crea una nueva rama `lab-14-events` y sitúate ahí para este laboratorio.
2. Crea (o ingresa a) tu cuenta en [Google IDX](https://www.idx.dev){:target="_blank"}
    - Crea un nuevo workspace llamado `code201-lab14-demo`. 
    - Lo utilizarás para aprender algunos conceptos con Gemini.

### 3. Aprendiendo con Gemini (AI)

Para este laboratorio, necesitarás entender mejor los eventos en JavaScript. Utiliza este prompt en el chat con Gemini (dentro de tu workspace en IDX):

```
Elabora un ejercicio de demostración que incluya código y comentarios explicativos para entender los conceptos asociados a los eventos en javascript. El ejercicio se trata de crear un tablero de 6x6, donde cada cuadrado tiene un color de fondo y una letra como contenido. Al darle clic a un cuadrado, debería pintar en consola:

- Índices X e Y dentro del tablero, por ejemplo: x=2,y=3
- Color del cuadrado
- Letra del contenido del cuadrado

Hazlo con HTML, CSS y Javascript puro. Sin ninguna librería.
```

- Implementa la solución que te brinde Gemini y pruébala.
- En caso haya generado una solución con varios eventListener (por ejemplo, dentro de un bucle):
    - Pídele que haga una refactorización para que aplique el patrón "Event Delegation" y solo agregue el eventListener al tablero (padre).
- En caso haya generado una solución con 1 solo eventListener (por ejemplo, al tablero):
    - Pídele que haga una refactorización para que agregue un eventListener a cada cuadrado, en vez de hacerlo solo en el tablero.

- Por último, pídele a Gemini que te explique en qué casos deberías usar o no, Event Delegation
```
¿En qué casos se recomienda utilizar Event Delegation y en qué casos no? Dame 3 ejemplos de cada uno.
```

## 📋 Historias de Usuario

### HU1: Votación Intuitiva
Como usuario, necesito poder votar por mi producto favorito:
- Hacer clic en la imagen o área del producto para seleccionarlo
- Ver feedback visual inmediato al seleccionar
- Confirmar mi voto con un botón después de seleccionar

### HU2: Feedback de Interacción
Como usuario, necesito:
- Ver la descripción del producto al pasar el mouse la imagen
- Recibir confirmación visual al registrar mi voto
- Ver un mensaje de error si intento hacer clic en un lugar vacío

## 🛠️ Requerimientos Técnicos

### 1. Event Listeners Requeridos
- Click en productos
- Hover para tooltips
- Submit para confirmación

### 2. Event Delegation
Implementar delegación de eventos para:
- Productos que se cargan dinámicamente
- Botones de control que aparecen/desaparecen
- Mensajes de feedback

### 3. Event Object
Utilizar propiedades clave:
- target vs currentTarget
- preventDefault()

## ⭐ Logros Adicionales
1. **Navegación y Control**
Implementa la navegación completa con el teclado.
- Usar el teclado para navegar entre productos (←/→)
- Usar la barra espaciadora para seleccionar
- Usar Enter para confirmar mi voto


## 📝 Instrucciones de Envío

1. Actualiza el README.md con:
   - Lista de eventos implementados
   - Guía de uso (keyboard shortcuts, etc)

2. Crea un Pull Request que incluya:
   - Todos los cambios en la rama **lab-14-events**

3. Despliega en GitHub Pages

4. Entrega:
   - URL del repositorio
   - URL del sitio desplegado

## ⚠️ Errores Comunes a Evitar
```javascript
// ❌ MAL: Usar onclick en HTML
<button onclick="handleClick()">

// ✅ BIEN: Usar addEventListener
button.addEventListener('click', handleClick);


// ❌ MAL: Agregar listeners a cada producto
products.forEach(p => p.addEventListener(...))

// ✅ BIEN: Usar delegación en el contenedor
container.addEventListener('click', handleProductClick);

// ❌ MAL: No prevenir comportamiento default
form.addEventListener('submit', () => {})

// ✅ BIEN: Prevenir cuando sea necesario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Manejar submit
});
```