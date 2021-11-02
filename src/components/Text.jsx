import { useState } from 'react'
import '../css/App.css'

import MyBox from '../config/MyBox'
import { Button, Grid, Typography } from '@mui/material'

const styles = {
  p: {
    fontSize: '15px',
    margin: '1px',
  },
}

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
          <p
            style={styles.p}
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
                {payload.user} &nbsp;
              </Typography>
            ) : (
              ''
            )}
            {payload.message}
          </p>
        )
      })}
      <br />
      <div>
        <Grid container sx={{ justifyContent: 'end' }}>
          {textSettings ? (
            <Grid item sx="10">
              <Button color="success" onClick={setTextToLocalStorage}>
                Save text
              </Button>
              <span>&nbsp; &nbsp;</span>
              <Button color="warning" onClick={deleteText}>
                Delete text
              </Button>
            </Grid>
          ) : (
            ''
          )}
          <Grid item sx="2">
            <Button onClick={() => setTextSettings((prev) => !prev)}>
              ...
            </Button>
          </Grid>
        </Grid>
      </div>
    </MyBox>
  )
}
