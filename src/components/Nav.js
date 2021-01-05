import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  color: #626262;
`

const StyledNavUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  margin-top: 20px;
  padding: 5px;
  width: 100%;
`;

function Nav(props) {
  return (
    <div>
      <StyledNavBar>
        <StyledNavUl>
          <Link to="/home">Home</Link>
          <Link to="/meettheteam">Meet the Team</Link>
          <Link to="/developers">Developers</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </StyledNavUl>
      </StyledNavBar>
    </div>
  );
}

export default Nav;
