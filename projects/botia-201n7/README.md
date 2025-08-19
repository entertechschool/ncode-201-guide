# Proyecto Final - 201

> Caso real para la empresa: Botia tech

## **Descripción de la empresa**
Botia es una agencia especializada en el desarrollo de agentes de inteligencia artificial que automatiza procesos empresariales críticos, incluyendo:
- Consultas y atención al cliente
- Venta de productos en plataformas e-commerce
- Agendamiento de citas para negocios de servicios (academias, inmobiliarias, clínicas)

## **Descripción del reto**
Desarrollar un software completo de gestión de proyectos y clientes para Botia que reemplace el proceso manual de onboarding. El sistema debe permitir a los clientes registrarse, completar formularios progresivos con ejemplos de redacción, subir documentos necesarios, y visualizar el progreso de sus proyectos de IA. 

Además, debe incluir un panel de métricas para que tanto clientes como la agencia puedan monitorear avances, entregables y el estado general de los proyectos de desarrollo de agentes de IA.

## **Características mínimas**

### **Sistema de Autenticación**
1. **Registro de nuevos clientes**: Formulario de creación de cuenta con validaciones
2. **Inicio de sesión**: Sistema de login para clientes existentes
3. **Gestión de perfiles**: Posibilidad de editar información personal

### **Formularios Progresivos**
4. **Wizard de onboarding**: Formulario dividido en pasos con ejemplos de redacción
5. **Guardado automático**: Los datos se guardan conforme el usuario avanza
6. **Edición posterior**: Clientes pueden volver a editar campos completados anteriormente

### **Gestión de Archivos**
7. **Subida de documentos**: Funcionalidad para cargar PDFs, imágenes y otros archivos
8. **Visualización de archivos**: Preview de documentos subidos
9. **Organización por categorías**: Clasificación de archivos según tipo de información

### **Panel del Cliente**
10. **Dashboard personalizado**: Vista general del progreso del proyecto
11. **Entregables**: Sección donde Botia sube los avances y resultados
12. **Métricas y progreso**: Indicadores visuales del estado del proyecto

## **Requisitos técnicos**

### **Tecnologías Permitidas**
1. **HTML5** para estructura semántica y soporte de archivos
2. **CSS3** para estilos personalizados complementarios
3. **TailwindCSS** como framework principal de diseño
4. **JavaScript Vanilla** para toda la lógica de aplicación
5. **localStorage** para persistencia de datos (sin base de datos externa)

### **Funcionalidades Técnicas**
6. **Validación de formularios** en tiempo real con JavaScript
7. **Manejo de archivos** usando File API de JavaScript
8. **Enrutamiento SPA** (Single Page Application) con JavaScript
9. **Gestión de estado** para sesiones de usuario y datos de formularios
10. **Diseño responsive** con TailwindCSS para todos los dispositivos
11. **Componentes reutilizables** organizados modularmente
12. **Sistema de notificaciones** para feedback al usuario

### **Estructura del Proyecto**
13. **Arquitectura modular** separando autenticación, formularios, y dashboards
14. **Manejo de errores** y validaciones exhaustivas
15. **Interfaz intuitiva** con guías y ejemplos para usuarios no técnicos
16. **Optimización de rendimiento** para carga rápida de archivos y datos

## **Flujo de Usuario**
1. **Registro/Login** → Acceso al sistema
2. **Onboarding** → Completar formularios paso a paso con ejemplos
3. **Subida de archivos** → Cargar documentos necesarios para el proyecto
4. **Seguimiento** → Visualizar progreso y entregables de Botia
5. **Gestión continua** → Editar información y monitorear métricas

## **Consideraciones de Implementación**
- **Persistencia local**: Toda la información se almacena en localStorage del navegador
- **Escalabilidad futura**: Código preparado para migrar a base de datos posteriormente  
- **Experiencia de usuario**: Formularios guiados con ejemplos de redacción claros
- **Gestión de archivos**: Almacenamiento temporal en base64 para simulación completa