import React from 'react';
import styled from 'styled-components';
import { ColumnContainer } from './container';

const UserInput = styled.input`
  width:20rem;
  height:3rem;
  margin:5px;
  font-size: 1.5rem;
`;

const UserInputLabel = styled.label`
  font-size: 1.5rem;
`;

const Login = () => (
  <ColumnContainer width="100%" position="center">
    <UserInputLabel htmlFor="username">
      Username
      <UserInput type="text" name="username" id="username" placeholder="username" />
    </UserInputLabel>
    <UserInputLabel>
      Password
      <UserInput type="password" name="password" placeholder="password" />
    </UserInputLabel>
  </ColumnContainer>
);

export default Login;
