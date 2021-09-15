import styled from 'styled-components';

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

export {
  FlexContainer, ColumnContainer, RowContainer,
};
