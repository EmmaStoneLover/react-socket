import { useMemo, useState, createContext, useCallback } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green, blue, grey, yellow, red } from '@mui/material/colors'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function Theme({ children }) {
  const [mode, setMode] = useState(
    ModeLocalStorege(localStorage.darkMode) || 'light'
  )
  const [color, setColor] = useState({
    light: ColorLocalStorage(localStorage.colorLight) || blue,
    dark: ColorLocalStorage(localStorage.colorDark) || green,
  })

  function ModeLocalStorege(mode) {
    if (mode === 'light') return 'light'
    else if (mode === 'dark') return 'dark'
    else return
  }
  function ColorLocalStorage(color) {
    if (color === 'yellow') return yellow
    else if (color === 'blue') return blue
    else if (color === 'green') return green
    else if (color === 'red') return red
    else return
  }
  function ColorLocalStorageDefiner(color) {
    if (color === yellow) return 'yellow'
    else if (color === blue) return 'blue'
    else if (color === green) return 'green'
    else if (color === red) return 'red'
    else return
  }
  const toggleColorFunc = useCallback((mode, newColor) => {
    if (mode === 'light') {
      setColor((prev) => {
        localStorage.colorLight = ColorLocalStorageDefiner(newColor)
        return { light: newColor, dark: prev.dark }
      })
    } else {
      setColor((prev) => {
        localStorage.colorDark = ColorLocalStorageDefiner(newColor)
        return { light: prev.light, dark: newColor }
      })
    }
  }, [])

  const colorMode = useMemo(
    () => ({
      toggleDarkMode: () => {
        setMode((prev) => {
          if (prev === 'light') {
            prev = 'dark'
          } else {
            prev = 'light'
          }
          localStorage.darkMode = prev
          return prev
        })
      },
      toggleColorLight: {
        Yellow: () => toggleColorFunc('light', yellow),
        Blue: () => toggleColorFunc('light', blue),
        Green: () => toggleColorFunc('light', green),
        Red: () => toggleColorFunc('light', red),
      },
      toggleColorDark: {
        Yellow: () => toggleColorFunc('dark', yellow),
        Blue: () => toggleColorFunc('dark', blue),
        Green: () => toggleColorFunc('dark', green),
        Red: () => toggleColorFunc('dark', red),
      },
    }),
    [toggleColorFunc]
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // light
                primary: color.light,
                secondary: color.light,
              }
            : {
                // dark
                primary: color.dark,
                secondary: color.dark,
                background: {
                  default: grey[800],
                  paper: grey[900],
                },
              }),
        },
      }),
    [mode, color]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
