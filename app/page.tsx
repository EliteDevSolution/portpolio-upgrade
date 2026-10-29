import Link from "next/link";
import { Newsletter } from "@/components/Newsletter";
import { ProjectRow } from "@/components/ProjectViews";
import { projects } from "@/lib/content";
import { person } from "@/lib/site";

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-10 sm:px-8">
      <div className="flex flex-col items-center text-center">
        <Link
          href={`/work/${featured[0]?.slug ?? ""}`}
          className="role-badge mb-8 inline-flex items-center rounded-full px-1 py-1 text-sm"
        >
          <span className="rounded-full px-3 py-1 font-medium">{person.role}</span>
          <span className="mx-1 h-4 w-px bg-indigo-200" />
          <span className="px-3 py-1 text-[var(--brand)]">Featured projects</span>
        </Link>
        <h1 className="max-w-3xl text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-6xl">
          {person.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
          {person.subline}
        </p>
        <Link
          href="/about"
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--nav)] py-1.5 pr-5 pl-1.5 shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={person.avatar}
            alt=""
            className="size-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium">About – {person.name}</span>
        </Link>
      </div>

      <div className="mt-20 space-y-16">
        {featured.map((project) => (
          <ProjectRow key={project.slug} project={project} showImage />
        ))}
      </div>

      <Newsletter />
    </div>
  );
}
