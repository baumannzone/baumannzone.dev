export enum Tags {
  Agile = "Agile",
  CSS = "CSS",
  Cheatsheet = "Cheatsheet",
  Design = "Design",
  DevTools = "DevTools",
  Git = "Git",
  HTML = "HTML",
  Inspiration = "Inspiration",
  JavaScript = "JavaScript",
  IA = "IA",
  NodeJs = "Node.js",
  Personal = "Personal",
  Privacy = "Privacy",
  Python = "Python",
  SEO = "SEO",
  SocialMedia = "Social Media",
  TIL = "TIL",
  Testing = "Testing",
  Tools = "Tools",
  UXUI = "UX/UI",
  Web = "Web",
  Fundamentals = "Fundamentals",
  Career = "Career",
  a11y = "a11y",
}

/**
 * Mapeo de tags a sus versiones URL-friendly
 * La clave es el valor del enum Tags
 * El valor es la versión URL-friendly del tag
 */
export const tagUrlMap: Record<string, string> = {
  [Tags.Agile]: "agile",
  [Tags.CSS]: "css",
  [Tags.Cheatsheet]: "cheatsheet",
  [Tags.Design]: "design",
  [Tags.DevTools]: "devtools",
  [Tags.Git]: "git",
  [Tags.HTML]: "html",
  [Tags.Inspiration]: "inspiration",
  [Tags.JavaScript]: "javascript",
  [Tags.IA]: "ia",
  [Tags.NodeJs]: "node-js",
  [Tags.Personal]: "personal",
  [Tags.Privacy]: "privacy",
  [Tags.Python]: "python",
  [Tags.SEO]: "seo",
  [Tags.SocialMedia]: "social-media",
  [Tags.TIL]: "til",
  [Tags.Testing]: "testing",
  [Tags.Tools]: "tools",
  [Tags.UXUI]: "ux-ui",
  [Tags.Web]: "web",
  [Tags.Fundamentals]: "fundamentals",
  [Tags.Career]: "career",
  [Tags.a11y]: "a11y",
};

/**
 * Mapeo inverso: de URL-friendly a tag original
 * La clave es la versión URL-friendly del tag
 * El valor es el valor del enum Tags
 */
export const urlToTagMap: Record<string, Tags> = Object.entries(
  tagUrlMap,
).reduce((acc, [tag, url]) => {
  acc[url] = tag as Tags;
  return acc;
}, {} as Record<string, Tags>);
