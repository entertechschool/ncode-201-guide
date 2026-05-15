# Laboratorio 08: Prototipos en JavaScript

En este laboratorio optimizamos el **Gestor de Presupuesto Personal** implementando la cadena de prototipos en JavaScript. Moveremos los métodos de las funciones constructoras al prototipo para optimizar memoria y crearemos herencia prototipal con subtipos especializados como `Ingreso` y `Egreso`.

Como parte de nuestro proyecto **Gestor de Presupuesto Personal**, esta implementación de prototipos nos permitirá compartir métodos entre instancias, crear jerarquías de herencia y establecer las bases para un sistema extensible y escalable.

### 🎯 Objetivos de Aprendizaje

Al completar este laboratorio, serás capaz de:

1. **Implementar** métodos compartidos usando `Constructor.prototype.metodo = function() {}`
2. **Crear** herencia prototipal con `Object.create()` y especialización de comportamientos  
3. **Optimizar** memoria moviendo métodos del constructor al prototipo
4. **Validar** tipos de objetos usando `instanceof` y `hasOwnProperty()`

### 🔑 Conceptos Clave

- **Prototype Chain**: Cadena de prototipos que permite herencia en JavaScript
- **Constructor.prototype**: Objeto compartido donde se definen métodos para todas las instancias
- **`__proto__`**: Referencia interna que conecta objetos con sus prototipos
- **Herencia Prototipal**: Mecanismo para crear objetos especializados que heredan de otros

### ⚙️ Setup Inicial

**Estructura del repositorio:**
```
personal-budget/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── oop-objects.js      (del laboratorio anterior)
│   └── prototype-system.js (nuevo archivo)
└── README.md
```

**Punto de partida - optimización a prototipos:**
```javascript
// Función constructora base - solo propiedades
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
  this.fecha = new Date().toLocaleDateString();
  this.id = Date.now() + Math.random();
}

// Métodos compartidos en el prototipo
Movimiento.prototype.formatear = function() {
  const signo = this.tipo === 'ingreso' ? '+' : '-';
  return `${this.nombre}: ${signo}$${this.valor}`;
};
```

---

## Parte 1: Migración a Prototipos (~30 min)

> **Objetivo**: Optimizar las funciones constructoras moviendo métodos al prototipo

#### 1.1. Refactorización de Movimiento

Crea el archivo `prototype-system.js` y migra los métodos:

```javascript
// Constructor base optimizado
function Movimiento(nombre, tipo, valor) {
  if (!nombre || !tipo || valor <= 0) {
    throw new Error('Datos inválidos para el movimiento');
  }
  
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
  this.fecha = new Date().toLocaleDateString();
  this.id = Date.now() + Math.random();
}

// Métodos compartidos en el prototipo
Movimiento.prototype.esIngreso = function() {
  return this.tipo === 'ingreso';
};

Movimiento.prototype.esGasto = function() {
  return this.tipo === 'gasto';
};

Movimiento.prototype.formatear = function() {
  const signo = this.esIngreso() ? '+' : '-';
  return `${this.nombre}: ${signo}$${this.valor} (${this.fecha})`;
};

Movimiento.prototype.validar = function() {
  return this.valor > 0 && ['ingreso', 'gasto'].includes(this.tipo);
};
```

#### 1.2. Presupuesto con Prototipos

```javascript
function Presupuesto() {
  this.movimientos = [];
  this.meta = 0;
}

Presupuesto.prototype.agregarMovimiento = function(movimiento) {
  if (movimiento instanceof Movimiento && movimiento.validar()) {
    this.movimientos.push(movimiento);
    console.log('Movimiento agregado:', movimiento.formatear());
  } else {
    throw new Error('Movimiento inválido');
  }
};

Presupuesto.prototype.calcularIngresos = function() {
  return this.movimientos
    .filter(m => m.esIngreso())
    .reduce((total, m) => total + m.valor, 0);
};

Presupuesto.prototype.calcularGastos = function() {
  return this.movimientos
    .filter(m => m.esGasto())
    .reduce((total, m) => total + m.valor, 0);
};

Presupuesto.prototype.obtenerBalance = function() {
  return this.calcularIngresos() - this.calcularGastos();
};
```

**🏆 Reto Autónomo (5 min):** Agregar método `obtenerInfo()` al prototipo que retorne string con toda la información del movimiento

---

## Parte 2: Herencia Prototipal (~40 min)

> **Objetivo**: Crear subtipos `Ingreso` y `Egreso` que heredan de `Movimiento`

#### 2.1. Constructor Ingreso con Herencia

```javascript
// Constructor especializado para Ingresos
function Ingreso(nombre, valor, fuente) {
  Movimiento.call(this, nombre, 'ingreso', valor); // Llamar constructor padre
  this.fuente = fuente || 'trabajo';
}

// Establecer herencia prototipal
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;

// Métodos especializados
Ingreso.prototype.esFijo = function() {
  const fuentesFijas = ['salario', 'pension', 'renta'];
  return fuentesFijas.includes(this.fuente);
};

Ingreso.prototype.formatear = function() {
  const tipoTexto = this.esFijo() ? 'Fijo' : 'Variable';
  return `💰 ${this.nombre}: +$${this.valor} (${this.fuente} - ${tipoTexto})`;
};
```

#### 2.2. Constructor Egreso con Herencia

```javascript
function Egreso(nombre, valor, categoria) {
  Movimiento.call(this, nombre, 'gasto', valor);
  this.categoria = categoria || 'otros';
}

Egreso.prototype = Object.create(Movimiento.prototype);
Egreso.prototype.constructor = Egreso;

Egreso.prototype.esEsencial = function() {
  const esenciales = ['vivienda', 'comida', 'transporte', 'salud'];
  return esenciales.includes(this.categoria);
};

Egreso.prototype.formatear = function() {
  const icono = this.esEsencial() ? '🏠' : '🛍️';
  return `${icono} ${this.nombre}: -$${this.valor} (${this.categoria})`;
};
```

#### 2.3. Validaciones de Herencia

```javascript
Presupuesto.prototype.analizarComposicion = function() {
  const ingresos = this.movimientos.filter(m => m instanceof Ingreso);
  const egresos = this.movimientos.filter(m => m instanceof Egreso);
  
  return {
    totalIngresos: ingresos.length,
    totalEgresos: egresos.length,
    ingresosRecurrentes: ingresos.filter(i => i.esFijo()).length,
    egresosEsenciales: egresos.filter(e => e.esEsencial()).length
  };
};

Presupuesto.prototype.validarTipos = function() {
  return this.movimientos.every(m => 
    (m instanceof Ingreso || m instanceof Egreso) &&
    m.hasOwnProperty('valor')
  );
};
```

**🏆 Reto Autónomo 1 (5 min):** Implementar método `filtrarPorTipo(TipoConstructor)` que use `instanceof`

**🏆 Reto Autónomo 2 (7 min):** Agregar método `contarPorCategoria()` que cuente movimientos por fuente/categoría

---

## Parte 3: Integración UI y Funcionalidades Avanzadas (~50 min)

> **Objetivo**: Integrar prototipos con interface HTML y agregar funcionalidades completas

#### 3.1. Interface HTML Básica

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestor de Presupuesto Personal</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="max-w-4xl mx-auto mt-8 px-4">
        <h1 class="text-center text-2xl font-bold mb-4">💰 Gestor de Presupuesto</h1>

        <div class="flex flex-col md:flex-row gap-4">
            <div class="flex-1">
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-semibold mb-3">Agregar Movimiento</h3>
                    <form id="form-movimiento">
                        <select id="tipo-movimiento" class="w-full border border-gray-300 rounded p-2 mb-3" required>
                            <option value="">Seleccionar tipo</option>
                            <option value="ingreso">Ingreso</option>
                            <option value="egreso">Egreso</option>
                        </select>

                        <input type="text" id="nombre" class="w-full border border-gray-300 rounded p-2 mb-3" placeholder="Nombre" required>
                        <input type="number" id="valor" class="w-full border border-gray-300 rounded p-2 mb-3" placeholder="Valor" min="1" required>

                        <div id="campos-ingreso" style="display: none;" class="mb-3">
                            <select id="fuente" class="w-full border border-gray-300 rounded p-2">
                                <option value="salario">Salario</option>
                                <option value="freelance">Freelance</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>

                        <div id="campos-egreso" style="display: none;" class="mb-3">
                            <select id="categoria" class="w-full border border-gray-300 rounded p-2">
                                <option value="comida">Comida</option>
                                <option value="transporte">Transporte</option>
                                <option value="otros">Otros</option>
                            </select>
                        </div>

                        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">Agregar</button>
                    </form>
                </div>
            </div>

            <div class="flex-1">
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-lg font-semibold mb-3">Resumen</h3>
                    <div id="resumen-financiero"></div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            <div class="bg-white rounded-lg shadow p-6">
                <h3 class="text-lg font-semibold mb-3">Movimientos</h3>
                <div id="lista-movimientos"></div>
            </div>
        </div>
    </div>
    
    <script src="js/prototype-system.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
```

#### 3.2. Lógica de Integración Simplificada

```javascript
// Instancia global del presupuesto
const miPresupuesto = new Presupuesto();

// Event listeners básicos
document.getElementById('tipo-movimiento').addEventListener('change', function() {
    const tipo = this.value;
    document.getElementById('campos-ingreso').style.display = 
        tipo === 'ingreso' ? 'block' : 'none';
    document.getElementById('campos-egreso').style.display = 
        tipo === 'egreso' ? 'block' : 'none';
});

document.getElementById('form-movimiento').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tipo = document.getElementById('tipo-movimiento').value;
    const nombre = document.getElementById('nombre').value;
    const valor = parseFloat(document.getElementById('valor').value);
    
    try {
        let movimiento;
        
        if (tipo === 'ingreso') {
            const fuente = document.getElementById('fuente').value;
            movimiento = new Ingreso(nombre, valor, fuente);
        } else if (tipo === 'egreso') {
            const categoria = document.getElementById('categoria').value;
            movimiento = new Egreso(nombre, valor, categoria);
        }
        
        miPresupuesto.agregarMovimiento(movimiento);
        renderizarPresupuesto();
        this.reset();
        
        // Inspección de prototipos
        console.log('Prototipo:', movimiento.__proto__);
        console.log('Es Movimiento:', movimiento instanceof Movimiento);
        
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

function renderizarPresupuesto() {
    // Resumen financiero
    const resumen = document.getElementById('resumen-financiero');
    const balance = miPresupuesto.obtenerBalance();
    
    resumen.innerHTML = `
        <p><strong>Ingresos:</strong> ${miPresupuesto.calcularIngresos()}</p>
        <p><strong>Gastos:</strong> ${miPresupuesto.calcularGastos()}</p>
        <p><strong>Balance:</strong> ${balance}</p>
    `;
    
    // Lista de movimientos
    const lista = document.getElementById('lista-movimientos');
    lista.innerHTML = miPresupuesto.movimientos
        .map(m => `<div class="${m instanceof Ingreso ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} p-3 rounded mb-2">
                     ${m.formatear()}
                   </div>`)
        .join('');
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => renderizarPresupuesto());
```

**🏆 Reto Autónomo 1 (5 min):** Agregar botón "Limpiar Historial" que vacíe todos los movimientos

**🏆 Reto Autónomo 2 (7 min):** Implementar contador de movimientos por tipo en el resumen

**🏆 Reto Autónomo 3 (10 min):** Crear método `exportarDatos()` que genere JSON con todos los movimientos

---

## Cierre — De funciones constructoras a `class` (~10 min)

> Este bloque NO es una nueva parte del lab. Es un **puente sintáctico** hacia la próxima evolución (M4).

Lo que escribiste en P1-P2 con función constructora + prototipos:

```javascript
function Movimiento(nombre, tipo, valor) {
  this.nombre = nombre;
  this.tipo = tipo;
  this.valor = valor;
}

Movimiento.prototype.formatear = function() {
  return `${this.nombre}: $${this.valor}`;
};
```

Es **exactamente equivalente** a esta sintaxis moderna con `class`:

```javascript
class Movimiento {
  constructor(nombre, tipo, valor) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.valor = valor;
  }

  formatear() {
    return `${this.nombre}: $${this.valor}`;
  }
}
```

### Lo que es importante entender:

- `class` NO es un mecanismo nuevo en JavaScript — es **azúcar sintáctica** sobre prototipos. Por debajo, JS sigue usando la cadena de prototipos.
- Lo que escribes con `class Movimiento { ... }` se traduce internamente a una función constructora + métodos en el prototipo.
- En M4 vas a usar `class` como sintaxis principal porque es más legible. Pero ya entiendes qué pasa por debajo.

🏆 **Reto opcional (5 min):** Reescribe el constructor `Presupuesto` con sintaxis `class`. Verifica que sigue funcionando con tu UI de Tailwind sin tocar el HTML.

---

## 🌟 Logros Adicionales

### Logro 1: Inspector de Prototipos Avanzado
* Implementar función `inspeccionarCadena(objeto)` que muestre la cadena completa usando `__proto__`
* Agregar botón "Inspeccionar" en cada movimiento para ver su herencia en modal

### Logro 2: Persistencia con Reconstrucción de Tipos
* Método `exportarConTipos()` que serialice incluyendo información de constructores
* Método `importarConTipos(json)` que reconstruya objetos con prototipos correctos usando `Object.setPrototypeOf()`

---

## 📝 Instrucciones de Entrega

### 1. Verificar Funcionalidad Completa
- ✅ Herencia prototipal implementada correctamente con `Object.create()`
- ✅ Métodos compartidos funcionando desde prototipos
- ✅ Validaciones de tipo con `instanceof` y `hasOwnProperty()`
- ✅ Interface HTML funcional con análisis de composición en tiempo real

### 2. Comparte por Blackboard

**Repositorio**:
- Comparte el link de tu repositorio actualizado
- Incluye documentación de la jerarquía de prototipos en README

**Funcionalidad**:
- Comparte el link de tu sitio desplegado 
- Incluye capturas de DevTools mostrando la cadena de prototipos

**Responde brevemente**:
- ¿Qué ventajas observaste al mover métodos al prototipo vs tenerlos en el constructor?
- ¿Cómo te ayudaron `instanceof` y `hasOwnProperty()` en las validaciones?
- ¿Qué diferencias notas entre `__proto__` y `prototype` al inspeccionar en DevTools?
- ¿Cómo la herencia prototipal mejora la organización y escalabilidad del código?
