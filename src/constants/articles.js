export const categoryColors = {
  Architecture: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Business Strategy": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Technology: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  Development: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Security: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

export const featuredArticle = {
  id: "building-scalable-full-stack-applications",
  category: "Architecture",
  title: "Building Scalable Full-Stack Applications: A Developer's Guide",
  description:
    "A deep dive into the architectural decisions that separate short-lived prototypes from production-grade applications. From monolith to modular design, database indexing strategies, caching layers, and horizontal scaling — this guide covers the foundational patterns every full-stack developer needs to understand before scaling beyond a single server. Based on real-world experience building systems that handle thousands of concurrent users.",
  date: "Jan 15, 2026",
  readTime: "12 min read",
  image: "/assets/soft6.jpg",
  body: [
    {
      heading: "Start With the Right Boundaries",
      paragraphs: [
        "The difference between an application that scales and one that collapses under load is rarely the framework you choose — it is how you draw the boundaries between its parts. Before writing a single line of code, split the system into clear modules: authentication, business logic, data access, and presentation. Each module should own its responsibilities and expose a narrow, well-defined contract to the rest of the system.",
        "This modular thinking is what lets you scale parts independently. A slow reporting query should never block a user login. When every concern is properly isolated, you can optimize, cache, and scale exactly the piece that needs attention without reworking everything around it.",
      ],
    },
    {
      heading: "Database Design That Holds Up",
      paragraphs: [
        "Indexes are the hidden backbone of performance. A query that scans ten million rows becomes instant the moment it uses a well-placed index. But indexes are not free — every one you add slows down writes. The art is choosing composite indexes that match your most common query patterns, and adding them deliberately rather than reactively.",
        "Start normalized to keep data consistent and free of duplication, then denormalize only where a measured read pattern justifies it. Partitioning and read replicas become relevant when you cross the point where a single database can no longer keep up — design your data access layer now so that switch is a configuration change, not a rewrite.",
      ],
    },
    {
      heading: "Caching and the Three-Layer Rule",
      paragraphs: [
        "Repeatedly computing the same expensive result is the fastest way to waste capacity. A pragmatic rule is to cache at three layers: the browser, the application, and the database. Browser caching reduces round trips for static assets, application-level caching absorbs repeated expensive queries, and query-result caching keeps hot reads off your primary database.",
        "The critical discipline with caching is invalidation — a stale cache is often worse than no cache at all. Cache by a versioned key that changes when the underlying data changes, and set sensible time-to-live values.",
      ],
    },
    {
      heading: "Scaling Beyond a Single Server",
      paragraphs: [
        "When your application outgrows one server, the conversation shifts from vertical scaling to horizontal scaling. Stateless application servers make this trivial — store session state in a shared store like Redis rather than in the server's memory so any instance can serve any request.",
        "A load balancer distributes traffic, but your database and queues become the new bottlenecks. Move slow, non-blocking work — emails, image processing, report generation — off the request path entirely. Done well, you can add capacity by spinning up more instances with no code changes at all.",
      ],
    },
    {
      heading: "Monitoring Before You Need It",
      paragraphs: [
        "You cannot scale what you cannot measure. Instrument your application from day one: request latency, error rates, database query time, and queue depth. Establish baselines so that when something regresses, the dashboard tells you before your users do.",
        "The systems that handle thousands of concurrent users are rarely magical — they are the ones where every layer was consciously designed, measured, and revisited. Apply these patterns from the start, and you build not just a working feature, but a system prepared to grow.",
      ],
    },
  ],
};

export const articles = [
  {
    id: "why-business-needs-custom-software",
    category: "Business Strategy",
    title: "Why Every Business Needs a Custom Software Solution",
    description:
      "Off-the-shelf tools get you started, but custom software gives you a competitive edge. Explore how tailored systems reduce operational friction, eliminate license costs, and align perfectly with your unique workflows. We have seen businesses transform their operations within weeks of switching to custom-built solutions.",
    date: "Jan 11, 2026",
    readTime: "8 min read",
    image: "/assets/image2.jpg",
    body: [
      {
        heading: "Off-the-Shelf Gets You Started, Custom Keeps You Ahead",
        paragraphs: [
          "Generic software is built for the average business — which means it fits no business perfectly. You bend your operations around rigid features, pay per-seat licenses that grow with every employee, and ship data to someone else's servers. It gets you operational quickly, but it caps how far your processes can evolve.",
          "Custom software inverts that relationship. The system bends to your workflow, not the other way around. Every screen, every report, every permission is shaped around how your team actually works, which removes constant friction and manual workarounds.",
        ],
      },
      {
        heading: "The Hidden Costs of License and Workaround Fees",
        paragraphs: [
          "The sticker price of off-the-shelf software never tells the whole story. Subscription costs multiply across your team, and feature gaps force you to patch the gaps with spreadsheets, copy-paste workflows, and third-party glue — each one a fragile point of failure.",
          "A custom system has design and build costs up front, but the running cost is predictable and the system compound — every feature you add builds on what exists. For most growing businesses, the break-even point arrives surprisingly fast, and the freedom to change direction is priceless.",
        ],
      },
      {
        heading: "Own Your Data, Own Your Advantage",
        paragraphs: [
          "Your business data is one of your most valuable assets, yet generic tools often keep it locked in proprietary formats you cannot fully export or reason about. Custom software puts your data in a database you control, structured to answer the questions you actually care about.",
          "That ownership is what powers real competitive advantage — bespoke reporting, integrations with your other systems, and the ability to move fast when the market shifts. We have seen businesses transform their operations within weeks of switching to a custom-built solution because suddenly everything connects.",
        ],
      },
    ],
  },
  {
    id: "the-role-of-apis-in-modern-software",
    category: "Technology",
    title: "The Role of APIs in Modern Software Architecture",
    description:
      "APIs are the backbone of connected systems. Learn how RESTful design, versioning strategies, rate limiting, and documentation practices create interfaces that other developers actually want to use. This guide draws from our experience building APIs that serve multiple client applications simultaneously.",
    date: "Jan 8, 2026",
    readTime: "10 min read",
    image: "/assets/software55.jpg",
    body: [
      {
        heading: "APIs as the Glue of Modern Systems",
        paragraphs: [
          "An API is a contract. It defines how one piece of software asks another for data or actions, shielding the caller from the provider's internal complexity. In a modern architecture, APIs are everywhere — mobile apps talking to backends, dashboards consuming services, and third-party tools integrating with your platform.",
          "The design decisions you make at the API boundary ripple through every consumer. A thoughtful contract makes your system a joy to integrate; a sloppy one turns every consumer into a fragile dependency.",
        ],
      },
      {
        heading: "RESTful Design That Developers Trust",
        paragraphs: [
          "Consistency is the core of a great REST API. Use nouns for resources, standard HTTP methods for actions, and stable, predictable naming. Return meaningful status codes, provide consistent error shapes, and include clear documentation that shows real examples, not just schema listings.",
          "Versioning is the safety net that lets you evolve without breaking consumers. Version explicitly in the URL or headers, deprecate slowly, and give clients time to migrate. An API you cannot safely improve is a liability, not an asset.",
        ],
      },
      {
        heading: "Protecting Your API Through Rate Limiting",
        paragraphs: [
          "A well-designed API is useless if one noisy consumer can bring it down for everyone. Rate limiting protects your resources and sets fair expectations across clients. Pair it with clear, machine-readable rate-limit headers so consumers can respect the boundaries gracefully rather than hammering until they get errors.",
          "Beyond limits, aim for idempotency on mutating operations so retries are safe, and keep responses minimal — return only what consumers need. Drawing on APIs we have built that serve multiple client applications simultaneously, these are the practices that keep an API both loved and reliable.",
        ],
      },
    ],
  },
  {
    id: "mobile-first-development-best-practices",
    category: "Development",
    title: "Mobile-First Development: Best Practices for 2026",
    description:
      "With mobile traffic surpassing desktop, designing mobile-first is no longer optional. Break down responsive breakpoints, touch targets, performance budgets, and progressive web app strategies that keep users engaged. These are battle-tested patterns from apps we have deployed for thousands of active users.",
    date: "Jan 5, 2026",
    readTime: "6 min read",
    image: "/assets/image8.jpg",
    body: [
      {
        heading: "Design for the Smallest Screen First",
        paragraphs: [
          "Mobile-first means you design the constrained version first and progressively enhance upward. This discipline forces you to prioritize what matters — if a feature cannot earn its place on a small screen, it probably does not deserve a bigger one either.",
          "Start with the content hierarchy, not the decorations. Define breakpoints around your content's natural points of collapse, not around a fixed list of devices. Your layout should reflow gracefully at any width in between.",
        ],
      },
      {
        heading: "Touch Targets and Performance Budgets",
        paragraphs: [
          "Fingers are not cursors. The comfortable minimum touch target is about 44 by 44 pixels, with generous spacing between interactive elements to prevent mis-taps. Keep interactive elements large, hit areas generous, and feedback immediate.",
          "Performance is a mobile feature, not an afterthought. Set a budget — for example, under 3 seconds on a mid-range device over a 3G connection — and treat every image and script as an expense against it. Lazy-load below-the-fold content, compress aggressively, and remove anything that does not earn its weight.",
        ],
      },
      {
        heading: "Meeting Users Wherever They Are",
        paragraphs: [
          "Progressive Web Apps give you the best of both worlds — a responsive site that installs to the home screen, works offline, and sends push notifications without a store visit. For many use cases they are the smartest first move before committing to a native app.",
          "These are battle-tested patterns from apps we have deployed for thousands of active users. The result is an experience that feels instant on a phone, forgiving of patchy connections, and genuinely pleasant to use — which is exactly what keeps people coming back.",
        ],
      },
    ],
  },
];

export const moreArticles = [
  {
    id: "database-design-patterns",
    category: "Architecture",
    title: "Database Design Patterns Every Developer Should Know",
    description:
      "From normalization to denormalization, composite indexes to partitioning — the database design decisions that determine whether your application performs at 100 rows or 100 million. We share the exact patterns we use when architecting databases for high-traffic applications.",
    date: "Dec 28, 2025",
    readTime: "9 min read",
    image: "/assets/image1.jpg",
    body: [
      {
        heading: "Schemas Are Contracts, Not Suggestions",
        paragraphs: [
          "The database is the single source of truth, and its design either makes your application predictable or becomes its biggest source of bugs. Start by modeling the domain honestly — entities, their relationships, and the constraints that must always hold. A well-designed schema prevents invalid states from ever being written.",
          "The classic trade-off between normalization and performance is best resolved by measuring. Normalize for integrity, then denormalize specific read paths only when profiling proves they are hot.",
        ],
      },
      {
        heading: "Indexes, Partitioning, and a Million Rows",
        paragraphs: [
          "Indexes do not solve every problem — they solve lookup problems. Choose composite indexes that serve your most frequent query patterns and avoid indexing every column just because you can. Every index speeds reads at the cost of writes, so be deliberate.",
          "When tables reach millions of rows, partitioning lets you split data by a natural key — like date — so queries scan only the relevant slices. Pair this with archival strategies for old data, and your database stays fast even as it grows far beyond the size where other applications start to crawl.",
        ],
      },
    ],
  },
  {
    id: "securing-web-applications",
    category: "Security",
    title: "Securing Web Applications: From Authentication to Deployment",
    description:
      "A comprehensive walkthrough of modern web application security — covering JWT best practices, CORS configuration, SQL injection prevention, and infrastructure hardening for production environments. Every recommendation is based on real security audits and production deployments.",
    date: "Dec 20, 2025",
    readTime: "11 min read",
    image: "/assets/image8.jpg",
    body: [
      {
        heading: "Authentication Done Right",
        paragraphs: [
          "Security starts at the door. For JWT-based authentication, store tokens securely, keep them short-lived, and support refresh tokens with rotation. Never trust a token until you verify its signature and its expiry — and always use HTTPS so tokens travel encrypted end to end.",
          "Harden password handling with strong hashing algorithms and enforce lockout and rate limiting on login attempts. Multi-factor authentication should be available on anything that touches sensitive data.",
        ],
      },
      {
        heading: "Trust Nothing, Validate Everything",
        paragraphs: [
          "CORS is about telling browsers exactly which origins may call your API — a narrow allowlist rather than a wildcard. Input validation and parameterized queries remain your primary defense against injection attacks; never interpolate user input directly into a query string or a shell command.",
          "Escape output to prevent stored and reflected cross-site scripting. Treat every user-supplied string as untrusted until proven otherwise, and centralize validation so the rules are consistent and testable.",
        ],
      },
      {
        heading: "Hardening for Production",
        paragraphs: [
          "Move secrets out of source code and into environment variables or a secrets manager. Keep dependencies updated, run with least privilege, and enable logging and monitoring so suspicious activity is visible early.",
          "These are the practices we apply on every production deployment — from audits to infrastructure hardening. Security is not a one-time task but a discipline woven through development, deployment, and monitoring.",
        ],
      },
    ],
  },
  {
    id: "react-vs-nextjs",
    category: "Development",
    title: "React vs Next.js: Choosing the Right Framework",
    description:
      "Both are powerful, but they solve different problems. Compare rendering strategies, SEO capabilities, developer experience, and deployment models to make an informed architectural choice. We have built production applications with both and share our honest assessment.",
    date: "Dec 15, 2025",
    readTime: "7 min read",
    image: "/assets/image3.jpg",
    body: [
      {
        heading: "Two Tools, Different Jobs",
        paragraphs: [
          "React is a library for building user interfaces — you assemble the rest of your stack yourself, from routing to data fetching to build tooling. Next.js is a framework built on React that makes opinionated choices for you: file-based routing, server rendering, image optimization, and API routes out of the box.",
          "The choice is less about which is 'better' and more about what your application needs. A client-heavy interactive app where SEO is secondary might be perfectly served by React alone. A content site or a marketing and product experience that needs strong search visibility will lean on Next.js's server rendering.",
        ],
      },
      {
        heading: "Rendering, SEO, and the Real Trade-Offs",
        paragraphs: [
          "The biggest concrete difference is rendering strategy. Next.js offers server-side rendering and static generation, which means meaningful HTML reaches search engines and slow devices immediately. React's default client-side rendering shows a blank shell until JavaScript loads — a real cost for SEO and first paint on low-end hardware.",
          "That power comes with complexity. Next.js introduces more concepts to learn and more moving parts to reason about. If you do not need SEO or fast first paint, the extra machinery may simply be overhead.",
        ],
      },
      {
        heading: "Our Honest Recommendation",
        paragraphs: [
          "We have shipped production applications on both. Our rule of thumb: choose Next.js when SEO, content, and initial load speed matter, or when you want a batteries-included full-stack experience. Choose plain React when you have a highly interactive, app-like interface that lives behind a login and does not depend on search traffic.",
          "Whichever you pick, both run beautifully on modern hosting and share the same component model — so a later migration is far less painful than switching between completely different ecosystems.",
        ],
      },
    ],
  },
];

export const allArticles = [featuredArticle, ...articles, ...moreArticles];
