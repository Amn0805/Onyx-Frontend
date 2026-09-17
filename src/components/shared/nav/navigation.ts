// src/components/shared/nav/navigation.ts
//
// Single source of truth for the header. Text, routes and descriptions are
// code-driven by design. Only `image` on a service is intended to move to
// Sanity later.

export interface ServiceLink {
  label: string;
  href: string;
  description: string;
  image: string;
}

/** A column in the Services mega menu. */
export interface ServiceGroup {
  title: string;
  services: ServiceLink[];
}

/** A card in the Who we help / Work / Company menus. */
export interface MenuCard {
  label: string;
  href: string;
  description: string;
}

export type NavItem =
  | { label: string; href: string; menu?: never; cards?: never }
  | { label: string; menu: "services"; href?: never; cards?: never }
  | { label: string; menu: "cards"; cards: MenuCard[]; href?: never };

export const navItems: NavItem[] = [
  { label: "Services", menu: "services" },
  {
    label: "Who we help",
    menu: "cards",
    cards: [
      { label: "Developers & construction", href: "/who-we-help/developers", description: "Visuals that sell units" },
      { label: "Architects & landscape", href: "/who-we-help/architects", description: "Images that win projects" },
      { label: "Interior designers", href: "/who-we-help/interior-designers", description: "Faster client approvals" },
      { label: "Homeowners", href: "/who-we-help/homeowners", description: "Decide with confidence" },
      { label: "Students", href: "/who-we-help/students", description: "Thesis and portfolio packages" },
    ],
  },
  {
    label: "Work",
    menu: "cards",
    cards: [
      { label: "Case studies", href: "/case-studies", description: "Challenge, what we delivered, results" },
      { label: "Gallery", href: "/gallery", description: "Browse renders by project type" },
      { label: "Client reviews", href: "/client-reviews", description: "What clients say about working with us" },
    ],
  },
  {
    label: "Company",
    menu: "cards",
    cards: [
      { label: "About us", href: "/studio", description: "Our story, team and way of working" },
      { label: "Careers", href: "/career", description: "Join the studio" },
      { label: "Contact", href: "/studio/#scheduleCall", description: "Quote, call or WhatsApp" },
    ],
  },
  { label: "Contact", href: "/studio/#scheduleCall" },
];

/** Grouped into the four columns of the Services mega menu. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Architectural renders",
    services: [
      { label: "Exterior 3D Renderings", href: "/services/exterior-3d-renderings", description: "Facades, landscaping and light studied together, so a building is judged the way it will actually be seen from the street.", image: "/services/exterior-3d-renderings.svg" },
      { label: "Interior 3D Visualization", href: "/services/interior-3d-visualization", description: "Rooms built to the drawing and lit to the hour, with materials detailed enough to sell the space before it exists.", image: "/services/interior-3d-visualization.svg" },
      { label: "Residential Rendering", href: "/services/residential-rendering", description: "Homes presented the way buyers picture living in them, from single dwellings to full schemes.", image: "/services/residential-rendering.svg" },
      { label: "Real Estate Rendering", href: "/services/real-estate-rendering", description: "Marketing imagery built for listings and brochures, ready well before the first brick is laid.", image: "/services/real-estate-rendering.svg" },
      { label: "Aerial View Rendering", href: "/services/aerial-view-rendering", description: "The whole development and its surroundings in one convincing view.", image: "/services/aerial-view-rendering.svg" },
       { label: "Commercial 3D Visualization", href: "/services/commercial-3d-visualization", description: "Offices, retail and hospitality shown at the scale investors and tenants need to judge a space properly.", image: "/services/commercial-3d-visualization.svg" },
    ],
  },
  {
    title: "Plans & modeling",
    services: [
      { label: "Floor Plans", href: "/services/floor-plan", description: "Rendered in full 3D with textures, furniture and lighting to show scale, flow and function at a glance.", image: "/services/floor-plan.svg" },
      { label: "Site Plan Rendering", href: "/services/site-plan-rendering", description: "Masterplans rendered with real materials and planting, so circulation and phasing read at a glance.", image: "/services/site-plan-rendering.svg" },
      { label: "Architectural 3D Modeling", href: "/services/architectural-3d-modeling", description: "Accurate models built from your drawings, clean enough to render from and reliable enough to measure against.", image: "/services/architectural-3d-modeling.svg" },
    ],
  },
  {
    title: "Animation & tours",
    services: [
       { label: "3D Walkthroughs", href: "/services/walkthrough", description: "A continuous move through the finished space, cut to show the route a visitor would actually take.", image: "/services/walkthrough.svg" },
      { label: "Architectural Animation", href: "/services/architectural-animation", description: "Cinematic sequences that decide which moments a viewer gets and in what order.", image: "/services/architectural-animation.svg" },    
    ],
  },
  {
    title: "Product & furniture",
    services: [
      { label: "Furniture Rendering", href: "/services/furniture-rendering", description: "Upholstery, grain and joinery rendered close enough to inspect, in room sets or on clean backgrounds.", image: "/services/furniture-rendering.svg" },
      { label: "Furniture Modeling", href: "/services/furniture-modeling", description: "Production-ready furniture models with correct proportions and materials, reusable across every scene.", image: "/services/furniture-modeling.svg" },
      { label: "Product Modeling", href: "/services/product-modeling", description: "Precise geometry built from specifications or samples, ready for rendering, configurators and web viewers.", image: "/services/product-modeling.svg" },
      { label: "3D Product Visualization", href: "/services/3d-product-visualization", description: "Studio-quality product imagery without a studio. One model, every angle, every finish.", image: "/services/3d-product-visualization.svg" },
    ],
  },
];

/**
 * How the groups are laid out in the mega menu: three columns, with Plans &
 * modeling and Animation & tours stacked in the third. Reordering here changes
 * the menu without touching the component.
 */
function group(title: string): ServiceGroup {
  const found = serviceGroups.find((g) => g.title === title);
  if (!found) throw new Error(`Unknown service group: ${title}`);
  return found;
}

export const serviceColumns: ServiceGroup[][] = [
  [group("Architectural renders")],
  [group("Product & furniture")],
  [group("Plans & modeling"), group("Animation & tours")],
];

/** Flat list — /services/[slug] uses this for generateStaticParams. */
export const services: ServiceLink[] = serviceGroups.flatMap((g) => g.services);

/** Shown in the mega menu's preview panel until another is hovered. */
export const featuredService =
  services.find((s) => s.href === "/services/aerial-view-rendering") ?? services[0];