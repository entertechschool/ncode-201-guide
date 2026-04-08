# Test Módulo 4 - Questions

> ⚠️ **Documento para facilitadores** - Contiene respuestas y retroalimentación

**8 preguntas diagnósticas**

---

## Preguntas 1-2 (Clase 13: Modelado de Objetos y Estado)

### Pregunta 1 (Conceptual)

En el contexto de una aplicación web, ¿cuál es la diferencia principal entre **estado local** y **estado global**?

- A) El estado local solo existe en el servidor y el estado global solo en el navegador
- B) El estado local es información específica de una instancia u objeto, mientras que el estado global es información compartida a nivel de toda la aplicación
- C) El estado local se guarda en LocalStorage y el estado global se guarda en una base de datos
- D) No existe diferencia: son sinónimos en JavaScript moderno

> Respuesta: B

> **Retroalimentación:** El **estado local** pertenece a una instancia u objeto específico (por ejemplo, el contenido actual de un campo de texto de un componente), mientras que el **estado global** es compartido por varias partes de la aplicación (por ejemplo, la lista completa de plantillas del usuario). La opción A confunde cliente/servidor con local/global. La C confunde estado con persistencia. La D es falsa: es una distinción conceptual clave para organizar aplicaciones escalables.

---

### Pregunta 2 (Aplicación)

Observa el siguiente código con sintaxis moderna de clases:

```javascript
class Plantilla {
  constructor(titulo, mensaje) {
    this.titulo = titulo;
    this.mensaje = mensaje;
  }
  mostrar() {
    return `${this.titulo}: ${this.mensaje}`;
  }
}
const p = new Plantilla("Saludo", "Hola cliente");
console.log(p.mostrar());
```

¿Qué imprime en consola?

- A) `"Plantilla: Hola cliente"`
- B) `"Saludo: Hola cliente"`
- C) `undefined`
- D) Un error de sintaxis porque `class` no existe en JavaScript

> Respuesta: B

> **Retroalimentación:** La clase `Plantilla` se instancia con `new Plantilla("Saludo", "Hola cliente")`, asignando `this.titulo = "Saludo"` y `this.mensaje = "Hola cliente"`. El método `mostrar()` retorna `"Saludo: Hola cliente"`. La opción A usa el nombre de la clase en lugar de la propiedad. La C ignora el `return` del método. La D es falsa: `class` es una sintaxis estándar desde ES6.

---

## Preguntas 3-4 (Clase 14: App State Management - Patrón Store)

### Pregunta 3 (Conceptual)

¿Cuál es el propósito principal del **Patrón Store** en una aplicación frontend?

- A) Reemplazar el uso de funciones y clases con un único objeto global mutable
- B) Centralizar el estado de la aplicación en un objeto que controla lecturas, actualizaciones y notificaciones de cambio de forma predecible
- C) Guardar automáticamente todos los datos del usuario en una base de datos remota
- D) Optimizar el rendimiento del CSS al separar estilos en módulos

> Respuesta: B

> **Retroalimentación:** El Patrón Store centraliza el estado de la aplicación en un objeto con una API clara (típicamente `getState`, `setState`, `subscribe`), controlando cómo se lee, se modifica y se notifican los cambios — evitando mutaciones dispersas y facilitando el mantenimiento. La opción A describe un antipatrón (mutación global sin control). La C confunde Store con persistencia remota. La D no tiene relación con el patrón.

---

### Pregunta 4 (Aplicación)

En una Store siguiendo principios de **inmutabilidad**, ¿cuál es la forma correcta de agregar una nueva plantilla al array de plantillas del estado?

```javascript
// state.plantillas = [ { titulo: "Saludo" } ]
```

- A) `state.plantillas.push({ titulo: "Despedida" })`
- B) `state.plantillas = [...state.plantillas, { titulo: "Despedida" }]`
- C) `state.plantillas[state.plantillas.length] = { titulo: "Despedida" }`
- D) `delete state.plantillas[0]`

> Respuesta: B

> **Retroalimentación:** Crear un **nuevo array** con `[...state.plantillas, nueva]` respeta la inmutabilidad: no modifica el array original, sino que genera una nueva referencia. Esto facilita la detección de cambios y evita bugs difíciles de rastrear. Las opciones A y C modifican directamente el array existente (`push` y asignación por índice), violando la inmutabilidad. La D elimina un elemento en lugar de agregar uno nuevo y además muta el array.

---

## Preguntas 5-6 (Clase 15: JSON y LocalStorage)

### Pregunta 5 (Conceptual)

¿Qué significa **serializar** un objeto JavaScript antes de guardarlo en LocalStorage?

- A) Encriptar el objeto usando una contraseña para mayor seguridad
- B) Convertir el objeto en una cadena de texto (formato JSON) para poder almacenarlo, ya que LocalStorage solo guarda strings
- C) Eliminar propiedades innecesarias del objeto antes de guardarlo
- D) Dividir el objeto en múltiples archivos para optimizar el almacenamiento

> Respuesta: B

> **Retroalimentación:** LocalStorage solo puede almacenar **strings**. Por eso es necesario **serializar** el objeto con `JSON.stringify(obj)` antes de guardarlo, y **deserializarlo** con `JSON.parse(str)` al recuperarlo. La opción A confunde serialización con encriptación (son cosas distintas). Las opciones C y D describen procesos inexistentes como parte de la serialización.

---

### Pregunta 6 (Aplicación)

¿Cuál de los siguientes fragmentos guarda correctamente un objeto `plantillas` en LocalStorage y lo recupera posteriormente?

- A) `localStorage.setItem("plantillas", plantillas);` y luego `const data = localStorage.getItem("plantillas");`
- B) `localStorage.setItem("plantillas", JSON.stringify(plantillas));` y luego `const data = JSON.parse(localStorage.getItem("plantillas"));`
- C) `localStorage.save(plantillas);` y luego `const data = localStorage.load();`
- D) `localStorage = plantillas;` y luego `const data = localStorage;`

> Respuesta: B

> **Retroalimentación:** El flujo correcto es: **guardar** con `JSON.stringify()` para convertir el objeto a string y **recuperar** con `JSON.parse()` para volver a tener un objeto utilizable. La opción A guarda el objeto sin serializar; al recuperarlo, `data` sería el string `"[object Object]"`, inservible. Las opciones C y D inventan métodos que no existen en la API de LocalStorage.

---

## Pregunta 7 (Clase 16: Aplicación Práctica - Persistencia y Sincronización)

### Pregunta 7

En el Gestor de Plantillas para WhatsApp, quieres que **cada vez que se agrega, edita o elimina una plantilla**, el cambio se guarde automáticamente en LocalStorage y la interfaz visual se actualice sin necesidad de recargar la página. ¿Cuál es la estrategia correcta?

- A) Guardar manualmente en LocalStorage solo cuando el usuario haga clic en un botón "Guardar" y refrescar la página para ver los cambios
- B) Suscribirse a los cambios del Store (`subscribe`) y en el callback: (1) persistir el nuevo estado en LocalStorage con `JSON.stringify` y (2) volver a renderizar la UI con los datos actualizados
- C) Usar una variable global independiente de la Store y actualizarla desde cada botón por separado
- D) Recargar la página con `location.reload()` después de cada acción CRUD

> Respuesta: B

> **Retroalimentación:** El patrón correcto es **suscribirse** al Store: cuando el estado cambia, el callback se dispara y ejecuta dos acciones —persistir en LocalStorage (`JSON.stringify` + `setItem`) y re-renderizar la interfaz—. Así se garantizan tanto la persistencia automática como la sincronización inmediata Store ↔ UI. La opción A rompe la UX (requerir guardado manual y recarga). La C dispersa la lógica y pierde los beneficios del Store centralizado. La D funcionaría visualmente pero es una mala práctica: rompe el estado en memoria, pierde foco y degrada severamente la experiencia del usuario.

---

## Pregunta 8 (Autoevaluación)

### Pregunta 8

Después de completar este módulo, ¿cómo describirías tu nivel de confianza para **construir una aplicación web con estado centralizado (Store), persistencia automática en LocalStorage y sincronización inmediata con la interfaz**?

- A) Muy seguro/a - podría hacerlo sin ayuda
- B) Bastante seguro/a - con algo de referencia
- C) Algo inseguro/a - necesitaría bastante guía
- D) Muy inseguro/a - no sabría por dónde empezar

> ⚠️ Sin respuesta correcta - todas las opciones son válidas para diagnóstico

> **Retroalimentación:** Usa tu respuesta para planificar tu estudio. Si elegiste C o D, revisa el material del módulo o consulta con tu instructor.
