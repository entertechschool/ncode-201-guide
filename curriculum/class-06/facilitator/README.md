# Guía del Facilitador: Programación Funcional

## 1. El momento pedagógico clave

Los estudiantes llegan a esta clase habiendo dominado la programación imperativa desde la clase anterior, donde construyeron lógica paso a paso modificando variables directamente. El momento de transformación conceptual que defines aquí es el "click" donde comprenden que pueden resolver problemas sin modificar el estado original de los datos. Este paradigm shift representa el paso de pensar en "instrucciones secuenciales" a "transformaciones de datos".

```javascript
// ANTES: Pensamiento imperativo (clase anterior)
let totalIngresos = 0;
for (let i = 0; i < movimientos.length; i++) {
  if (movimientos[i].tipo === 'ingreso') {
    totalIngresos += movimientos[i].valor; // ❌ Modifica estado externo
  }
}

// DESPUÉS: Pensamiento funcional (esta clase)
const totalIngresos = movimientos
  .filter(mov => mov.tipo === 'ingreso')    // 🔄 Filtra sin modificar original
  .map(mov => mov.valor)                    // 🔄 Extrae valores
  .reduce((total, valor) => total + valor, 0); // 🔄 Suma sin efectos secundarios
```

Este cambio fundamental los prepara para React (donde la inmutabilidad es crítica), arquitecturas modernas de frontend, y patrones profesionales donde la predictibilidad del código es esencial para equipos colaborativos.

## 2. Funciones Puras: Más que eliminación de bugs

El concepto de funciones puras trasciende la simple corrección sintáctica y se convierte en filosofía de diseño profesional. En equipos reales, las funciones puras facilitan testing automatizado, debugging colaborativo, y refactoring seguro. Los estudiantes deben comprender que no se trata solo de "reglas académicas", sino de principios que hacen código mantenible en aplicaciones de producción.

```javascript
// Función pura que demuestra principios profesionales
const calcularRendimientoMensual = (movimientos, mes) => {
  // ✅ Entrada predecible: mismos parámetros = mismo resultado
  const movimientosMes = movimientos.filter(mov => 
    new Date(mov.fecha).getMonth() === mes
  );
  
  const ingresos = movimientosMes
    .filter(mov => mov.tipo === 'ingreso')
    .reduce((sum, mov) => sum + mov.valor, 0);
    
  const gastos = movimientosMes
    .filter(mov => mov.tipo === 'gasto')
    .reduce((sum, mov) => sum + mov.valor, 0);
  
  // ✅ Sin efectos secundarios: no modifica arrays originales
  // ✅ Testeable: fácil escribir unit tests
  // ✅ Debuggeable: cualquier desarrollador puede razonar sobre el flujo
  return { ingresos, gastos, balance: ingresos - gastos };
};
```

Esta filosofía de diseño los prepara para frameworks donde la inmutabilidad es fundamental (React, Redux) y para arquitecturas modernas donde la composabilidad de funciones permite sistemas escalables.

## 3. Métodos Funcionales vs. la complejidad innecesaria

En lugar de introducir patrones complejos como map/reduce/filter simultáneamente, priorizamos una progresión pedagógica donde cada método resuelve una necesidad específica y reconocible. Esta decisión evita la "parálisis por análisis" típica de estudiantes que intentan memorizar sintaxis sin comprender propósitos.

```javascript
// Progresión pedagógica: un concepto por vez
// 1. EXTRACCIÓN simple con map()
const nombres = movimientos.map(mov => mov.nombre);
// "Quiero solo los nombres" → map()

// 2. SELECCIÓN condicional con filter()  
const ingresos = movimientos.filter(mov => mov.tipo === 'ingreso');
// "Quiero solo los que cumplan X condición" → filter()

// 3. BÚSQUEDA específica con find()
const salario = movimientos.find(mov => mov.nombre === 'Salario');
// "Quiero encontrar uno específico" → find()

// 4. COMPOSICIÓN: combinar conceptos dominados
const promedioPorTipo = (movimientos, tipo) => {
  const filtrados = movimientos.filter(mov => mov.tipo === tipo);
  const valores = filtrados.map(mov => mov.valor);
  const total = valores.reduce((sum, val) => sum + val, 0);
  return filtrados.length > 0 ? total / filtrados.length : 0;
};
```

Esta aproximación gradual evita abrumar con abstracción prematura mientras construye confianza en cada herramienta individual antes de la composición.

## 4. El método map(): Sintaxis con propósito

Los estudiantes inicialmente perciben `map()` como "sintaxis más complicada" para hacer lo mismo que un loop. La confusión pedagógicamente valiosa surge cuando intentan usar `map()` para operaciones que requieren `filter()` o viceversa. Este es el momento perfecto para consolidar el concepto de "transformación 1:1".

```javascript
// Confusión típica: "¿Por qué map() si for loop es más fácil?"
// Ejemplo que demuestra el valor de map()

// ❌ Loop imperativo: enfoque en "cómo"
const resultados = [];
for (let i = 0; i < movimientos.length; i++) {
  resultados.push({
    descripcion: movimientos[i].nombre,
    esIngreso: movimientos[i].tipo === 'ingreso',
    valorFormateado: `$${movimientos[i].valor.toLocaleString()}`
  });
}

// ✅ map() funcional: enfoque en "qué"
const resultados = movimientos.map(mov => ({
  descripcion: mov.nombre,
  esIngreso: mov.tipo === 'ingreso',
  valorFormateado: `$${mov.valor.toLocaleString()}`
}));
// Mismo tamaño entrada = mismo tamaño salida (transformación 1:1)
// Código que expresa intención claramente
// Fácil de componer con otros métodos
```

Esta confusión inicial cataliza la discusión sobre legibilidad, intención del código, y composabilidad - conceptos que serán fundamentales cuando trabajen en equipos.

## 5. Inmutabilidad: La unidad fundamental

El concepto de immutabilidad trasciende JavaScript y se convierte en patrón de pensamiento que aplicarán en React state management, arquitecturas de datos, y debugging colaborativo. Los estudiantes deben comprender que la immutabilidad no es "complicación académica" sino ventaja competitiva en desarrollo profesional.

Los principios universales que internalizan incluyen:
- **Predictibilidad**: Estado que no cambia inesperadamente permite razonamiento claro sobre el código
- **Debugging**: Datos que no mutan facilitan tracking de cambios y identificación de bugs  
- **Testabilidad**: Funciones que no modifican inputs permiten testing paralelo y determinístico

```javascript
// Ejemplo que demuestra principios en acción profesional
const actualizarMovimiento = (movimientos, id, cambios) => {
  // ✅ Inmutable: retorna nuevo array sin modificar original
  return movimientos.map(mov => 
    mov.id === id 
      ? { ...mov, ...cambios } // Nuevo objeto con cambios
      : mov                    // Objeto original sin tocar
  );
  
  // Este patrón es idéntico al usado en React para state updates
  // Será familiar cuando lleguen a useState() y setState()
  // Facilita time-travel debugging en Redux DevTools
};

// Validación de inmutabilidad
const movimientosOriginales = [/* data */];
const movimientosActualizados = actualizarMovimiento(movimientosOriginales, 1, { valor: 1000 });
console.log(movimientosOriginales === movimientosActualizados); // false ✅
console.log(movimientosOriginales[0] === movimientosActualizados[0]); // true ✅ (no cambió)
```

## 6. Reduce como agregación: Pragmatismo sobre purismo

Aunque `reduce()` es poderoso, priorizamos casos de uso específicos y reconocibles (sumas, promedios) sobre demostraciones abstractas de versatilidad. Esta decisión pedagógica evita abrumar con un método que puede hacer "todo" y se enfoca en patrones que realmente utilizarán en proyectos profesionales.

```javascript
// ✅ Uso pragmático: agregaciones financieras comunes
const estadisticasFinancieras = (movimientos) => {
  // Suma simple con reduce - patrón más común
  const totalIngresos = movimientos
    .filter(mov => mov.tipo === 'ingreso')
    .reduce((total, mov) => total + mov.valor, 0);
  
  // Agrupación práctica con reduce  
  const porTipo = movimientos.reduce((grupos, mov) => {
    if (!grupos[mov.tipo]) grupos[mov.tipo] = [];
    grupos[mov.tipo].push(mov);
    return grupos;
  }, {});
  
  return { totalIngresos, porTipo };
  // Funciones que realmente necesitarán en proyectos reales
  // No abstracciones que solo existen en tutorials
};

// ❌ Evitamos demostraciones "show-off" de reduce
// que confunden más que clarificar en esta etapa
```

Esta aproximación construye confianza con casos de uso reconocibles antes de expandir hacia abstracciones más complejas en clases futuras.

## 7. Gestión de la frustración inicial

Los estudiantes experimentan frustración específica cuando perciben que "pueden hacer lo mismo más fácil con for loops". Esta resistencia inicial es pedagógicamente valiosa porque indica que están evaluando trade-offs - exactamente el tipo de pensamiento crítico que queremos desarrollar.

**Frustración típica:** "¿Por qué usar `filter().map().reduce()` cuando un for loop hace todo junto?"

**Estrategia de facilitación:** Demuestra escenarios donde el código imperativo se vuelve difícil de mantener, especialmente cuando necesitan modificar lógica específica. Usa ejemplos donde cada método funcional permite cambios quirúrgicos sin afectar otros aspectos.

**Pregunta clave para la clase:** "Si mañana te piden cambiar cómo calculas los totales pero mantener igual la lógica de filtrado, ¿cuál código es más fácil de modificar?"

```javascript
// Demostración de mantenibilidad
// ANTES: lógica entrelazada en loop imperativo
let total = 0;
for (let mov of movimientos) {
  if (mov.tipo === 'ingreso' && mov.valor > 500) { // ❌ Lógica mezclada
    total += mov.valor * 1.1; // ❌ Cálculo mezclado
  }
}

// DESPUÉS: lógica separada y modificable
const total = movimientos
  .filter(mov => mov.tipo === 'ingreso')    // 🔧 Solo cambias aquí el filtrado
  .filter(mov => mov.valor > 500)          // 🔧 Solo cambias aquí el criterio
  .map(mov => mov.valor * 1.1)             // 🔧 Solo cambias aquí el cálculo
  .reduce((sum, val) => sum + val, 0);     // 🔧 Solo cambias aquí la agregación
```

## 8. El error más común: Confundir map() con forEach()

```javascript
// ❌ Error típico: usar map() para efectos secundarios
movimientos.map(mov => {
  console.log(mov.nombre); // ❌ Side effect en map()
  // Estudiantes esperan que "haga algo" con cada elemento
});

// ❌ Error típico: no capturar retorno de map()
movimientos.map(mov => ({
  ...mov,
  valorFormateado: `$${mov.valor}`
})); // ❌ Pierde el resultado transformado

// ✅ Versión correcta: map() para transformar, forEach() para efectos
const movimientosFormateados = movimientos.map(mov => ({
  ...mov,
  valorFormateado: `$${mov.valor}`
})); // ✅ Captura transformación

movimientos.forEach(mov => {
  console.log(mov.nombre); // ✅ Efecto secundario apropiado
});
```

Este error es pedagógicamente perfecto porque fuerza la conversación sobre propósito de cada método. Los estudiantes que cometen este error están demostrando que entienden la sintaxis pero necesitan claridad conceptual sobre cuándo usar cada herramienta.

## 9. Señales de comprensión exitosa

Al final de la clase, busca estas evidencias de comprensión genuina:

- **Vocabulario apropiado**: Usan naturalmente "transformar", "filtrar", "inmutable" en contexto correcto
- **Pensamiento declarativo**: Describen problemas como "quiero obtener X de Y" en lugar de "primero hago esto, luego esto"
- **Comprensión del flujo**: Pueden explicar el pipeline de datos sin mencionar variables temporales

**Pregunta de validación final:** "Si necesitas obtener el promedio de gastos mayores a $300, ¿qué métodos usarías y en qué orden?" 

Solo pueden responder correctamente (`filter().map().reduce()`) si realmente internalizaron que cada método tiene un propósito específico y que se pueden componer secuencialmente.

## 10. Preparación para la siguiente clase

Los conceptos de esta clase son prerrequisito directo para programación orientada a objetos (Clase 07). La inmutabilidad que practican aquí será fundamental cuando trabajen con métodos de clase que no deben modificar propiedades internas. La composición de funciones prepara la mentalidad para encapsulación de comportamientos en objetos.

**Conceptos que DEBEN estar sólidos:**
- Funciones puras (validar con: ¿puede predecir el output sin ejecutar?)
- Inmutabilidad básica (validar con: ¿original se mantiene sin cambios?)

**Conceptos que pueden seguir madurando:**
- Composición compleja de métodos funcionales
- Optimización de performance en pipelines largos

La clase fue exitosa si los estudiantes salen pensando: *"Puedo resolver problemas complejos combinando transformaciones simples sin romper mis datos originales"*

## Notas técnicas y troubleshooting

### Configuración crítica
- Verificar que Chrome DevTools esté abierto en Console para testing inmediato
- Confirmar que tienen el array de movimientos cargado en memoria para ejemplos

### Errores comunes del entorno
- **Error**: `undefined` al encadenar métodos
- **Solución**: Validar que cada método retorna el tipo esperado antes de encadenar
- **Prevención**: Usar `console.log()` intermedio para verificar cada paso del pipeline

### Recursos de emergencia
- MDN Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- Código de ejemplo listo: Array de movimientos financieros con 5 elementos variados
- Demo backup: Comparación lado-a-lado imperativo vs funcional en pantalla dividida
