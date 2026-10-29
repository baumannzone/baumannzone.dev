import { SITE_NAME, SITE_OWNER } from "../consts";

const homeUrl = (site: URL | undefined) => new URL("/", site).href;

export const personId = (site: URL | undefined) => `${homeUrl(site)}#person`;
export const websiteId = (site: URL | undefined) => `${homeUrl(site)}#website`;

export function personSchema(site: URL | undefined) {
  return {
    "@type": "Person",
    "@id": personId(site),
    name: SITE_OWNER.name,
    alternateName: SITE_OWNER.alternateName,
    jobTitle: SITE_OWNER.jobTitle,
    description: SITE_OWNER.description,
    url: homeUrl(site),
    knowsAbout: SITE_OWNER.knowsAbout,
    sameAs: Object.values(SITE_OWNER.profiles),
  };
}

export function websiteSchema(site: URL | undefined, description: string) {
  return {
    "@type": "WebSite",
    "@id": websiteId(site),
    name: SITE_NAME,
    alternateName: "baumannzone.dev",
    url: homeUrl(site),
    description,
    inLanguage: "es",
    publisher: { "@id": personId(site) },
  };
}

export function breadcrumbSchema(
  site: URL | undefined,
  items: { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site).href,
    })),
  };
}
