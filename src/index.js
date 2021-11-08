import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

import Apple from './Apple.jsx'
import Theme from './config/Theme'

ReactDOM.render(
  <Theme>
    <Apple />
  </Theme>,
  document.getElementById('root')
)
