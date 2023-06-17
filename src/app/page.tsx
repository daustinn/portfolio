import AboutSection from '@components/about'
import CursorShadow from '@components/cursor-shadow'
import ExperiencesSection from '@components/experiences'
import Footer from '@components/footer'
import Header from '@components/header'
import HomeSection from '@components/home'
import Home from '@components/home'
import ProjectsSection from '@components/projects'
import SkillsSection from '@components/skills'
import Image from 'next/image'
import React from 'react'

type Props = {}

function HomePage({}: Props) {
  return (
    <>
      <CursorShadow />
      <div className="relative">
        <HomeSection />
        <div
          id="content"
          className="px-8 relative flex items-center max-w-[1100px] mx-auto"
        >
          <div className="h-full text-left max-w-full">
            <div className="grid grid-cols-2 gap-2 h-full w-full ">
              <Header />
              <div className="col-span-1 flex flex-col">
                <AboutSection />
                <ExperiencesSection />
                <ProjectsSection />
                <SkillsSection />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
