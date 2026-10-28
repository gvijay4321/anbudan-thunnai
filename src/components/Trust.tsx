import { trustPoints } from '../content'
import Icon from './Icon'

export default function Trust() {
  return (
    <section className="trust" aria-label="Why families trust us">
      <div className="container trust-grid">
        {trustPoints.map((t) => (
          <div key={t.text} className="trust-item">
            <span className="trust-icon">
              <Icon name={t.icon} width={28} height={28} />
            </span>
            <span>{t.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
