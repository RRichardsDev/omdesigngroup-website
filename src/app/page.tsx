import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import BeforeAfter from "@/components/BeforeAfter";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { testimonials, truncateText } from "@/data/testimonials";
import { galleryJobs } from "@/data/gallery";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />

      {/* Portfolio */}
      <Section id="portfolio" title="Portfolio">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryJobs.map((job) => (
            <Link key={job.slug} href={`/gallery/${job.slug}`} className="group relative block aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={job.coverImage}
                alt={job.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/gallery" className="btn-primary">
            View full portfolio
          </Link>
        </div>
      </Section>

      {/* About */}
      <Section
        id="about"
        title="About"
        backgroundUrl="/about.jpeg"
        backgroundFixed
        backgroundOverlayClassName="bg-black/40"
        backgroundZoom={1.5}
        backgroundZoomMobile={2.6}
      >
        <div className="grid items-stretch gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* Welcome */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Welcome</h3>
            <p className="text-gray-800 leading-relaxed">
              Thank you for visiting. We design with purpose—and with people and planet in mind.
            </p>
          </div>

          {/* Environmental commitment */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Responsible by Design</h3>
            <p className="text-gray-800 leading-relaxed">
              We prioritize locally sourced goods, U.S.–made products, and green materials—whenever available and within budget.
            </p>
          </div>

          {/* Philosophy */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-2">A Collected Aesthetic</h3>
            <p className="text-gray-800 leading-relaxed">
              Rooted in the arts—with a love of architecture, fashion, and travel—we create distinctive spaces that elevate everyday life.
            </p>
          </div>

          {/* Collaboration */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Client-Centered Process</h3>
            <p className="text-gray-800 leading-relaxed">
              Engage as much—or as little—as you like. Your home should reflect your life, guided by our expertise.
            </p>
          </div>

          {/* Continuous learning */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Always Evolving</h3>
            <p className="text-gray-800 leading-relaxed">
              We stay current with advances in materials, fabrics, technology, and the design community at large.
            </p>
          </div>

          {/* Experience & trust */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Enjoyable, Informed, Trustworthy</h3>
            <p className="text-gray-800 leading-relaxed">
              Creating or recreating a space should be a pleasure—grounded in product knowledge and built on trust.
            </p>
          </div>

          {/* Invitation */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-2">Let’s Talk</h3>
            <p className="text-gray-800 leading-relaxed">
              We’d be happy to discuss your design needs and how we can bring your vision to life.
            </p>
          </div>

          {/* Membership / Affiliations */}
          <div className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <h3 className="text-lg font-semibold tracking-tight mb-3">Affiliations</h3>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-28">
                <Image
                  src="/asid.png"
                  alt="American Society of Interior Designers (ASID) — Member"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 112px"
                />
              </div>
              <div className="text-gray-800">
                <div className="font-medium">American Society of Interior Designers</div>
                <div className="text-sm text-black/70">Proud ASID member</div>
              </div>
            </div>
          </div>

          {/* Attribution tile (last) */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/30 bg-white/0 p-6 shadow-md ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-lg md:p-8">
            <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
            <div className="space-y-1 text-white">
              <div className="text-white/80">Kindest Regards,</div>
              <div className="text-2xl md:text-3xl font-semibold leading-tight">JoEllen Sessa</div>
              <div className="text-white/85">Principal & Lead Designer</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Before & After */}
      <Section id="before-after" title="Before & After">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <BeforeAfter
            beforeUrl="/before-1.png"
            afterUrl="/after-1.png"
            label="Kitchen renovation"
          />
          <BeforeAfter
            beforeUrl="/before-2.png"
            afterUrl="/after-2.png"
            label="Living room refresh"
          />
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        id="testimonials"
        title="Testimonials"
        backgroundUrl="/testimonials-bg.jpeg"
        backgroundFixed
        backgroundOverlayClassName="bg-black/50"
        backgroundZoom={1.6}
        backgroundZoomMobile={2.6}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.id} className="rounded-xl border border-black/10 bg-white p-6 shadow-md md:p-7">
              <div className="mb-3 text-accent">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <path d="M7.17 6C5.42 6 4 7.39 4 9.11c0 1.73 1.42 3.12 3.17 3.12.2 0 .39-.02.58-.06-.25 1.58-1.36 2.98-3.18 4.08-.2.12-.32.33-.32.56v1.7c0 .27.16.51.41.61.09.04.19.06.29.06.15 0 .3-.05.42-.13 3.53-2.26 5.1-4.83 5.1-8.16V9.11C10.47 7.39 9.05 6 7.17 6Zm9.66 0c-1.75 0-3.17 1.39-3.17 3.11v1.79c0 3.33 1.57 5.9 5.1 8.16.12.08.27.13.42.13.1 0 .2-.02.29-.06a.68.68 0 0 0 .41-.61v-1.7c0-.23-.12-.44-.32-.56-1.82-1.1-2.93-2.5-3.18-4.08.19.04.38.06.58.06 1.75 0 3.17-1.39 3.17-3.12C20 7.39 18.58 6 16.83 6Z" />
                </svg>
              </div>
              <blockquote className="text-lg leading-relaxed text-gray-800 md:text-xl">
                {truncateText(t.body)}
              </blockquote>
              <div className="mt-4">
                <Link href={`/testimonials#${t.id}`} className="text-accent hover:underline font-semibold">
                  Read more
                </Link>
              </div>
              <figcaption className="mt-5 border-t border-black/10 pt-3 text-sm font-medium text-gray-700">
                {t.author}{t.subtitle ? ` — ${t.subtitle}` : ""}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/testimonials" className="btn-primary">View more stories</Link>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" title="Team">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Henry Richards",
              role: "Interior Designer",
              bio: [
                "British-born and trained in architecture, Henry brings a deep love for interiors that feel as good as they look. He began his career in the UK, where he learned to see space not just as structure, but as story; a perspective that continues to shape his design philosophy today. From scale and form to light, flow, and how people truly live in their homes, every element is approached with intention.",
                "Now based in sunny Arizona (a far cry from grey skies and drizzle), Henry focuses on high-end residential interiors, blending architectural insight with a passion for organic form, texture, and soul. His aim is to create spaces that are not only beautiful but deeply personal—environments that support the way his clients live, unwind, gather, and grow.",
                "Outside the studio, Henry is at home with his husband, and their two sparkly, spirited daughters—often surrounded by glitter, half-finished art projects, and a lot of laughter. He loves wandering antique shops, climbing desert trails, and making time for a proper cup of tea.",
              ],
            },
            {
              name: "Michele Stokes",
              role: "Office Manager / Vendor Relations",
              bio:
                "After twenty five years in the construction sales industry, Michele has a vast knowledge of the industry at large, an expertise in dealing with vendors and incomparable customer service skills.",
            },
            {
              name: "JoEllen Sessa",
              role: "Principal & Lead Designer",
              bio: [
                "JoEllen spent two decades involved in the Boston arts and entertainment field. There she honed her expertise in design, spatial organization, customer service and marketing strategies. Her approach to her craft represents a combination of a fresh, clean aesthetic with an intelligently sophisticated edge. As an Allied Member of ASID and Certified Interior Designer, JoEllen possesses a unique ability to encompass her appreciation and enjoyment of the arts, her travels and the influences of fashion and cultures of the world in her design solutions.",
                "As the Principal of O.M. Design Group, she proudly celebrated ten years of Design Work in November of 2014. The team has worked on projects throughout the Valley and from Nantucket, MA to Telluride, CO. Opening the Design Studio in 2015 has brought a vast variety of options for Clients, from custom furniture to tile, Wallcoverings and architectural features.",
                "When not in the Studio or out in the field, you can find JoEllen planning an adventure, skiing or spending quality time with LadyBug, the official canine mascot of the team.",
              ],
            },
            {
              name: "Annie Lemon",
              role: "Project Coordinator",
              bio:
                "Having relocated from Bozeman, Montana, Annie joins the team as an experienced Project Manager. After studying Interior Design at Montana State University, she entered the workforce as a Project Manager for an international supply and logistics company, sourcing premium interior finishes to private residential developments around the world. Since then, she has worked at several notable design firms and takes pride in the relationships she has built with clients, vendors, and other artisans. When not at work, you will likely find Annie on the tennis courts with her husband, and their pups nearby.",
            },
          ].map((m, i) => (
            <div key={i} className="group relative overflow-hidden rounded-lg border border-black/10">
              <div className="relative aspect-square">
                <Image
                  src={`/team-${i + 1}.jpeg`}
                  alt={m.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg">{m.name}</h3>
                <p className="text-accent text-sm font-semibold">{m.role}</p>
              </div>
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex h-full flex-col p-4 text-white">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{m.name}</h3>
                    <p className="text-accent/90 text-sm font-semibold">{m.role}</p>
                  </div>
                  <div className="mt-3 grow overflow-y-auto pr-2 space-y-3 no-scrollbar">
                    {Array.isArray(m.bio) ? (
                      m.bio.map((paragraph, idx) => (
                        <p key={idx} className="text-sm leading-relaxed">{paragraph}</p>
                      ))
                    ) : (
                      <p className="text-sm leading-relaxed">{m.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>



      {/* Services */}
      <Section
        id="services"
        title="Services"
        backgroundUrl="/services.jpeg"
        backgroundFixed
        backgroundOverlayClassName="bg-black/40"
        backgroundZoom={1.5}
        backgroundZoomMobile={3.4}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Design & Planning",
              icon: "📐",
              items: [
                "Space Planning",
                "Lighting Design and Selection",
                "CAD / Revit / Hand Drawn Renderings",
              ],
              link: "/services#design-planning",
            },
            {
              title: "Renovation & Hospitality",
              icon: "🏨",
              items: [
                "Residential & Commercial Remodeling (Full or Partial)",
                "Hospitality Design or Redesign",
              ],
              link: "/services#renovation-hospitality",
            },
            {
              title: "Kitchens, Baths & Details",
              icon: "🛁",
              items: [
                "Appliance and Plumbing Selections",
                "Cabinetry Designs and Specifications",
                "Countertops and Edge Details",
                "Fireplaces & Accent Features",
                "Tile Designs for Backsplashes and Surrounds",
                "Doors and Hardware",
              ],
              link: "/services#kitchens-baths-details",
            },
            {
              title: "Finishes & Textiles",
              icon: "🧵",
              items: [
                "Custom Home Finish Selection",
                "Finishes, Colorization and Textures",
                "Fabric Selections and Colorization",
                "Window Treatment Design",
              ],
              link: "/services#finishes-textiles",
            },
            {
              title: "Furnishings & Decor",
              icon: "🛋️",
              items: [
                "Furniture Selection and Custom Designs",
                "Rug Selections and Designs",
                "Art and Accessories Selection",
                "Bedding, Pillows",
                "Reupholstering",
              ],
              link: "/services#furnishings-decor",
            },
            {
              title: "Procurement & Delivery",
              icon: "🚚",
              items: [
                "Product Ordering, Tracking and Delivery",
              ],
              link: "/services#procurement-delivery",
            },
          ].map((s, i) => (
            <Link
              key={i}
              href={s.link}
              aria-label={`View ${s.title} details`}
              className="group block relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-sm ring-1 ring-black/5 transition md:p-8 hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-accent/10 blur-2xl" aria-hidden />
              <div className="mb-4 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-sm ring-1 ring-black/10" aria-hidden>
                  <span aria-hidden>{s.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight">{s.title}</h3>
              </div>
              <div className="mt-2 flex items-center gap-2 text-accent font-semibold">
                <span>View details</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-0.5"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 1 1-1.414-1.414L13.586 11H4a1 1 0 1 1 0-2h9.586l-3.293-3.293a1 1 0 0 1 0-1.414Z" clipRule="evenodd" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <ContactForm />

          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Design Studio</h3>
              <p className="text-gray-600">8700 E Vista Bonita Drive, Suite 224, Scottsdale, AZ 85255</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-gray-600">hello@omdesigngroup.com · 480-915-0129</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Hours</h3>
              <p className="text-gray-600">Mon–Thu, 9:30–4pm · Fri, 9:30–2pm</p>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-black/10 py-8">
        <div className="container-default flex flex-col items-center justify-between gap-3 text-sm text-black/60 sm:flex-row">
          <p>© {new Date().getFullYear()} O.M. Design Group. All rights reserved.</p>
          <p>
            Handcrafted with <span className="text-accent">●</span> in New York.
          </p>
        </div>
      </footer>
    </div>
  );
}
