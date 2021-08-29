import React from 'react';
import { createGlobalStyle } from 'styled-components';

const NoteGlobalStyle = createGlobalStyle`
  body{
    color:#99e9f2
  }
`;

const Note = () => (
  <NoteGlobalStyle>
    <h1>안녕하세요</h1>
  </NoteGlobalStyle>
);

export default Note;
