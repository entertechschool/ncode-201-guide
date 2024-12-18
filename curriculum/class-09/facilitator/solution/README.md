# Guía de Solución: Lab 09 - Sistema de Ventas con Prototipos

## 🎯 Objetivos Clave
- Asegurar que los estudiantes entiendan y apliquen correctamente el concepto de prototipos
- Reforzar la programación orientada a objetos con JavaScript
- Practicar la modularización del código
- Implementar validaciones efectivas

## 💡 Conceptos Fundamentales a Enfatizar

### Prototipos y Constructores
- La función constructora define el "molde" para crear objetos
- El prototipo permite compartir métodos entre todas las instancias
- `this` se refiere a la instancia actual dentro del constructor y métodos

### Validaciones
- Implementar al inicio de los constructores
- Usar throw new Error() para manejar casos inválidos
- Validar tipos de datos y rangos válidos

## ✅ Solución Paso a Paso

[Ir al proyecto](./index.html)

## 📝 Preguntas Frecuentes de Estudiantes

1. "¿Por qué usamos prototipos en lugar de métodos dentro del constructor?"
   - **Respuesta**: Los métodos en el prototipo se comparten entre todas las instancias, mejorando la eficiencia de memoria. Si los definiéramos dentro del constructor, cada instancia tendría su propia copia de los métodos.

2. "¿Cuándo debo usar this y cuándo no?"
   - **Respuesta**: Usa `this` cuando necesites acceder a las propiedades o métodos de la instancia actual. No lo necesitas para variables o funciones que no pertenecen al objeto.

3. "¿Por qué algunas validaciones lanzan errores y otras solo muestran alerts?"
   - **Respuesta**: Lanzamos errores en los constructores y métodos del prototipo porque son problemas a nivel de lógica de negocio. Usamos alerts en los manejadores de eventos porque son la interfaz con el usuario.

4. "¿Es necesario usar trim() en todos los strings?"
   - **Respuesta**: Es una buena práctica usar trim() en datos ingresados por el usuario para evitar espacios innecesarios al inicio o final.

## 🚨 Errores Comunes

1. Olvidar el `new` al crear instancias
```javascript
// ❌ Mal
const product = Product("Laptop", 1500, 10);

// ✅ Bien
const product = new Product("Laptop", 1500, 10);
```

2. Confundir el contexto de `this` en eventos
```javascript
// ❌ Mal
button.onclick = this.handleClick;

// ✅ Bien
button.onclick = () => this.handleClick();
```

## 📊 Criterios de Evaluación

1. Implementación correcta de constructores (30%)
   - Validaciones apropiadas
   - Inicialización correcta de propiedades

2. Uso efectivo de prototipos (30%)
   - Métodos implementados correctamente
   - Manejo adecuado de this

3. Funcionalidad de la UI (20%)
   - Renderizado correcto de elementos
   - Manejo apropiado de eventos

4. Calidad del código (20%)
   - Organización y modularidad
   - Manejo de errores