type NavItemType = {
  href: string
  label: React.ReactNode
}
const NavItem = ({ label, href }: NavItemType) => {
  return (
    <li>
      <a
        href={href}
        className="dark:text-neutral-400 text-neutral-600 hover:text-neutral-950 py-1 group transition-colors flex items-center max-w-min"
      >
        <div className="h-[2px] w-4 dark:bg-neutral-500 bg-neutral-700 group-hover:w-6 transition-all group-hover:dark:bg-neutral-200 group-hover:bg-neutral-800" />
        <span className="ml-2"> {label}</span>
      </a>
    </li>
  )
}
export default NavItem
