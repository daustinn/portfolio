export type ExperienceType = {
  id: number
  href: string
  date: string
  title: string
  role?: string
  description: React.ReactNode | string
  tags: string[]
  links: Links[]
}
type Links = {
  href: string
  label: React.ReactNode | string
}
