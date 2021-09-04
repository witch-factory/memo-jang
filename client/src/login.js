import React from 'react';
import styled from 'styled-components';
import { ColumnContainer } from './container';

const UserInput = styled.input`
  width:20rem;
  height:3rem;
  margin:5px;
  font-size: 1.5rem;
`;

const Login = () => (
  <ColumnContainer>
    <UserInput type="text" name="username" placeholder="username" />
    <br />
    <UserInput type="password" name="password" placeholder="password" />
  </ColumnContainer>
);

export default Login;
