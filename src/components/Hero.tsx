import { brand, hero, telLink, whatsappLink } from '../content'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{brand.tagline}</p>
          <h1>
            {hero.titleLead} <span className="accent">{hero.titleCity}</span>
          </h1>
          <p className="lead">{hero.subtitle}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={telLink}>
              <PhoneIcon /> Call us
            </a>
            <a className="btn btn-whatsapp" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-media">
          <img
            src="/images/hero.jpg"
            alt="A smiling elderly man walking arm in arm with an Anbudan Thunnai companion in Coimbatore"
            width={492}
            height={756}
          />
          <p className="handnote">
            {hero.note} <span aria-hidden>♡</span>
          </p>
        </div>
      </div>
    </section>
  )
}
