import { useState } from 'react'
import './css/App.css'
import Text from './components/Text'
import Input from './components/Input'
import MyBox from './settings/MyBox'
import UserBox from './components/UserBox'
import { Container, Typography } from '@mui/material'

const AUTH = 'https://emmastonenodejs.herokuapp.com'

function App() {
  const [message, setMessage] = useState('')
  const [text, setText] = useState([])
  const [logged, setLogged] = useState(() => {
    return localStorage.username &&
      localStorage.username !== null &&
      localStorage.username !== 'null'
      ? true
      : false
  })

  return (
    <Container className="App">
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
  )
}

export default App
