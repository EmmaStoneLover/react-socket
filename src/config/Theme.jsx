// eslint-disable-next-line
import { useMemo, useState, createContext, useCallback, useEffect } from 'react'
// eslint-disable-next-line
import { ThemeProvider, createTheme } from '@mui/material/styles'
// eslint-disable-next-line
import {
  grey,
  yellow,
  blue,
  green,
  red,
  purple,
  orange,
} from '@mui/material/colors'
import { useMediaQuery } from '@mui/material'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })
export const COLORS = [
  { name: 'yellow', color: yellow, Name: 'Yellow' },
  { name: 'blue', color: blue, Name: 'Blue' },
  { name: 'green', color: green, Name: 'Green' },
  { name: 'red', color: red, Name: 'Red' },
  { name: 'purple', color: purple, Name: 'Purple' },
  { name: 'orange', color: orange, Name: 'Orange' },
]

export default function Theme({ children }) {
  const LSMode = localStorage.mode || 'system'
  // const LS = useMemo(() => {
  //   const a = {
  //     system: LSMode === 'system' ? true : false,
  //     active: () => {
  //       if (LSMode === 'light') return 'light'
  //       if (LSMode === 'dark') return 'dark'
  //       else return 'light'
  //     },
  //   }
  //   return a
  // }, [LSMode])

  let darkQuery = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState(LSMode)

  useEffect(() => {
    if (LSMode) {
      if (LSMode === 'system') {
        if (darkQuery) {
          return setMode({ ststem: true, active: 'dark' })
        } else {
          return setMode({ ststem: true, active: 'light' })
        }
      } else if (LSMode === 'light') {
        setMode({ system: false, active: 'light' })
      } else if (LSMode === 'dark') {
        setMode({ system: false, active: 'dark' })
      }
    } else return
  }, [LSMode, darkQuery])

  const [color, setColor] = useState({
    light: ColorLocalStorage(localStorage.colorLight) || blue,
    dark: ColorLocalStorage(localStorage.colorDark) || green,
  })
  // console.log(color)
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
      Mode: {
        system: () => {
          localStorage.mode = 'system'
          setMode({ ...mode, system: true })
        },
        light: () => {
          localStorage.mode = 'light'
          setMode({ system: false, active: 'light' })
        },
        dark: () => {
          localStorage.mode = 'dark'
          setMode({ system: false, active: 'dark' })
        },
      },
      Color: {
        light: toggleColor('light'),
        dark: toggleColor('dark'),
      },
    }),
    [toggleColor, mode]
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode.active,
          ...(mode.active === 'light'
            ? {
                // light
                primary: color.light,
                secondary: color.light,
                background: {
                  default: grey[100],
                  myBox: 'white',
                },
              }
            : {
                // dark
                primary: color.dark,
                secondary: color.dark,
                background: {
                  default: grey[900],
                  myBox: 'rgb(255, 255, 255, 0.05)',
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
