"use client";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { galleryJobs } from "@/data/gallery";
import dynamic from "next/dynamic";

const Lightbox = dynamic(() => import("@/components/GalleryLightbox"), { ssr: false });

export default function GalleryJobPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug as string;
  const job = useMemo(() => galleryJobs.find((j) => j.slug === slug), [slug]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  if (!job) {
    return (
      <div className="font-sans">
        <Header />
        <Section title="Not Found">
          <p className="text-black/70">Project not found.</p>
        </Section>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <Header />
      <Section title={job.title}>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {job.images.map((src, i) => (
            <button
              key={src}
              type="button"
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-black/10"
              onClick={() => {
                setStartIndex(i);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={src}
                alt={`${job.title} ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Section>
      {lightboxOpen ? (
        <Lightbox
          images={job.images}
          startIndex={startIndex}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      ) : null}
    </div>
  );
}


