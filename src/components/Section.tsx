import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  backgroundUrl?: string;
  backgroundFixed?: boolean;
  backgroundOverlayClassName?: string;
  backgroundZoom?: number; // 1 = cover, >1 zooms in further
  backgroundZoomMobile?: number; // override zoom on small screens
};

export default function Section({ id, title, children, className, backgroundUrl, backgroundFixed, backgroundOverlayClassName, backgroundZoom, backgroundZoomMobile }: SectionProps) {
  return (
    <section id={id} className={`section anchor-offset relative z-0 ${className ?? ""}`}>
      {backgroundUrl ? (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
          {/* Mobile background (hidden on md and up) */}
          <div
            className={`absolute inset-0 md:hidden ${backgroundFixed ? "" : ""}`}
            style={{
              backgroundImage: `url(${backgroundUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: backgroundZoomMobile && backgroundZoomMobile > 1 ? `scale(${1 + (backgroundZoomMobile - 1) * 0.1})` : undefined,
              transformOrigin: "center",
            }}
          />
          {/* Desktop/tablet background (hidden on small screens) */}
          <div
            className={`absolute inset-0 hidden md:block ${backgroundFixed ? "bg-fixed" : ""}`}
            style={{
              backgroundImage: `url(${backgroundUrl})`,
              backgroundSize: backgroundZoom && backgroundZoom > 0 ? `${backgroundZoom * 100}%` : "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {backgroundOverlayClassName ? (
            <div className={`absolute inset-0 ${backgroundOverlayClassName}`} />
          ) : null}
        </div>
      ) : null}
      <div className="container-default relative z-10">
        {title ? (
          <h2 className={`section-title ${backgroundUrl ? "text-white" : ""}`}>
            <span className="inline-block border-b-4 border-accent pb-1">{title}</span>
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}


