import { MdCalendarToday } from 'react-icons/md';
import { IV2Event } from '../../const/apiv2';

interface IProps {
	event: IV2Event
}

const NextEvent = ({ event }: IProps) => (
	<div className="p-3 text-lg text-center bg-vatusa-blue-500 dark:bg-vatusa-blue-600 text-white">
		<h2 className="flex items-center justify-center">
			<MdCalendarToday className="mr-1" />
			Join us on
			{' '}
			{event.start_date}
			{' '}
			for:
			{' '}
			<a href={`https://forums.vatusa.net/index.php?topic=${event.id_topic}`} className="underline hover:no-underline ml-1">{event.title}</a>
		</h2>
	</div>
);

export default NextEvent;
