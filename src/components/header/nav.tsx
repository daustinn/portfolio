import React from 'react'
import NavItem from './nav-item'

type Props = {}

export default function NavHeader({}: Props) {
  return (
    <nav className="my-10 max-[800px]:hidden">
      <ul className="flex flex-col gap-1 text-base font-semibold">
        <NavItem href="#about" label="About" />
        <NavItem href="#experience" label="Experience" />
        <NavItem href="#projects" label="Projects" />
        <NavItem href="#skills" label="Skills" />
      </ul>
    </nav>
  )
}
