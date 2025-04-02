> 📦 **Módulo 4:** Clase 14 de 16

# Clase 14: App State Management (Patrón Store)

## Resumen

En la Clase 14 continuamos desarrollando el módulo sobre **Estado y Persistencia**, profundizando en el concepto de *gestión del estado centralizado* mediante el **Patrón Store**. Esta sesión permitió a los estudiantes identificar los desafíos de la mutabilidad en aplicaciones dinámicas y cómo el diseño basado en patrones aporta escalabilidad y claridad a sus proyectos.

1. **Guía de Lectura y Debate:** Preparación previa enfocada en reflexionar críticamente sobre la mutabilidad y la utilidad de los patrones de diseño en aplicaciones front-end.

2. **Guía de Laboratorio:** Aplicación práctica del patrón de diseño “Store” para modelar el estado global de la aplicación, utilizando estructuras inmutables y funciones controladas para gestionar cambios en el estado.

## Estructura sugerida

| **Fase** | **Duración** | **Descripción** |
|---------|--------------|-----------------|
| **1. Refuerzo Práctico Inicial**| 15 min       | Ejercicio de repaso enfocado en distinguir entre estado local y global, revisando ejemplos del laboratorio anterior. |
| **2. Debate Técnico y Demo**    | 45 min       | Discusión guiada sobre los desafíos que plantea la mutabilidad del estado y exploración del Patrón Store como solución. Incluye demostración práctica sobre cómo diseñar un objeto Store. |
| **3. Laboratorio Práctico**     | 100 min      | Implementación progresiva de una Store para gestionar el estado centralizado del proyecto integrador, con checkpoints a los 30 y 60 minutos, y revisión entre pares a los 45 minutos. |
| **4. Síntesis y Proyección**    | 20 min       | Revisión de soluciones destacadas, síntesis de beneficios del Patrón Store y preparación para abordar la persistencia con JSON y LocalStorage en la siguiente clase. |

---

## Resultados esperados

Al finalizar esta clase, los estudiantes habrán desarrollado una base técnica sólida para manejar el estado global de sus aplicaciones utilizando patrones reutilizables y un enfoque inmutable.

### Podrán hacer
1. **Implementar una Store básica para controlar el estado global:**  
   Utilizando una estructura centralizada que permite registrar y notificar cambios de manera controlada.

2. **Controlar cambios al estado de manera inmutable:**  
   Evitando mutaciones directas y promoviendo funciones puras que generan nuevos estados.

3. **Actualizar dinámicamente la interfaz en función del estado:**  
   Diseñando funciones que reaccionen a cambios de estado y actualicen el DOM en tiempo real.

### Podrán explicar
1. **Qué es un patrón de diseño y por qué se usa el Patrón Store en frontend:**  
   Justificando su utilidad para separar la lógica del estado del resto de la aplicación.

2. **Por qué la mutabilidad puede generar bugs difíciles de detectar:**  
   Argumentando cómo los cambios directos al estado dificultan el mantenimiento y la escalabilidad.

### Podrán implementar
1. **Una Store como objeto central con métodos `getState`, `setState` y `subscribe`:**  
   Aplicando funciones controladas y suscriptores para manejar el flujo de datos de forma declarativa.

2. **Un flujo controlado de mutaciones:**  
   Reemplazando la lógica dispersa por actualizaciones canalizadas a través del Store, promoviendo orden y consistencia.

---

## Glosario de Nuevos Términos

- **Patrón de Diseño:** Solución reutilizable y estructurada para resolver problemas comunes de diseño de software.
- **Mutabilidad / Inmutabilidad:** Capacidad (o no) de un objeto para ser modificado directamente después de su creación.
- **Store:** Objeto centralizado que almacena el estado de una aplicación, permitiendo su lectura, modificación controlada y suscripción a cambios.
