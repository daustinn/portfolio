import {
  ArowIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  SpotifyIcon,
  TwitterIcon
} from '@icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Home({}: Props) {
  return (
    <div className="relative">
      <div className="h-screen relative flex items-center max-w-[1000px] mx-auto">
        <div className="p-0 h-full text-center max-w-full page_center__diPtZ">
          <div className="flex items-center flex-col justify-center w-full gap-4">
            <div className="opacity-90">
              <Image
                src="/avatar-square.png"
                alt="Avatar - Daustinn"
                width={160}
                height={160}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-extrabold relative  inline-block tracking-tighter text-transparent text-8xl bg-clip-text bg-gradient-to-b from-[#fde089] to-[#ec8b26]">
                <span>{'¡Hi!'}</span>
                <span className="shake-left-right inline-flex">
                  <Image
                    src="/wave.png"
                    alt="Wave Icon"
                    width={80}
                    height={80}
                  />
                </span>
                <span>{", I'm David or Daustinn"}</span>
              </h1>
              <p className="text-[#cecece] tracking-tight font-semibold text-2xl">
                {'Web developer'}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute shadow-2xl shadow-black bottom-3 left-[50%] translate-x-[-50%]">
          <a href="#content" className="animate-bounce block">
            <Image
              src="/pointing-up.png"
              alt="Pointing Icon"
              width={37}
              className="rotate-180"
              height={37}
            />
          </a>
        </div>
      </div>
      <div
        id="content"
        className=" relative flex items-center max-w-[1100px] mx-auto"
      >
        <div className="h-full text-left max-w-full">
          <div className="flex h-full w-full gap-4 ">
            <header className="flex sticky top-0 h-screen gap-3">
              <div className="h-full py-24 px-14 flex-col  flex">
                <div className="flex flex-col gap-3">
                  <h1 className="font-bold relative item-s text-transparent text-6xl bg-clip-text inline-block tracking-tighter">
                    David Bendezú
                  </h1>
                  <h2 className="text-[#df9437] item-s text-transparent bg-clip-text tracking-tighter font-semibold text-xl">
                    {'Freelance Web Developer'}
                  </h2>
                  <p className="w-80 font-medium opacity-80 text-[#a28a52] item-s text-transparent bg-clip-text leading-5">
                    {
                      'I build accessible and inclusive products and digital experiences for the web.'
                    }
                  </p>
                </div>
                <nav className="mt-10">
                  <ul className="hover:[&>li>a]:text-neutral-200 hover:[&>li>a]:underline flex flex-col gap-1 text-base font-semibold">
                    <li>
                      <a
                        href="#about"
                        className="text-neutral-400 py-1 transition-colors block max-w-min"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#experience"
                        className="text-neutral-400 transition-colors py-1 block max-w-min"
                      >
                        Experience
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projects"
                        className="text-neutral-400 transition-colors py-1 block max-w-min"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="#skills"
                        className="text-neutral-400 transition-colors py-1 block max-w-min"
                      >
                        Skills
                      </a>
                    </li>
                  </ul>
                </nav>
                <div className="mt-auto">
                  <div className="flex gap-3">
                    <Link
                      href="#"
                      title="Github"
                      referrerPolicy="no-referrer"
                      className="text-neutral-300 hover:text-neutral-100"
                    >
                      <div className="w-8 ">
                        <GithubIcon />
                      </div>
                    </Link>
                    <Link
                      href="#"
                      title="Instagram"
                      referrerPolicy="no-referrer"
                      className="text-neutral-300 hover:text-neutral-100"
                    >
                      <div className="w-8 ">
                        <InstagramIcon />
                      </div>
                    </Link>
                    <Link
                      href="#"
                      title="Linkedin"
                      referrerPolicy="no-referrer"
                      className="text-neutral-300 hover:text-neutral-100"
                    >
                      <div className="w-8 ">
                        <LinkedinIcon />
                      </div>
                    </Link>
                    <Link
                      href="#"
                      title="Spotify"
                      referrerPolicy="no-referrer"
                      className="text-neutral-300 hover:text-neutral-100"
                    >
                      <div className="w-8 p-1">
                        <SpotifyIcon />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </header>
            <div className="">
              <section id="about" className="h-72 py-24">
                <h3>About</h3>
              </section>
              <section id="experience" className="h-screen py-24">
                <h3>Experience</h3>
              </section>
              <section id="projects" className="h-screen py-24">
                <h3>Projcts</h3>
              </section>
              <section id="skills" className="h-screen py-24">
                <h3>Skills</h3>
              </section>
            </div>
          </div>
        </div>
      </div>
      <footer className="h-[20vh] w-full border-t border-t-neutral-900">
        <div className="flex items-center justify-center h-full">
          <h2>Design by Daustinn from Perú</h2>
        </div>
      </footer>
    </div>
  )
}

export default Home
