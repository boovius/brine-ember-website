import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-tag">
          <p className="quote">
            "From the Brine of the sea to the Ember of life."
          </p>
        </div>

        <div className="footer-grid">
          <div>
            <Link to="/" className="brand">
              <span>Brine</span>
              <span className="plus">+</span>
              <span>Ember</span>
            </Link>
            <p className="muted small" style={{ marginTop: '1rem' }}>
              A circular food &amp; climate company.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul className="footer-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/process">Process</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Inquiries</h4>
            <ul className="footer-list">
              <li><a href="mailto:josh@brineandember.earth">josh@brineandember.earth</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="muted small">© {new Date().getFullYear()} Brine + Ember</span>
          <span className="muted small">Circular Seaweed · Climate-Forward Food</span>
        </div>
      </div>
    </footer>
  )
}
