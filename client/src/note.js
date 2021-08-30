import React from 'react';
import { createGlobalStyle } from 'styled-components';

const NoteGlobalStyle = createGlobalStyle`
  body{
    background:#e3fafc
  }
`;

const Note = () => (
  <>
    <NoteGlobalStyle />
    <h1>안녕하세요</h1>
  </>
);

export default Note;
