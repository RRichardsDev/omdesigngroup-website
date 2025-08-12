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
              title: "Full-Service Interior Design",
              desc: "Turnkey design from concept to installation for renovations and new builds.",
              icon: "/window.svg",
            },
            {
              title: "Furnishing & Styling",
              desc: "FF&E, custom pieces, art curation, and final styling.",
              icon: "/file.svg",
            },
            {
              title: "Consulting",
              desc: "Hourly consulting for layout, finishes, and selections.",
              icon: "/globe.svg",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white/95 p-6 shadow-md ring-1 ring-black/5 transition md:p-8 hover:-translate-y-0.5 hover:shadow-lg hover:ring-black/10"
            >
              <div className="mb-4 h-1.5 w-12 rounded-full bg-accent/90" aria-hidden />
              <div className="mb-3 flex items-center gap-3">
                <div className="h-10 w-10 shrink-0 rounded-md bg-black/5 p-2" aria-hidden>
                  <div className="relative h-full w-full">
                    <Image src={s.icon} alt="" fill className="object-contain" sizes="40px" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{s.title}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {s.desc}
              </p>
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
