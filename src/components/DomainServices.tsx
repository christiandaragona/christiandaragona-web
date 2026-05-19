const cards = [
  {
    num: "01",
    title: "Domain Registration",
    desc: "I'll find and register the right .com (or .net, .co, etc.) for your business. You own it — I just handle the technical setup.",
  },
  {
    num: "02",
    title: "DNS & Hosting Setup",
    desc: "Point your domain to your website, set up email forwarding, and configure SSL so your site is secure and loads fast.",
  },
  {
    num: "03",
    title: "Domain Transfers",
    desc: "Already own a domain somewhere messy like GoDaddy? I'll transfer it to a clean registrar you can actually manage.",
  },
  {
    num: "04",
    title: "Business Email",
    desc: "Get you@yourbusiness.com — set up with Google Workspace or Zoho so your email looks professional from day one.",
  },
  {
    num: "05",
    title: "Renewals & Management",
    desc: "I'll set up auto-renewals and keep your domain from expiring accidentally — something that kills sites every year.",
  },
  {
    num: "06",
    title: "Domain Strategy",
    desc: "Not sure what to register? I'll advise on variations, protect your brand with key alternatives, and avoid common traps.",
  },
];

export default function DomainServices() {
  return (
    <section id="domains" className="domain-strip">
      <div className="col-label">Domain Services</div>
      <div className="domain-header">
        <h2>Your Domain.<br /><span>Done Right.</span></h2>
        <p>Most businesses don&apos;t realize how much can go wrong with a domain. I handle all of it.</p>
      </div>
      <div className="domain-grid">
        {cards.map((c) => (
          <div className="domain-card" key={c.num}>
            <div className="domain-card-num">{c.num}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
      <div className="domain-note">
        <span className="domain-note-label">Pricing</span>
        <p>
          Domain registration and setup bundled with any website project at no extra cost.
          Standalone domain management starts at <strong style={{ color: "var(--gold)" }}>$75</strong> — one-time, no retainer.
        </p>
      </div>
    </section>
  );
}
