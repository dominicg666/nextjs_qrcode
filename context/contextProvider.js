import React from 'react';

import AppContextProvider from './app';
const contextProviders = [
  AppContextProvider,
];

const MainContextProvider = ({ children }) => {
  return contextProviders.reduceRight((memo, ContextProvider) => {
    return <ContextProvider>{memo}</ContextProvider>;
  }, children);
};

export default MainContextProvider;