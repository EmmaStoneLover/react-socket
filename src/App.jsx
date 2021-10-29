import { useState, useContext } from 'react'
import './css/App.css'
import Text from './components/Text'
import Input from './components/Input'
import MyBox from './settings/MyBox'
import UserBox from './components/UserBox'
import { Container, Typography } from '@mui/material'
// import Theme, { ColorModeContext } from './settings/Theme'
// import { useTheme } from '@mui/material/styles'

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

  // const theme = useTheme()
  // const colorMode = useContext(ColorModeContext)

  return (
    <>
      <Container className="App" maxWidth="sm">
        <br />
        <Typography variant="h4">EmmaStone</Typography>
        <br />
        {/* <button onClick={colorMode.toggleColorMode}>
        { theme.palette.mode === 'light' ? 'Темный' : 'Светлый' }
      </button> */}
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
    </>
  )
}
