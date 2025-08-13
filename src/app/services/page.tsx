import Header from "@/components/Header";
import Section from "@/components/Section";

type ServiceCategory = {
  title: string;
  slug: string;
  icon: string; // emoji
  items: string[];
};

const categories: ServiceCategory[] = [
  {
    title: "Design & Planning",
    slug: "design-planning",
    icon: "📐",
    items: [
      "Space Planning",
      "Lighting Design and Selection",
      "CAD / Revit / Hand Drawn Renderings",
    ],
  },
  {
    title: "Renovation & Hospitality",
    slug: "renovation-hospitality",
    icon: "🏨",
    items: [
      "Residential & Commercial Remodeling (Full or Partial)",
      "Hospitality Design or Redesign",
    ],
  },
  {
    title: "Kitchens, Baths & Details",
    slug: "kitchens-baths-details",
    icon: "🛁",
    items: [
      "Appliance and Plumbing Selections",
      "Cabinetry Designs and Specifications",
      "Countertops and Edge Details",
      "Fireplaces & Accent Features",
      "Tile Designs for Backsplashes and Surrounds",
      "Doors and Hardware",
    ],
  },
  {
    title: "Finishes & Textiles",
    slug: "finishes-textiles",
    icon: "🧵",
    items: [
      "Custom Home Finish Selection",
      "Finishes, Colorization and Textures",
      "Fabric Selections and Colorization",
      "Window Treatment Design",
    ],
  },
  {
    title: "Furnishings & Decor",
    slug: "furnishings-decor",
    icon: "🛋️",
    items: [
      "Furniture Selection and Custom Designs",
      "Rug Selections and Designs",
      "Art and Accessories Selection",
      "Bedding, Pillows",
      "Reupholstering",
    ],
  },
  {
    title: "Procurement & Delivery",
    slug: "procurement-delivery",
    icon: "🚚",
    items: ["Product Ordering, Tracking and Delivery"],
  },
];

export default function ServicesPage() {
  return (
    <div className="font-sans">
      <Header />
      <Section
        title="Services"
        backgroundUrl="/services.jpeg"
        backgroundFixed
        backgroundOverlayClassName="bg-black/40"
        backgroundZoom={2.0}
        backgroundZoomMobile={8.0}
      >
        <div className="grid gap-6">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              id={cat.slug}
              className="anchor-offset group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 md:p-8"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-md bg-black/5 p-2" aria-hidden>
                  <div className="flex h-full w-full items-center justify-center text-xl">
                    <span aria-hidden>{cat.icon}</span>
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-black">{cat.title}</h2>
              </div>
              <ul className="mt-2 grid list-disc gap-1 pl-5 text-gray-800">
                {cat.items.map((item) => (
                  <li key={item} className="marker:text-accent/90">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}


