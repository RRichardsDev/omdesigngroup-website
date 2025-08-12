import Image from "next/image";
import { navItems } from "@/components/navItems";

export default function Hero() {
  return (
    <section className="relative isolate h-screen min-h-[540px] w-full">
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        {/* Mobile: slightly zoomed, no fixed attachment */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: "url(/hero.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            transform: "scale(1.1)",
            transformOrigin: "center",
          }}
        />
        {/* Desktop/Tablet: fixed background */}
        <div
          className="absolute inset-0 hidden md:block bg-fixed"
          style={{
            backgroundImage: "url(/hero.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Centered stationary logo overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="rounded-md bg-white/10 backdrop-blur-sm ring-1 ring-white/30 p-4 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)] border border-white">
          <Image
            src="/logo.svg"
            alt="O.M. Design Group"
            width={380}
            height={100}
            className="w-72 md:w-96 h-auto"
            priority
          />
        </div>
      </div>

      <div className="container-default absolute inset-x-0 top-0 z-10 py-6">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-lg font-medium font-serif text-white/90">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="underline-offset-4 hover:text-white hover:underline">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Scroll indicator to first section */}
      <a
        href="#portfolio"
        aria-label="Scroll to portfolio"
        className="group absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/10 text-white backdrop-blur-sm glow-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="h-6 w-6"
          >
            <path fillRule="evenodd" d="M12 16a.75.75 0 0 1-.53-.22l-5-5a.75.75 0 1 1 1.06-1.06L12 14.19l4.47-4.47a.75.75 0 0 1 1.06 1.06l-5 5c-.14.14-.34.22-.53.22Z" clipRule="evenodd" />
          </svg>
        </span>
      </a>
    </section>
  );
}


