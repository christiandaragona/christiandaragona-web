export default function MilitaryBanner() {
  return (
    <div className="mil-banner">
      <div className="mil-banner-inner">
        <div className="mil-star">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
        <div className="mil-text">
          <span className="mil-headline">100% U.S. Military Member Owned &amp; Operated</span>
          <span className="mil-sub">
            Sicuro Design is a single-owner business run by an active U.S. military member — built on the same standards of discipline, reliability, and accountability that service demands. When you work with us, you work directly with the person building your site. No middlemen. No outsourcing. Done right, on time.
          </span>
        </div>
        <div className="mil-emblem">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
