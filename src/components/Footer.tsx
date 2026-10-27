import { brand, contact, telLink, whatsappLink } from '../content'
import { LogoMark } from './Logo'

/** Line-art Coimbatore skyline: Western Ghats, clock tower, temple gopuram and palms. */
function Skyline() {
  const palm = (x: number, h: number) => (
    <g key={x} transform={`translate(${x} ${120 - h})`}>
      <path d={`M0 0 Q2 ${h / 2} 0 ${h}`} />
      <path d="M0 0c-6-4-12-3-16 2M0 0c6-4 12-3 16 2M0 0c-4-6-10-8-14-6M0 0c4-6 10-8 14-6" />
    </g>
  )
  return (
    <svg className="skyline" viewBox="0 0 1200 120" preserveAspectRatio="xMidYMax slice" aria-hidden>
      <path className="hills" d="M0 120 L0 80 Q120 40 240 70 T480 55 Q620 20 760 60 T1020 45 Q1120 35 1200 70 L1200 120z" />
      <g className="lines">
        {/* clock tower */}
        <path d="M180 120V50h24v70M176 50h32l-16-16zM192 34v-8M186 66a6 6 0 1 0 12 0a6 6 0 1 0-12 0M184 86h16M184 100h16" />
        {/* gopuram */}
        <path d="M560 120l8-70h48l8 70M566 102h52M564 86h56M568 70h48M572 50l6-12h28l6 12M584 38v-6h16v6M584 120v-16h16v16" />
        {/* colonnade */}
        <path d="M860 120V82h120v38M860 82l60-20 60 20M876 120V92M900 120V92M940 120V92M964 120V92" />
        {/* houses */}
        <path d="M330 120V92l20-14 20 14v28M400 120V98h40v22M720 120V96l18-12 18 12v24M1080 120V90h34v30" />
        {[80, 120, 270, 470, 660, 800, 1020, 1150].map((x, i) => palm(x, 46 + (i % 3) * 10))}
        <path d="M0 120h1200" />
      </g>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <Skyline />
      <div className="footer-band">
        <div className="container footer-inner">
          <div className="footer-brand">
            <LogoMark size={40} />
            <div>
              <strong>{brand.name}</strong>
              <span lang="ta">{brand.tamilName}</span>
            </div>
          </div>
          <div className="footer-links">
            <a href={telLink}>Call {contact.phoneDisplay}</a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} {brand.name}, {contact.city}
          </p>
        </div>
      </div>
    </footer>
  )
}
