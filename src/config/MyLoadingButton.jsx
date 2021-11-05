import LoadingButton from '@mui/lab/LoadingButton'

export default function MyLoadingButton(propps) {
  return (
    <LoadingButton {...propps} style={{ textTransform: 'none' }}>
      {propps.children}
    </LoadingButton>
  )
}
