import { FormControlLabel, Switch } from '@mui/material'
import { COLORS } from '../config/Theme'
import MyBox from '../config/MyBox'
import '../css/App.css'

import DarkModeIcon from '@mui/icons-material/DarkMode'
import MyButton from '../config/MyButton'

export default function Settings({ theme, colorMode }) {
  return (
    <MyBox>
      <FormControlLabel
        control={
          <Switch
            onClick={colorMode.toggleDarkMode}
            checked={theme.palette.mode === 'light' ? false : true}
          />
        }
        label={<DarkModeIcon sx={{ mt: '7px' }} />}
        labelPlacement="start"
      />
      <br />
      {COLORS.map((cl, i) => {
        return (
          <MyButton
            onClick={
              theme.palette.mode === 'light'
                ? colorMode.toggleColorLight[cl.name]
                : colorMode.toggleColorDark[cl.name]
            }
            key={i}
          >
            {cl.Name}
          </MyButton>
        )
      })}
    </MyBox>
  )
}
