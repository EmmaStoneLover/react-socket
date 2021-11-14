// eslint-disable-next-line
import { useState } from 'react'
import '../css/App.css'
// eslint-disable-next-line
import { Grid, Typography } from '@mui/material'
// eslint-disable-next-line
import { MyBox, MyButton } from '../config/config'

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
    <>
      {text.length ? (
        <MyBox>
          <div style={{ textAlign: 'end' }}>
            {textSettings ? (
              <>
                <MyButton color="error" onClick={deleteText}>
                  Delete text
                </MyButton>
                <MyButton onClick={setTextToLocalStorage}>Save text</MyButton>
              </>
            ) : null}
            <MyButton onClick={() => setTextSettings((prev) => !prev)}>
              •••
            </MyButton>
          </div>
          {text.map((payload, index) => {
            return (
              <Typography
                component="p"
                key={index}
                className={`
                  textLeft
                  ${payload.user === 'Миша' ? 'textRight' : null} 
                  ${payload.user === 'Emma Stone' ? 'textCenter' : null}
                `}
              >
                {payload.user !== null &&
                payload.user !== 'null' &&
                payload.user ? (
                  <Typography component="b" color="primary">
                    &nbsp; {payload.user}
                  </Typography>
                ) : null}
                &nbsp; {payload.message} &nbsp;
              </Typography>
            )
          })}
        </MyBox>
      ) : (
        <>
          <Typography variant="p">Ничего тут нету</Typography>
          <br />
        </>
      )}
    </>
  )
}
