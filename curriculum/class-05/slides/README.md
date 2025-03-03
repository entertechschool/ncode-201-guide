<!-- Título Principal -->
# Programación Imperativa
### Code 201 - Clase 05

---

<!-- Sección 1: Bienvenida y Contexto -->
## Bienvenida y Contexto
### 📚 Objetivo de la Clase
- Comprender cómo funciona la **programación imperativa**.
- Aplicar control de flujo y funciones para desarrollar un **Gestor de Presupuesto Personal**.
- Reflexionar sobre las ventajas y limitaciones de este enfoque en el desarrollo de software.

---

## Recordemos 📖
### Fundamentos previos
- **Variables y tipos de datos.**
- **Condicionales y bucles.**
- **Funciones básicas.**

### Limitación actual
- Sabemos capturar y procesar datos de forma individual.
- Pero... ¿cómo organizamos un flujo completo que registre, valide y resuma información en un solo programa?

---

<!-- Sección 2: Concepto Clave -->
## ¿Qué es la Programación Imperativa?
### Definición
- Estilo de programación donde definimos **cómo se deben hacer las cosas**.
- El código sigue un flujo **secuencial**: paso 1, paso 2, paso 3.

🧩 **Estructura Típica:**
```javascript
let actividades = [];

function registrarActividad() {
    let nombre = prompt("Nombre de la actividad:");
    let duracion = parseInt(prompt("Duración (minutos):"));
    if (nombre && duracion > 0) {
        actividades.push({ nombre, duracion });
    } else {
        alert("Datos inválidos.");
    }
}
```

---

<!-- Debate Técnico: Participación -->
## Debate Técnico 🧠
### ¿Cómo crece un programa imperativo?
- ¿Qué pasa si añadimos categorías?
- ¿Qué sucede si queremos guardar estos datos en un archivo?
- ¿Cuándo empieza a volverse difícil de mantener?

📌 Reflexiona y comparte tu experiencia.

---

<!-- Analogía Visual -->
## 📑 Analogía
### Receta de Cocina
- La programación imperativa es como una **receta**.
- Te dice paso a paso **cómo** hacer un plato.
- Si cambias el orden, algo puede fallar.
- El cocinero (programa) **sigue instrucciones exactas**.

---

<!-- Ejemplo práctico guiado -->
## Ejemplo: Gestor de Presupuesto Personal 💰
### Requisitos
- Registrar actividades diarias con nombre y duración.
- Validar que los datos sean correctos.
- Mostrar un resumen final con el total de actividades y minutos.

---

## Ejemplo: Flujo
### Registro de Actividades
- `prompt()` captura nombre y duración.
- Validación con `if`.
- Almacén en un array global.

### Resumen Final
- `for` recorre el array.
- Calcula y muestra total de actividades y minutos.

---

<!-- Checkpoint 1 -->
## Checkpoint 1 ☑️
### 30 Minutos
- Implementar `registrarActividad()`.
- Validar nombre y duración positiva.
- Guardar en el array global.

---

<!-- Errores Comunes -->
## ⚠️ Errores Comunes
- No validar duración o nombre.
- Usar variables locales que desaparecen fuera de la función.
- No separar la lógica de validación y almacenamiento.

```javascript
// Ejemplo incorrecto
let nombre = prompt("Nombre");
let duracion = prompt("Duración");
actividades.push({ nombre, duracion });  // ❌ Sin validación
```

---

<!-- Checkpoint 2 -->
## Checkpoint 2 ☑️
### 60 Minutos
- Implementar `calcularTiempoTotal()`.
- Recorrer el array de actividades.
- Sumar duraciones y mostrar resumen en consola.

---

<!-- Participación Grupal -->
## Debate: Limitaciones 📊
### Preguntas Clave
- ¿Qué tan fácil es modificar el programa si queremos agregar categorías?
- ¿Qué pasaría si quisiéramos registrar actividades en días diferentes?
- ¿Cómo crece el **acoplamiento** entre funciones y datos?

---

<!-- Trade-offs Técnicos -->
## Trade-offs Técnicos ⚖️
### Ventajas
- Fácil de entender y explicar.
- Ideal para scripts pequeños.
- Compatible con cualquier navegador o entorno.

### Desventajas
- Acoplamiento fuerte entre funciones y datos.
- Difícil de escalar.
- Poca flexibilidad para cambios.

📌 **Reflexión**: ¿Cuándo conviene evolucionar hacia un enfoque más estructurado (funcional u orientado a objetos)?

---

<!-- IA y Programación Imperativa -->
## IA como Asistente
### Cómo usar IA de forma crítica
- Pedir sugerencias de funciones para registrar y calcular.
- Revisar validaciones y estructuras recomendadas.
- Comparar soluciones generadas por IA con las propias.

✍️ **Comparte un prompt que hayas usado para pedir ayuda hoy**.

---

<!-- Cierre -->
## Conclusiones 🌟
### Ideas Clave
- **La programación imperativa nos enseña cómo pensar paso a paso.**
- Es poderosa para scripts pequeños.
- A medida que el programa crece, **necesitamos otras estrategias**.
- Las siguientes clases nos ayudarán a explorar enfoques más flexibles.

---

## Lo que viene
### Próxima Clase: Programación Funcional
- Uso de funciones puras.
- Manipulación de arrays (`map`, `filter`, `reduce`).
- Menos acoplamiento, más claridad.

📌 Prepara el debate: ¿Qué es más importante, la claridad o la velocidad de desarrollo?

---

## ¡Gracias! 🙌
### Code 201 - Enter Tech School
