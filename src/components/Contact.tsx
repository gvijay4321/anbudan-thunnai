import { audience, closingQuote, contact, telLink, whatsappLink } from '../content'
import { PhoneIcon, PinIcon, WhatsAppIcon } from './Icons'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-grid">
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
                <WhatsAppIcon /> Message on WhatsApp
              </a>
            </div>
          </div>
        </div>
        <blockquote className="quote-note">
          {closingQuote} <span aria-hidden>♡</span>
        </blockquote>
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
