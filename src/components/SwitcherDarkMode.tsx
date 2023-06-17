'use client'
import { useEffect } from 'react'
import { useDarkMode } from 'usehooks-ts'
export default function Switcher() {
  const theme = useDarkMode()
  useEffect(() => {
    if (theme.isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.theme = 'light'
    localStorage.theme = 'dark'
    localStorage.removeItem('theme')
  }, [theme])
  return null
}
