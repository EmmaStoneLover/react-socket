import { Button, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import LoadingButton from '@mui/lab/LoadingButton'

const socket = io('https://node7socket.herokuapp.com')

export default function Input({ message, setMessage, text, setText }) {
  const [loading, setLoading] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    socket.emit('message', { message: message, user: localStorage.username })
    setMessage('')
    setLoading(false)
  }
  useEffect(() => {
    socket.on('message', (payload) => {
      setText([...text, payload])
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
        />
      </form>
    </>
  )
}
