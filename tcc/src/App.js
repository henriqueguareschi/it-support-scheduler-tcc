import React from 'react';
import Rotas from './Routes';
import GlobalStyles from './styles/GlobalStyles.ts';
import HomeNavBar from './Components/HomeNavbar'
import { UserAuthContextProvider } from './Context/UserAuthContext';

function App() {
  return (
    <>
      <UserAuthContextProvider>
        <HomeNavBar />
        <Rotas />
        <GlobalStyles />
      </UserAuthContextProvider>
    </>
  );
}
export default App;