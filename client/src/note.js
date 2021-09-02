import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const FlexContainer = styled.div`
  display:flex;
`;

const ColumnContainer = styled(FlexContainer)`
  flex-direction: column;
`;

const RowContainer = styled(FlexContainer)`
  height:100%;
  width:100%;
  flex-direction: row;
`;

const NoteBasicBlock = styled.div`
  background: ${(props) => props.color || 'white'};
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size:1rem;
`;

const NoteListButton = styled(NoteBasicBlock)`
  width:8rem;
  height:2.5rem;
  margin:5px;
  ${(props) => {
    const selected = props.color;
    return css`
      &:hover {
        background: ${darken(0.1, selected)};
      }
    `;
  }
}
`;

const NoteListBlock = styled(NoteBasicBlock)`
  width:18rem;
  height:2.5rem;
  border:solid 1px #868e96;
  background:#f1f3f5;
  margin:3px;
`;

const NoteEditBlock = styled.textarea`
  width:100%;
  height:100%;
  border: 1px solid black;
  border-radius: 7px;
  overflow:auto;
  white-space: pre;
  font-size:12pt;
  display:flex;
  background-attachment: local;
  background-image:
    linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 31px;
  padding: 8px 10px;
  margin:3px;
  resize:none;
`;

const Note = () => (
  <ColumnContainer>
    <RowContainer>
      <NoteListButton color="#b197fc">노트 추가</NoteListButton>
      <NoteListButton color="#ff6b6b">노트 삭제</NoteListButton>
    </RowContainer>
    <RowContainer>
      <ColumnContainer>
        <NoteListBlock />
        <NoteListBlock />
        <NoteListBlock />
      </ColumnContainer>
      <NoteEditBlock />
    </RowContainer>
  </ColumnContainer>
);

export default Note;
