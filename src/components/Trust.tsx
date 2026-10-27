import { trustPoints, type TrustIcon } from '../content'
import { ChatIcon, HeartIcon, ShieldIcon, UpdatesIcon } from './Icons'

const icons: Record<TrustIcon, typeof ShieldIcon> = {
  shield: ShieldIcon,
  updates: UpdatesIcon,
  chat: ChatIcon,
  heart: HeartIcon,
}

export default function Trust() {
  return (
    <section className="trust" aria-label="Why families trust us">
      <div className="container trust-grid">
        {trustPoints.map((t) => {
          const Icon = icons[t.icon]
          return (
            <div key={t.text} className="trust-item">
              <span className="trust-icon">
                <Icon width={28} height={28} />
              </span>
              <span>{t.text}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
