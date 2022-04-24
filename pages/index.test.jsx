import { render, screen } from '@testing-library/react';
import Home, { getServerSideProps } from '.';

describe('Home', () => {
	beforeEach(() => {
		const props = {
			events: {
				data: [
					{
						id_event: 1,
						start_date: '2022-01-01',
						end_date: '2022-01-02',
						id_board: 123,
						id_topic: 456,
						title: 'The Best Event Ever!',
						id_member: 789,
					},
				],
			},
		};
		render(<Home {...props} />);
	});

	it('renders', () => {
		expect(screen.getByText('About Us')).toBeInTheDocument();
	});
});

describe('Home/getServerSideProps', () => {
	beforeEach(() => {
		window.fetch = jest.fn(() => Promise.resolve({
			json: () => Promise.resolve({
				events: {
					data: [
						{
							id_event: 1,
							start_date: '2022-01-01',
							end_date: '2022-01-02',
							id_board: 123,
							id_topic: 456,
							title: 'The Best Event Ever!',
							id_member: 789,
						},
					],
				},
			}),
		}));
	});

	it('fetches the events', async () => {
		const response = await getServerSideProps();
		expect(window.fetch).toHaveBeenCalledWith('https://api.vatusa.net/v2/public/events/1');
		expect(response.props.events.events.data).toEqual([
			{
				id_event: 1,
				start_date: '2022-01-01',
				end_date: '2022-01-02',
				id_board: 123,
				id_topic: 456,
				title: 'The Best Event Ever!',
				id_member: 789,
			},
		]);
	});
});
