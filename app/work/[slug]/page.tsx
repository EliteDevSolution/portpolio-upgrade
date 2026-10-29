import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Gallery } from "@/components/Gallery";
import { Markdown } from "@/components/Markdown";
import { Avatars, ProjectRow } from "@/components/ProjectViews";
import { formatDate, getProject, projects } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Page Not Found" };
  return { title: project.title, description: project.description };
}

export default function ProjectPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ProjectFallback />}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}

async function ProjectDetails({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <article className="mx-auto w-full max-w-6xl px-5 pt-12 pb-16 sm:px-8">
      <Link href="/work" className="text-sm text-[var(--muted)] hover:text-[var(--fg)]">
        Projects
      </Link>
      <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-4 text-sm text-[var(--muted)]">{formatDate(project.publishedAt)}</p>
      <p className="mt-4 max-w-2xl text-lg text-[var(--body)]">{project.description}</p>
      <div className="mt-6">
        <Avatars project={project} />
      </div>
      <div className="mt-8">
        <Gallery images={project.images} title={project.title} />
      </div>
      <div className="mt-10">
        <Markdown source={project.content} />
      </div>
      <section className="mt-20">
        <h2 className="mb-10 text-2xl font-semibold tracking-tight">Related projects</h2>
        <div className="space-y-14">
          {related.map((item) => (
            <ProjectRow key={item.slug} project={item} />
          ))}
        </div>
      </section>
    </article>
  );
}

function ProjectFallback() {
  return (
    <div className="mx-auto w-full max-w-6xl animate-pulse px-5 pt-12 pb-16 sm:px-8">
      <div className="h-4 w-16 rounded bg-[var(--pill)]" />
      <div className="mt-6 h-12 w-4/5 rounded bg-[var(--pill)]" />
      <div className="mt-4 h-4 w-32 rounded bg-[var(--pill)]" />
      <div className="mt-8 aspect-[16/10] rounded-2xl bg-[var(--pill)]" />
    </div>
  );
}
