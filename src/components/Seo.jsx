import { useEffect } from "react";

const BASE_URL = "https://dattechgee.vercel.app";

const setMeta = (attr, key, content) => {
  if (!content) return;
  let tag = document.head.querySelector(`${attr}${key}`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const removeMeta = (attr, key) => {
  const tag = document.head.querySelector(`${attr}${key}`);
  if (tag) tag.remove();
};

const setLink = (rel, href) => {
  if (!href) return;
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

export default function Seo({
  title,
  description,
  path = "",
  image = "/assets/logo.png",
  type = "website",
  jsonLd = null,
}) {
  useEffect(() => {
    const ogTitle = `${title} | DatTechGee Technologies`;
    document.title = title;

    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", ogTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", `${BASE_URL}${path}`);
    setMeta("property", "og:image", `${BASE_URL}${image}`);
    setMeta("name", "twitter:title", ogTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", `${BASE_URL}${image}`);
    setLink("canonical", `${BASE_URL}${path}`);

    let script = document.head.querySelector("script[data-page-jsonld]");
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.setAttribute("data-page-jsonld", "true");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      removeMeta("name", "description");
      removeMeta("property", "og:title");
      removeMeta("property", "og:description");
      removeMeta("property", "og:type");
      removeMeta("property", "og:url");
      removeMeta("property", "og:image");
      removeMeta("name", "twitter:title");
      removeMeta("name", "twitter:description");
      removeMeta("name", "twitter:image");
    };
  }, [title, description, path, image, type, jsonLd]);

  return null;
}
