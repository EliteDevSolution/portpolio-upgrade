"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AboutIcon,
  BlogIcon,
  ChevronIcon,
  GalleryIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  WorkIcon,
} from "./Icons";
import { person } from "@/lib/site";

const links = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/about", label: "About", icon: AboutIcon },
  { href: "/work", label: "Work", icon: WorkIcon },
  { href: "/blog", label: "Blog", icon: BlogIcon },
  { href: "/gallery", label: "Gallery", icon: GalleryIcon },
];

function formatLocalTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: person.timezone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

export function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const tick = () => setTime(formatLocalTime(new Date()));
    const id = window.setInterval(tick, 1000);
    tick();
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("data-theme", next);
  }

  return (
    <>
      <p className="fixed top-6 left-6 z-50 hidden text-sm whitespace-nowrap text-[var(--muted)] md:block">
        {person.location}
      </p>
      <p className="fixed top-6 right-6 z-50 hidden text-right text-sm tabular-nums text-[var(--muted)] md:block">
        {time}
      </p>
      <header className="sticky top-0 z-40 px-3 pt-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl justify-center">
        <nav className="flex items-center gap-0.5 rounded-full border border-[var(--line)] bg-[var(--nav)] p-1 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-sm transition-colors sm:px-3 ${
                  active
                    ? "bg-[var(--pill)] text-[var(--fg)]"
                    : "text-[var(--fg)] hover:bg-[var(--pill)]"
                }`}
              >
                <Icon className="size-4" />
                {link.href !== "/" && (
                  <span className="hidden sm:inline">{link.label}</span>
                )}
              </Link>
            );
          })}
          <span className="mx-1 hidden h-5 w-px bg-[var(--line)] sm:block" />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex size-8 items-center justify-center rounded-full text-[var(--fg)] hover:bg-[var(--pill)]"
          >
            <MoonIcon className="theme-moon size-4" />
            <SunIcon className="theme-sun size-4" />
          </button>
        </nav>
        </div>
      </header>
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={() => {
          const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        }}
        className={`fixed right-6 bottom-6 z-50 flex size-11 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] bg-[var(--nav)] text-[var(--fg)] shadow-lg transition-opacity ${
          showTop ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ChevronIcon className="size-5 -rotate-90" />
      </button>
    </>
  );
}
