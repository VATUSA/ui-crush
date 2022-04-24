import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
	beforeEach(() => {
		render(<Header />);
	});

	it('renders', () => {
		expect(screen.getByAltText('VATUSA Logo')).toBeInTheDocument();
	});
});
