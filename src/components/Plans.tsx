import { plans, plansNote, whatsappUrl } from '../content'
import { CheckIcon } from './Icons'

export default function Plans() {
  return (
    <section className="section section-alt" id="plans">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Subscription packages</p>
          <h2>Care plans that fit your family</h2>
          <p className="section-intro">Regular visits from the same trusted faces, with updates for you every time.</p>
        </div>
        <div className="plans">
          {plans.map((p) => (
            <article key={p.name} className={`plan ${p.featured ? 'plan-featured' : ''}`}>
              {p.featured && <span className="plan-badge">Most complete</span>}
              <h3>{p.name}</h3>
              <p className="plan-tagline">{p.tagline}</p>
              <p className="plan-price">
                {p.price}
                {p.price.startsWith('₹') && <span> {p.priceNote}</span>}
              </p>
              <ul>
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckIcon width={18} height={18} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                className={`btn ${p.featured ? 'btn-accent' : 'btn-primary'}`}
                href={whatsappUrl(`Hello Anbudan Thunnai, I am interested in the ${p.name} plan for my parent.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>
        <p className="plans-note">{plansNote}</p>
      </div>
    </section>
  )
}
