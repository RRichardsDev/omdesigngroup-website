import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative isolate bg-white">
      <div className="container-default flex flex-col items-start gap-8 py-20 sm:py-15">
        <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" /> Luxury Interior Design
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Spaces that feel effortless, refined, and uniquely yours
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-gray-400">
          O.M. Design Group is a boutique studio crafting timeless interiors across residential and boutique hospitality. We
          balance classic proportion with modern sensibility, layering texture, light, and detail.
        </p>
        <div className="flex gap-3">
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-black/15 px-5 py-3 text-sm font-semibold">
            Book a Call
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-black/5 to-transparent" />

      <div className="relative h-[300px] w-full overflow-hidden sm:h-[520px]">
        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600&auto=format&fit=crop"
          alt="Hero interior"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
}


