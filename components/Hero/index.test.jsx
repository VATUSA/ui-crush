import { render, screen } from '@testing-library/react';
import Hero from '.';

describe('Hero', () => {
	beforeEach(() => {
		render(<Hero />);
	});

	it('renders', () => {
		expect(screen.getByText('Welcome to VATUSA')).toBeInTheDocument();
	});
});
