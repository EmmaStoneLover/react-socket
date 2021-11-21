import { useState } from 'react'
import { Grid, TextField, Typography } from '@mui/material'
import { MyBox, MyLoadingButton } from '../../config/config'

import questions from './questions'

export default function AliseInput({ end, logged }) {
  const [input, setInput] = useState('')
  const [dialogs, setDialogs] = useState([
    { text: 'Привет, чем я могу помочь?', user: 'Алиса' },
  ])
  const [data, setData] = useState({
    blame: false,
  })

  function handleSubmit(e) {
    e.preventDefault()
    setDialogs((prev) => [
      ...prev,
      {
        text: input,
        user: logged ? logged.username : 'Ноунейм',
        right: true,
      },
    ])
    let answer = null
    questions.forEach((i) => {
      i.question.forEach((j) => {
        if (j === input.toLocaleLowerCase()) {
          if (i.function) setData(i.function(data))
          console.log(data)
          const rand = Math.floor(Math.random() * i.answer.length)
          return (answer = i.answer[rand])
        }
      })
    })
    setTimeout(() => {
      setDialogs((prev) => [
        ...prev,
        {
          text: answer || 'Не поняла',
          user: 'Алиса',
        },
      ])
    }, [200])
    setInput('')
    setTimeout(() => {
      end.current.scrollIntoView({ behavior: 'smooth' })
    }, [250])
  }

  return (
    <>
      <MyBox bg={data.blame ? '#d60000' : null}>
        <Typography
          variant="h4"
          color={data.blame ? '' : 'primary'}
          sx={{ mb: '10px' }}
        >
          Алиса
        </Typography>
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
                &nbsp;
                <Typography
                  variant="span"
                  dangerouslySetInnerHTML={{
                    __html: dialog.text.replace(/\n/g, '<br />&nbsp; &nbsp;'),
                  }}
                />
              </Typography>
            </div>
          )
        })}
      </MyBox>
      <MyBox bg={data.blame ? '#d60000' : null}>
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
              <MyLoadingButton color="secondary" type="submit">
                Send
              </MyLoadingButton>
            </Grid>
          </Grid>
        </form>
      </MyBox>
    </>
  )
}
