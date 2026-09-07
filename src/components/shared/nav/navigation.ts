/**
 * Single source of truth for the header.
 *
 * Text, routes and descriptions are code-driven by design. Only `image` is
 * intended to move to Sanity later — swapping it to a CDN url needs no change
 * in any component, since ServicesMegaMenu just reads `service.image`.
 */

export interface ServiceLink {
  label: string;
  href: string;
  /** Shown under the preview image while this service is hovered. */
  description: string;
  /** Local placeholder today, Sanity image url later. */
  image: string;
}

export interface NavItem {
  label: string;
  href?: string;
  /** Opens the services mega menu instead of navigating. */
  megaMenu?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Services", megaMenu: true },
  { label: "Case Study", href: "/case-study" },
  // No dedicated About route exists yet — /studio is the closest match.
  { label: "About Us", href: "/studio" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/studio/#scheduleCall" },
  { label: "Sign In", href: "/dashboard/login" },
];

/**
 * Order matters: the mega menu splits this list in half, so items 1–8 fill the
 * left column and 9–16 the right, matching the approved layout.
 */
export const services: ServiceLink[] = [
  {
    label: "Exterior 3D Renderings",
    href: "/services/exterior-3d-renderings",
    description:
      "Facades, landscaping and light studied together, so a building is judged the way it will actually be seen from the street.",
    image: "/services/exterior-3d-renderings.svg",
  },
  {
    label: "Interior 3D Visualization",
    href: "/services/interior-3d-visualization",
    description:
      "Rooms built to the drawing and lit to the hour, with materials and furnishings detailed enough to sell the space before it exists.",
    image: "/services/interior-3d-visualization.svg",
  },
  {
    label: "3D Product Visualization",
    href: "/services/3d-product-visualization",
    description:
      "Studio-quality product imagery without a studio. One model, every angle, every finish, consistent across your whole catalogue.",
    image: "/services/3d-product-visualization.svg",
  },
  {
    label: "Furniture Rendering",
    href: "/services/furniture-rendering",
    description:
      "Upholstery, grain and joinery rendered close enough to inspect, in room sets or on clean backgrounds for retail.",
    image: "/services/furniture-rendering.svg",
  },
  {
    label: "Architectural 3D Modeling",
    href: "/services/architectural-3d-modeling",
    description:
      "Accurate models built from your drawings, clean enough to render from and reliable enough to measure against.",
    image: "/services/architectural-3d-modeling.svg",
  },
  {
    label: "Furniture Modeling",
    href: "/services/furniture-modeling",
    description:
      "Production-ready furniture models with correct proportions and materials, reusable across every scene you place them in.",
    image: "/services/furniture-modeling.svg",
  },
  {
    label: "Product Modeling",
    href: "/services/product-modeling",
    description:
      "Precise geometry built from specifications or samples, ready for rendering, configurators and web viewers alike.",
    image: "/services/product-modeling.svg",
  },
  {
    label: "Walkthrough",
    href: "/services/walkthrough",
    description:
      "A continuous move through the finished space, cut to show the route a visitor would actually take.",
    image: "/services/walkthrough.svg",
  },
  {
    label: "Gallery",
    href: "/gallery",
    description:
      "The full archive of recent work across every category, from interiors and exteriors to product and floor plans.",
    image: "/services/gallery.svg",
  },
  {
    label: "Architectural Animation",
    href: "/services/architectural-animation",
    description:
      "Cinematic sequences that decide which moments a viewer gets and in what order — the difference between showing a building and arguing for one.",
    image: "/services/architectural-animation.svg",
  },
  {
    label: "Residential Rendering",
    href: "/services/residential-rendering",
    description:
      "Homes presented the way buyers picture living in them, from single dwellings to full residential schemes.",
    image: "/services/residential-rendering.svg",
  },
  {
    label: "Commercial 3D Visualization",
    href: "/services/commercial-3d-visualization",
    description:
      "Offices, retail and hospitality shown at the scale investors and tenants need to judge a space properly.",
    image: "/services/commercial-3d-visualization.svg",
  },
  {
    label: "Real Estate Rendering",
    href: "/services/real-estate-rendering",
    description:
      "Marketing imagery built for listings and brochures, ready well before the first brick is laid.",
    image: "/services/real-estate-rendering.svg",
  },
  {
    label: "Aerial View Rendering Services",
    href: "/services/aerial-view-rendering",
    description:
      "Context from above — how a development sits in its surroundings, its approach roads and its landscaping.",
    image: "/services/aerial-view-rendering.svg",
  },
  {
    label: "Site Plan Rendering",
    href: "/services/site-plan-rendering",
    description:
      "Masterplans rendered with real materials and planting, so circulation and phasing read at a glance.",
    image: "/services/site-plan-rendering.svg",
  },
  {
    label: "Floor Plan",
    href: "/services/floor-plan",
    description:
      "Our floor plans go beyond the flat view — rendered in full 3D with textures, furniture and lighting to show scale, flow and function at a glance.",
    image: "/services/floor-plan.svg",
  },
];

export const serviceColumns: [ServiceLink[], ServiceLink[]] = [
  services.slice(0, 8),
  services.slice(8),
];