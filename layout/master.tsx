import { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useAppSettingsContext } from '../context/AppSettings';

interface IProps {
	children: React.ReactNode
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
		<div className="min-h-screen flex flex-col dark:text-white bg-slate-100 dark:bg-slate-900">
			<Header />
			<div className="flex-1">
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Master;
