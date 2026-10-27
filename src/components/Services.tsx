import { services, type ServiceIcon } from '../content'
import { CarIcon, PeopleIcon, PinIcon } from './Icons'

const icons: Record<ServiceIcon, typeof CarIcon> = { car: CarIcon, pin: PinIcon, people: PeopleIcon }

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">What we do</p>
          <h2>Help to get out, and good company along the way</h2>
        </div>
        <div className="services">
          {services.map((s) => {
            const Icon = icons[s.icon]
            return (
              <article key={s.title} className={`service-card accent-${s.accent}`}>
                <div className="service-icon">
                  <Icon width={30} height={30} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul>
                  {s.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
