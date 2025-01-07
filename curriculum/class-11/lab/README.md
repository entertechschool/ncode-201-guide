# Laboratorio 11: Sistema de Ventas con IA (Copilot) 🤖

## Descripción
En este laboratorio, reconstruirás el sistema de ventas utilizando IA como herramienta principal de desarrollo. 
El objetivo es aprender a colaborar efectivamente con IA mientras repasamos y aplicamos los conceptos de POO vistos en las clases anteriores, mientras profundizamos nuestros conocimientos sobre el DOM.

## 🎯 Objetivos de Aprendizaje
- Aprender a trabajar con un copiloto de IA.
- Abordar un nuevo proyecto desde la perspectiva de un desarrollador/arquitecto.
- Validar y mejorar código generado por IA
- Profundizar en el entendimiento del DOM.
    - El objeto "document"
    - Elementos de HTML como objetos

## 🚀 Setup Inicial
1. Nuevo repositorio en Github: `sales-system`

2. Estructura del Proyecto
```
sales-system/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Customer.js
│   │   └── Sale.js
│   └── app.js
└── README.md
```

## 📋 Historias de Usuario

### HU 1: Gestión de Productos
Como vendedor, necesito registrar nuevos productos en el sistema para mantener un catálogo actualizado.
- Registrar nombre, precio y stock inicial
- Ver el listado de productos registrados
- Actualizar el stock de los productos.

### HU 2: Gestión de Clientes
Como vendedor, necesito registrar los datos de mis clientes para darles seguimiento.
- Registrar nombre y email del cliente
- Ver el listado de clientes registrados
- Actualizar el email de mis clientes.

### HU 3: Registro de Ventas
Como vendedor, necesito registrar nuevas ventas en el sistema.
- Seleccionar un cliente existente
- Agregar múltiples productos con sus cantidades
- Ver el total de la venta calculado automáticamente
- Confirmar la venta solo si hay stock suficiente

### HU 4: Actualización Automática
Como vendedor, necesito que el sistema se actualice automáticamente:
- El stock de productos debe reducirse al confirmar una venta
- El contador de compras del cliente debe incrementarse
- La lista de ventas debe actualizarse en tiempo real

## 💡 Pasos sugeridos de Implementación

1. Configurar Copilot en VS Code.

2. Detallar los objetivos del proyecto y las características técnicas en el archivo README.md
    - Modelos: Atributos de cada modelo de datos (Product, Customer, Sale).
    - DOM: Métodos o acciones a implementar en el prototipo de cada modelo.
    - UI: Los elementos presentes en la Interfaz de la aplicación.

3. Escribir un primer Prompt en el chat de Copilot y probar los 2 modelos disponibles.

4. Afinar el prompt para que tu copiloto de IA te brinde la solución más cercana a tu expectativa.

5. Realizar commits frecuentes, por cada funcionalidad nueva o corregida.

5. Probar el funcionamiento de la solución.

6. Desplegar tu aplicación en Github pages.

## Instrucciones de Envío
- Agrega al README un encabezado:
    - ¿Qué es el DOM? (con la mejor explicación que has logrado obtener de la IA)
- Comparte el link del repositorio y el de tu sitio desplegado