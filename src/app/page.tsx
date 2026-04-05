import Link from "next/link";
import Image from "next/image";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Home() {
  const [allEvents, allArtists] = await Promise.all([
    reader.collections.events.all(),
    reader.collections.artists.all(),
  ]);

  const upcomingEvents = allEvents.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-3.5rem)] flex flex-col lg:flex-row">
        {/* Text side */}
        <div className="flex-1 flex flex-col justify-between px-6 pt-12 pb-10 max-w-4xl">
          <p
            className="text-[0.65rem] tracking-[0.35em] uppercase text-lake fade-up fade-up-1"
            style={{ fontFamily: "var(--font-space), sans-serif" }}
          >
            Chicago, Illinois &nbsp;&middot;&nbsp; Est. 2024
          </p>
          <div>
            <h1
              className="font-label leading-none fade-up fade-up-2"
              style={{
                fontWeight: 700,
                fontSize: "clamp(4rem, 13vw, 12rem)",
                lineHeight: 0.9,
                letterSpacing: "-0.01em",
              }}
            >
              Lake
              <br />
              <span style={{ color: "oklch(50% 0.18 228)" }}>Effect</span>
              <br />
              <span
                className="font-label"
                style={{
                  fontSize: "clamp(1.4rem, 4.5vw, 4.5rem)",
                  letterSpacing: "0.06em",
                  color: "oklch(68% 0.10 212)",
                  fontWeight: 700,
                }}
              >
                Records
              </span>
            </h1>
          </div>
          <div className="fade-up fade-up-3">
            <div className="w-full h-px bg-shore mb-5" />
            <p
              className="text-[0.62rem] tracking-[0.28em] uppercase text-ice"
              style={{ fontFamily: "var(--font-space), sans-serif" }}
            >
              Gyration music &nbsp;&middot;&nbsp; Open air parties &nbsp;&middot;&nbsp; Custom soundsystem &nbsp;&middot;&nbsp; Choice venue excursions
            </p>
          </div>
        </div>

        {/* Image side */}
        <div className="relative w-full lg:w-[38%] h-64 lg:h-auto shrink-0 fade-up fade-up-4">
          <Image
            src="/img/cold_front_vol_2.jpg"
            alt="Cold Front Vol. 2"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, oklch(10% 0.028 246) 0%, transparent 30%), linear-gradient(to top, oklch(10% 0.028 246) 0%, transparent 25%)",
            }}
          />
          <div className="absolute bottom-6 left-6 lg:bottom-8 lg:left-8">
            <p
              className="text-[0.6rem] tracking-[0.3em] uppercase text-ice"
              style={{ fontFamily: "var(--font-space), sans-serif" }}
            >
              Cold Front Vol. 2
            </p>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <div className="overflow-hidden border-y border-shore py-3 bg-depth">
        <div className="flex animate-march whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-[0.65rem] tracking-[0.35em] uppercase text-lake mx-10"
              style={{ fontFamily: "var(--font-space), sans-serif" }}
            >
              Gyration Music &nbsp;&middot;&nbsp; Chicago &nbsp;&middot;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Upcoming events */}
      <section className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex items-baseline justify-between mb-10">
          <h2
            className="font-display uppercase"
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Upcoming
          </h2>
          <Link
            href="/events"
            className="text-[0.7rem] tracking-[0.2em] uppercase text-lake hover:text-ice transition-colors duration-200"
            style={{ fontFamily: "var(--font-space), sans-serif" }}
          >
            All events →
          </Link>
        </div>

        <div>
          {upcomingEvents.map((event) => (
            <Link
              key={event.slug}
              href="/events"
              className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10 py-7 border-t border-shore hover:bg-depth transition-colors duration-200 -mx-6 px-6"
            >
              <span
                className="text-[0.65rem] tracking-[0.25em] uppercase shrink-0"
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  color: "oklch(68% 0.10 212)",
                  minWidth: "15rem",
                }}
              >
                {event.entry.date}
              </span>
              <span
                className="font-display uppercase group-hover:text-lake transition-colors duration-200"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
                  letterSpacing: "-0.01em",
                  color: "oklch(93% 0.012 218)",
                }}
              >
                {event.entry.name}
              </span>
              <div className="sm:ml-auto flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-10 shrink-0">
                <span
                  className="text-[0.65rem] tracking-wide text-mist"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {event.entry.acts.join(' / ')}
                </span>
                <span
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-ice"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {event.entry.venue}
                </span>
              </div>
            </Link>
          ))}
          <div className="w-full h-px bg-shore" />
        </div>
      </section>

      {/* Artists */}
      <section className="border-t border-shore w-full">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2
            className="font-display uppercase mb-12"
            style={{
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            Artists
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-shore max-w-7xl mx-auto">
          {allArtists.map((artist) => (
            <div
              key={artist.slug}
              className="bg-night px-8 py-12 hover:bg-depth transition-colors duration-300 group"
            >
              <h3
                className="font-display uppercase group-hover:text-lake transition-colors duration-300"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4.5vw, 4rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  color: "oklch(93% 0.012 218)",
                }}
              >
                {artist.entry.name}
              </h3>
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase text-ice mt-4"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                {artist.entry.descriptor}
              </p>
            </div>
          ))}
        </div>
        <div className="h-px bg-shore max-w-7xl mx-auto" />
      </section>
    </>
  );
}
