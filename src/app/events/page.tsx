import type { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';

export const metadata: Metadata = {
  title: "Events — Lake Effect Records",
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function EventsPage() {
  const events = await reader.collections.events.all();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 w-full">
      {/* Header */}
      <div className="mb-16">
        <p
          className="text-[0.65rem] tracking-[0.35em] uppercase text-lake mb-4"
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          2026 Season
        </p>
        <h1
          className="font-display uppercase"
          style={{
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "-0.025em",
            lineHeight: 0.88,
          }}
        >
          Events
        </h1>
      </div>

      {/* Events list */}
      <div>
        {events.map((event) => (
          <div
            key={event.slug}
            className="group border-t border-shore py-10 hover:bg-depth transition-colors duration-200 -mx-6 px-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
              {/* Date + time block */}
              <div className="shrink-0 lg:w-52">
                <p
                  className="text-[0.65rem] tracking-[0.25em] uppercase font-semibold"
                  style={{
                    fontFamily: "var(--font-space), sans-serif",
                    color: "oklch(68% 0.10 212)",
                  }}
                >
                  {event.entry.date}
                </p>
                <p
                  className="text-[0.62rem] tracking-widest uppercase text-mist mt-1"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {event.entry.time}
                </p>
              </div>

              {/* Main info */}
              <div className="flex-1">
                <h2
                  className="font-display uppercase group-hover:text-lake transition-colors duration-200"
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: "oklch(93% 0.012 218)",
                  }}
                >
                  {event.entry.name}
                </h2>
                <div className="flex flex-wrap gap-2 mt-4">
                  {event.entry.acts.map((act) => (
                    <span
                      key={act}
                      className="text-[0.62rem] tracking-[0.2em] uppercase text-snow border border-shore px-3 py-1.5"
                      style={{ fontFamily: "var(--font-space), sans-serif" }}
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              {/* Venue + price */}
              <div className="shrink-0 lg:text-right">
                <p
                  className="font-display uppercase text-ice"
                  style={{
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 2vw, 1.4rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {event.entry.venue}
                </p>
                <p
                  className="text-[0.62rem] tracking-wide text-mist mt-1"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {event.entry.address}
                </p>
                <div className="flex lg:justify-end items-center gap-4 mt-4">
                  <span
                    className="text-[0.62rem] tracking-[0.2em] uppercase text-mist"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {event.entry.note}
                  </span>
                  <span
                    className="text-[0.65rem] tracking-[0.1em] uppercase text-snow font-semibold"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {event.entry.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full h-px bg-shore" />
      </div>

      {/* Booking note */}
      <div className="mt-16 pt-10 border-t border-shore">
        <p
          className="text-[0.65rem] tracking-[0.3em] uppercase text-mist"
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          For booking inquiries &mdash;{" "}
          <a
            href="/contact"
            className="text-lake hover:text-ice transition-colors duration-200 underline underline-offset-4"
          >
            contact us
          </a>
        </p>
      </div>
    </div>
  );
}
