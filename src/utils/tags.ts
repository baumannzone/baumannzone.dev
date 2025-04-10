import { Tags, tagUrlMap, urlToTagMap } from "../types/tags";

/**
 * Convierte un tag a su versión URL-friendly
 */
export function getTagUrl(tag: Tags): string {
  return tagUrlMap[tag];
}

/**
 * Convierte una versión URL-friendly a su tag original
 */
export function getTagFromUrl(url: string): Tags {
  return urlToTagMap[url];
}
