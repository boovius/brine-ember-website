import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>Let&rsquo;s close the loop, together.</h1>
          <p className="lead">
            Whether you&rsquo;re a retailer, a seaweed farmer, a dashi producer, a researcher,
            or a curious eater — we want to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-single">
          <Reveal>
            <h4>Direct</h4>
            <h2>Reach out.</h2>
            <p className="lead">
              For general inquiries, partnerships, R&amp;D collaboration, or press —
              drop a note. The founders read every message.
            </p>

            <a href="mailto:josh@brineandember.earth" className="contact-email-link">
              josh@brineandember.earth
            </a>

            <p className="muted small" style={{ marginTop: '1.5rem' }}>
              General · Retail · Seaweed Farmers · Dashi Producers · Researchers · Press
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
