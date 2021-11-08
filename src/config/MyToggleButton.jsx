import ToggleButton from '@mui/material/ToggleButton'

export default function MyToggleButton(propps) {
  return (
    <ToggleButton {...propps} style={{ textTransform: 'none' }}>
      {propps.children}
    </ToggleButton>
  )
}
