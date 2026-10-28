import { whyUs } from '../content'
import Icon from './Icon'
import Photo from './Photo'

export default function WhyUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container why-grid">
        <div className="why-media">
          <Photo src={whyUs.image} alt="A patient companion caring for an elderly parent" icon="heart" />
        </div>
        <div>
          <p className="eyebrow">Why Anbudan Thunnai</p>
          <h2>{whyUs.title}</h2>
          <p className="section-intro">{whyUs.intro}</p>
          <div className="why-points">
            {whyUs.points.map((p) => (
              <div key={p.title} className="why-point">
                <span className="why-icon">
                  <Icon name={p.icon} width={24} height={24} />
                </span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
