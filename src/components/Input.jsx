import { useEffect, useState, useCallback, useRef } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import io from 'socket.io-client'

import config, { MyLoadingButton } from '../config/config'

const Input = ({ text, setText, end }) => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const socketRef = useRef()

  useEffect(() => {
    socketRef.current = io.connect(config.socket)
    socketRef.current.on('message', (payload) => {
      setText([...text, payload])
      setLoading(false)
    })
    end.current.scrollIntoView({ behavior: 'smooth' })
    return () => socketRef.current.disconnect()
  }, [text, setText, end])

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
      {/* <Typography variant="h5">Вставить текст</Typography>
      <br /> */}
      <form onSubmit={handleSubmit}>
        <Grid container sx={{ p: 1 }}>
          <Grid item xs={10}>
            <TextField
              required
              label="Вставить сюда"
              variant="outlined"
              value={message}
              fullWidth
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} sx={{ mt: '11px', textAlign: 'end' }}>
            <MyLoadingButton
              loading={loading}
              type="submit"
              color="secondary"
              // variant="outlined"
            >
              Send
            </MyLoadingButton>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default Input
