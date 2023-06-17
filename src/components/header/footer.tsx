import React from 'react'
import HeaderFooterItem from './footer-item'
import { GithubIcon, InstagramIcon, LinkedinIcon, SpotifyIcon } from '@icons'

type Props = {}

export default function FooterHeader({}: Props) {
  return (
    <div className="mt-auto max-[700px]:mt-4">
      <div className="flex gap-3">
        <HeaderFooterItem
          href="https://github.com/daustinndev"
          title="Github"
          icon={<GithubIcon />}
        />
        <HeaderFooterItem
          href="https://www.instagram.com/daustinndev"
          title="Github"
          icon={<InstagramIcon />}
        />
        <HeaderFooterItem
          href="https://www.linkedin.com/in/daustinn"
          title="Linkedin"
          icon={<LinkedinIcon />}
        />
        <HeaderFooterItem
          href="https://open.spotify.com/artist/0obJdp3GLQg4OjpA97ZMNW?si=Nlf99m5wRSqMUmzyW_PVkA"
          title="Spotify"
          icon={<SpotifyIcon className="p-1" />}
        />
      </div>
    </div>
  )
}
