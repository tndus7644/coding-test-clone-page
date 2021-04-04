import {createStore} from "redux";
import reducer from './reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:'List',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer)

export default function configureStore(){
    const store = createStore(persistedReducer, composeWithDevTools());
    const persistor = persistStore(store);
    return {store, persistor}
}
