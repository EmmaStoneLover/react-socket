// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import { IconButton, Typography } from '@mui/material'
// eslint-disable-next-line
import { MyBox, MyButton } from '../config/config'
// eslint-disable-next-line
import SettingsIcon from '@mui/icons-material/Settings'
import { Link } from 'react-router-dom'

export default function EmmaStone({ setSettings }) {
  return (
    <MyBox bSh={'0px'} bg={'#fff0'}>
      <Typography component="span" variant="h4">
        Emma Stone &nbsp;
        <IconButton
          color="primary"
          onClick={() => setSettings((prev) => !prev)}
        >
          <SettingsIcon />
        </IconButton>
      </Typography>
      &nbsp;&nbsp;&nbsp;
      <span>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Typography component="span" color="primary">
            Socket
          </Typography>
        </Link>
        &nbsp; &nbsp;
        <Link to="/alise" style={{ textDecoration: 'none' }}>
          <Typography component="span" color="primary">
            Alise
          </Typography>
        </Link>
      </span>
    </MyBox>
  )
}
