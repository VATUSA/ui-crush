import type { NextPage } from 'next';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Master from '../layout/master';

const Home: NextPage = () => {
	useDocumentTitle('Home');
	return (
		<Master>
			<div>asdf</div>
		</Master>
	);
};

export default Home;
