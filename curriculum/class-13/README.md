> 📦 **Módulo 4:** Clase 13 de 16

# Clase 13: Modelado de Objetos y Estado

## Resumen

En la Clase 13 iniciamos el módulo sobre **Estado y Persistencia**, centrándonos en el modelado de objetos utilizando la sintaxis moderna de clases en JavaScript y la diferenciación clara entre estado local y estado global. Esta clase integra tres elementos clave:

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---------|--------------|-----------------|
| **1. Refuerzo Práctico Inicial** | 30 min | Ejercicios rápidos para activar conocimientos previos sobre objetos y funciones constructoras. |
| **2. Debate Técnico y Demo** | 20 min | Análisis del estado local vs global en aplicaciones web con demostración práctica. La equivalencia `class` ↔ función constructora ya quedó cerrada en C08 (M2), así que aquí arrancas usando `class` directamente y profundizas en cómo modelarlo con propósito. |
| **Break** | 10 min | Descanso previo al laboratorio |
| **3. Laboratorio Práctico** | 100 min | Implementación guiada de objetos utilizando clases (`class`), gestionando claramente estados locales y globales. Checkpoints estructurados a los 30, 60 y 90 minutos. |
| **4. Síntesis** | 20 min | Consolidación de aprendizajes, retroalimentación grupal y anticipación al próximo tema sobre gestión avanzada del estado. |

## 🧐 Preparación para la clase

### ➤ Reflexiones a plantearse

> Antes de llegar a clase, reflexiona sobre estas preguntas y apóyate de los recursos sugeridos o de herramientas de IA:

1. ¿Por qué crees que JavaScript introdujo la sintaxis de clases modernas (`class`), considerando que anteriormente existían funciones constructoras?

2. ¿En qué situaciones de tu vida diaria observas claramente la existencia de estados locales y globales?

3. ¿Qué beneficios piensas que podría tener una aplicación que mantiene claramente diferenciados los estados locales y globales?

4. ¿Puedes imaginar algún problema que surgiría si una aplicación utilizara únicamente un estado global para todo?

5. ¿Cómo crees que la organización efectiva del estado puede facilitar la tarea de mantener y expandir aplicaciones web?

### ➤ Recursos para investigar
> **Usa este prompt para conversar con un modelo de IA y aclarar tus ideas:**

```
Asume el rol de un mentor experimentado en desarrollo web que utiliza un enfoque socrático para enseñar. Estoy preparándome para un debate técnico sobre "Modelado de Objetos y Estado en JavaScript". Hasta ahora domino objetos con funciones constructoras y prototipos, pero ahora debo analizar críticamente las clases modernas en JavaScript.

TEMAS A EXPLORAR:
1. Clases en JavaScript: funcionamiento interno y comparación con funciones constructoras
2. Estado en aplicaciones web: concepto fundamental y tipos
3. Estado local vs Estado global: diferencias, ventajas y desventajas

INSTRUCCIONES DE INTERACCIÓN:
1. Responde de manera concisa (máximo 4-5 líneas por respuesta)
2. Proporciona SIEMPRE un ejemplo de código mínimo pero funcional
3. Al final, SIEMPRE dame la opción de comprobar que estoy aprendiendo (con una pregunta sencilla) o de continuar al siguiente tema a explorar.
4. Si te pido comparaciones, utiliza una tabla simple para contrastar conceptos

RESTRICCIONES:
- Limítate al JavaScript vanilla (ES6+) sin mencionar React, Angular u otros frameworks
- No introduzcas conceptos avanzados que no estén directamente relacionados con el modelado de objetos y estado
- Evita respuestas extensas; prefiero una conversación paso a paso donde pueda cuestionar cada concepto
- Cuando llegues al último tema a explorar, ayudame a reflexionar final sobre todo lo aprendido.

Comencemos con el tema 1: ¿Cómo funcionan internamente las clases en JavaScript y en qué se diferencian de las funciones constructoras tradicionales?
```

---

## Resultados esperados

Al finalizar esta clase, los estudiantes habrán consolidado significativamente su comprensión sobre la sintaxis moderna de clases en JavaScript y la gestión diferenciada del estado en aplicaciones web:

### Podrán hacer
1. **Crear objetos utilizando la sintaxis moderna de clases (`class`) en JavaScript:**  
   Definiendo constructores claros y métodos específicos para gestionar datos locales.

2. **Gestionar eficazmente estados locales y globales:**  
   Manteniendo claramente diferenciados los estados locales (propios de cada objeto) y globales (compartidos a nivel de aplicación).

3. **Visualizar dinámicamente objetos y su estado:**  
   Implementando métodos claros para renderizar en pantalla la información local y global de los objetos.

### Podrán explicar
1. **Las ventajas del uso de clases modernas (`class`) en JavaScript:**  
   Comparando claramente las diferencias respecto a funciones constructoras, destacando ventajas en términos de claridad y organización.

2. **La importancia crítica de gestionar adecuadamente estado local y global:**  
   Justificando cómo la separación clara del estado facilita la escalabilidad, mantenibilidad y robustez en aplicaciones.

### Podrán implementar
1. **Clases para modelado de objetos en JavaScript:**  
   Aplicando claramente constructores y métodos en sintaxis moderna.

2. **Manejo diferenciado del estado local y global:**  
   Utilizando claramente arrays globales y métodos específicos para agregar y renderizar objetos diferenciados en la interfaz.

---

## Glosario de Nuevos Términos

- **Clase (`class`) en JavaScript:** Sintaxis moderna para definir y crear objetos, encapsulando propiedades y métodos. **Recordatorio:** como cerramos en C08 (M2), `class` es **azúcar sintáctica** sobre prototipos — el mecanismo interno es el mismo.
- **Estado Local:** Información específica para cada instancia de objeto, accesible únicamente desde ese mismo objeto.
- **Estado Global:** Información disponible y compartida por múltiples componentes u objetos dentro de una aplicación.

---

## 📝 Sobre herencia (`extends`, `super`)

Vas a ver herencia mencionada en algunos ejemplos como concepto, pero **NO la vas a usar en el proyecto final**. La herencia con `extends` es tema central de **Code 301**. Para M5 (Agenda de Gastos Compartidos) basta con clases simples como:

```javascript
class Gasto {
  constructor(descripcion, monto, pagadoPor) {
    this.descripcion = descripcion;
    this.monto = monto;
    this.pagadoPor = pagadoPor;
  }
}
```

Sin `extends` de ninguna otra clase. Si quieres explorar herencia por curiosidad, hay un logro adicional al final del lab — pero no es obligatorio.

