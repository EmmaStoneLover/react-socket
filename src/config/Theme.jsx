import { useMemo, useState, createContext, useCallback } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import {
  grey,
  yellow,
  blue,
  green,
  red,
  purple,
  orange,
} from '@mui/material/colors'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
export const COLORS = [
  { name: 'yellow', color: yellow },
  { name: 'blue', color: blue },
  { name: 'green', color: green },
  { name: 'red', color: red },
  { name: 'purple', color: purple },
  { name: 'orange', color: orange },
]

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
    let right = null
    COLORS.forEach((cl) => {
      if (color === cl.name) right = cl.color
    })
    return right
  }
  const ColorLocalStorageDefiner = useCallback((color) => {
    let right = null
    COLORS.forEach((cl) => {
      if (color === cl.color) right = cl.name
    })
    return right
  }, [])
  const toggleColorFunc = useCallback(
    (mode, newColor) => {
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
    },
    [ColorLocalStorageDefiner]
  )
  const toggleColor = useCallback(
    (mode) => {
      let right = {}
      COLORS.forEach((cl) => {
        right[cl.name] = () =>
          toggleColorFunc(mode === 'light' ? 'light' : 'dark', cl.color)
      })
      return right
    },
    [toggleColorFunc]
  )
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
      toggleColorLight: toggleColor('light'),
      toggleColorDark: toggleColor('dark'),
    }),
    [toggleColor]
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
