import type { Metadata } from "next";
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../../keystatic.config';

export const metadata: Metadata = {
  title: "Merch — Lake Effect Records",
};

const reader = createReader(process.cwd(), keystaticConfig);

export default async function MerchPage() {
  const merch = await reader.collections.merch.all();

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
            key={item.slug}
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
                {item.entry.tag}
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
                {item.entry.name}
              </h2>
              <p
                className="text-[0.7rem] leading-relaxed text-mist flex-1 mb-5"
                style={{ fontFamily: "var(--font-space), sans-serif" }}
              >
                {item.entry.description}
              </p>
              {item.entry.sizes && (
                <p
                  className="text-[0.6rem] tracking-[0.2em] uppercase text-ice mb-5"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  {item.entry.sizes}
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
                  {item.entry.price}
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
