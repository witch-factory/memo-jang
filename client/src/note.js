import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display:flex;
  margin:5px;
`;

const NoteContainer = styled(FlexContainer)`
  height:100%;
  width:100%;
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

const NoteEditBlock = styled.textarea`
  width:100%;
  height:90%;
  border: 1px solid black;
  border-radius: 7px;
  overflow:auto;
  white-space: pre;
  font-size:12pt;
  flex:1;
  background-attachment: local;
  background-image:
    linear-gradient(to right, white 10px, transparent 10px),
    linear-gradient(to left, white 10px, transparent 10px),
    repeating-linear-gradient(white, white 30px, #ccc 30px, #ccc 31px, white 31px);
  line-height: 31px;
  padding: 8px 10px;
  resize:none;
`;

const Note = () => (
  <>
    <FlexContainer>
      <NoteListButton color="#b197fc">노트 추가</NoteListButton>
      <NoteListButton color="#ff6b6b">노트 삭제</NoteListButton>
    </FlexContainer>
    <NoteContainer>
      <div>
        <NoteListBlock />
        <NoteListBlock />
        <NoteListBlock />
      </div>
      <NoteEditBlock />
    </NoteContainer>
  </>
);

export default Note;
