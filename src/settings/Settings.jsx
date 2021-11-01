import { Button, FormControlLabel, Switch } from '@mui/material'
import MyBox from './MyBox'

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
          <Button onClick={colorMode.toggleColorLight.Yellow}>Yellow</Button>
          <Button onClick={colorMode.toggleColorLight.Blue}>Blue</Button>
          <Button onClick={colorMode.toggleColorLight.Green}>Green</Button>
          <Button onClick={colorMode.toggleColorLight.Red}>Red</Button>
        </div>
      ) : (
        <div>
          <Button onClick={colorMode.toggleColorDark.Yellow}>Yellow</Button>
          <Button onClick={colorMode.toggleColorDark.Blue}>Blue</Button>
          <Button onClick={colorMode.toggleColorDark.Green}>Green</Button>
          <Button onClick={colorMode.toggleColorDark.Red}>Red</Button>
        </div>
      )}
    </MyBox>
  )
}
