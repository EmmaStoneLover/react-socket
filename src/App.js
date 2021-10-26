import { useState, useEffect } from 'react'
import './css/App.css'
import io from 'socket.io-client'
import Text from './components/Text'
import Input from './components/Input'
import MyBox from './components/MyBox'
import UserBox from './components/UserBox'

const socket = io('https://node7socket.herokuapp.com')

function App() {
  const [message, setMessage] = useState('')
  const [text, setText] = useState([])
  const [logged, setLogged] = useState(localStorage.user)

  function changeUser(user) {
    if (user) {
      setLogged(true)
      localStorage.user = user
    } else {
      setLogged(false)
      localStorage.user = null
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    socket.emit('message', { message: message, user: localStorage.user })
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
        <UserBox
          changeUser={changeUser}
          logged={logged}
          setLogged={setLogged}
        />
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
