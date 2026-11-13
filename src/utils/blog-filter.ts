export function normalizeSearchText(value: string): string {
  return value
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLocaleLowerCase("es")
    .trim();
}

export function buildSearchHaystack(parts: readonly string[]): string {
  return normalizeSearchText(parts.join(" "));
}

export function matchesBlogPost(
  haystack: string,
  tags: readonly string[],
  query: string,
  tag: string,
): boolean {
  if (tag && !tags.includes(tag)) return false;

  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return true;

  return normalizedQuery
    .split(/\s+/)
    .every((term) => haystack.includes(term));
}

export function blogResultLabel(count: number): string {
  if (count === 0) return "Ningún artículo";
  if (count === 1) return "1 artículo";
  return `${count} artículos`;
}

export function blogFilterSearch(query: string, tag: string): string {
  const params = new URLSearchParams();
  const normalizedQuery = query.trim();

  if (normalizedQuery) params.set("q", normalizedQuery);
  if (tag) params.set("tag", tag);

  const search = params.toString();
  return search ? `?${search}` : "";
}
