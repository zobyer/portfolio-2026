// src/constants/experience.ts

export type Experience = {
  role: string;
  company: string;
  date: string;
  tech: string;
  product: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Fullstack Developer",
    company: "WellDev Bangladesh LTD",
    date: "Apr 2024 – Present",
    tech: "Ruby on Rails, Sidekiq, PostgreSQL, JavaScript, React.js, AWS, Heroku, Datadog",
    product: "Pick-E-Bike",
    bullets: [
      "Migrated PickBike to new environment, enabling product ownership transition via knowledge transfer with prior team",
      "Enabled new IoT bike integrations via third-party TCP service, handling protocol communication (speed setup/rental commands) while preserving legacy device support",
      "Ingested live telemetry from 500+ IoT bikes every 20s via long-polling background service, processing 1,500 updates/min",
      "Automated OneSignal user data sync via background workers: handled registrations/rentals/suspensions, optimized web server performance, and activated behavioral marketing",
      "Streamlined user onboarding: reduced registration steps by 60% (email/phone only for base features), deferring OCR/license checks until rental activation",
      "Led migration of Stripe integration to latest API version, resolving breaking changes across payment workflows without service disruption",
      "Strengthened test coverage around billing and checkout flows to guarantee stability during and after deployment",
    ],
  },
  {
    role: "Frontend Developer",
    company: "WellDev Bangladesh LTD",
    date: "Mar 2023 – Mar 2024",
    tech: "JavaScript, React.js, HTML, SASS",
    product: "MSM (Competitive Marketplace)",
    bullets: [
      "Developed a competitive marketplace enabling sellers to list products and buyers to place real-time bids",
      "Reduced API calls via RTK Query implementation for response caching",
      "Automated price discovery through auction-style sales mechanisms",
      "Developed shared React components maintaining consistent styling per design guidelines",
      "Included unit test coverage for UI components and state logic using React Testing Library (RTL), ensuring reliability of bidding features and reusable components",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Appnap LTD",
    date: "Nov 2022 – Feb 2023",
    tech: "JavaScript, React.js, Next.js, HTML, CSS, Tailwind CSS",
    product: "Amarpet",
    bullets: [
      "Designed reusable React components (product cards, modals, navigation) with Tailwind styling, reducing development time",
      "Wrote custom hooks for cart operations, authentication flows, and API error handling, decreasing code duplication",
      "Implemented hybrid rendering (SSR + CSR) to improve SEO for product pages while maintaining dynamic user experience",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Appnap LTD",
    date: "Oct 2021 – Feb 2023",
    tech: "JavaScript, Vue.js, Nuxt.js, HTML, CSS, Bootstrap",
    product: "Majhi",
    bullets: [
      "Enabled retailers to generate custom digital shops with dynamic URLs (e.g., majhi.com/shop-name)",
      "Developed step-by-step ordering flow with real-time order tracking/cancellation per shop",
      "Translated design specs into responsive, consistent Vue components",
      "Implemented Fabric.js to enable canvas customization, enhancing UI flexibility for dynamic content manipulation",
    ],
  },
  {
    role: "Backend Developer",
    company: "Evident BD LTD",
    date: "Jun 2021 – Sep 2021",
    tech: "Python, FastAPI, Celery, RabbitMQ",
    product: "Manage Your E-commerce",
    bullets: [
      "Refactored asynchronous backend services using FastAPI, Celery, and RabbitMQ to handle high-volume I/O operations across Amazon, eBay, and WooCommerce integrations",
      "Designed message-driven architecture using RabbitMQ to ensure reliable communication between distributed services",
      "Implemented background job processing with Celery to handle heavy I/O tasks efficiently, improving system responsiveness",
    ],
  },
];