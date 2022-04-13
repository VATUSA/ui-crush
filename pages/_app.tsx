import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppSettingsProvider } from '../context/AppSettings';

const App = ({ Component, pageProps }: AppProps) => (
	<AppSettingsProvider>
		<>
			<Head>
				<title>VATUSA</title>
				<link rel="icon" type="image/png" href="/favicon.png" />
			</Head>
			<Component {...pageProps} />
		</>
	</AppSettingsProvider>
);

export default App;
