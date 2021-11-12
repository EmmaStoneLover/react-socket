// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
import { IconButton, Typography } from '@mui/material'
// eslint-disable-next-line
import { MyBox } from '../config/config'
// eslint-disable-next-line
import SettingsIcon from '@mui/icons-material/Settings'

export default function EmmaStone({ setSettings }) {
  return (
    <MyBox bSh={'0px'} nobg={true}>
      <Typography variant="h4">
        Emma Stone &nbsp;
        <IconButton
          color="primary"
          onClick={() => setSettings((prev) => !prev)}
        >
          <SettingsIcon />
        </IconButton>
      </Typography>
    </MyBox>
  )
}
