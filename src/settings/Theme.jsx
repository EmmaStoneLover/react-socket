import { useMemo, useState, createContext } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green, blue, grey } from '@mui/material/colors'

export const ColorModeContext = createContext({ toggleColorMode: () => {} })

export default function Theme({ children }) {
  const [mode, setMode] = useState(localStorage.darkMode || 'light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          if (prevMode === 'light') {
            prevMode = 'dark'
          } else {
            prevMode = 'light'
          }
          localStorage.darkMode = prevMode
          return prevMode
        })
      },
    }),
    []
  )

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // light mode
                primary: blue,
                secondary: blue,
                divider: blue[200],
              }
            : {
                // dark mode
                primary: green,
                secondary: green,
                divider: green[700],
                background: {
                  default: grey[800],
                  paper: grey[900],
                },
              }),
        },
      }),
    [mode]
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  )
}
