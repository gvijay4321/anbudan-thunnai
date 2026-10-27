import { brand } from '../content'

/** Two people held in caring hands, with a heart – redrawn from the poster as SVG so it works in both themes. */
export function LogoMark({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden className="logo-mark">
      {/* elder (orange) */}
      <circle cx="25" cy="13" r="5.5" fill="var(--orange)" />
      <path d="M16 38V27a9 9 0 0 1 18 0v11z" fill="var(--orange)" />
      {/* companion (teal) */}
      <circle cx="39" cy="11" r="5.5" fill="var(--teal-strong)" />
      <path d="M30 36V25a9 9 0 0 1 18 0v11z" fill="var(--teal-strong)" />
      {/* heart */}
      <path d="M32 40s-6-3.6-6-7.6a3.3 3.3 0 0 1 6-1.9 3.3 3.3 0 0 1 6 1.9c0 4-6 7.6-6 7.6z" fill="var(--orange)" stroke="var(--logo-bg)" strokeWidth="1.5" />
      {/* hands */}
      <path d="M4 30c0 14 10 24 26 26l-1-8C18 46 11 40 10 30z" fill="var(--teal)" />
      <path d="M60 30c0 14-10 24-26 26l1-8c11-2 18-8 19-18z" fill="var(--teal)" />
    </svg>
  )
}

export default function Logo() {
  return (
    <a href="#top" className="logo" aria-label={`${brand.name} – home`}>
      <LogoMark />
      <span className="logo-text">
        <span className="logo-name">
          Anbudan <span>Thunnai</span>
        </span>
        <span className="logo-tamil" lang="ta">
          {brand.tamilName}
        </span>
      </span>
    </a>
  )
}
