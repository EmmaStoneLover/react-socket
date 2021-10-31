import { Button } from '@mui/material'
import MyBox from './MyBox'

export default function Settings({ theme, colorMode }) {
  return (
    <MyBox>
      <Button onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === 'light' ? 'Light' : 'Dark'}
      </Button>
    </MyBox>
  )
}
