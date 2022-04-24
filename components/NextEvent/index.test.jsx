import { render, screen } from '@testing-library/react';
import NextEvent from '.';

describe('NextEvent', () => {
	beforeEach(() => {
		const props = {
			event: {
				id_event: 1,
				start_date: '2022-01-01',
				end_date: '2022-01-02',
				id_board: 123,
				id_topic: 456,
				title: 'The Best Event Ever!',
				id_member: 789,
			},
		};

		render(<NextEvent {...props} />);
	});

	it('renders', () => {
		expect(screen.getByText('Join us on', { exact: false })).toBeInTheDocument();
		expect(screen.getByText('2022-01-01', { exact: false })).toBeInTheDocument();
		expect(screen.getByText('The Best Event Ever!')).toBeInstanceOf(HTMLAnchorElement);
	});

	it('links to the event correctly', () => {
		expect(screen.getByRole('link')).toHaveAttribute('href', 'https://forums.vatusa.net/index.php?topic=456');
	});
});
