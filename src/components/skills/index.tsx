import React from 'react'
import Skill from './skill'
import {
  CloudinaryIcon,
  CssIcon,
  FirebaseIcon,
  GitIcon,
  HtmlIcon,
  JavaIcon,
  JavaScriptIcon,
  MongoDbIcon,
  MysqlIcon,
  NextjsIcon,
  PostgressIcon,
  ReactJsIcon,
  SassIcon,
  TailwindcssIcon,
  TypeScriptIcon,
  VercelIcon
} from '@icons'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-orange-100/90 text-black/80">
        Skills
      </h3>
      <div className="max-w-[380px] mx-auto">
        <div className="grid grid-cols-4  space-x-2 justify-center items-center">
          <Skill title="Html" icon={<HtmlIcon />} />
          <Skill title="CSS" icon={<CssIcon />} />
          <Skill title="Next js" icon={<NextjsIcon />} />
          <Skill title="React js" icon={<ReactJsIcon />} />
          <Skill title="JavaScript" icon={<JavaScriptIcon />} />
          <Skill title="TypeScript" icon={<TypeScriptIcon />} />
          <Skill title="Tailwidcss" icon={<TailwindcssIcon />} />
          <Skill title="Sass" icon={<SassIcon />} />
          <Skill title="Firebase" icon={<FirebaseIcon />} />
          <Skill title="Postgress" icon={<PostgressIcon />} />
          <Skill title="Git" icon={<GitIcon />} />
          <Skill title="MongoDb" icon={<MongoDbIcon />} />
          <Skill title="Cloudinary" icon={<CloudinaryIcon />} />
          <Skill title="Vercel" icon={<VercelIcon />} />
          <Skill title="Java" icon={<JavaIcon />} />
          <Skill title="Mysql" icon={<MysqlIcon />} />
        </div>
      </div>
    </section>
  )
}
