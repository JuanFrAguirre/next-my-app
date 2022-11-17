import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type ThemeContextType = {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextType)

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const darkThemeEnabled = theme === 'dark'
  return { theme, setTheme, darkThemeEnabled }
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
