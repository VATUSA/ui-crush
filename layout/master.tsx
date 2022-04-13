import { useEffect } from 'react';
import Header from '../components/Header';
import { useAppSettingsContext } from '../context/AppSettings';

interface IProps {
	children: React.ReactChild
}

const Master = ({ children }: IProps) => {
	const { state } = useAppSettingsContext();

	useEffect(() => {
		const root = document.documentElement;
		root.classList.remove('dark');
		if (state.colorMode === 'dark') {
			root.classList.add('dark');
		}
	}, [state.colorMode]);

	return (
		<div className="min-h-screen dark:text-white bg-gradient-to-b from-vatusa-sky-300 to-vatusa-sky-100 dark:from-vatusa-blue-700 dark:to-[#29080C]">
			<Header />
			{children}
		</div>
	);
};

export default Master;
