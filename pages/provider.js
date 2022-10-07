import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store, { persistor } from '../redux';
import ContextProvider from '../context/contextProvider';
import { PersistGate } from 'redux-persist/integration/react';
const Provider = props => {
  const { children } = props;


  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <ContextProvider>
          {children}
        </ContextProvider>
      </PersistGate>
    </ReduxProvider>
  );
};





export default Provider;