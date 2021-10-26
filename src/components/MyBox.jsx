import React from 'react'

const styles = {
  MyBox: {
    border: 'black solid 2px',
    margin: '2rem',
    padding: '1rem',
  },
}

export default function MyBox({ children }) {
  return <div style={styles.MyBox}>{children}</div>
}
