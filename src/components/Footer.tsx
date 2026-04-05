export default function Footer() {
  return (
    <footer className="border-t border-shore">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p
            className="font-display uppercase tracking-[0.2em] text-ice"
            style={{ fontWeight: 700, fontSize: "0.75rem" }}
          >
            Lake Effect Records
          </p>
          <p className="text-[0.7rem] text-mist mt-1.5 tracking-wide">
            Chicago, Illinois &middot; Gyration Music
          </p>
        </div>
        <div className="flex items-center gap-8">
          <a
            href="https://lakeeffectrecords.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.2em] uppercase text-mist hover:text-snow transition-colors duration-200"
          >
            Bandcamp
          </a>
          <a
            href="https://instagram.com/lake.effect.records"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.2em] uppercase text-mist hover:text-snow transition-colors duration-200"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
