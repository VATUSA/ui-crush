import type { GetServerSideProps } from 'next';
import Card from '../components/Card';
import CardHeading from '../components/Card/CardHeading';
import Hero from '../components/Hero';
import NextEvent from '../components/NextEvent';
import { IV2EventResponse } from '../const/apiv2';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Master from '../layout/master';

interface IProps {
	events: IV2EventResponse
}

const Home = ({ events }: IProps) => {
	useDocumentTitle('Home');

	return (
		<Master>
			<NextEvent event={events.data[0]} />
			<Hero />
			<div className="max-w-screen-fullhd mx-auto p-4">
				<Card>
					<CardHeading>About Us</CardHeading>
					<p>VATUSA is a division of the VATSIM Americas region comprising of almost all airspace operated by the real world Federal Aviation Administration. The airspace comprises of 20 Air Route Traffic Control Centers (contiguous US), 1 Control Facility (Pacific Control Facility) and 1 CERAP (Guam CERAP, under management of PCF). All information contained within this website is designated for use with the VATSIM network and for flight simulation purposes. Information is not intended nor should be used for real world navigation and its use for real world navigation could be in violation of federal laws. This website is not affiliated with the Federal Aviation Administration or any other governing body.</p>
				</Card>
			</div>
		</Master>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch('https://api.vatusa.net/v2/public/events/1');
	const events = await res.json();
	return {
		props: {
			events,
		},
	};
};

export default Home;
