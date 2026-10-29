"use client";

import { FormEvent, useState } from "react";
import { person } from "@/lib/site";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
  }

  return (
    <section className="relative mt-16 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-6 py-12 text-center">
      <div className="newsletter-glow pointer-events-none absolute inset-x-0 bottom-0 h-24" />
      <h2 className="relative text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
        Subscribe to {person.name.split(" ")[0]}&apos;s Newsletter
      </h2>
      <p className="relative mt-2 text-lg text-[var(--muted)]">
        My weekly newsletter about creativity and engineering
      </p>
      {done ? (
        <p className="relative mt-8 text-sm font-medium text-[var(--brand)]">
          You&apos;re on the list. Thanks for subscribing.
        </p>
      ) : (
        <form
          onSubmit={onSubmit}
          className="relative mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="h-12 flex-1 rounded-full border border-[var(--line)] bg-[var(--nav)] px-5 text-sm outline-none ring-[var(--brand)] placeholder:text-[var(--muted)] focus:ring-2"
          />
          <button
            type="submit"
            className="h-12 rounded-full bg-[var(--fg)] px-6 text-sm font-medium text-[var(--bg)]"
          >
            Subscribe
          </button>
        </form>
      )}
    </section>
  );
}
