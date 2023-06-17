import Link from 'next/link'
import React from 'react'
import ItemProjects from './project'
import { ProjectType } from './types'

const projects: ProjectType[] = [
  {
    id: 2,
    image: '/projects/portfolio.png',
    statu: 'In production',
    deploy: '/',
    repository: 'https://github.com/daustinndev/portfolio',
    title: 'Portfolio',
    description: (
      <>
        Portfolio developed with{' '}
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://nextjs.org/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Next js
        </Link>{' '}
        ,
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://tailwindcss.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Tailwindcss
        </Link>{' '}
        and deployed in
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://vercel.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Vercel
        </Link>{' '}
        <br />
        Minimalist, modern and simple website.
      </>
    )
  },
  {
    id: 3,
    image: '/projects/api-univercel.png',
    deploy: 'https://api.univercel.com.pe',
    statu: 'In production',
    title: 'Rest Api Queries · Sunat Perú',
    description: (
      <>
        Project created for developers and end users, it is a Rest Api for ruc
        and dni queries to the{' '}
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://www.sunat.gob.pe/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Sunat (National Superintendence of Customs and Tax Administration)
        </Link>{' '}
        , this project is not open source <br /> <br /> It is developed in
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://www.typescriptlang.org/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          TypesScript
        </Link>{' '}
        ,
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://expressjs.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Expressjs
        </Link>{' '}
        and{' '}
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://nodejs.org/en"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Node js,
        </Link>{' '}
        deployed on{' '}
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://nodejs.org/en"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Vercel
        </Link>{' '}
        (a unified cloud platform that allows developers to deploy, manage and
        scale their applications and websites)
      </>
    )
  }
]

// component
export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-24 max-[800px]:pt-5">
      <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
        Projects
      </h3>
      {projects.map((project) => (
        <ItemProjects key={project.id} {...project} />
      ))}
    </section>
  )
}
