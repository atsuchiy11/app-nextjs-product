import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from 'src/styles/theme'

/**
 * Server-side Rendering Only
 * @see https://qiita.com/tetsutaroendo/items/c7171286137d963cdecf
 */
export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="ja">
				<Head>
					{/* PWA primary color */}
					<meta
						name="theme-color"
						content={theme.palette.primary.main}
					/>
					{/* Fonts and icons */}
					<link
						rel="stylesheet"
						type="text/css"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
	// Render app and page and get the context of the page with collected side effects.
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [
			...React.Children.toArray(initialProps.styles),
			sheets.getStyleElement(),
		],
	}
}
