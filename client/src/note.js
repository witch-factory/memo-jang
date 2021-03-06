import React from 'react';
import styled from 'styled-components';
import {
  ColumnContainer, RowContainer,
} from './container';
import {
  NoteBasicBlock, NoteListButton,
} from './component';

const NoteListBlock = styled(NoteBasicBlock)`
  width: 18rem;
  height: 2.5rem;
  border: solid 1px #868e96;
  background: #f1f3f5;
  margin: 3px;
`;

const NoteEditBlock = styled.textarea`
  width: 95%;
  height: 95%;
  border: 1px solid black;
  border-radius: 10px;
  overflow: auto;
  white-space: pre;
  font-size: 12pt;
  display: flex;
  background-attachment: local;
  background-image: linear-gradient(to right, white 10px, transparent 10px),
  linear-gradient(to left, white 10px, transparent 10px),
  repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 31px;
  padding: 8px 10px;
  resize: none;
`;

const Note = () => (
  <ColumnContainer width="100%" height="100%">
    <RowContainer>
      <NoteListButton color="#b197fc">노트 추가</NoteListButton>
      <NoteListButton color="#ff6b6b">노트 삭제</NoteListButton>
    </RowContainer>
    <RowContainer width="100%" height="100%">
      <ColumnContainer>
        <NoteListBlock />
        <NoteListBlock />
        <NoteListBlock />
      </ColumnContainer>
      <ColumnContainer width="100%" height="100%">
        <NoteEditBlock />
      </ColumnContainer>
    </RowContainer>
  </ColumnContainer>
);

export default Note;
