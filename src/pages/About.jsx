import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function About() {
  return (
    <div className="page">
      <section className="page-hero has-illustration">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">About Brine + Ember</span>
            <h1>A company built around a loop, not a line.</h1>
            <p className="lead">
              Most food brands end at the plate. Most climate companies end at the offset.
              We close the gap — and the loop — by treating waste seaweed from dashi
              production as raw material for three intertwined outcomes: nourishment,
              soil restoration, and durable carbon sequestration.
            </p>
          </div>
          <div className="page-hero-illustration" aria-hidden="true">
            <img src="/images/sinking-seaweed.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <h4>Mission</h4>
            <h2>Turn an overlooked ingredient into climate infrastructure.</h2>
            <p>
              Originating as an umami-rich soup base that did not require meat,{' '}
              <a href="https://en.wikipedia.org/wiki/Dashi" target="_blank" rel="noreferrer">dashi</a>{' '}
              is an ancient Japanese soup stock which forms the base of miso soups and many noodle soups.
              One of the core ingredients of dashi is kombu (<em>Saccharina japonica</em>), a type of
              macro-algae seaweed. Like any soup stock, after the stock is developed the biomass used
              to create it is considered waste. However, this biomass still holds rich carbon — which
              can be valorized and sequestered.
            </p>
            <p>
              We see this not as a problem to solve, but as a system to redesign.
              Brine + Ember exists to show that a premium dashi and a rigorous climate
              product can come from the same loop — and that the loop itself can help
              grow the Western seaweed industry along the way.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <h4>Vision</h4>
            <h2>Reverse climate change by promoting carbon sequestration through seaweed.</h2>
            <p>
              A pantry staple should be able to tell you what it has restored.
              Every jar of our dashi carries a QR code linking the purchase to the climate
              outcomes it helped fund — turning a kitchen ingredient into measurable
              climate action.
            </p>
            <p>
              As dashi volume grows, upcycled biochar and support for seaweed-sinking
              R&amp;D scale alongside it. The loop is the point.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="chrome-band" aria-hidden="true" />

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Relationships · The Global Bridge</span>
            <h2>Built around the people already doing the work.</h2>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <Reveal className="card">
              <span className="num">01</span>
              <h3>Japanese Dashi Producers</h3>
              <p>Building relationships with the dashi producers whose waste seaweed we valorize — partners in the loop, not suppliers we transact with.</p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <span className="num">02</span>
              <h3>North American Seaweed Farmers</h3>
              <p>Working alongside the farmers already in the water to help grow the seaweed industry across the U.S., Canada, and Europe.</p>
            </Reveal>
            <Reveal className="card" delay={200}>
              <span className="num">03</span>
              <h3>Research &amp; Development</h3>
              <p>Supporting the R&amp;D community exploring seaweed sinking — its viability, scaling, and eco-system impacts.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-economics">
          <Reveal>
            <span className="eyebrow">Our Five Goals</span>
            <h2>A self-reinforcing model.</h2>
            <p className="lead">
              Five goals organize what we do — and how each piece of the loop earns its keep:
            </p>
            <ol className="goal-list">
              <li>Valorize and sequester carbon in waste seaweed from dashi production by converting it into biochar.</li>
              <li>Grow the seaweed industry in the global West — the U.S., Canada, and Europe.</li>
              <li>Educate consumers about the link between seaweed and climate-change reversal.</li>
              <li>Support R&amp;D efforts relating to seaweed sinking.</li>
              <li>Facilitate people eating healthy, delicious, and sustainably.</li>
            </ol>
            <p>
              Every jar of our dashi sold pushes each of these forward at the same time.
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
