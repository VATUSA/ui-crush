/* eslint-disable react/jsx-no-constructed-context-values */
import {
	createContext, useEffect, useReducer, Dispatch, useContext,
} from 'react';
import AppSettingsReducer, {
	IAppSettings, TColorMode, DispatchAction, Action,
} from './reducer';

interface IProps {
	children: React.ReactChild
}

interface IAppSettingsStore {
	state: IAppSettings
	dispatch: Dispatch<Action>
}

const initialState: IAppSettings = {
	colorMode: 'light',
};

export const AppSettingsContext = createContext<IAppSettingsStore>({
	state: initialState,
	dispatch: () => {},
});

export const useAppSettingsContext = () => useContext(AppSettingsContext);

export const AppSettingsProvider = ({ children }: IProps) => {
	const [state, dispatch] = useReducer(AppSettingsReducer, initialState);

	useEffect(() => {
		const savedAppSettings = localStorage.getItem('appSettings');
		if (savedAppSettings) {
			const parsedAppSettings = JSON.parse(savedAppSettings);
			dispatch({
				type: DispatchAction.LOAD_APP_SETTINGS,
				payload: parsedAppSettings,
			});
		}
	}, []);

	return (
		<AppSettingsContext.Provider value={{ state, dispatch }}>
			{children}
		</AppSettingsContext.Provider>
	);
};
