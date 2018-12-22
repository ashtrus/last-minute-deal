import { applyMiddleware, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AsyncStorage } from 'react-native';
import rootReducer from './rootReducer';

const persistVersion = 11;

const enhancers = [applyMiddleware(thunk), autoRehydrate()].filter(Boolean);

const store = createStore(rootReducer, composeWithDevTools(...enhancers));
checkAndPersist();
export default store;

function checkAndPersist() {
	AsyncStorage.getItem('persistVersion')
		.then(deviceVersion => {
			if (persistVersion > Number(deviceVersion)) {
				return AsyncStorage.getAllKeys()
					.then(keys => keys.filter(item => item !== 'reduxPersist:auth'))
					.then(keys => keys && keys.length && AsyncStorage.multiRemove(keys));
			}
		})
		.then(() =>
			AsyncStorage.setItem('persistVersion', persistVersion.toString())
		)
		.catch(error => console.warn('Store: Checking version error', error))
		.then(
			() =>
				new Promise(resolve =>
					persistStore(
						store,
						{
							storage: AsyncStorage,
							debounce: 50
						},
						resolve
					)
				)
		)
		.catch(error => console.warn('Store: persisting error', error));
}
