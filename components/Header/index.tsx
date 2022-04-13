import Image from 'next/image';
import { useAppSettingsContext } from '../../context/AppSettings';
import ColorModeSwitcher from '../ColorModeSwitcher';

const Header = () => {
	const { state } = useAppSettingsContext();

	const logo = state.colorMode === 'light'
		? '/images/logo_full.png'
		: '/images/logo_full_alt2.png';

	return (
		<header>
			<div className="bg-slate-100 dark:bg-slate-900">
				<div className="container mx-auto flex items-center p-4">
					<div className="relative h-16 w-60">
						<Image src={logo} alt="" layout="fill" objectFit="cover" />
					</div>
					<span className="ml-auto" />
					<ColorModeSwitcher />
					<span className="ml-4">Your Name Here</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
