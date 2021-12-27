import * as React from 'react'
import Link from 'next/link'
import PageHead from 'src/layouts/PageHead'
import { useAppContext } from 'src/foundations/AppProvider'
import { makeStyles, Theme } from '@material-ui/core/styles'
import BreadCrumbs from 'src/components/BreadCrumbs'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		margin: theme.spacing(1),
	},
	title: {
		marginTop: theme.spacing(1.5),
		marginBottom: theme.spacing(2.5),
	},
}))

const CrmPage = () => {
	const classes = useStyles()
	const { dispatch } = useAppContext()

	// Switch header menu cursor
	React.useEffect(() => {
		dispatch({ tabValue: { payload: 3 } })
	}, [])

	return (
		<div className={classes.root}>
			<PageHead title="CRM | Product Lineup" />
			<BreadCrumbs current="CRM" />
			<Typography
				variant="h5"
				component="h2"
				className={classes.title}
				gutterBottom>
				CRM
			</Typography>
			<p>Comming soon...</p>
			<p>
				<Link href="/">
					<a>Go home</a>
				</Link>
			</p>
		</div>
	)
}
export default CrmPage
