import { useEffect, useState, useCallback } from 'react'
import { TextField, Typography } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import io from 'socket.io-client'

const socket = io('https://node7socket.herokuapp.com')

const Input = ({ text, setText }) => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    (e) => {
      setLoading(true)
      e.preventDefault()
      socket.emit('message', { message: message, user: localStorage.username })
      setMessage('')
    },
    [message, localStorage.username]
  )
  useEffect(() => {
    socket.on('message', (payload) => {
      setText([...text, payload])
      setLoading(false)
    })
  }, [text])

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
          disabled={loading}
        />
      </form>
    </>
  )
}

export default Input
