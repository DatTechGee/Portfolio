import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

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

for (const route of routes) {
  const outPath = route.path === "/" ? resolve(distDir, "index.html") : resolve(distDir, route.path.slice(1), "index.html");
  const pre = dirname(outPath);
  if (!existsSync(pre)) mkdirSync(pre, { recursive: true });
  const injected = injectMeta(base, route);
  writeFileSync(outPath, injected);
  console.log(`Prerendered ${route.path}`);
}

console.log("Done. Static per-route HTML generated in dist/");
