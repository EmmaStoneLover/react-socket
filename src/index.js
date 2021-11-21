import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'

import Apple from './Apple.jsx'
import Theme from './config/Theme'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <Theme>
    <HashRouter>
      <Apple />
    </HashRouter>
  </Theme>,
  document.getElementById('root')
)
