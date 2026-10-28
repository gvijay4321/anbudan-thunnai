import { useState } from 'react'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import { PhoneIcon } from './Icons'
import { contact, telLink } from '../content'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why-us', label: 'Why us' },
  { href: '#plans', label: 'Plans' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="btn btn-small btn-primary header-call" href={telLink}>
            <PhoneIcon width={18} height={18} />
            <span>{contact.phoneDisplay}</span>
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
