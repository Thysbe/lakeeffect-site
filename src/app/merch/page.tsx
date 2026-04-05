import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch — Lake Effect Records",
};

const merch = [
  {
    id: 1,
    name: "Lake Effect Crewneck",
    description: "Heavy-weight fleece. \"LAKE EFFECT\" across chest in condensed type. Navy.",
    price: "$55",
    tag: "Apparel",
    sizes: "S / M / L / XL / XXL",
  },
  {
    id: 2,
    name: "Gyration Music Tee",
    description: "100% cotton. \"GYRATION MUSIC\" front, label address on back. White on black.",
    price: "$30",
    tag: "Apparel",
    sizes: "S / M / L / XL",
  },
  {
    id: 3,
    name: "LE Records Logo Tee",
    description: "Lightweight cotton. Minimal label mark on chest. Black.",
    price: "$25",
    tag: "Apparel",
    sizes: "S / M / L / XL / XXL",
  },
  {
    id: 4,
    name: "Open Air Vol. 1 — Vinyl",
    description: "12\" compilation. Four tracks from the Lake Effect roster. 180g black vinyl. Limited to 200 copies.",
    price: "$22",
    tag: "Music",
    sizes: null,
  },
  {
    id: 5,
    name: "Lake Effect Tote",
    description: "Heavy canvas. Screen-printed. \"CHICAGO\" on one side, label mark on the other. Natural.",
    price: "$18",
    tag: "Accessories",
    sizes: null,
  },
  {
    id: 6,
    name: "Sticker Pack",
    description: "Five vinyl stickers. Label logo, event art from 2025 season. Weatherproof.",
    price: "$8",
    tag: "Accessories",
    sizes: null,
  },
];

export default function MerchPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 w-full">
      {/* Header */}
      <div className="mb-16">
        <p
          className="text-[0.65rem] tracking-[0.35em] uppercase text-lake mb-4"
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          Available Now
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
          Merch
        </h1>
      </div>

      {/* Merch grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-shore">
        {merch.map((item) => (
          <div
            key={item.id}
            className="bg-night px-7 py-8 flex flex-col hover:bg-depth transition-colors duration-300 group"
          >
            {/* Placeholder image area */}
            <div
              className="w-full aspect-square mb-7 border border-shore flex items-center justify-center"
              style={{ background: "oklch(15% 0.038 243)" }}
            >
              <span
                className="font-display uppercase text-shore group-hover:text-lake transition-colors duration-300"
                style={{ fontWeight: 800, fontSize: "3rem", letterSpacing: "-0.02em" }}
              >
                LE
              </span>
            </div>

            <div className="flex-1 flex flex-col">
              <span
                className="text-[0.6rem] tracking-[0.3em] uppercase text-lake mb-3"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                {item.tag}
              </span>
              <h2
                className="font-display uppercase mb-3"
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  color: "oklch(93% 0.012 218)",
                }}
              >
                {item.name}
              </h2>
              <p
                className="text-[0.7rem] leading-relaxed text-mist flex-1 mb-5"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                {item.description}
              </p>
              {item.sizes && (
                <p
                  className="text-[0.6rem] tracking-[0.2em] uppercase text-ice mb-5"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {item.sizes}
                </p>
              )}
              <div className="flex items-center justify-between pt-4 border-t border-shore">
                <span
                  className="font-display uppercase text-snow"
                  style={{
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {item.price}
                </span>
                <a
                  href="https://lakeeffectrecords.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.62rem] tracking-[0.2em] uppercase text-lake hover:text-snow transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  Buy on Bandcamp →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-px bg-shore" />

      {/* Note */}
      <div className="mt-12 pt-10 border-t border-shore">
        <p
          className="text-[0.65rem] tracking-[0.3em] uppercase text-mist"
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          All physical orders ship from Chicago, IL &mdash; US shipping only for now.
          Questions?{" "}
          <a
            href="/contact"
            className="text-lake hover:text-ice transition-colors duration-200 underline underline-offset-4"
          >
            Contact us
          </a>
        </p>
      </div>
    </div>
  );
}
