"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { person } from "@/lib/site";
import { CalendarIcon, ChevronIcon } from "./Icons";

const HOST_EMAIL = person.email;
const TIMEZONE = person.timezone;
const SLOT_STARTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

type DayOption = {
  ymd: string;
  label: string;
  weekday: string;
};

function dublinToday() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function dublinNow() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date());
}

function shiftDate(ymd: string, days: number) {
  const [year, month, day] = ymd.split("-").map(Number);
  const next = new Date(Date.UTC(year, month - 1, day + days, 12));
  return next.toISOString().slice(0, 10);
}

function weekdayOf(ymd: string) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "UTC",
    weekday: "short",
  }).format(new Date(`${ymd}T12:00:00Z`));
}

function buildDays() {
  const today = dublinToday();
  const now = dublinNow();
  const days: DayOption[] = [];

  for (let offset = 0; days.length < 8 && offset < 21; offset += 1) {
    const ymd = shiftDate(today, offset);
    const weekday = weekdayOf(ymd);
    if (weekday === "Sat" || weekday === "Sun") continue;
    if (offset === 0 && !SLOT_STARTS.some((slot) => slot > now)) continue;
    days.push({
      ymd,
      weekday,
      label: new Intl.DateTimeFormat("en-US", {
        timeZone: "UTC",
        month: "short",
        day: "numeric",
      }).format(new Date(`${ymd}T12:00:00Z`)),
    });
  }

  return days;
}

function slotsFor(ymd: string) {
  if (ymd !== dublinToday()) return SLOT_STARTS;
  const now = dublinNow();
  return SLOT_STARTS.filter((slot) => slot > now);
}

function addMinutes(hhmm: string, minutes: number) {
  const [hour, minute] = hhmm.split(":").map(Number);
  const total = hour * 60 + minute + minutes;
  return `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}`;
}

function stamp(ymd: string, hhmm: string) {
  return `${ymd.replaceAll("-", "")}T${hhmm.replace(":", "")}00`;
}

function googleMeetUrl(input: {
  name: string;
  email: string;
  note: string;
  ymd: string;
  time: string;
}) {
  const end = addMinutes(input.time, 30);
  const details = [
    `30-minute call with ${person.name}.`,
    `Guest: ${input.name} (${input.email})`,
    input.note ? `Note: ${input.note}` : "",
    `Time zone: ${TIMEZONE}.`,
    "A Google Meet link is attached to this event. Save it to send the invite.",
  ]
    .filter(Boolean)
    .join("\n");

  const params = new URLSearchParams({
    action: "TEMPLATE",
    vcon: "meet",
    text: `Call with ${person.name} — ${input.name}`,
    dates: `${stamp(input.ymd, input.time)}/${stamp(input.ymd, end)}`,
    ctz: TIMEZONE,
    crm: "BUSY",
    details,
    add: HOST_EMAIL,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function ScheduleCall() {
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState<DayOption[]>([]);
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function openScheduler() {
    const nextDays = buildDays();
    setDays(nextDays);
    setDay(nextDays[0]?.ymd ?? "");
    setTime("");
    setOpen(true);
  }

  const available = day ? slotsFor(day) : [];
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const ready = Boolean(name.trim() && emailOk && day && time);

  function book() {
    if (!ready) return;
    const url = googleMeetUrl({
      name: name.trim(),
      email: email.trim(),
      note: note.trim(),
      ymd: day,
      time,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        onClick={openScheduler}
        className="role-badge mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full py-1 pr-1 pl-3 text-sm"
      >
        <CalendarIcon className="size-4" />
        Schedule a call
        <span className="flex size-7 items-center justify-center rounded-full bg-white text-neutral-900">
          <ChevronIcon className="size-4" />
        </span>
      </button>
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-black/70 p-4 sm:items-center"
            onClick={() => setOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="schedule-title"
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[var(--line)] bg-[var(--bg)] p-5 text-[var(--fg)] shadow-2xl sm:p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="schedule-title" className="text-2xl font-semibold tracking-tight">
                    Schedule a meeting
                  </h2>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    30 minutes · {TIMEZONE} · Google Meet
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[var(--line)] text-lg"
                >
                  ×
                </button>
              </div>

              <label className="mt-5 block text-sm font-medium">
                Name
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  className="mt-1 w-full rounded-xl border border-[var(--line)] bg-transparent px-3 py-2 outline-none focus:border-[var(--brand)]"
                />
              </label>
              <label className="mt-3 block text-sm font-medium">
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="mt-1 w-full rounded-xl border border-[var(--line)] bg-transparent px-3 py-2 outline-none focus:border-[var(--brand)]"
                />
              </label>
              <label className="mt-3 block text-sm font-medium">
                What should we cover?
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={2}
                  className="mt-1 w-full resize-none rounded-xl border border-[var(--line)] bg-transparent px-3 py-2 outline-none focus:border-[var(--brand)]"
                />
              </label>

              <p className="mt-5 text-sm font-medium">Day</p>
              <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
                {days.map((option) => (
                  <button
                    key={option.ymd}
                    type="button"
                    onClick={() => {
                      setDay(option.ymd);
                      setTime("");
                    }}
                    aria-pressed={option.ymd === day}
                    className={`shrink-0 cursor-pointer rounded-2xl border px-3 py-2 text-left text-sm ${
                      option.ymd === day
                        ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                        : "border-[var(--line)]"
                    }`}
                  >
                    <span className="block text-xs opacity-80">{option.weekday}</span>
                    {option.label}
                  </button>
                ))}
              </div>

              <p className="mt-4 text-sm font-medium">Time</p>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
                {available.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setTime(slot)}
                    aria-pressed={slot === time}
                    className={`cursor-pointer rounded-xl border px-2 py-2 text-sm ${
                      slot === time
                        ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                        : "border-[var(--line)]"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <button
                type="button"
                disabled={!ready}
                onClick={book}
                className="mt-6 w-full cursor-pointer rounded-full bg-[var(--fg)] px-4 py-3 text-sm font-medium text-[var(--bg)] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Add to Google Calendar with Meet
              </button>
              <p className="mt-3 text-center text-xs text-[var(--muted)]">
                Google Calendar opens with the time and a Meet link. Save the event to invite{" "}
                {HOST_EMAIL}.
              </p>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
