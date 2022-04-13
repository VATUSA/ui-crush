export enum DispatchAction {
	SET_COLOR_MODE = 'SET_COLOR_MODE',
	LOAD_APP_SETTINGS = 'LOAD_APP_SETTINGS',
}

export interface Action {
	type: DispatchAction;
	payload: TColorMode | IAppSettings;
}

export interface IAppSettings {
	colorMode: TColorMode,
}

export type TColorMode = 'light' | 'dark';

export default (state: IAppSettings, action: Action) => {
	let newState = { ...state };

	switch (action.type) {
		case DispatchAction.SET_COLOR_MODE:
			newState.colorMode = action.payload as TColorMode;
			break;
		case DispatchAction.LOAD_APP_SETTINGS:
			newState = action.payload as IAppSettings;
			break;
		default:
			break;
	}

	localStorage.setItem('appSettings', JSON.stringify(newState));

	return newState;
};
