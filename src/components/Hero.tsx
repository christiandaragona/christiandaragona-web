export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-badge">
        <span className="hero-badge-num">$0</span>
        <span className="hero-badge-label">consult<br />fee</span>
      </div>

      <div className="hero-kicker">Web Design · Domains · Apps · Hudson Valley</div>

      <div className="hero-mil-badge">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        100% Military Member Owned &amp; Operated
      </div>

      <h1 className="hero-name">
        Sicuro<br />
        <span>Design</span>
      </h1>

      <p className="hero-tagline">
        Everything your business needs online — built right, owned by you.
      </p>

      <div className="hero-contact">
        <span className="hero-contact-item">
          <strong>Location</strong> Saugerties, NY
        </span>
        <span className="hero-contact-item">
          <strong>Serves</strong> Kingston · Woodstock · New Paltz · Catskill · Rhinebeck
        </span>
        <span className="hero-contact-item">
          <strong>Turnaround</strong> 1–2 weeks
        </span>
      </div>

      <div className="hero-pills">
        <span className="hero-pill">Website Design</span>
        <span className="hero-pill">Domain Registration</span>
        <span className="hero-pill">Custom Apps</span>
        <span className="hero-pill">Google Business</span>
        <span className="hero-pill">No Monthly Fees</span>
        <span className="hero-pill hero-pill--mil">&#9733; Veteran Owned</span>
      </div>
    </header>
  );
}
