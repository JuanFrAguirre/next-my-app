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
          className={`relative flex h-full overflow-hidden drop-shadow-md
      ${darkThemeEnabled ? 'bg-lightBlack' : 'bg-whitish'}
        `}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Panel
