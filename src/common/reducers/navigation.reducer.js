import { REHYDRATE } from 'redux-persist/constants';

export default function navigation(state = {}, action) {
	switch (action.type) {
		case REHYDRATE:
			return checkLoadComplete({
				...state,
				storageLoaded: true
			});
		// case SET_API_HOST:
		// 	return checkLoadComplete({
		// 		...state,
		// 		apiHostLoaded: true
		// 	});
		default:
			return state;
	}
}

function checkLoadComplete(state) {
	return {
		...state,
		loadComplete: state.storageLoaded
		// loadComplete: state.storageLoaded && state.apiHostLoaded
	};
}
