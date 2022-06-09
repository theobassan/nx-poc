import React from 'react';
import { NavigationProvider, ThemeContextProvider } from '@copilot/providers';
import StatusBar from './StatusBar';

function App() {

  return (
    <ThemeContextProvider>
      <StatusBar />
      <NavigationProvider />
    </ThemeContextProvider>
  );
}

export default App;