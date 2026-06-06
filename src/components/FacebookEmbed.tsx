import { facebookEmbed } from '../data/site'

type FacebookTab = 'photos' | 'videos' | 'timeline'

interface FacebookEmbedProps {
  tabs: FacebookTab
  height: number
  title: string
  hideCover?: boolean
  showFacepile?: boolean
}

export default function FacebookEmbed({
  tabs,
  height,
  title,
  hideCover = true,
  showFacepile = false,
}: FacebookEmbedProps) {
  return (
    <iframe
      src={facebookEmbed(tabs, height, { hideCover, showFacepile })}
      width="100%"
      height={height}
      style={{ border: 'none', overflow: 'hidden' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      title={title}
      className="w-full"
    />
  )
}
