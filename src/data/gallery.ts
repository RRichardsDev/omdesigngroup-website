export type GalleryJob = {
  slug: string;
  title: string;
  coverImage: string; // Path under public/
  images: string[]; // Paths under public/
};

export const galleryJobs: GalleryJob[] = [
  {
    slug: "upper-east-side-residence",
    title: "Upper East Side Residence",
    coverImage: "/portfolio-1.jpg",
    images: ["/portfolio-1.jpg"],
  },
  {
    slug: "chelsea-loft",
    title: "Chelsea Loft",
    coverImage: "/portfolio-2.jpg",
    images: ["/portfolio-2.jpg"],
  },
  {
    slug: "brooklyn-townhouse",
    title: "Brooklyn Townhouse",
    coverImage: "/portfolio-3.jpg",
    images: ["/portfolio-3.jpg"],
  },
  {
    slug: "hamptons-beach-house",
    title: "Hamptons Beach House",
    coverImage: "/portfolio-4.jpg",
    images: ["/portfolio-4.jpg"],
  },
  {
    slug: "soho-studio",
    title: "SoHo Studio",
    coverImage: "/portfolio-5.jpg",
    images: ["/portfolio-5.jpg"],
  },
  {
    slug: "west-village-apartment",
    title: "West Village Apartment",
    coverImage: "/portfolio-6.jpg",
    images: ["/portfolio-6.jpg"],
  },
  {
    slug: "tribeca-penthouse",
    title: "Tribeca Penthouse",
    coverImage: "/portfolio-7.jpg",
    images: ["/portfolio-7.jpg"],
  },
  {
    slug: "park-slope-brownstone",
    title: "Park Slope Brownstone",
    coverImage: "/portfolio-8.jpg",
    images: ["/portfolio-8.jpg"],
  },
  {
    slug: "noho-residence",
    title: "NoHo Residence",
    coverImage: "/portfolio-9.jpg",
    images: ["/portfolio-9.jpg"],
  },
];


