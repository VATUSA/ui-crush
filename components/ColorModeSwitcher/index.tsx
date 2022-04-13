import { MdModeNight, MdWbSunny } from 'react-icons/md';
import { useAppSettingsContext } from '../../context/AppSettings';
import { DispatchAction, TColorMode } from '../../context/AppSettings/reducer';

const ColorModeSwitcher = () => {
	const { state, dispatch } = useAppSettingsContext();

	const toggleColorMode = () => {
		const newColorMode: TColorMode = state.colorMode === 'light'
			? 'dark'
			: 'light';
		dispatch({
			type: DispatchAction.SET_COLOR_MODE,
			payload: newColorMode,
		});
	};

	return (
		<button onClick={toggleColorMode} type="button">
			{state.colorMode === 'light' ? <MdWbSunny className="h-8 w-8" /> : <MdModeNight className="h-8 w-8" />}
		</button>
	);
};

export default ColorModeSwitcher;
