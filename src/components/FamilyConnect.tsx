import { familyConnect, whatsappUrl } from '../content'
import { CheckIcon, WhatsAppIcon } from './Icons'
import Photo from './Photo'

export default function FamilyConnect() {
  return (
    <section className="section" id="family">
      <div className="container family-panel">
        <div className="family-copy">
          <p className="eyebrow">{familyConnect.eyebrow}</p>
          <h2>{familyConnect.title}</h2>
          <p className="section-intro">{familyConnect.text}</p>
          <ul className="check-list">
            {familyConnect.points.map((p) => (
              <li key={p}>
                <CheckIcon width={20} height={20} />
                {p}
              </li>
            ))}
          </ul>
          <a
            className="btn btn-whatsapp"
            href={whatsappUrl('Hello Anbudan Thunnai, I live away from my parents and would like to know about live checks and video calls.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon /> Ask about live checks
          </a>
        </div>
        <div className="family-media">
          <Photo src={familyConnect.image} alt="An elderly parent smiling on a video call with family, helped by a companion" icon="video" />
        </div>
      </div>
    </section>
  )
}
