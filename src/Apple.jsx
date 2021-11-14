// eslint-disable-next-line
import { useState, useContext, useRef } from 'react'
// eslint-disable-next-line
import { Container, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
// eslint-disable-next-line
import Text from './components/Text'
import Input from './components/Input'
import UserBox from './components/UserBox'
import Settings from './components/Settings'
import EmmaStone from './components/EmmaStone'
import { ColorModeContext } from './config/Theme'
// eslint-disable-next-line
import { MyButton } from './config/config'

export default function Apple() {
  const firstText = () => {
    try {
      return JSON.parse(localStorage.text)
    } catch {
      return []
    }
  }
  const [text, setText] = useState(firstText() || [])
  const [logged, setLogged] = useState(() => {
    return localStorage.username &&
      localStorage.username !== null &&
      localStorage.username !== 'null'
      ? true
      : false
  })

  const [settings, setSettings] = useState(false)
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const end = useRef()
  const sxBox = {
    bgcolor: 'background.default',
    color: 'text.primary',
    minHeight: '100vh',
  }

  return (
    <Box sx={sxBox}>
      <Container className="App" maxWidth="sm" sx={{ pt: 5 }}>
        <EmmaStone setSettings={setSettings} />
        {settings ? <Settings theme={theme} colorMode={colorMode} /> : null}
        <UserBox
          logged={logged}
          setLogged={setLogged}
          text={text}
          setText={setText}
        />
        {logged ? <Text text={text} setText={setText} /> : null}
        {logged ? <Input text={text} setText={setText} end={end} /> : null}
        {/* <Text text={text} setText={setText} /> 
        <Input text={text} setText={setText} end={end} /> */}
      </Container>
      <br ref={end} />
    </Box>
  )
}
