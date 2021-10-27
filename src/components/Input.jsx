import React from 'react'
import MyBox from './MyBox'

export default function Input({ handleSubmit, message, setMessage }) {
  return (
    <MyBox>
      <p style={{ fontSize: '30px' }}>Вставь текст сюда жыва блят</p>
      <form onSubmit={handleSubmit}>
        <input
          style={{ padding: 10 }}
          placeholder="Текст"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </form>
    </MyBox>
  )
}
