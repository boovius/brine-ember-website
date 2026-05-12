import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/images/kelp-underwater.jpg" alt="" />
          <div className="hero-veil" />
        </div>

        <div className="container hero-inner">
          <div className="hero-eyebrow">
            <span className="eyebrow">Climate-Forward Food · Seed Round</span>
          </div>
          <h1 className="hero-title">
            From the <em>Brine</em> of the sea<br/>
            to <em>Ember</em> of life.
          </h1>
          <p className="hero-sub">
            A circular food &amp; climate company transforming Japanese kelp into premium
            culinary products, agricultural biochar, and deep-sea carbon sinks —
            all from a single harvest.
          </p>
          <div className="hero-cta">
            <Link to="/process" className="btn">Explore the Process</Link>
            <Link to="/about" className="btn btn-ghost">Our Mission</Link>
          </div>

          <a href="#crises" className="hero-scroll" aria-label="Scroll to next section">
            <span>Scroll</span>
            <span className="hero-scroll-line" />
          </a>
        </div>
      </section>

      {/* THREE CRISES */}
      <section id="crises" className="section section-crises">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Three Crises · One Circular Solution</span>
            <h2>One harvest, three planetary problems addressed.</h2>
            <p className="lead" style={{ maxWidth: '60ch' }}>
              We sit at the intersection of food, agriculture, and climate — converting
              waste into yield and yield into sequestration.
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <Reveal className="card">
              <span className="num">01</span>
              <h3>Food Waste</h3>
              <p>30%+ of harvested seaweed is discarded during Dashi processing — premium biomass treated as trash.</p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <span className="num">02</span>
              <h3>Soil Degradation</h3>
              <p>Conventional fertilizers are stripping U.S. farmland of nutrients, reducing long-term agricultural resilience.</p>
            </Reveal>
            <Reveal className="card" delay={200}>
              <span className="num">03</span>
              <h3>The Carbon Gap</h3>
              <p>Achieving Net Zero demands massive, verifiable sequestration — and nature-based solutions are critically underfunded.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="chrome-band" aria-hidden="true" />

      {/* CIRCULARITY */}
      <section className="section section-circular">
        <div className="container">
          <div className="circular-head">
            <Reveal>
              <span className="eyebrow">The Kelp Circularity</span>
              <h2>Every step creates value.<br/>Nothing is wasted. Everything compounds.</h2>
            </Reveal>
          </div>

          <div className="circular-loop">
            <div className="loop-node loop-node-1">
              <span className="loop-label small">Step 01</span>
              <h3>Source Premium Kelp</h3>
              <p>Direct relationships with Japanese kelp harvesters ensure quality and traceability.</p>
            </div>
            <div className="loop-node loop-node-2">
              <span className="loop-label small">Step 02</span>
              <h3>Produce The Brine</h3>
              <p>Small-batch, artisan dashi crafted from the most prized portion of the kelp.</p>
            </div>
            <div className="loop-node loop-node-3">
              <span className="loop-label small">Step 03</span>
              <h3>Upcycle Into Ember</h3>
              <p>Processing waste is converted into high-quality biochar — &ldquo;black gold&rdquo; for soils.</p>
            </div>
            <div className="loop-node loop-node-4">
              <span className="loop-label small">Step 04</span>
              <h3>Protect Oceans &amp; Carbon</h3>
              <p>A portion of every sale funds kelp reforestation and abyssal-plain sequestration.</p>
            </div>
            <div className="loop-orb" aria-hidden="true">
              <span>The<br/>Loop</span>
            </div>
          </div>

          <p className="muted center" style={{ marginTop: '2.5rem', maxWidth: '64ch', marginLeft: 'auto', marginRight: 'auto' }}>
            Our climate impact scales proportionally with every product sold — not as an offset,
            but as an operating principle.
          </p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Two Products · One Harvest</span>
            <h2>The Brine. The Ember.</h2>
          </Reveal>

          <div className="product-split">
            <Reveal className="product">
              <div className="product-media">
                <img src="/images/dashi-bowl.jpg" alt="A bowl of dashi with kelp ribbons" />
              </div>
              <div className="product-body">
                <span className="small">Product 01</span>
                <h3>The Brine — Premium Dashi</h3>
                <p>Premium, small-batch, boutique, artisan Japanese kelp — sourced through direct harvester relationships and crafted for the most discerning kitchens.</p>
                <ul className="ticks">
                  <li>High-umami, authentically sourced dashi</li>
                  <li>Taps the $40B+ global functional food market</li>
                  <li>&ldquo;Trace-Your-Impact&rdquo; QR code linking purchase to sequestration data</li>
                </ul>
              </div>
            </Reveal>

            <Reveal className="product product-flip" delay={120}>
              <div className="product-media">
                <img src="/images/charcoal.jpg" alt="Biochar — charred biomass" />
              </div>
              <div className="product-body">
                <span className="small">Product 02</span>
                <h3>The Ember — Agricultural Biochar</h3>
                <p>Processing waste from dashi production is converted into high-quality biochar — &ldquo;Black Gold&rdquo; for agricultural markets.</p>
                <ul className="ticks">
                  <li>Dramatic increase in soil water retention</li>
                  <li>Reduces reliance on synthetic fertilizers</li>
                  <li>Sequesters carbon for over 1,000 years</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DEEP-SEA / LEGACY */}
      <section className="section section-legacy">
        <div className="legacy-bg" aria-hidden="true" />
        <div className="container legacy-inner">
          <Reveal>
            <span className="eyebrow">The Legacy Play</span>
            <h2>Deep-Sea Sequestration.</h2>
            <p className="lead">
              A portion of every sale funds ocean reforestation — cultivating kelp forests and sinking
              biomass to the abyssal plain, where carbon is locked away for centuries.
            </p>
            <p>
              We&rsquo;re funding research into the viability, scaling, and eco-system impacts of
              ocean-based sequestration — so that what we put in the water is grounded in science
              and shaped by what it does to the places it touches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PATH TO MARKET */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The Ask &amp; Path to Market</span>
            <h2>Three moves. One launch.</h2>
            <p className="lead" style={{ maxWidth: '62ch' }}>
              We are raising to secure the Japanese harvest, pilot biochar conversion, and bring our
              premium, small-batch dashi to specialty retail.
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <Reveal className="card">
              <span className="num">01</span>
              <h3>Secure Supply</h3>
              <p>Lock direct harvest contracts with Japanese kelp partners.</p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <span className="num">02</span>
              <h3>Pilot Biochar</h3>
              <p>Validate conversion and establish agricultural offtake relationships.</p>
            </Reveal>
            <Reveal className="card" delay={200}>
              <span className="num">03</span>
              <h3>Retail Launch</h3>
              <p>Specialty and boutique retail debut, with transparent sequestration reporting tied to every jar.</p>
            </Reveal>
          </div>

          <div className="center" style={{ marginTop: '3rem' }}>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
