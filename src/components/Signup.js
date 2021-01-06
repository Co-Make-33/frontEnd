import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const SignUpGlobal = createGlobalStyle`
* {
    color:white;
}
body {
    background-color:#242943;
}
`;

const Heading = styled.h2`
  text-align: center;
  border-bottom: 2px solid white;
  width: 90%;
  margin: 2% auto;
  padding: 1% 0;
`;

const StyledSignUp = styled.div`
  display: flex;
  margin: 0 auto;
  width: 60%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 70%;
  margin: 10% auto;
  background-color: #8d82c4;
  border-radius: 5px;
  box-shadow: 
    /* top */ rgba(255, 255, 255, 0.15) 0px -6px 10px,
    /* right */ rgba(255, 255, 255, 0.15) 6px 0px 10px,
    /* bottom */ rgba(255, 255, 255, 0.15) 0px 6px 10px,
    /* left */ rgba(255, 255, 255, 0.15) -6px 0px 10px;
  border: 1px solid mintcream;

  input {
    margin: 4% auto;
    width: 80%;
  }
`;

function Signup() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  // const handleChange = (event) =>{
  //   const { name }
  // }

  return (
    <>
      <SignUpGlobal />
      <Heading>Sign Up</Heading>
      <StyledSignUp>
        <StyledForm onSubmit={onSubmit}>
          <input type="email" name="email" placeholder="Email"></input>
          <input type="text" name="username" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <input
            type="submit"
            // disabled={disabled}
            // onChange={handleChange}
          ></input>
        </StyledForm>
      </StyledSignUp>
    </>
  );
}

export default Signup;
