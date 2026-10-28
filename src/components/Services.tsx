import { services } from '../content'
import Icon from './Icon'
import Photo from './Photo'

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h2>Help to get out, good company, and a closer eye on their wellbeing</h2>
        </div>
        <div className="services">
          {services.map((s) => (
            <article key={s.title} className={`service-card accent-${s.accent}`}>
              <div className="service-media">
                <Photo src={s.image} alt={s.title} icon={s.icon} />
                <div className="service-icon">
                  <Icon name={s.icon} width={28} height={28} />
                </div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul>
                {s.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
