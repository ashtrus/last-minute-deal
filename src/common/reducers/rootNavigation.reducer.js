import { types, ROOTS } from '../actions/rootNavigation.actions';
import { RESET_LOCAL_STORE } from '../../auth/auth.actions';

const INITIAL_STATE = {
	root: ROOTS.AUTH
};

export default function rootNavigation(state = INITIAL_STATE, action) {
	switch (action.type) {
		case RESET_LOCAL_STORE:
			return {
				...state,
				root: ROOTS.AUTH
			};
		case types.CHANGE_ROOT:
			return {
				...state,
				root: action.payload,
				currentRoot: action.payload
			};

		default:
			return state;
	}
}
