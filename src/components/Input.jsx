import { TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import LoadingButton from '@mui/lab/LoadingButton'

const socket = io('https://node7socket.herokuapp.com')

export default function Input({ message, setMessage, text, setText }) {
  const [loading, setLoading] = useState(false)
  function handleSubmit(e) {
    setLoading(true)
    e.preventDefault()
    socket.emit('message', { message: message, user: localStorage.username })
    setMessage('')
  }
  useEffect(() => {
    socket.on('message', (payload) => {
      setText([...text, payload])
      setLoading(false)
    })
  })

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
          label="жопа"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={loading}
        />
      </form>
    </>
  )
}
