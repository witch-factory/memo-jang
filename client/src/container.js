import styled, { css } from 'styled-components';
import { darken } from 'polished';

const FlexContainer = styled.div`
  display:flex;
`;

const ColumnContainer = styled(FlexContainer)`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  flex-direction: column;
  align-items: ${(props) => props.position || 'flex-start'};
`;

const RowContainer = styled(FlexContainer)`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  flex-direction: row;
  justify-content: ${(props) => props.position || 'flex-start'};;
`;

const NoteBasicBlock = styled.div`
  background: ${(props) => props.color || 'white'};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-size: 1rem;
`;

const NoteListButton = styled(NoteBasicBlock)`
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

export {
  FlexContainer, ColumnContainer, RowContainer, NoteBasicBlock, NoteListButton,
};
