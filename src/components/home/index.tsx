'use client'

import { GithubIcon, InstagramIcon, LinkedinIcon, SpotifyIcon } from '@icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

type ExperienceType = {
  id: number
  href: string
  date: string
  title: string
  role?: string
  description: string
  tags: string[]
  links: Links[]
}
type Links = {
  href: string
  label: React.ReactNode | string
}
type ProjectType = {
  id: number
  image?: string
  deploy?: string
  statu?: string
  github?: string
  repository?: string
  isPrivate?: string
  title: string
  description: string
}

const Experiences: ExperienceType[] = [
  {
    id: 1,
    href: 'https://univercel.com.pe/',
    title: 'Univercel',
    role: 'Managing Director',
    date: 'ABR — PRESENT',
    description:
      'This project is under development with the support of more than 7 companies. Univercel more than a point of sale. (Ecommerce, Readtime, Multiplatform, Multicompany, Cloud, Billing).',
    links: [],
    tags: ['NextJs', 'NodeJs', 'TypesScript', 'Mongodb']
  },
  {
    id: 2,
    href: 'https://ayacuchoacropolis1.com/',
    title: 'Acrópolis · Developer',
    role: 'Web Development',
    date: 'FEB — MAR 2023',
    description:
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
    links: [],
    tags: ['React', 'Firebase', 'Tailwindcss', 'TypesScript', 'Axios']
  },
  {
    id: 3,
    href: 'https://univercel.com.pe/',
    title: 'Univercel',
    role: 'Managing Director',
    date: 'ABR — PRESENT',
    description:
      'This project is under development with the support of more than 7 companies. Univercel more than a point of sale. (Ecommerce, Readtime, Multiplatform, Multicompany, Cloud, Billing).',
    links: [],
    tags: ['NextJs', 'NodeJs', 'TypesScript', 'Mongodb']
  },
  {
    id: 4,
    href: 'https://ayacuchoacropolis1.com/',
    title: 'Acrópolis · Developer',
    role: 'Web Development',
    date: 'FEB — MAR 2023',
    description:
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.',
    links: [],
    tags: ['React', 'Firebase', 'Tailwindcss', 'TypesScript', 'Axios']
  }
]

const Projects: ProjectType[] = [
  {
    id: 2,
    image: '/projects/portfolio.png',
    statu: 'Production',
    repository: 'https://github.com/daustinndev/portfolio',
    title: 'Portfolio',
    description:
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th New.'
  },
  {
    id: 3,
    image: '/projects/api-univercel.png',
    deploy: 'https://api.univercel.com.pe',
    statu: 'Production',
    title: 'Rest Api Queries · Sunat Perú',
    description:
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety.'
  },
  {
    id: 4,
    image: '/projects/portfolio.png',
    statu: 'Production',
    repository: 'https://github.com/daustinndev/portfolio',
    title: 'Portfolio · Daustinn',
    description:
      'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th New.'
  }
]

type Props = {}

function Home({}: Props) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <CursorImage x={cursorPosition.x} y={cursorPosition.y} />
      <div className="relative">
        {/* <PerfectScrollbar className="overflow-y-auto h-full"> */}
        <div className="h-screen relative flex items-center max-w-[1000px] mx-auto">
          <div className="p-0 h-full text-center max-w-full page_center__diPtZ">
            <div className="flex items-center flex-col justify-center w-full gap-4">
              <div className="opacity-90 w-36 h-36 -mb-4">
                <Image
                  src="/avatar-square.png"
                  alt="Avatar - Daustinn"
                  width={160}
                  height={160}
                />
              </div>
              <div className="flex flex-col -z-10 gap-3">
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
                <h2 className="text-[#cecece] tracking-tight font-semibold text-2xl">
                  {'Software Engineer & Music Producer'}
                </h2>
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
          className="px-8 relative flex items-center max-w-[1100px] mx-auto"
        >
          <div className="h-full text-left max-w-full">
            <div className="grid grid-cols-2 h-full w-full ">
              <header className="flex col-span-1 sticky top-0 h-screen gap-3">
                <div className="h-full py-24 px-14 flex-col  flex">
                  <div className="flex flex-col gap-3">
                    <h1 className="font-bold relative item-s text-transparent text-6xl bg-clip-text inline-block tracking-tighter">
                      {'Daustinn'}
                    </h1>
                    <h2 className="text-[#df9437] item-s text-transparent bg-clip-text tracking-tighter font-semibold text-xl">
                      {'Software Engineer & Music Producer'}
                    </h2>
                    <p className="w-96 font-medium opacity-80 text-[#a28a52] item-s text-transparent bg-clip-text leading-5">
                      {
                        'I build accessible products and digital experiences for the web. and additional to this I create music for your ear.'
                      }
                    </p>
                  </div>
                  <nav className="my-10">
                    <ul className="hover:[&>li>a]:text-neutral-200 hover:[&>li>a]:underline flex flex-col gap-1 text-base font-semibold">
                      <li>
                        <a
                          href="#about"
                          className="text-neutral-400 py-1 group transition-colors flex items-center max-w-min"
                        >
                          <div className="h-[2px] w-4 bg-neutral-500 group-hover:w-6 transition-all group-hover:bg-neutral-200" />
                          <span className="ml-2"> About</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#experience"
                          className="text-neutral-400 py-1 group transition-colors flex items-center max-w-min"
                        >
                          <div className="h-[2px] w-4 bg-neutral-500 group-hover:w-6 transition-all group-hover:bg-neutral-200" />
                          <span className="ml-2"> Experience</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#projects"
                          className="text-neutral-400 py-1 group transition-colors flex items-center max-w-min"
                        >
                          <div className="h-[2px] w-4 bg-neutral-500 group-hover:w-6 transition-all group-hover:bg-neutral-200" />
                          <span className="ml-2">Projects</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#skills"
                          className="text-neutral-400 py-1 group transition-colors flex items-center max-w-min"
                        >
                          <div className="h-[2px] w-4 bg-neutral-500 group-hover:w-6 transition-all group-hover:bg-neutral-200" />
                          <span className="ml-2">Skills</span>
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
              <div className="col-span-1 flex flex-col">
                <section id="about" className="pt-24">
                  <div className="text-neutral-400">
                    <p className="mb-4 text-orange-50/70 font-light leading-6 text-base">
                      Since 2019, I have immersed myself in modern design using
                      <Link
                        className="hover:underline font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                        href="https://www.invisionapp.com/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                      >
                        Invision Studio
                      </Link>{' '}
                      and thoroughly explored coding and web development.
                      Collaborated with several local companies, creating online
                      sales web applications. I highlight my contribution in
                      <Link
                        className="hover:underline font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                        href="https://univercel.com.pe/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                      >
                        Univercel
                      </Link>{' '}
                      , an intuitive, modern, minimalist and elegant web
                      application with all the necessary functionalities for a
                      sales software. Currently, I dedicate significant time and
                      effort to this project.
                      <br />
                      <br />
                      In addition to my background in web design and
                      development, I am also a passionate electronic music
                      producer. My verified{' '}
                      <Link
                        className="hover:underline font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
                        href="https://univercel.com.pe/"
                        target="_blank"
                        referrerPolicy="no-referrer"
                      >
                        Youtube channel
                      </Link>{' '}
                      with over 800,000 views is proof of my dedication in this
                      field.
                    </p>
                  </div>
                </section>
                <section id="experience" className="pt-24">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tighter mb-3 pb-4 text-orange-100/90">
                      Experiences
                    </h3>
                    {Experiences.map((experience) => (
                      <article key={experience.id} className="mb-14">
                        <div className="group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 border border-transparent hover:border-neutral-950 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-neutral-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2"
                            aria-label="2018 to Present"
                          >
                            {experience.date}
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium flex flex-col gap-1 text-orange-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-orange-200 hover:text-orange-300 focus-visible:text-orange-300  group/link text-lg"
                                  href={experience.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={experience.title}
                                >
                                  <span className="inline-block font-semibold">
                                    {experience.title}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span className="absolute -inset-x-3 -inset-y-3"></span>
                                </a>
                              </div>
                              <div>
                                <div
                                  className="text-orange-100/50 font-normal"
                                  aria-hidden="true"
                                >
                                  {experience.role}
                                </div>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-orange-50/80">
                              {experience.description}
                            </p>
                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              {experience.tags.map((tag) => (
                                <li className="mr-1.5 mt-2" key={tag}>
                                  <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-300 ">
                                    {tag}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
                <section id="projects" className="pt-24">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tighter mb-3 pb-4 text-orange-100/90">
                      Projects
                    </h3>
                    {Projects.map((project) => (
                      <article key={project.id} className="mb-14">
                        <div className="group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 border border-transparent hover:border-neutral-950 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:bg-neutral-800/20 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header
                            className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-2"
                            aria-label="2018 to Present"
                          >
                            <div className="rounded-lg overflow-hidden border-2 border-neutral-900 shadow-xl shadow-black/50">
                              <img
                                className="opacity-80 sepia group-hover:sepia-0"
                                src={project.image}
                                alt=""
                              />
                            </div>
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium text-neutral-200">
                              <div>
                                <a
                                  className="inline-flex items-baseline font-medium leading-tight text-orange-200 hover:text-orange-300 focus-visible:text-orange-300  group/link text-base"
                                  href={project.deploy}
                                  target="_blank"
                                  rel="noreferrer"
                                  aria-label={project.title}
                                >
                                  <span className="inline-block">
                                    {project.title}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span className="absolute -inset-x-3 -inset-y-3"></span>
                                </a>
                              </div>
                              <div>
                                <div
                                  className="text-orange-100/50"
                                  aria-hidden="true"
                                >
                                  {project.statu}
                                </div>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-orange-50/80">
                              {project.description}
                            </p>
                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              {/* {experience.tags.map((tag) => (
                              <li className="mr-1.5 mt-2" key={tag}>
                                <div className="flex items-center rounded-full bg-orange-400/10 px-3 py-1 text-xs font-medium leading-5 text-orange-300 ">
                                  {tag}
                                </div>
                              </li>
                            ))} */}
                            </ul>
                            <div className="relative">
                              {project.repository && (
                                <a
                                  referrerPolicy="no-referrer"
                                  href={project.repository}
                                  target="_blank"
                                  className="inline-flex items-center font-semibold text-sm text-orange-300/70 hover:text-orange-50"
                                >
                                  <div className="w-8">
                                    <GithubIcon />
                                  </div>
                                  <span>Github</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
                <section id="skills" className=" pt-24"></section>
              </div>
            </div>
          </div>
        </div>
        <footer className="py-9 w-full border-t border-t-neutral-900">
          <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
            <div className="flex flex-col gap-4">
              <h4 className="text-center font-extrabold text-3xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#fcefff] to-[#7b0d94]">
                With ❤️ from{' '}
                <a href="#" className="hover:underline">
                  Perú
                </a>
              </h4>
              <p className="text-center text-sm text-neutral-400">
                Loosely designed in{' '}
                <a
                  className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                  href=""
                >
                  Invision Studio
                </a>{' '}
                and coded in{' '}
                <a
                  className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                  href=""
                >
                  Visual Studio Code
                </a>{' '}
                by yours truly. Built with{' '}
                <a
                  className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                  href=""
                >
                  Next.js
                </a>{' '}
                and{' '}
                <a
                  className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                  href=""
                >
                  Tailwind CSS
                </a>{' '}
                , deployed with{' '}
                <a
                  className="font-semibold hover:underline hover:text-orange-200 text-neutral-50"
                  href=""
                >
                  Vercel
                </a>{' '}
                . All text is set in the Inter typeface.
              </p>
            </div>
          </div>
        </footer>
        {/* </PerfectScrollbar> */}
      </div>
    </>
  )
}

function CursorImage({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="pointer-events-none fixed top-0 left-0 inset-0 z-30 transition duration-300 max-[900px]:opacity-0"
      style={{
        background: `radial-gradient(600px at ${x}px ${y}px, rgba(216, 144, 29, 0.058), transparent 80%)`
      }}
    ></div>
  )
}

export default Home
