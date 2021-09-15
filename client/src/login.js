import React from 'react';
import styled from 'styled-components';
import { ColumnContainer, RowContainer } from './container';
import { NoteListButton } from './component';

const LoginLogo = styled.h1`
  margin:5px 20px;
`;

const UserInput = styled.input`
  width:20rem;
  height:3rem;
  margin:5px 20px;
  font-size: 1.5rem;
`;

const UserInputLabel = styled.label`
  font-size: 1.5rem;
  margin:5px 20px;
  width:10rem;
`;

const LoginBackground = styled.div`
  background: white;
  height:100%;
  width:auto;
  display:flex;
  justify-content: center;
  flex-direction: column;
`;

const Login = () => (
  <ColumnContainer width="100%" height="100%" position="center">
    <LoginBackground>
      <LoginLogo>LOGIN</LoginLogo>
      <UserInputLabel htmlFor="username">Username</UserInputLabel>
      <UserInput type="text" name="username" id="username" placeholder="username" />
      <UserInputLabel>Password</UserInputLabel>
      <UserInput type="password" name="password" placeholder="password" />
      <RowContainer position="center">
        <NoteListButton color="#b197fc">로그인</NoteListButton>
        <NoteListButton color="#ff6b6b">회원가입</NoteListButton>
      </RowContainer>
    </LoginBackground>
  </ColumnContainer>
);

export default Login;
