import { useState } from 'react'
import type { IconName } from '../content'
import Icon from './Icon'

/** An image that falls back to a soft branded placeholder until the file exists in public/images/. */
export default function Photo({
  src,
  alt,
  icon = 'heart',
  className = '',
}: {
  src: string
  alt: string
  icon?: IconName
  className?: string
}) {
  const [missing, setMissing] = useState(false)

  if (missing) {
    return (
      <div className={`photo photo-placeholder ${className}`} role="img" aria-label={alt}>
        <Icon name={icon} width={56} height={56} />
      </div>
    )
  }
  return <img className={`photo ${className}`} src={src} alt={alt} loading="lazy" onError={() => setMissing(true)} />
}
