// eslint-disable-next-line
import { useMemo, useState, createContext, useCallback, useEffect } from 'react'
// eslint-disable-next-line
import { ThemeProvider, createTheme } from '@mui/material/styles'
// eslint-disable-next-line
import { grey, yellow, blue, green, purple, orange } from '@mui/material/colors'
import { useMediaQuery } from '@mui/material'

import config from './config'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function Theme({ children }) {
  // цвет из localStorage
  const LSMode = localStorage.mode || config.standartMode
  const [mode, setMode] = useState(LSMode)

  // dark mode из localStorage
  const darkQuery = useMediaQuery('(prefers-color-scheme: dark)')
  // цвет primary и secondary для кнопок и всей хуйни
  const [color, setColor] = useState({
    light: ColorLS(localStorage.colorLight) || config.standartColor.light,
    dark: ColorLS(localStorage.colorDark) || config.standartColor.dark,
  })

  // useEffect при изменении (prefers-color-scheme: dark)
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

  // функция ( localStorage.цвет -> цвет )
  function ColorLS(color) {
    let right = null
    config.COLORS.forEach((cl) => {
      if (color === cl.name) right = cl.color
    })
    return right
  }
  // функция ( цвет -> localStorage.цвет )
  const ColorLSDefiner = useCallback((color) => {
    let right = null
    config.COLORS.forEach((cl) => {
      if (color === cl.color) right = cl.name
    })
    return right
  }, [])

  // помогает toggleColor ниже
  const toggleColorFunc = useCallback(
    (mode, newColor) => {
      if (mode === 'light') {
        setColor((prev) => {
          localStorage.colorLight = ColorLSDefiner(newColor)
          return { light: newColor, dark: prev.dark }
        })
      } else {
        setColor((prev) => {
          localStorage.colorDark = ColorLSDefiner(newColor)
          return { light: prev.light, dark: newColor }
        })
      }
    },
    [ColorLSDefiner]
  )
  // возвращает { цвет: { light: {}, dark: {} }, цвет: ... }
  const toggleColor = useCallback(
    (mode) => {
      let right = {}
      config.COLORS.forEach((cl) => {
        right[cl.name] = () =>
          toggleColorFunc(mode === 'light' ? 'light' : 'dark', cl.color)
      })
      return right
    },
    [toggleColorFunc]
  )

  // сама тема
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode.active, // нихуя себе сам додумался до такого
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
  // useContext функции
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
        // какой 'цвет' сейчас
        colorDefiner: ColorLSDefiner(
          theme.palette.mode === 'light' ? color.light : color.dark
        ),
      },
    }),
    [toggleColor, ColorLSDefiner, mode, color, theme.palette.mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
