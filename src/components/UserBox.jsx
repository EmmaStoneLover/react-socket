import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import LoadingButton from '@mui/lab/LoadingButton'

export default function UserBox({ AUTH, logged, setLogged }) {
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    const data = {
      username: userInput,
      password: passwordInput,
    }
    console.log('Отправляю:', data)
    const res = await (
      await fetch(`${AUTH}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
    ).json()
    console.log('Пришло:', res)
    if (!res.userError && !res.passwordError && res.username) {
      localStorage.username = res.username
      localStorage.token = res.token
      setLogged(true)
      console.log('Все збс', localStorage)
    } else {
      setUserInput('')
      setPasswordInput('')
      setLogged(false)
      setLoading(false)
      console.log('Errreeeeeeeeooeoeoeoeooeoeoeor')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    fetchData()
  }
  function handleLogOut() {
    delete localStorage.username
    delete localStorage.token
    setLoading(false)
    console.log(localStorage)
    setLogged(false)
    setUserInput('')
    setPasswordInput('')
  }

  return (
    <div>
      {!logged ? (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Typography variant="label" style={{ marginRight: 25 }}>
              Эй ю ты кто? а
            </Typography>
            <LoadingButton
              loading={loading}
              type="submit"
              color="secondary"
              variant="outlined"
            >
              Вoйти
            </LoadingButton>
            <br />
            <br />
            <TextField
              required
              fullWidth
              style={{ maxWidth: 500 }}
              type="username"
              label="логин Ноунейм"
              vlaue={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <br />
            <br />
            <TextField
              required
              fullWidth
              style={{ maxWidth: 500 }}
              type="password"
              label="пароль 1234"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </form>
        </>
      ) : (
        <>
          <Typography variant="label">
            Привет, {localStorage.username}
          </Typography>
          <Button
            style={{ marginLeft: 30 }}
            color="secondary"
            variant="outlined"
            onClick={handleLogOut}
          >
            Выйти
          </Button>
        </>
      )}
    </div>
  )
}
