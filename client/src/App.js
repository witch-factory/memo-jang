import React from 'react';
// eslint-disable-next-line import/extensions
import { Route } from 'react-router-dom';
import Note from './note';

function App() {
  return (
    <div>
      <Route path="/" component={Note} />
    </div>
  );
}

export default App;
