export const SITEMAP_BASE_URL = "https://marcosamplina.com";

export function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function toIso(date: Date): string {
  return date.toISOString().slice(0, 19) + "Z";
}
