import { useState, type FormEvent } from 'react'
import { audience, closingQuote, contact, plans, telLink, whatsappLink, whatsappUrl } from '../content'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

/** Enquiry form – no server needed: it opens WhatsApp with the details pre-filled. */
function EnquiryForm() {
  const [form, setForm] = useState({ name: '', parent: '', area: '', plan: '', message: '' })
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      'Hello Anbudan Thunnai, I would like to enquire about your service.',
      `Name: ${form.name}`,
      form.parent && `Parent: ${form.parent}`,
      form.area && `Area: ${form.area}`,
      form.plan && `Interested in: ${form.plan}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean)
    window.open(whatsappUrl(lines.join('\n')), '_blank', 'noopener')
  }

  return (
    <form className="enquiry" onSubmit={submit}>
      <h3>Send us an enquiry</h3>
      <p>Fill this in and we’ll continue on WhatsApp.</p>
      <div className="field-row">
        <label>
          Your name
          <input required value={form.name} onChange={set('name')} autoComplete="name" />
        </label>
        <label>
          Parent’s name / age
          <input value={form.parent} onChange={set('parent')} placeholder="e.g. Amma, 72" />
        </label>
      </div>
      <div className="field-row">
        <label>
          Area in {contact.city}
          <input value={form.area} onChange={set('area')} placeholder="e.g. RS Puram" />
        </label>
        <label>
          Interested in
          <select value={form.plan} onChange={set('plan')}>
            <option value="">Not sure yet</option>
            {plans.map((p) => (
              <option key={p.name}>{p.name} plan</option>
            ))}
            <option>One-off visit / hospital trip</option>
            <option>Physio / fitness sessions</option>
          </select>
        </label>
      </div>
      <label>
        How can we help?
        <textarea rows={3} value={form.message} onChange={set('message')} />
      </label>
      <button type="submit" className="btn btn-whatsapp">
        <WhatsAppIcon /> Send on WhatsApp
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
        <div className="contact-left">
          <div className="cta-panel">
            <div className="cta-icons" aria-hidden>
              <PhoneIcon width={44} height={44} />
              <span className="cta-wa">
                <WhatsAppIcon width={44} height={44} />
              </span>
            </div>
            <div className="cta-body">
              <p className="cta-label">Call / WhatsApp</p>
              <a className="cta-number" href={telLink}>
                {contact.phoneDisplay}
              </a>
              <div className="cta-buttons">
                <a className="btn btn-light" href={telLink}>
                  <PhoneIcon /> Call now
                </a>
                <a className="btn btn-whatsapp" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
            </div>
          </div>
          <blockquote className="quote-note">
            {closingQuote} <span aria-hidden>♡</span>
          </blockquote>
        </div>
        <EnquiryForm />
      </div>
      <p className="container audience">
        <PinIcon width={20} height={20} />
        <strong>{contact.city}</strong>
        <span className="sep" aria-hidden>
          |
        </span>
        <span>{audience}</span>
      </p>
    </section>
  )
}
