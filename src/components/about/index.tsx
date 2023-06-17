import CustomLink from '@components/custom-link'
import React from 'react'

type Props = {}

export default function AboutSection({}: Props) {
  return (
    <section id="about" className="pt-24">
      <div className="dark:text-neutral-400 text-neutral-900">
        <p className="mb-4 leading-6 text-base">
          Since 2019, I have immersed myself in modern design using
          <CustomLink href="https://www.invisionapp.com/">
            Invision Studio
          </CustomLink>
          and thoroughly explored coding and web development. Collaborated with
          several local companies, creating online sales web applications. I
          highlight my contribution in
          <CustomLink href="https://univercel.com.pe/">Univercel</CustomLink>
          , an intuitive, modern, minimalist and elegant web application with
          all the necessary functionalities for a sales software. Currently, I
          dedicate significant time and effort to this project.
          <br />
          <br />
          In addition to my background in web design and development, I am also
          a passionate electronic music producer. My verified{' '}
          <CustomLink href="https://www.youtube.com/@daustinnmusic">
            Youtube channel
          </CustomLink>{' '}
          with over 800,000 views is proof of my dedication in this field.
        </p>
      </div>
    </section>
  )
}
