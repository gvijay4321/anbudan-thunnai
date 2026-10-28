import { areas, contact, faqs } from '../content'
import { PinIcon } from './Icons'

export default function FAQ() {
  return (
    <section className="section section-alt" id="faq">
      <div className="container faq-grid">
        <div>
          <p className="eyebrow">Questions</p>
          <h2>Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
        <aside className="areas">
          <h3>
            <PinIcon width={22} height={22} /> Areas we serve in {contact.city}
          </h3>
          <ul>
            {areas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <p>Don’t see your area? Call us. We cover most of {contact.city}.</p>
        </aside>
      </div>
    </section>
  )
}
