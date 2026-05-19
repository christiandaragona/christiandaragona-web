const services = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Custom Website",
    desc: "Menu, hours, story, photos, contact — clean, fast, and mobile-first. Your domain, your brand, yours forever.",
    price: "from $400",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    title: "Online Ordering Integration",
    desc: "Connect Toast, Square, or a custom order form directly to your site.",
    price: "add-on $150",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Booking / Reservation Form",
    desc: "A booking form that emails you directly — no expensive third-party monthly fees.",
    price: "add-on $100",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Google Business Optimization",
    desc: "I'll complete your Google listing so your hours, menu, and photos are always accurate in search.",
    price: "add-on $75",
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Event & Specials Calendar",
    desc: "Live music, weekly specials, seasonal menus — a calendar you can update yourself, anytime.",
    price: "add-on $100",
  },
];

export default function Services() {
  return (
    <div id="services" className="body-wrap">
      {/* LEFT — problem */}
      <div className="col">
        <div className="col-label">The Problem</div>
        <p className="problem-pull">
          Your business is great. Your reviews prove it.<br />
          But <em>Google can&apos;t send you customers</em><br />
          if there&apos;s nowhere to land.
        </p>
        <div className="problem-body">
          <p>
            When someone searches your name — or &ldquo;best [service] near me&rdquo; — Google looks
            for a website. Without one, you&apos;re invisible to everyone who didn&apos;t already know you.
            No menu to browse, no hours to check, no way to book or order.
          </p>
          <p>
            A simple, well-built website costs less than one week of sales — and it works
            for you 24 hours a day, seven days a week, for years.
          </p>
        </div>
        <div className="stat-row">
          <div className="stat-box">
            <span className="stat-num">76%</span>
            <span className="stat-desc">of customers check a website before visiting a local business</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">1–2</span>
            <span className="stat-desc">weeks average build time, start to launch</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">$400</span>
            <span className="stat-desc">starting price — full site, no monthly fees</span>
          </div>
          <div className="stat-box">
            <span className="stat-num">Local</span>
            <span className="stat-desc">based in Saugerties — your neighbor, not an agency</span>
          </div>
        </div>
      </div>

      {/* RIGHT — services */}
      <div className="col">
        <div className="col-label">What I Build</div>
        <ul className="service-list">
          {services.map((s) => (
            <li className="service-item" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <div className="service-text">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
              <span className="service-price">{s.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
