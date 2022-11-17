import { FC } from 'react'
import { useTheme } from '../context/ThemeContext'

type props = {
  text: string
  uppercased?: boolean
  underlined?: boolean
  className?: string
}

const Title: FC<props> = ({ text, uppercased, underlined, className }) => {
  const { darkThemeEnabled } = useTheme()

  return (
    <>
      <h2
        className={`text-5xl tracking-wider text-center
        my-12  underline-offset-[12px] decoration-1 ${
          darkThemeEnabled
            ? 'font-extralight'
            : 'decoration-[3px] tracking-wide text-titleBlack'
        } ${underlined && 'underline'} ${
          uppercased && 'uppercase tracking-normal text-4xl'
        }
        ${className}`}
      >
        {text}
      </h2>
    </>
  )
}

export default Title
