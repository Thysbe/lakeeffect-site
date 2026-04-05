import Link from "next/link";

const upcomingEvents = [
  {
    id: 1,
    date: "SAT — MAY 02, 2026",
    venue: "Smart Bar",
    name: "Lake Effect All-Nighter",
    acts: "thysbe / otherself",
  },
  {
    id: 2,
    date: "SAT — MAY 16, 2026",
    venue: "Berlin Chicago",
    name: "Gyration Vol. 3",
    acts: "relativity lounge / Swesdo",
  },
  {
    id: 3,
    date: "SAT — JUN 06, 2026",
    venue: "Promontory Rooftop",
    name: "Open Air: June",
    acts: "Full Lake Effect Roster",
  },
];

const artists = [
  { name: "relativity lounge", descriptor: "Deep house · Ambient" },
  { name: "Swesdo", descriptor: "Footwork · Juke" },
  { name: "otherself", descriptor: "Experimental dance" },
  { name: "thysbe", descriptor: "Electronic · Club" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-3.5rem)] flex flex-col justify-between px-6 pt-14 pb-10 max-w-7xl mx-auto w-full">
        <div className="flex-1 flex flex-col justify-center">
          <p
            className="text-[0.7rem] tracking-[0.35em] uppercase text-lake mb-10 fade-up fade-up-1"
            style={{ fontFamily: "var(--font-space), sans-serif" }}
          >
            Chicago, Illinois &nbsp;&middot;&nbsp; Est. 2024
          </p>
          <h1
            className="font-display uppercase leading-none fade-up fade-up-2"
            style={{
              fontWeight: 800,
              fontSize: "clamp(5.5rem, 20vw, 19rem)",
              lineHeight: 0.86,
              letterSpacing: "-0.025em",
            }}
          >
            Lake
            <br />
            <span style={{ color: "oklch(50% 0.18 228)" }}>Effect</span>
            <br />
            <span
              className="font-label"
              style={{
                fontSize: "clamp(1.8rem, 6vw, 6rem)",
                letterSpacing: "0.1em",
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
            className="text-[0.68rem] tracking-[0.3em] uppercase text-ice"
            style={{ fontFamily: "var(--font-space), sans-serif" }}
          >
            Gyration music &nbsp;&middot;&nbsp; Open air parties &nbsp;&middot;&nbsp; Custom soundsystem &nbsp;&middot;&nbsp; Choice venue excursions
          </p>
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
              key={event.id}
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
                {event.date}
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
                {event.name}
              </span>
              <div className="sm:ml-auto flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-10 shrink-0">
                <span
                  className="text-[0.65rem] tracking-wide text-mist"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {event.acts}
                </span>
                <span
                  className="text-[0.65rem] tracking-[0.2em] uppercase text-ice"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {event.venue}
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
          {artists.map((artist) => (
            <div
              key={artist.name}
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
                {artist.name}
              </h3>
              <p
                className="text-[0.65rem] tracking-[0.3em] uppercase text-ice mt-4"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                {artist.descriptor}
              </p>
            </div>
          ))}
        </div>
        <div className="h-px bg-shore max-w-7xl mx-auto" />
      </section>
    </>
  );
}
