import type { CollectionEntry } from "astro:content";
import { personId } from "./schema";

type Talk = CollectionEntry<"talks">;

const typeLabels: Record<Talk["data"]["type"], string> = {
  conferencia: "Charla",
  podcast: "Podcast",
  artículo: "Artículo",
  meetup: "Meetup",
  curso: "Curso",
  social: "Participación",
};

export function talkPageDescription(talk: Talk) {
  const { title, type, event, date, description } = talk.data;
  return (
    description ??
    `${typeLabels[type]} «${title}» de Jorge Baumann (@baumannzone) en ${event} (${date.getFullYear()}).`
  );
}

export function talkMainEntity(
  talk: Talk,
  site: URL | undefined,
  options?: { includeDescription?: boolean },
) {
  const { title, type, event, date } = talk.data;
  const talkUrl = new URL(`/talks/${talk.id}/`, site).href;
  const day = date.toISOString().slice(0, 10);
  const performer = { "@id": personId(site) };
  const entity: Record<string, unknown> = {
    "@id": `${talkUrl}#main`,
    name: title,
    url: talkUrl,
    inLanguage: "es",
  };

  if (options?.includeDescription !== false) {
    entity.description = talkPageDescription(talk);
  }

  if (type === "conferencia" || type === "meetup" || type === "social") {
    return {
      "@type": "Event",
      ...entity,
      startDate: day,
      location: { "@type": "Place", name: event },
      performer,
    };
  }

  if (type === "podcast") {
    return {
      "@type": "PodcastEpisode",
      ...entity,
      datePublished: day,
      partOfSeries: { "@type": "PodcastSeries", name: event },
      actor: performer,
    };
  }

  if (type === "artículo") {
    return {
      "@type": "Article",
      ...entity,
      headline: title,
      datePublished: day,
      author: performer,
      publisher: { "@type": "Organization", name: event },
    };
  }

  return {
    "@type": "Course",
    ...entity,
    provider: { "@type": "Organization", name: event },
    instructor: performer,
  };
}
