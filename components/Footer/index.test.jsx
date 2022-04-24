import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
	beforeEach(() => {
		render(<Footer />);
	});

	it('renders', () => {
		expect(screen.getByText('VATSIM United States Division', { exact: false })).toBeInTheDocument();
	});

	it('shows the current year in the copyright', () => {
		expect(screen.getByText(new Date().getFullYear(), { exact: false })).toBeInTheDocument();
	});

	it('shows the flags', () => {
		expect(screen.getByText('LGBTQIA+', { exact: false })).toBeInTheDocument();
		expect(screen.getByTestId('pride_flag')).toBeInTheDocument();
		expect(screen.getByTestId('bi_flag')).toBeInTheDocument();
		expect(screen.getByTestId('trans_flag')).toBeInTheDocument();
	});
});
