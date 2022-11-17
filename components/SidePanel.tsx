import Link from 'next/link'
import { FC, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

type props = {
  items:
    | [
        {
          text: string
          link: string
          icon?: string
        },
      ]
    | []
}

const SidePanel: FC<props> = ({ items }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  const { darkThemeEnabled } = useTheme()

  const handleSidebarOpening = () => {
    setSideBarIsOpen(!sideBarIsOpen)
  }

  return (
    <div
      className={`absolute top-0 bottom-0  left-0 transition-all drop-shadow-lg bg-inherit
      ${sideBarIsOpen ? 'w-[30%]' : 'w-[10%]'}`}
    >
      <button onClick={handleSidebarOpening}>
        {sideBarIsOpen ? 'Close' : 'Open'}
      </button>
      {items?.map((item) => (
        <div key={item.link}>
          <Link href={item.link}>{item.text}</Link>
        </div>
      ))}
    </div>
  )
}

export default SidePanel
