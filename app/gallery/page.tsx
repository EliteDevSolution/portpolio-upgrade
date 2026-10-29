import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Photo gallery – Baros Akriovs Jiang",
  description: "Project screenshots by Baros Akriovs Jiang",
};

export default function GalleryPage() {
  const shots = projects.flatMap((project) =>
    project.images.map((src, index) => ({
      src,
      title: project.title,
      slug: project.slug,
      label: `${project.title} ${index + 1}`,
    })),
  );

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-16 sm:px-8">
      <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Photo gallery – Baros Akriovs Jiang
      </h1>
      <p className="mt-3 text-center text-[var(--muted)]">
        Screenshots from the work projects
      </p>
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shots.map((shot) => (
          <Link
            key={shot.src}
            href={`/work/${shot.slug}`}
            className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-white"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={shot.src}
              alt={shot.label}
              className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <span className="block px-4 py-3 text-sm text-[var(--body)]">
              {shot.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
