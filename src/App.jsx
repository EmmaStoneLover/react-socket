import { useState, useContext } from 'react'
import { Container, Typography, Box, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import './css/App.css'

import Text from './components/Text'
import Input from './components/Input'
import MyBox from './config/MyBox'
import UserBox from './components/UserBox'
import Settings from './components/Settings'
import { ColorModeContext } from './config/Theme'

const AUTH = 'https://emmastonenodejs.herokuapp.com'

export default function App() {
  const [message, setMessage] = useState('')
  const [text, setText] = useState([])
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
        <Typography variant="h4">EmmaStone</Typography>
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
        <MyBox>
          <Input
            message={message}
            setMessage={setMessage}
            text={text}
            setText={setText}
          />
        </MyBox>
        {text.length ? (
          <Text text={text} />
        ) : (
          <Typography variant="p">Ничего тут нету</Typography>
        )}
      </Container>
      <br />
    </Box>
  )
}
