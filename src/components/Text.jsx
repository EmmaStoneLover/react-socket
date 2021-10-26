import React from 'react'
import MyBox from './MyBox'
import '../css/App.css'

const styles = {
  p: {
    fontSize: '15px',
    margin: '1px',
  },
}

export default function Text({ text }) {
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
            {payload.user !== null && payload.user !== 'null' ? (
              <b>{payload.user} &nbsp;</b>
            ) : (
              <b>Левак &nbsp;</b>
            )}
            {payload.message}
          </p>
        )
      })}
    </MyBox>
  )
}
