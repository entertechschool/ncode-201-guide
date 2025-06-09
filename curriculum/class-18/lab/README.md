# Laboratorio 18: Modelo de Dominio + Gestión de Estado

## 🎯 Objetivo del laboratorio

En este laboratorio hacemos un punto de validación sobre el diseño estructural del MVP. El objetivo es identificar las entidades clave del sistema y definir cómo se gestionará el estado de la aplicación para que sea coherente, centralizado y funcional. No se espera un modelo de base de datos complejo, sino una representación clara de los datos que la aplicación necesita manejar.

> **En esta sesión trabajaremos en grupos, haciendo `pair-programming`**.

## 🧠 Preguntas clave:

* 1️⃣ ¿Qué datos necesita la app para cumplir su función principal?
* 2️⃣ ¿Qué información se debería almacenar en memoria mientras se usa la app?
* 3️⃣ ¿Cuáles son entidades (objetos) que existen en la app y qué datos (propiedades) tienen?
* 4️⃣ ¿Cómo se transforman los datos de estas entidades? (funciones en los prototipos)

## 📌 Actividades

#### Parte 1: Modelo de dominio
> Un Modelo de Dominio es una forma simple de representar las cosas importantes que existen en una aplicación y qué datos tiene cada una. Sirve para entender qué entidades (como usuarios, productos, reservas) necesitamos manejar, qué información tiene cada una, y cómo se relacionan con las acciones del usuario o del sistema.

_Ejemplo:_

```md
## Entidad 1: Producto
- **Descripción:** Elemento que se muestra en el catálogo de la tienda.
- **Atributos:**
  - `id` (número): identificador único
  - `nombre` (texto): nombre del producto
  - `precio` (número): costo en soles
  - `stock` (número): cantidad disponible
  - `imagenURL` (texto): link a imagen del producto

## Entidad 2: Usuario
- **Descripción:** Persona que interactúa con la aplicación (cliente o visitante).
- **Atributos:**
  - `id` (número): identificador único
  - `nombre` (texto): nombre completo
  - `correo` (texto): email del usuario
  - `esCliente` (booleano): indica si está registrado como cliente
```

**📝 Actividad:**

* Crear un archivo `domain-model.md` en la raíz del repositorio.
* Incluir:
  * Una lista de las **entidades** de la aplicación.
  * Para cada entidad, definir:
    * Nombre
    * Descripción breve de su rol
    * Lista de atributos clave

#### Parte 2: Estado de la aplicación

**📝 Actividad:**

* Crear un archivo `state.js` en la carpeta raíz del proyecto.
* Incluir:
  * Funciones constructoras que definan el prototipo de los objetos (entidades)
  * Objeto `state` con una estructura inicial que represente las entidades clave.
  * Funciones para actulizar el estado.

_Ejemplo:_

```js
function Producto(nombre, stock = 1) {
  this._nombre = nombre;
  this._stock = stock;
}

const state = {
  productos: [],
  usuarioActual: null
};

function addProducto(producto) {
  state.productos.push(producto);
}
```

## 🔹 Recomendaciones para el equipo

* Mantenerlo simple, pero funcional.
* Usar estructuras claras y nombres coherentes.
* Validar con el instructor si el modelo refleja bien lo que la app necesita manejar.
* Si usan herramientas visuales (como Figma o diagrams.net), pueden vincular la imagen en el `domain-model.md`.

## 📝 Instrucciones de Envío

### Entrega Individual
1. Link al repositorio con:
   - `README.md` completo
   - `domain-model.md` completo

2. Link al board de Trello con:
   - Historias de usuario actualizados
