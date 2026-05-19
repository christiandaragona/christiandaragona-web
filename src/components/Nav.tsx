export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        Sicuro <span>Design</span>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#domains">Domains</a></li>
        <li><a href="#apps">Apps</a></li>
        <li><a href="#process">Process</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Get a Quote</a>
    </nav>
  );
}
