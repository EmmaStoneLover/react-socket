// import { useMemo } from 'react'
// import { ThemeProvider, createTheme } from '@mui/material/styles'
// import { ColorModeContext } from '../App'

// export default function Theme({ children, mode, setMode }) {
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
//       },
//     }),
//     []
//   )

//   const theme = useMemo(
//     () =>
//       createTheme({
//         palette: {
//           mode,
//         },
//       }),
//     [mode]
//   )

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>{children}</ThemeProvider>
//     </ColorModeContext.Provider>
//   )
// }
