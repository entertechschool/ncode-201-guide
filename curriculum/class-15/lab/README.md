# Laboratorio 15: Persistencia Local en el Vote Tracker 💾

## Descripción
En este laboratorio, implementarás la persistencia de datos en tu aplicación Vote Tracker utilizando LocalStorage y JSON. Aprenderás a mantener el estado de tu aplicación entre sesiones del navegador y a estructurar tus datos de manera eficiente.

## 🎯 Objetivos de Aprendizaje
- Implementar persistencia de datos usando LocalStorage y JSON
- Gestionar el estado (state) de una aplicación web
- Mantener la integridad de los datos entre sesiones del navegador

## 🧠 Conceptos Clave
1. Estado de la Aplicación (App State)
2. Serialización/Deserialización con JSON
3. API del LocalStorage
4. Patrones de persistencia de datos
5. Manejo de errores en el almacenamiento local

## 🚀 Setup Inicial

### Nueva Estructura de Archivos
```
vote-tracker/
├── stats.html       <-- Nuevo
├── js/
│   ├── app.js
│   ├── Product.js
│   └── storage.js   <-- Nuevo
```

### Control de Versiones
```bash
git checkout -b lab-15-persistence
```

## 📋 Historias de Usuario

### HU1: Persistencia de Votos
Como usuario, necesito que mis votos se mantengan entre sesiones para:
- Ver mis votaciones anteriores al recargar la página
- No perder el progreso de mis votaciones

### HU2: Resumen de Estadísticas
Como usuario, necesito acceder a un resumen de todas mis votaciones para:
- Ver el total de votos por producto
- Identificar mis productos más y menos votados

### HU3: Gestión de Datos
Como usuario, necesito poder gestionar mis datos guardados:
- Reiniciar las votaciones si lo deseo
- Ver cuándo fue mi última votación

## 🛠️ Requerimientos Técnicos

### 1. Estructura del State
Define la estructura del estado de la aplicación:
- Productos y sus votos
- Categorías y los votos asociados

### 2. Módulo de Storage (storage.js)
Implementa métodos para:
- Guardar/Cargar el state
- Validar datos del LocalStorage
- Manejar errores de almacenamiento
- Limpiar datos antiguos

### 3. Integración con Product.js
Actualiza el constructor Product para:
- Cargar votos previos al inicializar
- Mantener sus datos sincronizados con LocalStorage
- Validar la integridad de sus datos

### 4. Manejo de Errores
Implementa manejo de casos como:
- LocalStorage no disponible
- Datos corruptos

## ⭐️ Logros Adicionalesx 

1. **Exportación de Datos**
- Permite exportar estadísticas en formato JSON

## 📤 Instrucciones de Envío

1. Actualiza el README.md con:
   - Explicación del sistema de persistencia
   - Estructura del state
   - Diagrama del flujo de datos

2. Crea un Pull Request que incluya:
   - Capturas del LocalStorage funcionando
   - Ejemplos de datos persistidos
   - Tests de casos de error manejados

3. Despliega en GitHub Pages y verifica que:
   - Los datos persisten entre recargas
   - Las estadísticas se mantienen
   - La limpieza de datos funciona

4. Entrega:
   - URL del repositorio
   - URL del sitio desplegado
   - URL del Pull Request
