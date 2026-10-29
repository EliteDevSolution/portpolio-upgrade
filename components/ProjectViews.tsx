import Link from "next/link";
import type { Project } from "@/lib/content";
import { ArrowIcon } from "./Icons";
import { ImageSlider } from "./ImageSlider";

export function Avatars({ project }: { project: Project }) {
  return (
    <div className="mb-3 flex items-center">
      {project.team.map((member, index) => (
        <span
          key={`${member.name}-${index}`}
          title={member.name}
          className="-ml-2 flex size-8 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--bg)] bg-[var(--pill)] text-[11px] font-medium first:ml-0"
        >
          {member.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={member.avatar} alt="" className="size-full object-cover" />
          ) : (
            <span aria-hidden>{member.name.slice(0, 1)}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export function ProjectRow({
  project,
  showImage = false,
}: {
  project: Project;
  showImage?: boolean;
}) {
  return (
    <article>
      {showImage && (
        <ImageSlider images={project.images} title={project.title} />
      )}
      <div className="relative mb-8 h-px bg-[var(--line)]">
        <span className="absolute top-1/2 left-0 h-[3px] w-[34%] -translate-y-1/2 bg-[var(--fg)]" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 md:gap-16">
        <h2 className="text-[1.7rem] leading-tight font-semibold tracking-tight">
          <Link href={`/work/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h2>
        <div>
          <Avatars project={project} />
          <p className="max-w-2xl text-[var(--body)]">{project.description}</p>
          <Link
            href={`/work/${project.slug}`}
            className="mt-5 inline-flex items-center gap-2 font-medium text-[var(--brand)]"
          >
            Read case study
            <ArrowIcon className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
