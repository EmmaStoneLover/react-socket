import { useEffect, useState, useCallback, useRef } from 'react'
import { TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import io from 'socket.io-client'

const socket = 'https://node7socket.herokuapp.com'
// const socket = 'http://localhost:7000'

const Input = ({ text, setText }) => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = io.connect(socket)
    socketRef.current.on('message', (payload) => {
      setText([...text, payload])
      setLoading(false)
    })
    return () => socketRef.current.disconnect()
  }, [text, setText])

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      setLoading(true)
      socketRef.current.emit('message', {
        message: message,
        user: localStorage.username,
      })
      setMessage('')
    },
    [message]
  )

  return (
    <>
      <Typography variant="h5">Вставсь сюда свой большой текст</Typography>

      <br />
      <form onSubmit={handleSubmit}>
        <LoadingButton
          loading={loading}
          type="submit"
          color="secondary"
          variant="outlined"
        >
          Send
        </LoadingButton>
        <br />
        <br />
        <TextField
          label="Вставить сюда"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
          // disabled={loading}
        />
      </form>
    </>
  )
}

export default Input
