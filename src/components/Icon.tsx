import type { SVGProps } from 'react'
import type { IconName } from '../content'
import {
  ActivityIcon,
  CalendarIcon,
  CarIcon,
  ChatIcon,
  ClockIcon,
  HeartIcon,
  HomeIcon,
  PeopleIcon,
  PinIcon,
  ShieldIcon,
  UpdatesIcon,
  VideoIcon,
} from './Icons'

const icons: Record<IconName, (p: SVGProps<SVGSVGElement>) => JSX.Element> = {
  car: CarIcon,
  pin: PinIcon,
  people: PeopleIcon,
  shield: ShieldIcon,
  updates: UpdatesIcon,
  chat: ChatIcon,
  heart: HeartIcon,
  video: VideoIcon,
  home: HomeIcon,
  activity: ActivityIcon,
  clock: ClockIcon,
  calendar: CalendarIcon,
}

/** Renders an icon by the name used in content.ts. */
export default function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  const Svg = icons[name]
  return <Svg {...props} />
}
