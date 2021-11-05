import Box from '@mui/material/Box'

export default function MyBox(propps) {
  return (
    <Box
      {...propps}
      sx={{
        m: 2,
        p: 2,
        boxShadow: 5,
        borderRadius: 3,
        bgcolor: 'background.myBox',
      }}
    >
      {propps.children}
    </Box>
  )
}
