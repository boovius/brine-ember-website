import Reveal from '../components/Reveal.jsx'

const steps = [
  {
    n: '01',
    label: 'Partner',
    title: 'Producers & Farmers',
    img: '/images/dashi-factory-waste.png',
    isIllustration: true,
    body: 'We work with Japanese dashi producers and North American seaweed farmers — not as a buyer of raw seaweed, but as a partner investigating circular pathways for the waste seaweed left behind after dashi is drawn.',
    tint: 'var(--teal)',
  },
  {
    n: '02',
    label: 'Produce',
    title: 'The Brine — Custom Premium Dashi',
    img: '/images/dashi-bowl.jpg',
    body: 'A custom premium dashi product, built for higher-end grocery stores and the consumer who treats sustainability as a value worth a remunerative choice.',
    tint: 'var(--amber)',
  },
  {
    n: '03',
    label: 'Upcycle',
    title: 'The Ember — Biochar',
    img: '/images/biochar-producer.jpg',
    body: 'The 30%+ of seaweed biomass normally discarded after dashi production is pyrolyzed into agricultural-grade biochar — "black gold" for soils, water retention, and a 1,000-year carbon lock.',
    tint: 'var(--amber-deep)',
  },
  {
    n: '04',
    label: 'Support',
    title: 'R&D into Seaweed Sinking',
    img: '/images/sinking-seaweed.png',
    isIllustration: true,
    body: 'A portion of every sale supports the R&D community investigating seaweed sinking — its viability, scaling, and the eco-system impacts that come with putting biomass into the deep ocean.',
    tint: 'var(--teal-deep)',
  },
  {
    n: '05',
    label: 'Distribute',
    title: 'Higher-End Grocery',
    img: '/images/shipping.jpg',
    body: 'The dashi is built for higher-end grocery stores in the U.S., Canada, and Europe — for the consumer who treats sustainability as a value worth choosing.',
    tint: 'var(--magenta)',
  },
]

const photoFilter = 'sepia(0.2) saturate(0.85) brightness(0.97) contrast(0.95)'

export default function Process() {
  return (
    <div className="page">
      <section className="page-hero has-illustration">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow">The Process</span>
            <h1>One overlooked ingredient. Five outcomes.</h1>
            <p className="lead">
              Starting from the waste seaweed left behind after dashi production, we make a
              premium dashi product, an agricultural soil amendment, support for seaweed-sinking
              R&amp;D, and a story consumers can actually follow. Here&rsquo;s how.
            </p>
          </div>
          <div className="page-hero-illustration" aria-hidden="true">
            <img src="/images/seaweed-soup-char.png" alt="" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="timeline">
            {steps.map((s) => (
              <Reveal className="timeline-step" key={s.n}>
                <div className="timeline-marker" style={{ '--m1': s.tint }}>
                  <span>{s.n}</span>
                </div>
                <div className="timeline-content">
                  <span className="small">{s.label}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
                <div className="timeline-media">
                  <img
                    src={s.img}
                    alt=""
                    style={s.isIllustration ? undefined : { filter: photoFilter }}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dmrv">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The System on One Page</span>
            <h2>The full loop, mapped.</h2>
            <p className="lead" style={{ maxWidth: '60ch' }}>
              From sea and farm, through drying and dashi production, into pyrolysis,
              biochar, carbon credits, and back out to specialty grocery, restaurants,
              and farmers markets.
            </p>
          </Reveal>

          <Reveal className="process-diagram" delay={100} style={{ marginTop: '2.5rem' }}>
            <img src="/images/process-diagram.png" alt="Brine + Ember process diagram showing seaweed inputs flowing through drying, dashi production, pyrolysis, and out to multiple end markets" />
          </Reveal>
        </div>
      </section>

      <section className="section">
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
