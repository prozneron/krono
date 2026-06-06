import { facebookEmbed } from '../data/site'

type FacebookTab = 'photos' | 'videos' | 'timeline'

interface FacebookEmbedProps {
  tabs: FacebookTab
  height: number
  title: string
  hideCover?: boolean
  showFacepile?: boolean
  smallHeader?: boolean
}

export default function FacebookEmbed({
  tabs,
  height,
  title,
  hideCover = true,
  showFacepile = false,
  smallHeader = true,
}: FacebookEmbedProps) {
  return (
    <iframe
      src={facebookEmbed(tabs, height, { hideCover, showFacepile, smallHeader })}
      width="100%"
      height={height}
      style={{ border: 'none', overflow: 'hidden', background: '#fff' }}
      scrolling="no"
      frameBorder="0"
      allowFullScreen
      allow="encrypted-media"
      title={title}
      className="block w-full bg-white"
    />
  )
}
