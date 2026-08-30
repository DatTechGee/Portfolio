import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { myProjects } from "../src/constants/index.js";
import { allArticles } from "../src/constants/articles.js";

const toSlug = (s) =>
  s.toString().toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");
const indexHtmlPath = resolve(distDir, "index.html");

const SITE = "https://dattechgee.vercel.app";
const DEFAULT_IMAGE = `${SITE}/assets/logo.png`;

const routes = [
  {
    path: "/",
    title: "DatTechGee Technologies — Software. Innovation. Impact. | Isaac Emmanuel",
    description:
      "DatTechGee Technologies builds custom web apps, mobile apps, business systems, and APIs. Founded by Isaac Emmanuel — Full Stack Developer using React, Laravel, Node.js, and MySQL. 20+ projects delivered.",
    image: `${SITE}/assets/logo.png`,
  },
  {
    path: "/about",
    title: "About | DatTechGee Technologies — Isaac Emmanuel",
    description:
      "Meet Isaac Emmanuel, Founder & Lead Developer of DatTechGee Technologies. Full Stack Developer in Abuja building web, mobile, and business systems with React, Laravel, Node.js, and MySQL.",
    image: `${SITE}/assets/PORTFILO.png`,
  },
  {
    path: "/services",
    title: "Services | DatTechGee Technologies — Software. Innovation. Impact.",
    description:
      "Web development, mobile app development, business systems, API integration, and UI/UX design. Custom software by DatTechGee Technologies in Abuja, Nigeria.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/projects",
    title: "Projects | DatTechGee Technologies — Isaac Emmanuel",
    description:
      "Explore 20+ projects built by Isaac Emmanuel and DatTechGee Technologies — school management systems, payroll, blockchain DApps, mobile apps, and business systems.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/solutions",
    title: "Solutions | DatTechGee Technologies — Software for Every Industry",
    description:
      "Software solutions for startups, schools, SMEs, healthcare, e-commerce, NGOs, and enterprises. Custom systems from DatTechGee Technologies in Nigeria.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/insights",
    title: "Insights | DatTechGee Technologies — Our Perspective",
    description:
      "Articles and guides on software architecture, API design, mobile development, security, and business systems from Isaac Emmanuel and DatTechGee Technologies.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/contact",
    title: "Contact | DatTechGee Technologies — Isaac Emmanuel",
    description:
      "Contact Isaac Emmanuel at DatTechGee Technologies for web development, mobile apps, and custom software. WhatsApp 09112454166. Based in Abuja, Nigeria.",
    image: DEFAULT_IMAGE,
  },
  {
    path: "/testimonials",
    title: "Testimonials | DatTechGee Technologies — Isaac Emmanuel",
    description:
      "Read what clients say about DatTechGee Technologies — school portals, payroll systems, e-commerce, logistics apps, and custom business software built by Isaac Emmanuel.",
    image: DEFAULT_IMAGE,
  },
];

if (!existsSync(indexHtmlPath)) {
  console.error("dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}

const base = readFileSync(indexHtmlPath, "utf8");

function injectMeta(html, route) {
  const url = `${SITE}${route.path}`;
  const fullTitle = route.title;
  const ogType = route.path === "/about" ? "profile" : "website";

  let out = html;

  out = out.replace(/<title>.*?<\/title>/i, `<title>${fullTitle}</title>`);
  out = out.replace(
    /<meta name="title" content=".*?"\s*\/?>/i,
    `<meta name="title" content="${fullTitle}" />`
  );
  out = out.replace(
    /<meta name="description" content=".*?"\s*\/?>/i,
    `<meta name="description" content="${route.description}" />`
  );
  out = out.replace(
    /<meta property="og:url" content=".*?"\s*\/?>/i,
    `<meta property="og:url" content="${url}" />`
  );
  out = out.replace(
    /<meta property="og:title" content=".*?"\s*\/?>/i,
    `<meta property="og:title" content="${fullTitle}" />`
  );
  out = out.replace(
    /<meta property="og:description" content=".*?"\s*\/?>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  out = out.replace(
    /<meta property="og:image" content=".*?"\s*\/?>/i,
    `<meta property="og:image" content="${route.image}" />`
  );
  out = out.replace(
    /<meta property="og:type" content=".*?"\s*\/?>/i,
    `<meta property="og:type" content="${ogType}" />`
  );
  out = out.replace(
    /<meta name="twitter:title" content=".*?"\s*\/?>/i,
    `<meta name="twitter:title" content="${fullTitle}" />`
  );
  out = out.replace(
    /<meta name="twitter:description" content=".*?"\s*\/?>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );
  out = out.replace(
    /<meta name="twitter:image" content=".*?"\s*\/?>/i,
    `<meta name="twitter:image" content="${route.image}" />`
  );
  out = out.replace(
    /<link rel="canonical" href=".*?"\s*\/?>/i,
    `<link rel="canonical" href="${url}" />`
  );

  return out;
}

const articleSlugs = [
  { slug: "building-scalable-full-stack-applications", title: "Building Scalable Full-Stack Applications", desc: "Architectural patterns for production-grade full-stack applications — modular design, database indexing, caching, and scaling." },
  { slug: "why-business-needs-custom-software", title: "Why Every Business Needs a Custom Software Solution", desc: "Why tailored systems reduce friction, eliminate license costs, and align perfectly with your workflows." },
  { slug: "the-role-of-apis-in-modern-software", title: "The Role of APIs in Modern Software Architecture", desc: "RESTful design, versioning, rate limiting, and documentation practices that make APIs developers love." },
  { slug: "mobile-first-development-best-practices", title: "Mobile-First Development: Best Practices for 2026", desc: "Responsive breakpoints, touch targets, performance budgets, and PWA strategies that keep users engaged." },
  { slug: "database-design-patterns", title: "Database Design Patterns Every Developer Should Know", desc: "Normalization, composite indexes, and partitioning for databases that perform at 100 rows or 100 million." },
  { slug: "securing-web-applications", title: "Securing Web Applications: From Authentication to Deployment", desc: "JWT best practices, CORS, SQL injection prevention, and infrastructure hardening for production." },
  { slug: "react-vs-nextjs", title: "React vs Next.js: Choosing the Right Framework", desc: "Rendering strategies, SEO capabilities, and deployment models to make an informed architectural choice." },
];

const articleImage = new Map(
  allArticles.map((a) => [toSlug(a.title), a.image])
);

const articleRoutes = articleSlugs.map((a) => ({
  path: `/insights/${a.slug}`,
  title: `${a.title} | DatTechGee Technologies`,
  description: a.desc,
  image: articleImage.get(a.slug)
    ? `${SITE}${articleImage.get(a.slug)}`
    : DEFAULT_IMAGE,
}));

const projectRoutes = myProjects.map((p) => ({
  path: `/projects/${toSlug(p.title)}`,
  title: `${p.title} | DatTechGee Technologies`,
  description: p.description || "",
  image: p.image ? `${SITE}${p.image}` : DEFAULT_IMAGE,
}));

const notFoundRoute = {
  path: "/404",
  title: "Page Not Found | DatTechGee Technologies",
  description: "The page you are looking for could not be found.",
  image: DEFAULT_IMAGE,
};

const allRoutes = [...routes, ...articleRoutes, ...projectRoutes, notFoundRoute];

for (const route of allRoutes) {
  const outPath = route.path === "/" ? resolve(distDir, "index.html") : resolve(distDir, route.path.slice(1), "index.html");
  const pre = dirname(outPath);
  if (!existsSync(pre)) mkdirSync(pre, { recursive: true });
  const injected = injectMeta(base, route);
  writeFileSync(outPath, injected);
  console.log(`Prerendered ${route.path}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemapRoutes = allRoutes.filter((r) => r.path !== "/404");
const sitemapItems = sitemapRoutes
  .map((r) => {
    const loc = r.path === "/" ? SITE : `${SITE}${r.path}`;
    const isArticle = r.path.startsWith("/insights/");
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${isArticle ? "monthly" : "weekly"}</changefreq>\n    <priority>${r.path === "/" ? "1.0" : r.path === "/contact" ? "0.9" : "0.8"}</priority>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapItems}\n</urlset>\n`;
writeFileSync(resolve(distDir, "sitemap.xml"), sitemap);
console.log("Generated dist/sitemap.xml");

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
writeFileSync(resolve(distDir, "robots.txt"), robots);
console.log("Generated dist/robots.txt");

// RSS feed for Insights
const escapeXml = (s) =>
  String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const rssItems = allArticles
  .map((a) => {
    const slug = toSlug(a.title);
    const pubDate = a.date ? new Date(a.date).toUTCString() : new Date().toUTCString();
    const enc = a.image
      ? `\n      <enclosure url="${SITE}${a.image}" type="image/jpeg" />`
      : "";
    return `    <item>\n      <title>${escapeXml(a.title)}</title>\n      <link>${SITE}/insights/${slug}</link>\n      <guid isPermaLink="false">${SITE}/insights/${slug}</guid>\n      <description>${escapeXml(a.description)}</description>\n      <pubDate>${pubDate}</pubDate>\n      <category>${escapeXml(a.category || "Software")}</category>${enc}\n    </item>`;
  })
  .join("\n");

const rss = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n  <channel>\n    <title>DatTechGee Technologies — Insights</title>\n    <link>${SITE}/insights</link>\n    <description>Articles and guides on software architecture, API design, mobile development, security, and business systems from Isaac Emmanuel and DatTechGee Technologies.</description>\n    <language>en</language>\n    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>\n    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />\n${rssItems}\n  </channel>\n</rss>\n`;
writeFileSync(resolve(distDir, "rss.xml"), rss);
console.log("Generated dist/rss.xml");

console.log("Done. Static per-route HTML generated in dist/");
