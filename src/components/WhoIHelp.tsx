const businesses = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Restaurants & Bars",
    desc: "Menus, hours, online ordering, reservations. Get found on Google before your competition does.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: "Retail & Boutiques",
    desc: "Showcase your products, drive foot traffic, and set up simple online sales — no platform monthly fees.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
    title: "Service Businesses",
    desc: "Contractors, salons, spas, cleaners. A professional site that books appointments and answers questions 24/7.",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Event Venues & Tourism",
    desc: "B&Bs, farms, wineries, studios. Capture Hudson Valley visitors who plan their trips online.",
  },
];

export default function WhoIHelp() {
  return (
    <section className="who-strip">
      <div className="col-label">Who I Help</div>
      <div className="who-grid">
        {businesses.map((b) => (
          <div className="who-card" key={b.title}>
            <div className="who-icon">{b.icon}</div>
            <div className="who-title">{b.title}</div>
            <p className="who-desc">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
