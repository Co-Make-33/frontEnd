import React from 'react';
import styled from 'styled-components';

const StyledSignUp = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  /* color: white; */
  border: 2px solid black; /* Don't forget to delete this */

  body {
    background-color: #242943;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 70%;
    margin: 10% auto;
    background-color: #8d82c4;
    border-radius: 2%;
    border: 1px solid blue; /* Don't forget to delete this */

    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.3) 0px -12px 30px, rgba(0, 0, 0, 0.3) 0px 4px 6px,
      rgba(0, 0, 0, 0.35) 0px 12px 13px, rgba(0, 0, 0, 0.2) 0px -3px 5px; */

    /* box-shadow: rgba(136, 165, 191, 0.2) 6px 2px 16px 0px,
      rgba(255, 255, 255, 0.5) -6px -2px 16px 0px; */

    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
      rgba(0, 0, 0, 0.05) 0px 5px 10px;
  }

  input {
    margin: 3% auto;
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
    <StyledSignUp>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email"></input>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <input
          type="submit"
          // disabled={disabled}
          // onChange={handleChange}
        ></input>
      </form>
    </StyledSignUp>
  );
}

export default Signup;
