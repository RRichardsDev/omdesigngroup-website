import React from "react";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`section ${className ?? ""}`}>
      <div className="container-default">
        {title ? (
          <h2 className="section-title">
            <span className="inline-block border-b-4 border-accent pb-1">{title}</span>
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}


