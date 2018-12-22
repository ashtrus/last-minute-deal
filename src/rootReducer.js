import { combineReducers } from 'redux';
import { isAndroid } from 'src/common/styles';

import auth from './auth/auth.reducer';
import navigation from 'src/common/reducers/navigation.reducer';
import rootNavigation from 'src/common/reducers/rootNavigation.reducer';

const combinedReducers = combineReducers({
	auth,
	navigation,
	rootNavigation
});

export default function rootReducer(state, action) {
	try {
		// redux debugger does not work for android - remove false in the line below to show action and state in the console
		showActionState(state, action);
		return combinedReducers.apply(this, [state, action]);
	} catch (error) {
		throw error;
	}
}

function showActionState(state, action) {
	isAndroid() && console.log('### ', action, state);
}
