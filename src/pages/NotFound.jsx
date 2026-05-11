import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page">
      <section className="section" style={{ minHeight: '70vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '52ch' }}>
          <span className="eyebrow">404</span>
          <h1>Off the loop.</h1>
          <p className="lead">
            That page isn&rsquo;t part of our circular system — but everything important is just one click away.
          </p>
          <Link to="/" className="btn">Return Home</Link>
        </div>
      </section>
    </div>
  )
}
