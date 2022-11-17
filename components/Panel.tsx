import { FC, ReactNode } from 'react'
import { useTheme } from '../context/ThemeContext'

type props = {
  children: ReactNode
}

const Panel: FC<props> = ({ children }) => {
  const { darkThemeEnabled } = useTheme()

  return (
    <>
      <div className="absolute left-0 right-0 bottom-10 top-48">
        <div
          className={`relative flex h-full overflow-hidden rounded-lg drop-shadow-md bg-opacity-50
      ${
        darkThemeEnabled
          ? 'bg-lightBlack border-4 border-black shadow-md'
          : 'bg-whitish border-2 shadow-md'
      }
        `}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Panel
