import type { Metadata } from "next";
import {
  experiences,
  person,
  skills,
  socials,
  studies,
  toc,
} from "@/lib/site";
import { GlobeIcon, SocialIcon } from "@/components/Icons";
import { ScheduleCall } from "@/components/ScheduleCall";

export const metadata: Metadata = {
  title: "About – Baros Akriovs Jiang",
  description: "Meet Baros Akriovs Jiang, Software Engineer from Kavala, Greece",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-10 pb-16 sm:px-8">
      <aside className="fixed top-1/2 left-6 z-30 hidden w-44 -translate-y-1/2 xl:block">
        <nav className="space-y-4 text-sm">
          {toc.map((section) => (
            <div key={section.id}>
              <a href={`#${section.id}`} className="font-medium hover:text-[var(--brand)]">
                {section.label}
              </a>
              {section.items && (
                <div className="mt-1 space-y-1 border-l border-[var(--line)] pl-3 text-[var(--muted)]">
                  {section.items.map((item) => (
                    <a key={item} href={`#${section.id}`} className="block hover:text-[var(--fg)]">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="flex flex-col items-center gap-4 lg:sticky lg:top-28 lg:self-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={person.avatar}
            alt={person.name}
            className="size-28 rounded-full object-cover"
          />
          <p className="flex items-center gap-2 text-sm text-[var(--muted)]">
            <GlobeIcon className="size-4 text-[var(--brand)]" />
            {person.location}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {person.languages.map((language) => (
              <span
                key={language}
                className="rounded-full border border-[var(--line)] px-3 py-1 text-sm"
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <ScheduleCall />
          <h1 id="introduction" className="text-5xl font-semibold tracking-tight">
            {person.name}
          </h1>
          <p className="mt-2 text-xl text-[var(--muted)]">{person.title}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--nav)] px-3 py-1.5 text-sm"
              >
                <SocialIcon name={social.icon} className="size-4" />
                {social.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-lg leading-8 text-[var(--body)]">{person.intro}</p>

          <h2 id="work-experience" className="mt-14 text-2xl font-semibold tracking-tight">
            Work Experience
          </h2>
          <div className="mt-6 space-y-10">
            {experiences.map((job) => (
              <section key={job.company}>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-xl font-semibold">{job.company}</h3>
                  <p className="text-sm text-[var(--muted)]">{job.timeframe}</p>
                </div>
                <p className="mt-1 text-sm text-[var(--brand)]">{job.role}</p>
                {"place" in job && job.place ? (
                  <p className="mt-1 text-sm text-[var(--muted)]">{job.place}</p>
                ) : null}
                <ul className="mt-4 list-disc space-y-3 pl-5 text-[var(--body)]">
                  {job.achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <h2 id="education" className="mt-14 text-2xl font-semibold tracking-tight">
            Education
          </h2>
          <div className="mt-6 space-y-4">
            {studies.map((school) => (
              <div key={school.name}>
                <h3 className="text-xl font-semibold">{school.name}</h3>
                <p className="text-sm text-[var(--muted)]">{school.description}</p>
              </div>
            ))}
          </div>

          <h2 id="technical-skills" className="mt-14 text-2xl font-semibold tracking-tight">
            Core Technical Skills
          </h2>
          <div className="mt-6 space-y-8">
            {skills.map((skill) => (
              <section key={skill.title}>
                <h3 className="text-xl font-semibold">{skill.title}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--line)] px-3 py-1 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
