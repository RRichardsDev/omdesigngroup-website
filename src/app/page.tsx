import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import BeforeAfter from "@/components/BeforeAfter";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />

      {/* Portfolio */}
      <Section id="portfolio" title="Portfolio">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={`/portfolio-${i + 1}.jpg`}
                alt={`Project ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
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
      <Section id="testimonials" title="Testimonials">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["A.", "B.", "C."].map((initial, i) => (
            <figure key={i} className="rounded-lg border border-black/10 p-6">
              <blockquote className="text-base leading-relaxed ">
                “O.M. Design Group transformed our home beyond expectation. Every detail felt considered and personal.”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold">
                {initial} Parker — Private Residence
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section id="team" title="Team">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Henry Richards", role: "Principal Designer" },
            { name: "James Bennett", role: "Design Director" },
            { name: "Hana Kim", role: "Senior Designer" },
          ].map((m, i) => (
            <div key={i} className="rounded-lg border border-black/10 p-4">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-md">
                <Image
                  src={`/team-${i + 1}.jpeg`}
                  alt={m.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <p className="text-gray-600">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section id="about" title="About">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <p className="text-gray-600 text-lg">
            Founded in 2011, O.M. Design Group is a full-service studio based in New York, working globally. Our work layers
            natural materials, custom furniture, and curated art to create rooms that feel collected—not decorated.
          </p>
          <p className="text-gray-600">
            We collaborate closely with architects, artisans, and builders to deliver a seamless process from concept to
            installation. Our clients value discretion, craftsmanship, and spaces that stand the test of time.
          </p>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title="Services">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Full-Service Interior Design",
              desc: "Turnkey design from concept to installation for renovations and new builds.",
            },
            { title: "Furnishing & Styling", desc: "FF&E, custom pieces, art curation, and final styling." },
            { title: "Consulting", desc: "Hourly consulting for layout, finishes, and selections." },
          ].map((s, i) => (
            <div key={i} className="rounded-lg border border-black/10 p-6">
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <ContactForm />

          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Studio</h3>
              <p className="text-gray-600">200 Madison Ave, Suite 12C, New York, NY 10016</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-gray-600">hello@omdesigngroup.com · (212) 555-0190</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Hours</h3>
              <p className="text-gray-600">Mon–Fri, 9:00–18:00 ET · By appointment only</p>
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
