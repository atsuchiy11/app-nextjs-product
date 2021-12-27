import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		// type: 'dark',
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#e91e63',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
	},
})

export default theme
