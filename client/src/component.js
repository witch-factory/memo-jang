import styled, { css } from 'styled-components';
import { darken } from 'polished';

const NoteBasicBlock = styled.div`
  background: ${(props) => props.color || 'white'};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1rem;
`;

const NoteListButton = styled.button`
  background: ${(props) => props.color || 'white'};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 1rem;
  width: 8rem;
  height: 2.5rem;
  margin: 5px;
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

export { NoteListButton, NoteBasicBlock };
