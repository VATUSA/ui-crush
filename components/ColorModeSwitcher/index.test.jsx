import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ColorModeSwitcher from '.';
import { AppSettingsProvider } from '../../context/AppSettings';

describe('ColorModeSwitcher', () => {
	beforeEach(() => {
		render(
			<AppSettingsProvider>
				<ColorModeSwitcher />
			</AppSettingsProvider>,
		);
	});

	it('renders', () => {
		expect(screen.getByRole('button')).toBeInTheDocument();
	});

	it('defaults to light mode', () => {
		const button = screen.getByRole('button');
		expect(button).toHaveClass('light');
	});

	it('toggles to dark mode', async () => {
		const user = userEvent.setup();
		const button = screen.getByRole('button');
		await user.click(button);
		expect(button).toHaveClass('dark');
	});
});
