import { render, screen } from '@testing-library/react';
import CardHeading from './CardHeading';

describe('CardHeading', () => {
	beforeEach(() => {
		render(<CardHeading>Test</CardHeading>);
	});

	it('renders', () => {
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});
