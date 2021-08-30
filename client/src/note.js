import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display:flex;
  margin:5px;
`;

const NoteBasicBlock = styled.div`
  background: ${(props) => props.color || 'white'};
  color:white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size:1rem;
  margin:3px;
`;

const NoteListButton = styled(NoteBasicBlock)`
  width:8rem;
  height:2.5rem;
`;

const NoteListBlock = styled(NoteBasicBlock)`
  width:18rem;
  height:2.5rem;
  border:solid 1px #868e96;
  background:#f1f3f5;
`;

const Note = () => (
  <>
    <FlexContainer>
      <NoteListButton color="#b197fc">노트 추가</NoteListButton>
      <NoteListButton color="#ff6b6b">노트 삭제</NoteListButton>
    </FlexContainer>
    <NoteListBlock />
    <NoteListBlock />
    <NoteListBlock />
  </>
);

export default Note;
