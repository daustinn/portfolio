'use client'
import React, { useEffect, useState } from 'react'
import { useDarkMode } from 'usehooks-ts'

export default function CursorShadow() {
  const theme = useDarkMode()
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

  const shadowColor = theme.isDarkMode
    ? 'rgba(216, 144, 29, 0.058)'
    : 'rgba(144, 109, 53, 0.114)'

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 inset-0 z-30 transition duration-300 max-[900px]:opacity-0"
      style={{
        background: theme.isDarkMode
          ? `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, ${shadowColor}, transparent 80%)`
          : `radial-gradient(600px at ${cursorPosition.x}px ${cursorPosition.y}px, ${shadowColor}, transparent 80%)`
      }}
    ></div>
  )
}
