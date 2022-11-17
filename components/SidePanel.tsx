import Link from 'next/link'
import { FC, useState, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

type props = {
  items:
    | {
        text: string
        link: string
        icon?: string
      }[]
    | []
}

const SidePanel: FC<props> = ({ items }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const [sideBarTempOpen, setSideBarTempOpen] = useState(false)
  const panelRef = useRef(null)
  const { darkThemeEnabled } = useTheme()

  const handleSidebarOpening = () => {
    setSideBarIsOpen(!sideBarIsOpen)
  }
  const handleMouseEnter = () => {
    if (sideBarIsOpen) return
    setSideBarTempOpen(true)
  }
  const handleMouseLeave = () => {
    if (sideBarIsOpen) return
    setSideBarTempOpen(false)
  }

  return (
    <div
      className={`absolute top-0 bottom-0  left-0 transition-transform drop-shadow-lg flex flex-col pt-16
      ${sideBarIsOpen || sideBarTempOpen ? 'w-[25%]' : 'w-[10%]'} ${
        darkThemeEnabled ? 'bg-blackish' : 'bg-whitish'
      }`}
      ref={panelRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`text-xl self-start p-10 px-[35px] absolute top-0 left-0 active:scale-95 focus:scale-95 transition-transform`}
        onClick={handleSidebarOpening}
      >
        {sideBarIsOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
      <div className="flex flex-col gap-10 mt-12 text-center">
        {items?.map((item) => (
          <div key={item.link}>
            <Link
              href={item.link}
              className={`inline-block hover:-translate-y-[2px] transition-transform hover:underline underline-offset-4 active:scale-[0.9] focus:scale-95`}
            >
              {sideBarIsOpen || sideBarTempOpen
                ? item.text
                : item.text.split(' ')[0] + ' ...'}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidePanel
