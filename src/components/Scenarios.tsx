const scenarios = [
  {
    type: "Scenario 01",
    title: "The Late-Night Search",
    desc: "Someone's driving through Kingston at 9pm, hungry. They Google \"[your cuisine] near me.\" Without a website, you don't show up. With one, you're first.",
    tag: "↑ New customers",
  },
  {
    type: "Scenario 02",
    title: "The Group Decision",
    desc: "A family's planning dinner, someone mentions your name. They pull up your site — they see the menu, the vibe, the hours — and you're the pick. Without a site, you're a question mark.",
    tag: "↑ Group bookings",
  },
  {
    type: "Scenario 03",
    title: "The Tourist",
    desc: "Hudson Valley gets hundreds of thousands of visitors a year. They plan ahead, they check Google. A website with good photos and a clear menu converts browsers into customers.",
    tag: "↑ Tourist foot traffic",
  },
  {
    type: "Scenario 04",
    title: "The Referral Confirm",
    desc: "A happy customer tells a friend about you. That friend Googles your name. If nothing comes up, doubt creeps in. A clean, professional site turns word-of-mouth into walk-ins.",
    tag: "↑ Referral conversion",
  },
  {
    type: "Scenario 05",
    title: "The 2am Decision",
    desc: "Someone's browsing on their couch and wants to book an appointment for tomorrow. Your site has a booking form. They book it. You wake up with a new customer — no phone call needed.",
    tag: "↑ Off-hours revenue",
  },
  {
    type: "Scenario 06",
    title: "The Repeat Customer",
    desc: "A regular wants to check your specials this week or share your menu with friends. Your site answers both instantly — and looks good enough to share.",
    tag: "↑ Customer loyalty",
  },
];

export default function Scenarios() {
  return (
    <section className="examples-strip">
      <div className="col-label">What a Site Does For You</div>
      <div className="example-cards">
        {scenarios.map((s) => (
          <div className="example-card" key={s.type}>
            <div className="example-card-type">{s.type}</div>
            <div className="example-card-title">{s.title}</div>
            <p className="example-card-desc">{s.desc}</p>
            <span className="example-card-tag">{s.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
