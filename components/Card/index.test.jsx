import { render, screen } from '@testing-library/react';
import Card from '.';

describe('Card', () => {
	beforeEach(() => {
		render(<Card>Test</Card>);
	});

	it('renders', () => {
		expect(screen.getByText('Test')).toBeInTheDocument();
	});
});
