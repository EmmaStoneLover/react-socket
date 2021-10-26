import React, { useState } from 'react'

export default function UserBox({ AUTH, logged, setLogged }) {
  const [userInput, setUserInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

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
      localStorage.user = res.username
      setLogged(true)
    } else {
      setUserInput('Ты чета попутал')
      setPasswordInput('')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetchData()
  }
  function handleLogOut() {
    localStorage.user = null
    setLogged(false)
    setUserInput('')
    setPasswordInput('')
  }

  return (
    <div>
      {!logged ? (
        <>
          <p>Эй бля, ты кто?</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              required
              placeholder="логин Ноунейм"
              vlaue={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />{' '}
            <br />
            <input
              required
              type="password"
              placeholder="пароль 1234"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <br />
            <button type="submit">Войти</button>
          </form>
        </>
      ) : (
        <>
          <p>Попа</p>
          <button onClick={handleLogOut}>Выйти</button>
        </>
      )}
    </div>
  )
}
