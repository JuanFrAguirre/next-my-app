import Link from 'next/link'
import { FC } from 'react'

type props = {
  title: string
  description: string
  linkTo?: string
  isLink: boolean
  isDarkTheme: boolean
}

const Card: FC<props> = ({
  title,
  description,
  linkTo,
  isLink,
  isDarkTheme,
}) => {
  return (
    <>
      <Link
        href={isLink ? `/${linkTo}` : '/#'}
        className={`group p-[3px] transition-all duration-300 transform hover:scale-[1.01] ${
          isDarkTheme
            ? 'border-blackish border-2 bg-lightWhite'
            : 'shadow-md border-transparent bg-grayish hover:shadow-xl '
        } rounded-lg basis-2/5 hover:-translate-y-2 hover:bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600`}
      >
        <div
          className={`p-8 ${
            isDarkTheme ? 'bg-blackish' : 'bg-stone-200'
          } rounded-[4px]`}
        >
          <div className="flex justify-center">
            <h3
              className={`inline-block mb-6 font-bold tracking-[2px] ${
                isDarkTheme && 'text-lightGrayish'
              } text-center transition-colors group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-2xl`}
            >
              {title}
            </h3>
          </div>
          <p className={`text-center ${isDarkTheme && 'font-[100]'} text-xl`}>
            {description}
          </p>
        </div>
      </Link>
    </>
  )
}

export default Card
