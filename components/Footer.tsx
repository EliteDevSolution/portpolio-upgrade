import { person, socials } from "@/lib/site";
import { SocialIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="mt-auto px-4 py-6 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-[var(--muted)]">
          © 2026 /{" "}
          <span className="px-1 text-[var(--fg)]">{person.name}</span> / Built with
          ☕ and 💖
        </p>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              <SocialIcon name={social.icon} className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
