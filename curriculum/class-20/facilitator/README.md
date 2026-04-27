# Guía del Facilitador - Clase 20: Demo Day

> Tiempo de lectura: 7 minutos | Prepárate antes de clase

---

## 🔑 Conceptos Clave

- **Demo en vivo**: Mostrar la app funcionando mientras se explica, no screenshots estáticas.
- **Argumentación técnica**: Explicar el porqué de decisiones con vocabulario preciso.
- **Rúbrica oficial**: La del [proyecto integrador](../../class-17/project/), con 5 criterios sumando 100 puntos.
- **Feedback individual**: Al cerrar cada presentación, 1-2 frases concretas de fortaleza y punto a reforzar.
- **Ruta a Code 301**: La conversación que cierra el curso — [examen de admisión](../../../admission.md).

---

## 🔗 Analogías Útiles

**Demo Day <> Entrevista técnica real:**
El formato 5+3+2 minutos es el mismo que Globant, MercadoLibre o Rappi usan en sus "tech interviews". No es simulacro: es práctica directa.

**Argumentación <> Receta explicada por un chef:**
Un buen chef no dice "le puse sal y listo". Dice "le puse sal marina porque potencia el sabor sin amargar". El dev junior dice "usé greedy". El dev mid dice "usé greedy porque en un grupo pequeño la solución óptima es N-1 transferencias y el costo computacional es bajo".

**Plan B <> Paracaídas de reserva:**
Nunca lo usas, hasta el día que sí. Screenshots de respaldo son el paracaídas de reserva de Demo Day.

**Rúbrica <> Mapa antes del viaje:**
Si el estudiante ya vio la rúbrica, no hay sorpresas. La nota es una suma aritmética, no un juicio subjetivo.

---

## 📚 Contexto Actual

### Por qué Demo Day importa en Latinoamérica

Empresas como Rappi, Globant y MercadoLibre tienen procesos de entrevista que dedican 45-60 minutos a que el candidato presente un proyecto propio y responda preguntas técnicas. Es el filtro más importante después del CV. Los estudiantes que pasan Demo Day en Code 201 llegan con esa habilidad lista, mientras que muchos candidatos con más experiencia llegan sin ensayar.

> **Para contar en clase:** "Esta es literalmente la primera mitad de una entrevista técnica. Si dominan esto, el resto del proceso es más fácil."

### GitHub como carta de presentación

En 2024, el 68% de los reclutadores técnicos en Perú revisan GitHub antes o durante la entrevista (fuente: encuesta Laboratoria 2024). Un repo público con commits frecuentes, README claro y un deploy funcional pesa más que un CV extenso.

**Fuentes:** [Laboratoria Hiring Report 2024](https://www.laboratoria.la/insights){:target="_blank"}, [Tech interviews in Latam](https://mercadolibre.com/jobs/tech/){:target="_blank"}

---

## 🎯 Momentos Clave de la Clase

### Apertura

**Qué decir:**
```
Facilitador: "Hoy no hay lab, hay presentación. La clase es para ustedes.
Orden: sorteo. Cada uno tiene 10 minutos, ni uno más. Plan B listo por si falla el deploy.
Rúbrica en pantalla, sin sorpresas. Empezamos."
```

**Duración sugerida:** 10 minutos máximo. Luego directo a sorteo y primera presentación.

### Durante cada presentación

**Tu rol:** Controla tiempo, toma notas de la rúbrica en tiempo real, prepara la pregunta de Q&A.

**Reloj:**
- 0:00 → 5:00 — Demo en vivo.
- 5:00 → 8:00 — Argumentación técnica.
- 8:00 → 10:00 — Q&A.
- 10:00 → corte firme.

**Pregunta de Q&A sugerida (adapta a cada estudiante):**
Si el estudiante habló mucho del algoritmo → pregunta sobre la persistencia.
Si habló del diseño → pregunta sobre el cálculo.
Objetivo: evaluar profundidad transversal, no solo lo que vino preparado.

### Entre presentaciones (2 min)

**Qué hacer:**
1. Llenar la rúbrica del estudiante anterior (30 segundos).
2. Dar feedback oral de 1-2 frases: una fortaleza + una sugerencia.
3. Llamar al siguiente por nombre.

**Script sugerido para feedback:**
```
Facilitador: "[Nombre], tu [algo concreto] fue sólido.
Para futuras presentaciones, trabajaría [sugerencia específica].
Nota te llegará al cierre. Siguiente: [Nombre]."
```

### Cierre del curso (10 min finales)

**Qué decir:**
```
Facilitador: "Cerramos Code 201. Lo que construyeron hoy es portafolio real.
El curso está diseñado para Code 301 — los que siguen rinden el examen de admisión
la próxima semana. Los que no, se quedan con el artefacto y las habilidades.
Escríbanme si tienen preguntas. Gracias por estos dos meses y medio."
```

**Entregar:** Ruta individual hacia Code 301, notas finales, invitación al networking de egresados.

---

## 🎭 Dinámicas de Clase

### Dinámica 1: "Orden por sorteo"

Genera equidad y elimina presiones.

**Dinámica sugerida:**
```
Facilitador: "Saquen un papel con su nombre.
Los voy llamando en orden aleatorio.
Presenta de pie, mirando al grupo, no a la pantalla."
```

### Dinámica 2: "Feedback de pares entre presentaciones"

Opcional si hay tiempo. Mantiene al grupo atento.

**Dinámica sugerida:**
```
Facilitador: "Después de cada presentación, 1 compañero del público
comparte 1 cosa que le gustó de la presentación.
30 segundos, no feedback crítico.
Esto sube la moral y refuerza hábitos buenos."
```

### Dinámica 3: "Pregunta abierta al público antes del corte"

Cuando detectas que la presentación va floja, invita al grupo.

**Dinámica sugerida:**
```
Facilitador: "¿Alguien del público tiene una pregunta sobre lo que vimos?"
(Pausa 5 segundos)
"Si no, la mía es: ..."
```

---

## 💡 Aplicación de la Rúbrica

La rúbrica oficial está en [`class-17/project/README.md`](../../class-17/project/). Resumen:

| Criterio | Peso | Qué mirar |
|----------|------|-----------|
| Funcionalidades MVP (HU1-HU8) | 30 pts | Todas funcionan en el deploy |
| Calidad técnica | 25 pts | Código organizado, estado central, errores manejados |
| Historias adicionales | 15 pts | Al menos 1 reto extra implementado |
| Presentación en vivo | 15 pts | Fluidez, claridad, cumple tiempos |
| Argumentación técnica | 15 pts | Explica decisiones con vocabulario preciso |

**Umbral de aprobación:** 70/100.

**Tip de facilitación:** Lleva la rúbrica impresa o en pestaña visible. Llena cada celda durante la presentación, no después — pierdes detalle si acumulas.

---

## ⚠️ Errores Comunes

- **"El deploy no responde en vivo."** Aceptar plan B sin penalización si tiene screenshots listos. La culpa no es del estudiante si GitHub Pages tardó en sincronizar.
- **"Se excede del tiempo."** Corte firme a los 10:00. Se puede restar en el criterio "Presentación".
- **"Solo lee el código."** Interrumpir cortésmente: "Mejor enséñanos la UI funcionando, ese es el demo".
- **"No argumenta técnicamente, solo describe."** Preguntar durante el Q&A: "¿Por qué elegiste X y no Y?". Eso fuerza argumentación.
- **"Estudiantes ansiosos que se bloquean."** Ofrecer 30 segundos para respirar, o saltar al Q&A primero y volver al demo.

---

## 📍 Antes de que se vayan

- [ ] Cada estudiante recibió nota final con rúbrica completa.
- [ ] Cada estudiante recibió 1-2 frases de feedback oral.
- [ ] Invitación explícita al examen de admisión de Code 301 (fecha + link).
- [ ] Agradecimiento grupal + foto del curso si hay oportunidad.

**Frase de cierre sugerida:**
```
"Empezaron sin saber HTML. Hoy presentaron una app con lógica, persistencia y deploy.
Ese salto lo hicieron ustedes. Mi trabajo fue acompañar, no construir.
El próximo paso es suyo. Nos vemos en Code 301, o en LinkedIn. Gracias."
```
