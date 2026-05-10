# Clase 15: JSON y LocalStorage

## 🎯 Módulo 4 - Estado y Persistencia
**Duración total:** 180 minutos

---

## ⏰ 1. Preparación Activa (25 min)

- **Reflexión inicial:** ¿Qué beneficios aporta guardar el estado de una aplicación en el navegador?
- **Revisión de conceptos clave:**
  - Serialización y Deserialización JSON
  - LocalStorage API (`setItem`, `getItem`, `removeItem`)
  - Estado centralizado (Store)
  - Mutabilidad vs Inmutabilidad
  - Operador Ternario

---

## 🧠 2. Debate Guiado (35 min)

**Pregunta base:** ¿Es LocalStorage adecuado para la persistencia robusta en aplicaciones web modernas?

- Ventajas y desventajas técnicas del LocalStorage
- Escenarios ideales para usar JSON y LocalStorage
- Importancia de aplicar patrones inmutables en la persistencia
- Claridad y eficiencia del operador ternario en validaciones

> "Persistir estado adecuadamente asegura una experiencia consistente para el usuario."

---

## 📋 3. Laboratorio Guiado (100 min)

**Repositorio:** `whatsapp-templates`

**Historias de Usuario:**
1. **Guardar Plantillas en LocalStorage**
   - Función `guardarPlantillas()` para persistir datos automáticamente.
2. **Cargar Plantillas desde LocalStorage**
   - Función `cargarPlantillas()` para inicializar estado centralizado desde almacenamiento local.
3. **Eliminar Todas las Plantillas (Función Reset)**
   - Función `resetearPlantillas()` para limpiar Store y LocalStorage.

> Las instrucciones detalladas se encuentran en el README del Laboratorio 15.

---

## ✨ Logros Adicionales (Opcionales)

- Mensajes dinámicos de confirmación (toast notifications)
- Validación robusta del JSON recuperado desde LocalStorage

---

## 🛡️ Patrón seguro: `JSON.parse` con `try/catch/finally`

Refuerzo de C12 (M3) aplicado a persistencia:

```javascript
function cargarPlantillas() {
  document.getElementById('estado').textContent = 'Cargando...';

  try {
    const raw = localStorage.getItem('plantillas');
    if (!raw) return [];                       // primera vez: sin datos
    const datos = JSON.parse(raw);
    if (!Array.isArray(datos)) {
      throw new Error('Formato de datos corrupto');
    }
    return datos;
  } catch (error) {
    console.error('Error al cargar:', error);
    alert('Datos corruptos. Empezando de cero.');
    localStorage.removeItem('plantillas');     // limpieza
    return [];                                 // fallback seguro
  } finally {
    document.getElementById('estado').textContent = 'Listo';
  }
}
```

* **`try`** → intenta deserializar y validar.
* **`catch`** → si falla, no rompe la app: avisa y resetea.
* **`finally`** → siempre deja la UI en estado "Listo".

> Sin este patrón, un `localStorage` manipulado a mano rompe toda tu app.

---

## 📊 Checklist de Persistencia Inicial

- [ ] Estado de la aplicación persiste correctamente tras recargar la página
- [ ] Plantillas serializadas y guardadas correctamente como JSON
- [ ] Carga inicial del Store desde LocalStorage usando operador ternario
- [ ] Función Reset elimina correctamente datos en Store y LocalStorage
- [ ] Código limpio y organizado en módulos específicos

---

## ⚖️ Comparativa Visual: LocalStorage vs IndexedDB

| Criterio              | LocalStorage                    | IndexedDB                        |
|-----------------------|---------------------------------|----------------------------------|
| Capacidad de Almacenamiento | ~5MB (texto plano)              | 50MB+ (objetos estructurados)    |
| Tipo de datos         | Solo cadenas (necesita JSON)    | Objetos, tipos avanzados         |
| Operaciones           | Síncronas                       | Asíncronas                       |
| Rendimiento           | Rápido, pero bloquea UI         | Mejor rendimiento asíncrono      |
| Complejidad de Uso    | Muy sencilla                    | Moderada                         |
| Ideal para            | Datos simples, pequeñas apps    | Aplicaciones más complejas       |

---

## 📆 4. Cierre y Reflexión (20 min)

- Revisión de dificultades técnicas comunes durante la implementación
- Ronda rápida de aprendizajes individuales: ¿qué descubriste hoy?
- Discusión grupal: ¿cuándo considerarías usar IndexedDB sobre LocalStorage?

