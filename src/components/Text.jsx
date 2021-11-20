// eslint-disable-next-line
import { useState } from 'react'
import '../css/App.css'
// eslint-disable-next-line
import { Grid, Typography } from '@mui/material'
// eslint-disable-next-line
import { MyBox, MyButton } from '../config/config'
// eslint-disable-next-line
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

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
          <div
            style={{
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              display: 'flex',
            }}
          >
            <span>
              {/* <MyButton onClick={() => console.log('жопа')}>
                <KeyboardArrowUpIcon />
                <span>more</span>
              </MyButton> */}
            </span>
            <span>
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
            </span>
          </div>
          <div>
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
          </div>
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
