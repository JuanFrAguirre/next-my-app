import Link from 'next/link'
import Card from '../components/Card'
import Layout from '../components/Layout'
import { useTheme } from '../context/ThemeContext'
interface Link {
  text: string
  title: string
  description: string
}

interface Props {
  links: Link[]
}

export default function Home({ links }: Props) {
  const { darkThemeEnabled } = useTheme()

  return (
    <Layout isHome>
      <div>
        <div className="flex flex-wrap justify-center max-w-5xl mx-auto gap-[60px]">
          {links
            ? links.map((x) => (
                <Card
                  key={x.text}
                  title={x.title}
                  description={x.description}
                  isDarkTheme={darkThemeEnabled}
                  isLink
                  linkTo={`/${x.text}`}
                />
              ))
            : null}
        </div>
      </div>
    </Layout>
  )
}

export function getStaticProps() {
  const links: Link[] = [
    {
      text: 'products',
      title: 'Products',
      description: `Here you'll be able to see, create, edit and delete your products`,
    },
    {
      text: 'stores',
      title: 'Stores',
      description: `Here you'll be able to retrieve all the stores info and change it`,
    },
    {
      text: 'about',
      title: 'About',
      description: `Know more about us`,
    },
    {
      text: 'extras',
      title: 'Extras',
      description: `More soon to come!`,
    },
  ]

  return {
    props: {
      links,
    },
  }
}
