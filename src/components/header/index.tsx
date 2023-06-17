import React from 'react'
import NavHeader from './nav'
import FooterHeader from './footer'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="flex col-span-1 max-[800px]:col-span-2 top-0 h-screen max-[800px]:h-auto min-[800px]:sticky  gap-3">
      <div className="h-full py-24 px-14 max-[800px]:px-2 flex-col  flex">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-[#1f1c19] dark:text-[#cdbead] relative item-s text-transparent text-6xl bg-clip-text inline-block text-gradient tracking-tighter">
            Daustinn
          </h1>
          <h2 className="dark:text-[#ada79f] text-[#6c6761] item-s text-transparent bg-clip-text tracking-tighter text-gradient text-xl">
            Software Engineer & Music Producer
          </h2>
          <p className="w-96 max-[700px]:w-full opacity-80 dark:text-[#c8c6c0] text-[#302e2a] item-s text-transparent text-gradient bg-clip-text leading-5">
            I build accessible products and digital experiences for the web. and
            additional to this I create music for your ear.
          </p>
        </div>
        <NavHeader />
        <FooterHeader />
      </div>
    </header>
  )
}
