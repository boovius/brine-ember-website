import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-media" aria-hidden="true">
          <img src="/images/chrome-1.jpg" alt="" />
          <div className="page-hero-veil" />
        </div>
        <div className="container page-hero-inner">
          <span className="eyebrow">About Brine + Ember</span>
          <h1>A company built around a loop, not a line.</h1>
          <p className="lead">
            Most food brands end at the plate. Most climate companies end at the offset.
            We close the gap — and the loop — by treating a single Japanese kelp harvest
            as raw material for three intertwined outcomes: nourishment, soil restoration,
            and durable carbon sequestration.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <h4>Mission</h4>
            <h2>Turn an overlooked ingredient into climate infrastructure.</h2>
            <p>
              For every bowl of dashi served, 30%+ of the harvested kelp is thrown away.
              That waste is premium biomass — and the same biomass that, when carbonized,
              becomes one of the most durable carbon sinks on the planet.
            </p>
            <p>
              We see this not as a problem to solve, but as a system to redesign.
              Brine + Ember exists to prove that the highest-margin food product and
              the most rigorous climate product can come from the same single supply chain.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h4>Vision</h4>
            <h2>Every product sold becomes a node in planetary infrastructure.</h2>
            <p>
              A pantry staple should be able to tell you what it has restored.
              Every jar of our dashi carries a QR code linking the purchase to verified
              sequestration data — turning a kitchen ingredient into measurable climate action.
            </p>
            <p>
              As retail dashi volume grows, biochar output and ocean sequestration scale
              proportionally. No additional capital required per unit. The loop is the moat.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="chrome-band" aria-hidden="true" />

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Operations · The Global Bridge</span>
            <h2>Built for the cross-border, regulated, science-grade reality of climate-tier food.</h2>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <Reveal className="card">
              <span className="num">01</span>
              <h3>Direct Sourcing</h3>
              <p>Longstanding relationships with Japanese kelp harvesters ensure supply quality, traceability, and preferential access.</p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <span className="num">02</span>
              <h3>Supply Chain Mastery</h3>
              <p>15+ years of international logistics experience underpin our customs navigation, cold-chain management, and cross-border compliance.</p>
            </Reveal>
            <Reveal className="card" delay={200}>
              <span className="num">03</span>
              <h3>ISO-Grade Quality Control</h3>
              <p>Dual-standard QC protocols for food-grade dashi and agricultural-grade biochar — built for regulatory confidence at every channel.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-economics">
          <Reveal>
            <span className="eyebrow">Market &amp; Unit Economics</span>
            <h2>A self-reinforcing model.</h2>
            <p className="lead">
              High-margin retail dashi subsidizes our downstream climate operations.
              As dashi volume grows, upcycled biochar and verified sequestration scale
              automatically — no additional capital required per unit.
            </p>
            <p>
              Every new retail customer becomes a node in our climate infrastructure —
              purchasing premium food and funding planetary-scale sequestration simultaneously.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/process" className="btn">See the Full Process</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
