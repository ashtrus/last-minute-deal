import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore, autoRehydrate } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import { AsyncStorage } from "react-native";
import rootReducer from "./rootReducer";

const persistVersion = 1;

const enhancers = [applyMiddleware(thunk), autoRehydrate()].filter(Boolean);

const store = createStore(rootReducer, composeWithDevTools(...enhancers));

const checkAndPersist = async () => {
  try {
    const deviceVersion = await AsyncStorage.getItem("persistVersion");

    if (persistVersion > Number(deviceVersion)) {
      const keys = await AsyncStorage.getAllKeys();
      const filteredKeys = keys.filter(item => item !== "reduxPersist:auth");
      filteredKeys && filteredKeys.length && AsyncStorage.multiRemove(filteredKeys);
    }

    await AsyncStorage.setItem("persistVersion", persistVersion.toString());
    await persistStore(store, {
      storage: AsyncStorage,
      debounce: 50
    });
  } catch (error) {
    console.error("Store: AsyncStorage error", error);
  }
};

checkAndPersist();

export default store;
