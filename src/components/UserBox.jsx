import React from 'react'

export default function UserBox({ changeUser, logged, setLogged }) {
  return (
    <div>
      {!logged ? (
        <>
          <p>Ты кто?</p>
          <div>
            <span onClick={() => changeUser('Миша')}>Миша &nbsp;</span>
            <span onClick={() => changeUser('Даша')}>Даша &nbsp;</span>
          </div>
        </>
      ) : (
        <div>
          <span onClick={() => changeUser()}>Sign out</span>
        </div>
      )}
    </div>
  )
}
