import '../css/App.css'
// eslint-disable-next-line
import { useEffect, useState } from 'react'
// eslint-disable-next-line
import { FormControlLabel, Switch, Button } from '@mui/material'
// eslint-disable-next-line
import { ToggleButtonGroup } from '@mui/material'
// eslint-disable-next-line
import DarkModeIcon from '@mui/icons-material/DarkMode'
// eslint-disable-next-line
import { MyButton, MyBox, MyToggleButton } from '../config/config'
import config from '../config/config'

export default function Settings({ theme, colorMode }) {
  // все для mode
  const [modeChoise, setModeChoise] = useState(() => {
    if (localStorage.mode === 'system') return 'system'
    if (localStorage.mode === 'light') return 'light'
    if (localStorage.mode === 'dark') return 'dark'
    else return config.standartMode
  })
  const handleModeChoise = (_, choise) => {
    if (choise === 'system') {
      colorMode.Mode.system()
      setModeChoise(choise)
    } else if (choise === 'light') {
      colorMode.Mode.light()
      setModeChoise(choise)
    } else if (choise === 'dark') {
      colorMode.Mode.dark()
      setModeChoise(choise)
    }
  }

  // все для color
  const [colorChoise, setColorChoise] = useState()
  const handleColorChoise = (_, choise) => {
    try {
      if (modeChoise === 'system') {
        if (theme.palette.mode === 'light') {
          colorMode.Color.light[choise]()
          setColorChoise(choise)
        } else {
          colorMode.Color.dark[choise]()
          setColorChoise(choise)
        }
      } else if (modeChoise === 'light') {
        colorMode.Color.light[choise]()
        setColorChoise(choise)
      } else if (modeChoise === 'dark') {
        colorMode.Color.dark[choise]()
        setColorChoise(choise)
      }
    } catch {
      return
    }
  }
  // будет менять цвет colorChoise при изменении темы
  useEffect(() => {
    if (theme.palette.mode === 'light') {
      setColorChoise(colorMode.Color.colorDefiner)
    } else {
      setColorChoise(colorMode.Color.colorDefiner)
    }
    return colorMode.Color.colorDefiner
  }, [colorMode.Color, theme.palette.mode])

  return (
    <MyBox>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={modeChoise}
        onChange={handleModeChoise}
      >
        <MyToggleButton value="system">System</MyToggleButton>
        <MyToggleButton value="light">Light</MyToggleButton>
        <MyToggleButton value="dark">Dark</MyToggleButton>
      </ToggleButtonGroup>

      <br />
      <br />

      <ToggleButtonGroup
        size="small"
        color="primary"
        exclusive
        value={colorChoise}
        onChange={handleColorChoise}
      >
        {config.COLORS.map((cl, i) => {
          return (
            <MyToggleButton value={cl.name} key={i}>
              {cl.Name}
            </MyToggleButton>
          )
        })}
      </ToggleButtonGroup>
    </MyBox>
  )
}
