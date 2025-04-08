export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

export function deslugifyTag(slug: string): string {
  // This is a simple implementation. You might need to enhance this
  // based on your specific tag mapping needs
  return slug.replace(/-/g, " ");
}
