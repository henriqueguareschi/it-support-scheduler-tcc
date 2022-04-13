import React from 'react';
import Rotas from './Routes';
import GlobalStyles from './styles/GlobalStyles.ts';
import { UserAuthContextProvider } from './Context/UserAuthContext';

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <Rotas />
        <GlobalStyles />
      </UserAuthContextProvider>
    </>
  );
}
export default App;