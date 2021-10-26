import { useState, useEffect } from 'react'
import './css/App.css'
import io from 'socket.io-client'
import Text from './components/Text'
import Input from './components/Input'
import MyBox from './components/MyBox'
import UserBox from './components/UserBox'

const socket = io('https://node7socket.herokuapp.com')
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

  function handleSubmit(e) {
    e.preventDefault()
    socket.emit('message', { message: message, user: localStorage.username })
    setMessage('')
  }
  useEffect(() => {
    socket.on('message', (payload) => {
      setText([...text, payload])
    })
  })

  return (
    <div className="App">
      <MyBox>
        <UserBox AUTH={AUTH} logged={logged} setLogged={setLogged} />
      </MyBox>
      <Input
        handleSubmit={handleSubmit}
        message={message}
        setMessage={setMessage}
      />
      {text.length ? <Text text={text} /> : 'Ничего нету'}
    </div>
  )
}

export default App
