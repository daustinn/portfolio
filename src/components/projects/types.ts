export type ProjectType = {
  id: number
  image?: string
  deploy?: string
  statu?: string
  github?: string
  repository?: string
  isPrivate?: string
  title: string
  description: React.ReactNode | string
}
