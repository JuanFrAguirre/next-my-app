import { FC, ReactNode } from 'react'

type props = {
  children: ReactNode
}

const MainPanel: FC<props> = ({ children }) => {
  return <div className="w-full ml-[10%]">{children}</div>
}

export default MainPanel
