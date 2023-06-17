import Link from 'next/link'
import React from 'react'
import { ExperienceType } from './types'
import ItemExperience from './experience'

// data
const experiences: ExperienceType[] = [
  {
    id: 1,
    href: 'https://univercel.com.pe/',
    title: 'Univercel',
    role: 'Managing Director',
    date: 'ABR — PRESENT',
    description: (
      <>
        This project is under development with the support of more than 7
        companies. Univercel more than a point of sale. (Ecommerce, Readtime,
        Multiplatform, Multicompany, Cloud, Billing).
      </>
    ),
    links: [],
    tags: ['NextJs', 'NodeJs', 'TypesScript', 'Mongodb']
  },
  {
    id: 2,
    href: 'https://ayacuchoacropolis1.com/',
    title: 'Acrópolis · Developer',
    role: 'Web Development',
    date: 'FEB — MAR 2023',
    description: (
      <>
        Software currently in production, this system is dedicated to payment
        management, developed with technologies.
        <br />
        <br />
        <Link
          className="hover:underline relative font-medium transition-colors text-orange-50 hover:text-cyan-500"
          href="https://firebase.google.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Firebase
        </Link>{' '}
        as backend,
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://react.dev/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          React js
        </Link>{' '}
        as frontend,
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://react.dev/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Tailwindcss
        </Link>{' '}
        used for styling and layout,
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://cloudinary.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Cloudinary
        </Link>{' '}
        is being used for image management,
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://cloudinary.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Axios
        </Link>{' '}
        to make requests to
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://api.univercel.com.pe/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          api.univercel.com.pe
        </Link>{' '}
        to obtain the Reniec data,
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://www.netlify.com"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Netlify
        </Link>{' '}
        the application is currently deployed on Netlify , and finally
        <Link
          className="hover:underline relative font-medium ml-1 transition-colors text-orange-50 hover:text-cyan-500"
          href="https://github.com/"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Github
        </Link>{' '}
        as application repository.
      </>
    ),
    links: [],
    tags: ['React js', 'Firebase', 'Tailwindcss', 'JavaScript', 'Axios']
  }
]

// component
export default function ExperiencesSection() {
  return (
    <section id="experience" className="pt-24">
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
          Experiences
        </h3>
        {experiences.map((experience) => (
          <ItemExperience key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  )
}
