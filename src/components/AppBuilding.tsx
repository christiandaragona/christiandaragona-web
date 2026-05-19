const appTypes = [
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" />
      </svg>
    ),
    title: "Mobile-Friendly Web Apps",
    desc: "Apps that work on any phone or tablet — no App Store required. Customers access it from a link or saved to their home screen.",
    price: "from $800",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    title: "Online Ordering Systems",
    desc: "Custom order flows for food, products, or services — connect to Square, Stripe, or a manual fulfillment workflow.",
    price: "from $600",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Booking & Scheduling Apps",
    desc: "Let customers book appointments, tables, or services 24/7 — no phone tag, no third-party monthly fees.",
    price: "from $500",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Customer Portals",
    desc: "Secure login areas where clients can view invoices, track orders, manage appointments, or access member content.",
    price: "from $900",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Dashboards & Admin Panels",
    desc: "Custom back-end dashboards so you and your staff can manage inventory, view analytics, or update content easily.",
    price: "from $700",
  },
  {
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Integrations & Automation",
    desc: "Connect your site to Square, QuickBooks, Google Sheets, email lists, or any tool you already use — no more double entry.",
    price: "from $300",
  },
];

export default function AppBuilding() {
  return (
    <section id="apps" className="app-strip">
      <div className="col-label">App Development</div>
      <div className="app-layout">
        <div className="app-intro">
          <h2>Beyond the<br /><span>Brochure Site.</span></h2>
          <p>
            Sometimes a business needs more than a static website — it needs a tool.
            I build lightweight web apps that solve real operational problems: booking,
            ordering, managing staff, tracking inventory, or serving customers online.
          </p>
          <p>
            These aren&apos;t off-the-shelf templates. Every app is built specifically
            for your workflow, owned by you, and can grow as your business does.
          </p>
        </div>
        <div className="app-types">
          {appTypes.map((a) => (
            <div className="app-type" key={a.title}>
              <div className="app-type-icon">{a.icon}</div>
              <div className="app-type-text">
                <h5>{a.title}</h5>
                <p>{a.desc}</p>
              </div>
              <span className="app-type-price">{a.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
