import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import { galleryJobs } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <div className="font-sans">
      <Header />
      <Section title="Portfolio">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryJobs.map((job) => (
            <Link
              key={job.slug}
              href={`/gallery/${job.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-black/10">
                <Image
                  src={job.coverImage}
                  alt={job.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-base font-semibold tracking-tight">
                  {job.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}


