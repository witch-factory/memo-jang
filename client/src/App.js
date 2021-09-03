import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Note from './note';

const NoteGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    height: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    background: #e3fafc;
  }
`;

function App() {
  return (
    <>
      <NoteGlobalStyle />
      <Route path="/" component={Note} />
    </>
  );
}

export default App;
