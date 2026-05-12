import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-media" aria-hidden="true">
          <img src="/images/chrome-1.jpg" alt="" />
          <div className="page-hero-veil" />
        </div>
        <div className="container page-hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>Let&rsquo;s close the loop, together.</h1>
          <p className="lead">
            Whether you&rsquo;re a retailer, investor, agricultural partner, or curious diner —
            we want to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-single">
          <Reveal>
            <h4>Direct</h4>
            <h2>Reach out.</h2>
            <p className="lead">
              For general inquiries, partnerships, investment, or press — drop a note.
              The founders read every message.
            </p>

            <a href="mailto:josh@brineandember.earth" className="contact-email-link">
              josh@brineandember.earth
            </a>

            <p className="muted small" style={{ marginTop: '1.5rem' }}>
              General · Investors · Retail · Agricultural Partners · Press
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
