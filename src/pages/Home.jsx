import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const goals = [
  {
    n: '01',
    title: 'Valorize the waste',
    body: 'Capture and sequester the carbon in waste seaweed from dashi production by converting it into agricultural biochar.',
  },
  {
    n: '02',
    title: 'Grow Western seaweed',
    body: 'Help build the seaweed industry in the global West — the U.S., Canada, and Europe — alongside farmers already in the water.',
  },
  {
    n: '03',
    title: 'Educate the eater',
    body: 'Make the link between seaweed and climate-change reversal legible to the everyday consumer.',
  },
  {
    n: '04',
    title: 'Support the science',
    body: 'Back the R&D efforts exploring seaweed sinking — its viability, scaling, and eco-system impacts.',
  },
  {
    n: '05',
    title: 'Eat well, eat lightly',
    body: 'Help people eat in a way that is healthy, delicious, and genuinely sustainable.',
  },
]

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
            <span className="eyebrow">Circular Seaweed · Climate-Forward Food</span>
          </div>
          <h1 className="hero-title">
            From the <span className="word-brine">Brine</span> of the sea<br/>
            to the <span className="word-ember">Ember</span> of <span className="word-life">life</span>.
          </h1>
          <p className="hero-sub">
            A circular food &amp; climate company partnering with Japanese dashi producers
            and North American seaweed farmers — turning waste seaweed into agricultural
            biochar, a premium dashi product, and durable carbon sequestration.
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
            <span className="eyebrow">Three Crises · One Circular Idea</span>
            <h2>One overlooked ingredient, three planetary problems addressed.</h2>
            <p className="lead" style={{ maxWidth: '60ch' }}>
              We sit at the intersection of food, agriculture, and climate — converting
              waste into yield and yield into sequestration.
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            <Reveal className="card">
              <span className="num">01</span>
              <h3>Food Waste</h3>
              <p>30%+ of the seaweed used in dashi production is discarded once the stock has been drawn — premium biomass treated as trash.</p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <span className="num">02</span>
              <h3>Soil Degradation</h3>
              <p>Conventional fertilizers are stripping U.S. farmland of nutrients, reducing long-term agricultural resilience.</p>
            </Reveal>
            <Reveal className="card" delay={200}>
              <span className="num">03</span>
              <h3>The Carbon Gap</h3>
              <p>Reversing climate change demands massive, verifiable sequestration — and nature-based, ocean-linked solutions are critically underfunded.</p>
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
              <span className="eyebrow">The Seaweed Circularity</span>
              <h2>Every step creates value.<br/>Nothing is wasted. Everything compounds.</h2>
            </Reveal>
          </div>

          <div className="circular-loop">
            <div className="loop-node loop-node-1">
              <span className="loop-label small">Step 01</span>
              <h3>Partner at the Source</h3>
              <p>Working alongside Japanese dashi producers and North American seaweed farmers — not as a buyer of raw seaweed, but as a partner in what to do with what gets left behind.</p>
            </div>
            <div className="loop-node loop-node-2">
              <span className="loop-label small">Step 02</span>
              <h3>Produce The Brine</h3>
              <p>Our custom premium dashi, crafted for higher-end grocery shelves where sustainability is treated as a value worth choosing.</p>
            </div>
            <div className="loop-node loop-node-3">
              <span className="loop-label small">Step 03</span>
              <h3>Upcycle Into Ember</h3>
              <p>The waste seaweed from dashi production is converted into high-quality biochar — &ldquo;black gold&rdquo; for soils.</p>
            </div>
            <div className="loop-node loop-node-4">
              <span className="loop-label small">Step 04</span>
              <h3>Grow the Western Industry</h3>
              <p>A portion of every sale supports the seaweed industry in the global West and the R&amp;D community exploring seaweed sinking.</p>
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
            <span className="eyebrow">Two Products · One Loop</span>
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
                <p>
                  Our custom premium dashi, built for higher-end grocery stores and the
                  consumer who treats sustainability as a value worth a remunerative choice.
                </p>
                <ul className="ticks">
                  <li>High-umami, authentically rooted in the Japanese tradition</li>
                  <li>Designed for the home cook who reads labels and asks where things come from</li>
                  <li>&ldquo;Trace-Your-Impact&rdquo; QR code linking each jar to the climate outcomes it helped fund</li>
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
                <p>Waste seaweed from dashi production is converted into high-quality biochar — &ldquo;Black Gold&rdquo; for agricultural soils.</p>
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

      {/* DEEP-SEA / R&D */}
      <section className="section section-legacy">
        <div className="legacy-bg" aria-hidden="true" />
        <div className="container legacy-inner">
          <Reveal>
            <span className="eyebrow">Supporting the Science</span>
            <h2>Deep-Sea Sequestration.</h2>
            <p className="lead">
              Sinking biomass to the abyssal plain — where carbon can be locked away for
              centuries — is one of the most promising and least understood levers in the
              ocean&rsquo;s climate toolkit.
            </p>
            <p>
              We&rsquo;re backing the R&amp;D community exploring its viability, scaling,
              and eco-system impacts. What we put in the water has to be grounded in
              science and shaped by what it does to the places it touches.
            </p>
          </Reveal>
        </div>
      </section>

      {/* VISION + FIVE GOALS */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Vision</span>
            <h2>Reverse climate change by promoting carbon sequestration through seaweed.</h2>
            <p className="lead" style={{ maxWidth: '62ch' }}>
              Five concrete goals shape how we move toward it.
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: '3rem' }}>
            {goals.map((g, i) => (
              <Reveal className="card" delay={i * 80} key={g.n}>
                <span className="num">{g.n}</span>
                <h3>{g.title}</h3>
                <p>{g.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="center" style={{ marginTop: '3rem' }}>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
