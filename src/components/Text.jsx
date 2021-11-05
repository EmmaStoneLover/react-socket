import { useState } from 'react'
import '../css/App.css'

import MyBox from '../config/MyBox'
import { Grid, Typography } from '@mui/material'

import MyButton from '../config/MyButton'

export default function Text({ text, setText }) {
  const [textSettings, setTextSettings] = useState(false)

  const setTextToLocalStorage = () => {
    localStorage.text = JSON.stringify(text)
    setTextSettings(false)
  }
  const deleteText = () => {
    setText([])
    delete localStorage.text
  }

  return (
    <MyBox>
      {text.map((payload, index) => {
        return (
          <Typography
            component="p"
            key={index}
            className={`
              textLeft
              ${payload.user === 'Миша' ? 'textRight' : ''} 
              ${payload.user === 'Emma Stone' ? 'textCenter' : ''}
              `}
          >
            {payload.user !== null &&
            payload.user !== 'null' &&
            payload.user ? (
              <Typography component="b" color="primary">
                &nbsp; {payload.user} &nbsp;
              </Typography>
            ) : (
              ''
            )}
            {payload.message}
          </Typography>
        )
      })}
      <br />
      <div>
        <Grid container sx={{ textAlign: 'start' }}>
          <Grid item xs={2}>
            <MyButton onClick={() => setTextSettings((prev) => !prev)}>
              •••
            </MyButton>
          </Grid>
          {textSettings ? (
            <Grid item xs={10}>
              &nbsp; &nbsp;
              <MyButton color="success" onClick={setTextToLocalStorage}>
                Save text
              </MyButton>
              <MyButton color="error" onClick={deleteText}>
                Delete text
              </MyButton>
            </Grid>
          ) : (
            ''
          )}
        </Grid>
      </div>
    </MyBox>
  )
}
