import { useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import { MyBox, MyLoadingButton } from '../../config/config'

import questions from './questions'

export default function AliseInput({ end }) {
  const [input, setInput] = useState('')
  const [dialogs, setDialogs] = useState([
    { text: 'Привет, чем я могу помочь?', user: 'Алиса' },
  ])

  function handleSubmit(e) {
    e.preventDefault()
    setDialogs((prev) => [
      ...prev,
      {
        text: input,
        user: localStorage.username,
        right: true,
      },
    ])
    let answer = null
    questions.forEach((i) => {
      i.question.forEach((j) => {
        if (j === input.toLocaleLowerCase()) {
          const rand = Math.floor(Math.random() * i.answer.length)
          return (answer = i.answer[rand])
        }
      })
    })
    setTimeout(() => {
      setDialogs((prev) => [
        ...prev,
        {
          text: answer || 'Пошел нахуй',
          user: 'Алиса',
        },
      ])
    }, [200])
    setInput('')
    end.current.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      end.current.scrollIntoView({ behavior: 'smooth' })
    }, [250])
  }

  return (
    <>
      <Typography variant="h5">Алиса</Typography>
      <MyBox>
        {dialogs.map((dialog, index) => {
          return (
            <div
              key={index}
              style={{ textAlign: dialog.right ? 'end' : 'start' }}
            >
              <Typography variant="p">
                <Typography variant="span" color="primary">
                  {dialog.user}
                </Typography>
                {/* &nbsp; {dialog.text.replace(/\n/g, <br />)} */}
                &nbsp;
                <span
                  dangerouslySetInnerHTML={{
                    __html: dialog.text.replace(/\n/g, '<br />&nbsp; &nbsp;'),
                  }}
                />
              </Typography>
            </div>
          )
        })}
      </MyBox>
      <MyBox>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ p: 1 }}>
            <Grid item xs={10}>
              <TextField
                required
                fullWidth
                label="Вставить сюда"
                variant="outlined"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Grid>
            <Grid item xs={2} sx={{ mt: '11px', textAlign: 'end' }}>
              <MyLoadingButton color="secondary">Send</MyLoadingButton>
            </Grid>
          </Grid>
        </form>
      </MyBox>
    </>
  )
}
