const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We meet — in person or by phone. You tell me what you need, I listen. No pitch, no pressure.",
  },
  {
    num: "02",
    title: "Proposal",
    desc: "I send you a clear scope and price in writing. You decide if it's right — zero obligation.",
  },
  {
    num: "03",
    title: "I Build It",
    desc: "You give me your content. I handle everything else in 1–2 weeks — design, code, and launch.",
  },
  {
    num: "04",
    title: "You Own It",
    desc: "Your site, your domain, your code. No monthly retainer. I'm available for changes anytime.",
  },
];

export default function Process() {
  return (
    <section id="process" className="process-strip">
      <div className="col-label">How It Works</div>
      <div className="process-steps">
        {steps.map((s) => (
          <div className="step" key={s.num}>
            <div className="step-num">{s.num}</div>
            <div className="step-title">{s.title}</div>
            <p className="step-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
