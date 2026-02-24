/** Palabras por minuto para tiempo de lectura (español) */
const WORDS_PER_MINUTE = 200;

/** Cuenta palabras del contenido (markdown sin código ni enlaces) */
export function getWordCount(content: string): number {
  const plain = content.replace(/```[\s\S]*?```/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  return plain.split(/\s+/).filter(Boolean).length;
}

/** Tiempo de lectura en minutos a partir del contenido en markdown */
export function getReadingTimeMinutes(content: string): number {
  const words = getWordCount(content);
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

/** Convierte texto a slug para anclas (minúsculas, espacios a guiones, sin acentos) */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export interface TocEntry {
  title: string;
  id: string;
}

/** Extrae H2 del markdown y devuelve título e id para índice */
export function getTableOfContents(content: string): TocEntry[] {
  const lines = content.split("\n");
  const entries: TocEntry[] = [];
  for (const line of lines) {
    const match = line.match(/^##\s+(.+)$/);
    if (match) {
      const title = match[1].trim();
      entries.push({ title, id: slugify(title) });
    }
  }
  return entries;
}
