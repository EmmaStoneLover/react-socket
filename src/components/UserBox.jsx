import { TextField, Typography } from '@mui/material'
import { useState } from 'react'

import config, { MyBox, MyButton, MyLoadingButton } from '../config/config'

export default function UserBox({ logged, setLogged }) {
  const [input, setInput] = useState({
    password: '',
    login: '',
  })
  const [label, setLabel] = useState({
    error: { login: false, password: false },
    login: 'логин Ноунейм',
    password: 'пароль 1234',
  })
  const [loading, setLoading] = useState(false)

  // отправка
  async function fetchData() {
    const data = {
      username: input.login,
      password: input.password,
    }
    console.log('Отправляю:', data)
    const res = await (
      await fetch(`${config.AUTH}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      })
    ).json()
    console.log('Пришло:', res)
    if (res.username && !res.userError && !res.passwordError) {
      localStorage.username = res.username
      localStorage.token = res.token
      console.log('Все збс', localStorage)
      setLogged(true)
    } else fetchError(res)
  }
  // при ошибке
  function fetchError(res) {
    if (res.userError) {
      setLabel({
        error: { login: true, password: true },
        login: res.userError,
        password: 'и пароль твой говно',
      })
    } else if (res.passwordError) {
      setLabel({
        error: { login: false, password: true },
        login: 'ты тупой, ',
        password: res.passwordError,
      })
    }
    setLoading(false)
  }
  // выход
  function handleLogOut() {
    delete localStorage.username
    delete localStorage.token
    console.log(localStorage)
    setLoading(false)
    setLogged(false)
    setInput({ login: '', password: '' })
    setLabel({
      error: { login: false, password: false },
      login: 'логин Ноунейм',
      password: 'пароль 1234',
    })
  }

  // жопа
  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    fetchData()
    setInput((prev) => {
      return { login: prev.login, password: '' }
    })
  }

  return (
    <MyBox>
      {!logged ? (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Typography variant="label" sx={{ mr: '25px' }}>
              Эй ю ты кто? а
            </Typography>
            <MyLoadingButton
              loading={loading}
              type="submit"
              color="secondary"
              variant="outlined"
            >
              Вoйти
            </MyLoadingButton>
            <br />
            <br />
            <TextField
              required
              fullWidth
              type="username"
              error={label.error.login}
              label={label.login}
              vlaue={input.login}
              onChange={(e) =>
                setInput((prev) => {
                  return { login: e.target.value, password: prev.password }
                })
              }
            />
            <br />
            <br />
            <TextField
              required
              fullWidth
              type="password"
              error={label.error.password}
              label={label.password}
              value={input.password}
              onChange={(e) =>
                setInput((prev) => {
                  return { login: prev.login, password: e.target.value }
                })
              }
            />
          </form>
        </>
      ) : (
        <div style={{ textAlign: 'end' }}>
          <Typography variant="label">
            {input.login !== '' ? input.login : localStorage.username} &nbsp;
            &nbsp;
          </Typography>
          <MyButton
            style={{ marginLeft: 10 }}
            color="secondary"
            variant="text"
            onClick={handleLogOut}
          >
            Выйти
          </MyButton>
        </div>
      )}
    </MyBox>
  )
}
