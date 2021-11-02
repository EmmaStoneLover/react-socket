import { useState } from 'react'
import '../css/App.css'

import MyBox from '../config/MyBox'
import { Button, Grid, Typography } from '@mui/material'

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
            variant="p"
            style={{ fontSize: '16px' }}
            className={`
              textLeft
              ${payload.user === 'Миша' ? 'textRight' : ''} 
              ${payload.user === 'Emma Stone' ? 'textCenter' : ''}
              `}
            key={index}
          >
            {payload.user !== null &&
            payload.user !== 'null' &&
            payload.user ? (
              <Typography variant="b" color="primary">
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
      <br />
      <div>
        <Grid container style={{ textAlign: 'end', justifyContent: 'end' }}>
          {textSettings ? (
            <Grid item xs={10}>
              <Button color="success" onClick={setTextToLocalStorage}>
                Save text
              </Button>
              <Button color="error" onClick={deleteText}>
                Delete text
              </Button>
            </Grid>
          ) : (
            ''
          )}
          <Grid item xs={2}>
            <Button onClick={() => setTextSettings((prev) => !prev)}>
              •••
            </Button>
          </Grid>
        </Grid>
      </div>
    </MyBox>
  )
}
