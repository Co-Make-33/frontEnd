import React from 'react';
import styled from 'styled-components';

const StyledSignUp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid black;
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
