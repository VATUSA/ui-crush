import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => (
	<>
		<Head>
			<title>VATUSA</title>
			<link rel="icon" type="image/png" href="/favicon.png" />
		</Head>
		<Component {...pageProps} />
	</>
);

export default App;
