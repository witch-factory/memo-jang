import React from 'react';
import { Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Note from './note';

const NoteGlobalStyle = createGlobalStyle`
  body{
    background:#e3fafc;
  }
`;

function App() {
  return (
    <div>
      <NoteGlobalStyle />
      <Route path="/" component={Note} />
    </div>
  );
}

export default App;
