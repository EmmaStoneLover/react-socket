import Button from '@mui/material/Button'

export default function MyButton(propps) {
  return (
    <Button {...propps} style={{ textTransform: 'none' }}>
      {propps.children}
    </Button>
  )
}
