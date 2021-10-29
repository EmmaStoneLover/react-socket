import Box from '@mui/material/Box'

export default function MyBox({ children }) {
  return (
    <Box
      sx={{
        m: 2,
        p: 2,
        boxShadow: 5,
        borderRadius: 5,
        // maxWidth: 500,
      }}
    >
      {children}
    </Box>
  )
}
