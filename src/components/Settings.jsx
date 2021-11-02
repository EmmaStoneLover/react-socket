import { Button, FormControlLabel, Switch } from '@mui/material'
import { COLORS } from '../config/Theme'
import MyBox from '../config/MyBox'

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
        label="Dark Mode"
        labelPlacement="start"
      />
      <br />
      {theme.palette.mode === 'light' ? (
        <div>
          {COLORS.map((cl, i) => {
            return (
              <Button onClick={colorMode.toggleColorLight[cl.name]} key={i}>
                {cl.name}
              </Button>
            )
          })}
        </div>
      ) : (
        <div>
          {COLORS.map((cl, i) => {
            return (
              <Button onClick={colorMode.toggleColorDark[cl.name]} key={i}>
                {cl.name}
              </Button>
            )
          })}
        </div>
      )}
    </MyBox>
  )
}
