import Theme from './Theme'
import MyBox from './MyBox'
import MyButton from './MyButton'
import MyLoadingButton from './MyLoadingButton'
import MyToggleButton from './MyToggleButton'
import { yellow, blue, green, purple, orange } from '@mui/material/colors'

const config = {
  // Auth
  AUTH: 'https://emmastonenodejs.herokuapp.com',
  // AUTH: 'https://emmastonenodejs.herokuapp.com',
  // Socket
  socket: 'https://node7socket.herokuapp.com',
  // socket: 'http://localhost:7000',
  // Theme
  COLORS: [
    { name: 'yellow', color: yellow, Name: 'Yellow' },
    { name: 'blue', color: blue, Name: 'Blue' },
    { name: 'green', color: green, Name: 'Green' },
    { name: 'purple', color: purple, Name: 'Purple' },
    { name: 'orange', color: orange, Name: 'Orange' },
  ],
  standartMode: 'system',
  standartColor: {
    light: blue,
    dark: yellow,
  },
}

export { Theme, MyBox, MyButton, MyLoadingButton, MyToggleButton }

export default config
