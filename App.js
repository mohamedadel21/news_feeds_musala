import React ,{useEffect}from 'react';
import Tabs from './src/Navigation/Navigator';
import {Provider} from 'react-redux'
import {store,persistedStore} from './src/store';
import {PersistGate} from 'redux-persist/integration/react'
export default function App() {
  
    return (
      <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <Tabs  />
        
      </PersistGate>
      </Provider>
    );
  
}