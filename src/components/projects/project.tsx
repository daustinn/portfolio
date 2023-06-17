import React from 'react'
import { ProjectType } from './types'
import Image from 'next/image'
import { ExternalIcon, GithubIcon } from '@icons'

export default function ItemProjects(project: ProjectType) {
  return (
    <article key={project.id} className="mb-14">
      <div className="group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide  sm:col-span-2">
          <div className="rounded-lg overflow-hidden max-[700px]:hidden border-2 border-neutral-900 shadow-xl dark:shadow-black/50 shadow-black/20">
            <Image
              className="opacity-80 object-cover w-full h-full sepia group-hover:sepia-0"
              src={project.image ? project.image : ''}
              alt=""
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium flex flex-col gap-1 text-orange-200">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight dark:text-orange-200 text-orange-800 hover:dark:text-orange-300 hover:text-orange-800 focus-visible:text-orange-300  group/link text-lg"
                href={project.deploy}
                target="_blank"
                aria-label={project.title}
              >
                <span className="inline-block">
                  {project.title}
                  <ExternalIcon />
                </span>
                <span className="absolute -inset-x-3 -inset-y-3"></span>
              </a>
            </div>
            <div>
              <div
                className="dark:text-orange-100/50 text-orange-900/80 font-normal"
                aria-hidden="true"
              >
                {project.statu}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal dark:text-orange-50/60 text-orange-950/80 dark:text-orange-50 [&>a]:text-orange-800 dark:[&>a]:text-orange-50 dark:hover:[&>a]:text-cyan-500 hover:[&>a]:text-cyan-700">
            {project.description}
          </p>
          <div className="relative pt-2 ">
            {project.repository && (
              <a
                referrerPolicy="no-referrer"
                href={project.repository}
                target="_blank"
                className="inline-flex items-center font-semibold text-sm baseline  leading-tight dark:text-orange-200 text-orange-950 hover:dark:text-orange-100/60 hover:text-orange-800 focus-visible:text-orange-300 "
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
  )
}
