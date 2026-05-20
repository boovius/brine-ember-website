import Reveal from '../components/Reveal.jsx'

const steps = [
  {
    n: '01',
    label: 'Partner',
    title: 'Producers & Farmers',
    img: '/images/kelp-underwater.jpg',
    body: 'We work with Japanese dashi producers and North American seaweed farmers — not as a buyer of raw seaweed, but as a partner investigating circular pathways for the waste seaweed left behind after dashi is drawn.',
    tints: ['var(--teal)', 'var(--amber)'],
  },
  {
    n: '02',
    label: 'Produce',
    title: 'The Brine — Custom Premium Dashi',
    img: '/images/dashi-bowl.jpg',
    body: 'A custom premium dashi product, built for higher-end grocery stores and the consumer who treats sustainability as a value worth a remunerative choice.',
    tints: ['var(--amber)', '#f0c089'],
  },
  {
    n: '03',
    label: 'Upcycle',
    title: 'The Ember — Biochar',
    img: '/images/biochar-producer.jpg',
    body: 'The 30%+ of seaweed biomass normally discarded after dashi production is pyrolyzed into agricultural-grade biochar — "black gold" for soils, water retention, and a 1,000-year carbon lock.',
    tints: ['#3a2618', '#7a4a26'],
  },
  {
    n: '04',
    label: 'Support',
    title: 'R&D into Seaweed Sinking',
    img: '/images/charcoal.jpg',
    body: 'A portion of every sale supports the R&D community investigating seaweed sinking — its viability, scaling, and the eco-system impacts that come with putting biomass into the deep ocean.',
    tints: ['var(--teal-deep)', 'var(--magenta)'],
  },
  {
    n: '05',
    label: 'Distribute',
    title: 'Higher-End Grocery',
    img: '/images/shipping.jpg',
    body: 'The dashi is built for higher-end grocery stores in the U.S., Canada, and Europe — for the consumer who treats sustainability as a value worth choosing.',
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
          <h1>One overlooked ingredient. Five outcomes.</h1>
          <p className="lead">
            Starting from the waste seaweed left behind after dashi production, we make a
            premium dashi product, an agricultural soil amendment, support for seaweed-sinking
            R&amp;D, and a story consumers can actually follow. Here&rsquo;s how.
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
            <span className="eyebrow">Transparency at Every Step</span>
            <h2>Connecting consumer to impact.</h2>
            <p className="lead">
              Trace-Your-Impact QR codes connect a single jar of dashi to the carbon outcomes
              it helped fund — so the person at the table can see what their purchase put in
              the soil and the sea.
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
