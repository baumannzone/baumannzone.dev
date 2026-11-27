import { Tags, tagDescriptionMap, tagUrlMap, urlToTagMap } from "../types/tags";

/**
 * Convierte un tag a su versión URL-friendly
 */
export function getTagUrl(tag: Tags): string {
  return tagUrlMap[tag];
}

/**
 * Descripción del tag, con un texto genérico si no tiene una propia
 */
export function getTagDescription(tag: Tags): string {
  return tagDescriptionMap[tag] ?? `Artículos etiquetados con ${tag}`;
}

/**
 * Convierte una versión URL-friendly a su tag original
 */
export function getTagFromUrl(url: string): Tags {
  return urlToTagMap[url];
}
