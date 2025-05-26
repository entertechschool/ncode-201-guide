# Clase 13: Modelado de Objetos y Estado – JavaScript moderno

## 🧠 Inicio del Módulo 4 – Estado y Persistencia

**Duración total:** 180 minutos

---

## 🎯 1. Refuerzo Práctico (30 min)

* Reflexión individual: ¿Qué cosas pueden "cambiar" en una app mientras está abierta?
* Actividad escrita previa: *Debate 13 – ¿Qué es un “estado” y por qué lo necesitamos?*
* Discusión inicial: ¿Qué relación hay entre una clase, un objeto y su estado?

---

## 🤝 2. Debate Técnico Guiado (20 min)

**Preguntas clave a trabajar en grupo:**

* ¿Un objeto puede existir sin tener estado?
* ¿El estado es lo mismo que los datos?
* ¿Qué consecuencias trae modificar el estado directamente?
* ¿Qué ventajas tiene encapsular el estado?

**Conceptos que deben emerger del intercambio:**

| Concepto        | Impacto técnico real                                    |
| --------------- | ------------------------------------------------------- |
| Clase (`class`) | Permite modelar entidades con estructura coherente      |
| Estado          | Representa el "momento actual" de un objeto             |
| Encapsulamiento | Protege el estado de ser manipulado de forma incorrecta |
| Método          | Comportamiento que puede modificar el estado            |

---

## Break

⌛️ 10 min.

---

## 🧪 3. Laboratorio Guiado (100 min)

### Historias de Usuario:

1. **Crear una clase `Tarea`** con propiedades `titulo`, `completado`
2. **Agregar métodos** para marcar como completada y mostrar estado
3. **Probar múltiples instancias** y modificar estado de forma aislada

**Checkpoints:**

* Declarar clase y constructor
* Instanciar objetos y verificar su estado
* Agregar y ejecutar métodos que modifican propiedades
* Comparar estado entre instancias

---

## 🧩 4. Logros Adicionales (Opcionales)

* Crear una clase `Usuario` con una lista de tareas como propiedad
* Implementar método para agregar tareas a un usuario
* Mostrar resumen de tareas completadas por usuario

---

## 🧠 5. Cierre y Reflexión (20 min)

* ¿Qué entendemos ahora por “estado” en JS?
* ¿Qué riesgos hay al manipular directamente propiedades de un objeto?
* ¿En qué parte del código quedó clara la separación entre estado local y global?

**Conexión final:** esta clase prepara el terreno para almacenar ese estado en el navegador en la próxima sesión (Clase 14: `localStorage` + JSON).

> "Modelar objetos no es solo describir, es decidir cómo cambian con el tiempo."

