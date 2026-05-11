import Reveal from '../components/Reveal.jsx'

const steps = [
  {
    n: '01',
    label: 'Source',
    title: 'Premium Japanese Kelp',
    img: '/images/kelp-underwater.jpg',
    body: 'Direct relationships with Japanese kelp harvesters secure Michelin-grade kombu. Provenance, quality, and supply continuity are locked in at the source.',
    tints: ['var(--teal)', 'var(--amber)'],
  },
  {
    n: '02',
    label: 'Produce',
    title: 'The Brine — Dashi',
    img: '/images/dashi-bowl.jpg',
    body: 'The most prized portion of the kelp becomes our premium dashi — a pantry staple with high-umami depth and authentic Japanese sourcing.',
    tints: ['var(--amber)', '#f0c089'],
  },
  {
    n: '03',
    label: 'Upcycle',
    title: 'The Ember — Biochar',
    img: '/images/biochar-producer.jpg',
    body: 'The 30%+ of kelp biomass normally discarded is pyrolyzed into agricultural-grade biochar — "black gold" for soils, water retention, and a 1,000-year carbon lock.',
    tints: ['#3a2618', '#7a4a26'],
  },
  {
    n: '04',
    label: 'Sequester',
    title: 'Deep-Sea Carbon Lock',
    img: '/images/charcoal.jpg',
    body: 'A portion of every sale funds ocean reforestation — kelp cultivation and abyssal-plain biomass sinking, with dMRV-verified sequestration claims.',
    tints: ['var(--teal-deep)', 'var(--magenta)'],
  },
  {
    n: '05',
    label: 'Distribute',
    title: 'Global Bridge',
    img: '/images/shipping.jpg',
    body: 'ISO-grade quality control and 15+ years of international logistics experience move the product to U.S. retail — Whole Foods, Publix, and direct.',
    tints: ['var(--magenta)', '#4a5b80'],
  },
]

export default function Process() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-media" aria-hidden="true">
          <img src="/images/chrome-3.jpg" alt="" />
          <div className="page-hero-veil" />
        </div>
        <div className="container page-hero-inner">
          <span className="eyebrow">The Process</span>
          <h1>One harvest. Five outcomes.</h1>
          <p className="lead">
            From a single kelp harvest off the coast of Japan, we produce a premium
            culinary product, an agricultural soil amendment, a deep-sea carbon sink,
            and verifiable climate data — distributed through a regulated global
            supply chain. Here&rsquo;s how.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="timeline">
            {steps.map((s, i) => (
              <Reveal className="timeline-step" key={s.n}>
                <div className="timeline-marker" style={{ '--m1': s.tints[0], '--m2': s.tints[1] }}>
                  <span>{s.n}</span>
                </div>
                <div className="timeline-content">
                  <span className="small">{s.label}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <div className="timeline-media">
                  <img src={s.img} alt="" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dmrv">
        <div className="container">
          <Reveal>
            <span className="eyebrow">dMRV — Trust at Every Step</span>
            <h2>Digital Monitoring, Reporting &amp; Verification.</h2>
            <p className="lead">
              Every sequestration claim is scientifically defensible and investor-grade.
              Trace-Your-Impact QR codes connect a single jar of dashi to the verified
              carbon outcomes it helped fund.
            </p>
          </Reveal>

          <div className="grid grid-3" style={{ marginTop: '2.5rem' }}>
            <Reveal className="card">
              <h3>Water Retention</h3>
              <p>Biochar dramatically increases soil water retention, reducing irrigation needs and drought vulnerability.</p>
            </Reveal>
            <Reveal className="card" delay={100}>
              <h3>Chemical Reduction</h3>
              <p>Reduces reliance on synthetic fertilizers, lowering input costs and ecological runoff for farmers.</p>
            </Reveal>
            <Reveal className="card" delay={200}>
              <h3>1,000-Year Carbon Lock</h3>
              <p>Once embedded in soil, biochar sequesters carbon for over a millennium — durable, measurable, verifiable.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
