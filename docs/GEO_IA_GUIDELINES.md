# Manual GEO: aparecer en resultados de IA

Para aparecer de forma consistente en resultados de IA (Google AI Overviews, Perplexity, ChatGPT, Gemini, etc.) hay que cumplir **4 capas a la vez**: contenido, entidad, técnica y señales externas. Este documento es la referencia para SEO orientado a IA (GEO).

---

## 1. Contenido: ser la mejor respuesta y ser "extractable"

### 1.1. Intención y relevancia

- El contenido debe responder exactamente a la intención de la consulta, usando el mismo lenguaje y contexto que el usuario.
- El tema debe estar cubierto de forma **completa y autosuficiente** (semantic completeness): que el usuario no necesite otra página para entender el panorama principal.

### 1.2. Estructura pensada para extracción (AI Overviews / LLMs)

Los LLMs buscan frases que puedan "copiar-pegar" como respuesta.

**Obligatorio:**

- Respuesta clara a la pregunta principal en las **primeras 2–3 frases** del contenido.
- Uso de **H2/H3 jerárquicos**, cada uno con un subtema claro y único.
- **Listas numeradas** para pasos y procesos.
- **Listas con viñetas** para características, ventajas, checklists.
- **Tablas** para comparativas y resúmenes de factores.
- **Sección de FAQs** con preguntas en lenguaje natural y respuestas cortas (ideal para extracción y para schema FAQPage).

**Ejemplos de frases "citable":**

- "Para aparecer en Google AI Overviews, una página necesita X, Y y Z."
- "El SEO en 2026 se basa en A, B y C."
- "La diferencia principal entre [A] y [B] es…"

### 1.3. Calidad e "information gain"

- El contenido debe aportar **información nueva** o sintetizar mejor que los demás: datos, ejemplos, casos reales, estudios propios, herramientas.
- Se premia la **densidad de hechos** (fact density) y la ganancia de información sobre lo ya típico del tema.
- Evitar texto genérico o relleno; cada bloque debe aportar algo concreto (dato, ejemplo, decisión práctica, matiz).

### 1.4. Claridad, precisión y no-ambigüedad

- Frases **declarativas y directas**, con sujeto–verbo–complemento, sin ambigüedad.
- **Terminología consistente** dentro del mismo topic (no usar cinco nombres distintos para lo mismo).
- Explicaciones correctas, sin errores conceptuales: los modelos cruzan tu contenido con otras fuentes y descartan lo dudoso.

### 1.5. Lenguaje natural y actualización

- Redacción natural, como si respondieras a una pregunta real ("qué es…", "cómo se hace…", "cuál es la diferencia…").
- **Fecha de publicación** visible y **fecha de última actualización** cuando aplique.
- Revisión periódica de contenidos clave para mantenerlos vigentes.

---

## 2. E‑E‑A‑T: quién habla y por qué se le cree

En 2026, E‑E‑A‑T funciona como **filtro de elegibilidad**: sin buenas señales de experiencia, expertise, autoridad y confianza, tu contenido no entra en el pool de candidatos de IA.

### 2.1. Experience y Expertise

- **Autor claramente identificado** en cada contenido, con nombre real.
- **Bio de autor** con credenciales: rol, años de experiencia, especialización y tipo de proyectos/sectores.
- Inclusión de **casos reales**, ejemplos de proyectos, errores y aprendizajes, métricas de resultados cuando sea posible.

### 2.2. Autoridad temática (topical authority)

- **Varios contenidos profundos** sobre el mismo tema, interconectados: clusters temáticos, no artículos sueltos.
- **Enlazado interno** que refuerza la estructura del cluster y deja claro a qué tema pertenece cada URL.
- **Coherencia**: mismo tema principal repetido en bio, about, redes y medios externos.

### 2.3. Confianza (Trustworthiness)

- Sitio con **HTTPS**, datos de contacto claros, página de privacidad, aviso legal, cookies.
- **Fuentes citadas** correctamente (enlaces a estudios, docs, guías oficiales).
- **Fechas de publicación/actualización** visibles.
- Sin señales de spam: exceso de ads, cloaking, contenido engañoso o clickbait.

---

## 3. Entidad: persona, marca y Knowledge Graph

### 3.1. Definir un "entity home"

- Una **URL principal** (normalmente `/about` o la home) que actúa como referencia canónica de la persona/marca.
- En esa página: nombre, rol, bio, foto, ubicación, enlaces a perfiles importantes (LinkedIn, otras webs, herramientas, apariciones en medios).

### 3.2. Schema Person / Organization y sameAs

- Implementar **JSON‑LD** para `Person` (tú) y `Organization` (tu marca si aplica).
- Usar **`@id` estable** y **`sameAs`** con las URLs clave:
  - LinkedIn
  - Web principal (marcosamplina.com)
  - tools.marcosamplina.com
  - perfiles de autor en otros sitios
  - páginas de proyectos, podcasts, etc.
- Incluir **`knowsAbout`** con temas donde quieres posicionar tu autoridad (ej.: SEO técnico, GEO, AI Overviews, automatización).

**Objetivo:** que el grafo de conocimiento resuelva que "Marco Samplina" es una única entidad coherente en varios sitios.

### 3.3. Densidad de entidades en el contenido

- Trabajar con **entidades reconocibles** (marcas, tecnologías, conceptos, lugares) y relacionarlas explícitamente.
- Contenidos con mayor densidad de entidades y relaciones claras son más elegibles como fuente.

---

## 4. Capa técnica: que la IA pueda rastrear y entender tu sitio

### 4.1. Fundamentos SEO técnicos

- **Indexación correcta:**
  - sin `noindex` accidentales,
  - sin bloqueos innecesarios en `robots.txt`,
  - cobertura correcta en Search Console.
- **Arquitectura clara**: categorías, breadcrumbs, URLs limpias, profundidad de clic razonable.
- **Rendimiento aceptable**: Core Web Vitals en verde (LCP, CLS, INP).
- Sitio **mobile‑first**, responsive, usable en móvil.

### 4.2. Structured data (Schema.org)

- Implementar los tipos adecuados:
  - `Article`, `BlogPosting`
  - `FAQPage`
  - `HowTo`
  - `Product`
  - `SoftwareApplication` (para herramientas)
- Marcado **consistente y sin errores** (validar).
- Alinear schema con el **contenido real** (sin markup engañoso).

### 4.3. Imágenes, vídeo y sitemap

- Imágenes relevantes con **alt** descriptivo y contexto en el texto.
- Vídeos integrados cuando aporten valor (tutoriales, demos).
- **Sitemap XML** actualizado y enviado a Search Console.
- Para productos/servicios: feeds alineados con el schema cuando aplique.

---

## 5. Señales externas: backlinks, menciones y coherencia de marca

### 5.1. Backlinks y menciones

- Enlaces desde sitios con **autoridad y relevancia temática** (blogs SEO, medios del sector, comunidades).
- **Menciones de nombre/marca** aunque no siempre haya enlace (brand mentions).
- Apariciones en **podcasts, entrevistas, guest posts** con bio y enlace hacia el "entity home".

### 5.2. Coherencia cross‑plataforma

- **Mismo nombre, foto y descripción base** en todas las plataformas (web, LinkedIn, bios externas, herramientas).
- **Misma propuesta de valor** y posicionamiento en todos los sitios.

---

## 6. Capa IA específica: GEO y "share of model"

### 6.1. GEO (Generative Engine Optimization) en práctica

- No se optimiza solo para SERPs, sino para ser la **fuente preferida** de modelos generativos.
- Priorizar:
  - cobertura semántica completa del topic,
  - contenido con alta densidad de hechos y citas,
  - estructura perfecta para extracción,
  - entidad y E‑E‑A‑T fuertes.

### 6.2. Share of Model (SoM)

- **Métrica:** porcentaje de veces que tu dominio aparece citado/resumido en respuestas de IA para un conjunto de queries.
- **Objetivo:** establecer baseline, optimizar contenidos clave, ampliar SoM hasta ver patrones consistentes de citación en varios motores de IA.

---

## 7. Checklist operativo "siempre"

Antes de dar por bueno un contenido o una URL importante, revisar:

1. ¿Responde la pregunta principal en las **primeras 2–3 frases**?
2. ¿Cubre el tema **completo**, con información nueva, ejemplos y datos?
3. ¿Tiene **H2/H3 claros**, listas, tablas y FAQs?
4. ¿El **autor** está identificado con bio creíble y señales de experiencia real?
5. ¿La página está **bien enlazada** dentro de un cluster temático coherente?
6. ¿Hay **schema** correcto (Article/FAQ/HowTo/SoftwareApplication/etc.) y sin errores?
7. ¿La URL es **rastreable**, rápida, responsive y sin errores técnicos graves?
8. ¿El contenido **cita fuentes** externas cuando hace afirmaciones fuertes?
9. ¿La **entidad** (persona/marca) está bien definida con schema Person/Organization y sameAs?
10. ¿Existen **backlinks/menciones** desde sitios relevantes que respalden autoridad?
11. ¿Se **revisa y actualiza** periódicamente para mantener frescura y relevancia?
