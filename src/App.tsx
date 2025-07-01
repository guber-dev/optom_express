// import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Header } from './components/Header';
import { PriceList } from './components/PriceList';
import bg from './assets/BG.png';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;700&display=swap');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Golos Text', Arial, sans-serif;
    background: #f7f5f2;
  }
`;

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

function App() {
  return (
    <AppWrapper>
      <GlobalStyle />
      <Header />
      <PriceList />
    </AppWrapper>
  );
}

export default App;
