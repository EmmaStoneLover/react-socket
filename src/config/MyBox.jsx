import Box from '@mui/material/Box'

export default function MyBox(propps) {
  return (
    <Box
      {...propps}
      sx={{
        m: 2,
        p: 2,
        boxShadow: propps.bSh ? propps.bSh : 5,
        borderRadius: 3,
        bgcolor: propps.bg ? propps.bg : 'background.myBox',
      }}
    >
      {propps.children}
    </Box>
  )
}
