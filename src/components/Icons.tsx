import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

const base = (props: P): P => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  ...props,
})

export const CarIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 11l1.6-4.2A2 2 0 0 1 8.5 5.5h7a2 2 0 0 1 1.9 1.3L19 11" />
    <rect x="3" y="11" width="18" height="6" rx="2" />
    <path d="M6 17v2M18 17v2" />
    <circle cx="7.5" cy="14" r="1" fill="currentColor" />
    <circle cx="16.5" cy="14" r="1" fill="currentColor" />
  </svg>
)

export const PinIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

export const PeopleIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="7.5" r="2.8" />
    <circle cx="5.5" cy="9" r="2.1" />
    <circle cx="18.5" cy="9" r="2.1" />
    <path d="M7 19.5v-1.8a5 5 0 0 1 10 0v1.8" />
    <path d="M2 18.5v-1a3.5 3.5 0 0 1 4.2-3.4M22 18.5v-1a3.5 3.5 0 0 0-4.2-3.4" />
  </svg>
)

export const ShieldIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.2-7.5 9.5-4.3-1.3-7.5-4.9-7.5-9.5V6L12 3z" />
    <path d="M8.5 12l2.4 2.4 4.6-4.8" />
  </svg>
)

export const UpdatesIcon = (p: P) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="13" height="16" rx="2" />
    <path d="M7 15l2.5-3 2 2" />
    <circle cx="8" cy="8.5" r="1.3" />
    <path d="M19.6 5.6a1.9 1.9 0 0 0-2.7 0l-.4.4-.4-.4a1.9 1.9 0 0 0-2.7 2.7l3.1 3.1 3.1-3.1a1.9 1.9 0 0 0 0-2.7z" />
  </svg>
)

export const ChatIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.2-4.6A8.5 8.5 0 1 1 21 12z" />
    <circle cx="8.5" cy="12" r=".9" fill="currentColor" />
    <circle cx="12.5" cy="12" r=".9" fill="currentColor" />
    <circle cx="16.5" cy="12" r=".9" fill="currentColor" />
  </svg>
)

export const HeartIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M12 20.5s-8-4.9-8-11A4.5 4.5 0 0 1 12 6.8a4.5 4.5 0 0 1 8 2.7c0 6.1-8 11-8 11z" />
  </svg>
)

export const PhoneIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M5 3.5h3.2l1.6 4.2-2 1.3a11 11 0 0 0 5.2 5.2l1.3-2 4.2 1.6V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5z" />
  </svg>
)

export const SunIcon = (p: P) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
)

export const MoonIcon = (p: P) => (
  <svg {...base(p)}>
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
  </svg>
)

export const WhatsAppIcon = (p: P) => (
  <svg width={24} height={24} viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
    />
  </svg>
)
