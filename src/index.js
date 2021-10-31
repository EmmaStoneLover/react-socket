import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App.jsx'

import Theme from './settings/Theme'

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root')
)
