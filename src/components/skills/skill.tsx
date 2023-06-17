import { SkillType } from './types'

const Skill = ({ icon, title }: SkillType) => {
  return (
    <figure
      title={title}
      className="col-span-1 group transition-all dark:text-neutral-400 dark:hover:text-white text-neutral-600 hover:text-neutral-950"
    >
      <div className="w-14 mx-auto">{icon}</div>
      <div className="text-center group-hover:opacity-90 transition-opacity opacity-0 font-medium text-sm tracking-tight py-3">
        {title}
      </div>
    </figure>
  )
}
export default Skill
