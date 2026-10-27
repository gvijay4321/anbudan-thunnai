import { whatsappLink } from '../content'
import { WhatsAppIcon } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a className="fab-whatsapp" href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
      <WhatsAppIcon width={30} height={30} />
    </a>
  )
}
