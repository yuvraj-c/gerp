/* eslint-disable react-refresh/only-export-components */
import * as React from "react"

type Theme = "light"

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = React.createContext<ThemeProviderState>({
  theme: "light",
  setTheme: () => undefined,
})

export function ThemeProvider({ children }: ThemeProviderProps) {
  React.useEffect(() => {
    const root = document.documentElement
    root.classList.remove("dark")
    root.classList.add("light")
  }, [])

  return (
    <ThemeProviderContext.Provider value={{ theme: "light", setTheme: () => undefined }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeProviderContext)
