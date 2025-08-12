"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { testimonials, Testimonial } from "@/data/testimonials";

function AccordionItem({ item, open, onToggle }: { item: Testimonial; open: boolean; onToggle: () => void }) {
  return (
    <div id={item.id} className="rounded-lg border border-black/10 bg-white cursor-pointer anchor-offset">
      <button
        className="w-full text-left px-5 py-4 flex items-start gap-3 cursor-pointer"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${item.id}-content`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 text-sm font-semibold">
          {item.author
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((p) => p[0]?.toUpperCase())
            .join("")}
        </div>
        <div className="flex-1">
          <div className="font-semibold">
            {item.author} {item.subtitle ? <span className="text-black/60 font-normal">— {item.subtitle}</span> : null}
          </div>
          <div className="text-sm text-black/60">Testimonial</div>
        </div>
        <span className="ml-3 text-black/60">{open ? "–" : "+"}</span>
      </button>
      <div
        id={`${item.id}-content`}
        hidden={!open}
        className="px-5 pb-5 pt-0 text-gray-800 leading-relaxed whitespace-pre-line"
      >
        {item.body}
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash ? window.location.hash.slice(1) : null;
      if (id) {
        setOpenId(id);
        // Ensure the targeted item is scrolled into view accounting for fixed header
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            // Additional nudge by header height to avoid clipping under fixed header
            requestAnimationFrame(() => {
              const header = document.querySelector('header');
              const headerHeight = (header as HTMLElement | null)?.offsetHeight ?? 80;
              window.scrollBy({ top: -headerHeight - 8, left: 0, behavior: 'instant' as ScrollBehavior });
            });
          }
        }, 0);
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Section
        title="Testimonials"
        backgroundUrl="/testimonials-bg.jpeg"
        backgroundFixed
        backgroundOverlayClassName="bg-black/50"
        backgroundZoom={1.6}
        backgroundZoomMobile={2.6}
      >
        <div className="grid gap-4">
          {testimonials.map((t) => (
            <AccordionItem
              key={t.id}
              item={t}
              open={openId === t.id}
              onToggle={() => setOpenId((curr) => (curr === t.id ? null : t.id))}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}


