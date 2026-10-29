import type { Metadata } from "next";
import { ProjectRow } from "@/components/ProjectViews";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects – Baros Akriovs Jiang",
  description: "Web & mobile projects by Baros Akriovs Jiang",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-16 pb-16 sm:px-8">
      <h1 className="mb-14 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        Projects – Baros Akriovs Jiang
      </h1>
      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} showImage />
        ))}
      </div>
    </div>
  );
}
