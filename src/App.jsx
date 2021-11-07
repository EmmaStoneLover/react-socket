import { useState, useContext, useRef } from 'react'
import { Container, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import Text from './components/Text'
import Input from './components/Input'
import UserBox from './components/UserBox'
import Settings from './components/Settings'
import { ColorModeContext } from './config/Theme'

import { MyBox } from './config/config'

export default function App() {
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

  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  const end = useRef()

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
      }}
    >
      <Container className="App" maxWidth="sm">
        <br />
        <br />
        <Typography variant="h4">Emma Stone</Typography>
        <br />
        <Settings theme={theme} colorMode={colorMode} />
        <MyBox>
          <UserBox
            logged={logged}
            setLogged={setLogged}
            text={text}
            setText={setText}
          />
        </MyBox>
        {text.length ? (
          <Text text={text} setText={setText} />
        ) : (
          <div>
            <Typography variant="p">Ничего тут нету</Typography>
            <br />
          </div>
        )}
        <MyBox>
          <Input text={text} setText={setText} end={end} />
        </MyBox>
      </Container>
      <br ref={end} />
    </Box>
  )
}
