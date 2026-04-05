import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Lake Effect Records",
};

const topics = [
  { label: "Booking", description: "Book the soundsystem or artists for your event" },
  { label: "Press", description: "Press inquiries and media requests" },
  { label: "Demos", description: "Submit music for consideration" },
  { label: "General", description: "Everything else" },
];

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 w-full">
      {/* Header */}
      <div className="mb-16">
        <p
          className="text-[0.65rem] tracking-[0.35em] uppercase text-lake mb-4"
          style={{ fontFamily: "var(--font-space), sans-serif" }}
        >
          Get in touch
        </p>
        <h1
          className="font-display uppercase"
          style={{
            fontWeight: 800,
            fontSize: "clamp(3rem, 9vw, 8rem)",
            letterSpacing: "-0.025em",
            lineHeight: 0.88,
          }}
        >
          Contact
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form */}
        <div>
          <ContactForm />
        </div>

        {/* Info */}
        <div>
          <div className="mb-12">
            <h2
              className="font-display uppercase mb-6"
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                letterSpacing: "-0.015em",
                color: "oklch(68% 0.10 212)",
              }}
            >
              Topics
            </h2>
            <div className="space-y-0">
              {topics.map((topic) => (
                <div
                  key={topic.label}
                  className="flex items-start gap-6 py-5 border-t border-shore"
                >
                  <span
                    className="font-display uppercase text-snow shrink-0"
                    style={{
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "-0.01em",
                      minWidth: "6rem",
                    }}
                  >
                    {topic.label}
                  </span>
                  <span
                    className="text-[0.7rem] leading-relaxed text-mist"
                    style={{ fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {topic.description}
                  </span>
                </div>
              ))}
              <div className="w-full h-px bg-shore" />
            </div>
          </div>

          <div>
            <h2
              className="font-display uppercase mb-6"
              style={{
                fontWeight: 800,
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                letterSpacing: "-0.015em",
                color: "oklch(68% 0.10 212)",
              }}
            >
              Find us
            </h2>
            <div className="space-y-4">
              <div>
                <p
                  className="text-[0.62rem] tracking-[0.25em] uppercase text-lake mb-1"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  Bandcamp
                </p>
                <a
                  href="https://lakeeffectrecords.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.75rem] text-mist hover:text-snow transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  lakeeffectrecords.bandcamp.com
                </a>
              </div>
              <div>
                <p
                  className="text-[0.62rem] tracking-[0.25em] uppercase text-lake mb-1"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  Instagram
                </p>
                <a
                  href="https://instagram.com/lake.effect.records"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.75rem] text-mist hover:text-snow transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  @lake.effect.records
                </a>
              </div>
              <div>
                <p
                  className="text-[0.62rem] tracking-[0.25em] uppercase text-lake mb-1"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  Based in
                </p>
                <p
                  className="text-[0.75rem] text-mist"
                  style={{ fontFamily: "var(--font-space), sans-serif" }}
                >
                  Chicago, Illinois
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
