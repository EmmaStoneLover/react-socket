import { useState, useContext } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
// import './css/App.css'

import Text from './components/Text'
import Input from './components/Input'
import MyBox from './config/MyBox'
import UserBox from './components/UserBox'
import Settings from './components/Settings'
import { ColorModeContext } from './config/Theme'

const AUTH = 'https://emmastonenodejs.herokuapp.com'
const socket = 'https://node7socket.herokuapp.com'

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
  const [settings, setSettings] = useState(false)

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
        <Button onClick={() => setSettings((prev) => !prev)}>Settings</Button>
        {settings ? <Settings theme={theme} colorMode={colorMode} /> : ''}
        <MyBox>
          <UserBox
            AUTH={AUTH}
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
          <Input socket={socket} text={text} setText={setText} />
        </MyBox>
      </Container>
      <br />
    </Box>
  )
}
