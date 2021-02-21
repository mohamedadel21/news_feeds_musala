import AsyncStorage from '@react-native-community/async-storage';

import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reducers from '../Redux/reducers'

import {persistReducer,persistStore} from 'redux-persist';

const persistConfig={

    key:'root',
    storage:AsyncStorage,

}


const persistedReducer=persistReducer(persistConfig,reducers);

export const  store = createStore(
    persistedReducer,
    {},applyMiddleware(thunk),
    
);

export const persistedStore=persistStore(store)
persistedStore.purge()