export default function Footer() {
  return (
    <>
      <div className="cta-strip">
        <div className="cta-left">
          <h2>Ready to Build?</h2>
          <p>Free consultation. No commitment. Just a straight conversation.</p>
          <span className="guarantee-pill">No monthly fees · You own everything · Local &amp; available</span>
        </div>
        <div className="cta-right">
          <div className="cta-contact">
            <div className="dot" />
            <span>Saugerties, New York</span>
          </div>
          <div className="cta-contact">
            <div className="dot" />
            <span>Hudson Valley · Catskills · All of Ulster County</span>
          </div>
          <div className="cta-contact" style={{ marginTop: "0.25rem" }}>
            <div className="dot" style={{ background: "rgba(255,255,255,0.7)" }} />
            <a
              href="#contact"
              style={{ color: "white", fontSize: "0.85rem", textDecoration: "none", fontFamily: "var(--font-mono)" }}
            >
              Get a free quote →
            </a>
          </div>
        </div>
      </div>

      <div className="fine-print">
        <span>Christian Daragona · Web Design · Saugerties, NY</span>
        <span>Prices as of May 2026 · Subject to project scope</span>
        <span>All sites are mobile-first, fast, and fully owned by you</span>
      </div>
    </>
  );
}
