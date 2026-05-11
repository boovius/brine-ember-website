import { useState } from 'react'
import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', reason: 'General', message: '' })

  function update(k, v) {
    setForm(prev => ({ ...prev, [k]: v }))
  }

  function submit(e) {
    e.preventDefault()
    if (!form.email.trim() || !form.message.trim()) {
      setStatus({ kind: 'error', text: 'Please add an email and a short message.' })
      return
    }
    const subject = encodeURIComponent(`[Brine + Ember · ${form.reason}] ${form.name || 'New inquiry'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nReason: ${form.reason}\n\n${form.message}`
    )
    window.location.href = `mailto:hello@brineandember.com?subject=${subject}&body=${body}`
    setStatus({ kind: 'ok', text: 'Opening your email client…' })
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="page-hero-media" aria-hidden="true">
          <img src="/images/chrome-1.jpg" alt="" />
          <div className="page-hero-veil" />
        </div>
        <div className="container page-hero-inner">
          <span className="eyebrow">Contact</span>
          <h1>Let&rsquo;s close the loop, together.</h1>
          <p className="lead">
            Whether you&rsquo;re a retailer, investor, agricultural partner, or curious diner —
            we want to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <h4>Direct</h4>
            <h2>Reach out.</h2>
            <p>
              For general inquiries, partnerships, or press, the founders read every message.
            </p>

            <ul className="contact-list">
              <li>
                <span className="small">General</span>
                <a href="mailto:hello@brineandember.com">hello@brineandember.com</a>
              </li>
              <li>
                <span className="small">Investors</span>
                <a href="mailto:investors@brineandember.com">investors@brineandember.com</a>
              </li>
              <li>
                <span className="small">Retail &amp; Wholesale</span>
                <a href="mailto:retail@brineandember.com">retail@brineandember.com</a>
              </li>
              <li>
                <span className="small">Agricultural Partners</span>
                <a href="mailto:soil@brineandember.com">soil@brineandember.com</a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={submit} noValidate>
              <label>
                <span>Name</span>
                <input
                  type="text"
                  value={form.name}
                  onChange={e => update('name', e.target.value)}
                  placeholder="Your name"
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                  placeholder="you@company.com"
                />
              </label>
              <label>
                <span>Reason</span>
                <select value={form.reason} onChange={e => update('reason', e.target.value)}>
                  <option>General</option>
                  <option>Investor Inquiry</option>
                  <option>Retail / Wholesale</option>
                  <option>Agricultural Partnership</option>
                  <option>Press</option>
                </select>
              </label>
              <label>
                <span>Message</span>
                <textarea
                  rows="5"
                  required
                  value={form.message}
                  onChange={e => update('message', e.target.value)}
                  placeholder="Tell us a bit about yourself…"
                />
              </label>
              {status && (
                <p className={`form-status ${status.kind}`}>{status.text}</p>
              )}
              <button type="submit" className="btn">Send Message</button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
