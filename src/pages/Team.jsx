import Reveal from '../components/Reveal.jsx'

export default function Team() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-media" aria-hidden="true">
          <img src="/images/chrome-2.jpg" alt="" />
          <div className="page-hero-veil" />
        </div>
        <div className="container page-hero-inner">
          <span className="eyebrow">The Founders</span>
          <h1>Two operators. One closed loop.</h1>
          <p className="lead">
            Brine + Ember is led by a technical product builder and a climate
            business-development operator. The combination is intentional —
            sequestration is only as valuable as the supply chain and the story
            that carry it to market.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="founder">
            <div className="founder-portrait" aria-hidden="true">
              <div className="founder-portrait-inner founder-portrait-amber">
                <span className="founder-initial">J</span>
              </div>
              <div className="founder-portrait-frame" />
            </div>
            <div className="founder-body">
              <span className="small">Co-Founder · Technical Product &amp; Strategy</span>
              <h2>Josh Book</h2>
              <p className="founder-role">The Synergizer</p>
              <p className="lead">
                Technical builder and complex systems thinker connecting people,
                ideas, and regenerative climate solutions.
              </p>

              <div className="founder-credentials">
                <div>
                  <span className="num">01</span>
                  <h4>NYU BFA</h4>
                  <p>A foundation in storytelling, systems thinking, and cross-disciplinary craft.</p>
                </div>
                <div>
                  <span className="num">02</span>
                  <h4>Technical Founder of Cerca</h4>
                  <p>Built and shipped a consumer product from the ground up — design, code, and operations.</p>
                </div>
                <div>
                  <span className="num">03</span>
                  <h4>Technical Product Consultant</h4>
                  <p>Helps early-stage teams turn complex visions into executed product outcomes.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="divider" style={{ margin: '5rem 0' }} />

          <Reveal className="founder founder-flip" delay={100}>
            <div className="founder-portrait" aria-hidden="true">
              <div className="founder-portrait-inner">
                <span className="founder-initial">M</span>
              </div>
              <div className="founder-portrait-frame" />
            </div>
            <div className="founder-body">
              <span className="small">Co-Founder · Climate Business Development</span>
              <h2>Marielle Fillit</h2>
              <p className="founder-role">The Do-er</p>
              <p className="lead">
                Marielle brings the scientific rigor and institutional credibility to
                anchor Brine + Ember&rsquo;s sequestration claims and climate framework.
              </p>

              <div className="founder-credentials">
                <div>
                  <span className="num">01</span>
                  <h4>Columbia MPA</h4>
                  <p>Environmental Science &amp; Policy — validates the sequestration methodology.</p>
                </div>
                <div>
                  <span className="num">02</span>
                  <h4>AllSola / NEXA</h4>
                  <p>Zero-to-one hardware/software systems and global manufacturing loops.</p>
                </div>
                <div>
                  <span className="num">03</span>
                  <h4>Accenture / UN</h4>
                  <p>Aligning Fortune 500 capabilities with global sustainability mandates.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-quote">
        <div className="container center">
          <Reveal>
            <p className="big-quote">
              &ldquo;From the Brine of the sea to Ember of life.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
