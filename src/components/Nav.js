import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
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
  const {authorized, setAuthorized} = useContext(AuthContext);

  const handleClick = () => {
    setAuthorized(false)
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('authState')

  }

  return (
    <div>
      <StyledNavBar>
        <StyledNavUl>
          <Link to="/home">Home</Link>
          <Link to="/meettheteam">Meet the Team</Link>
          <Link to="/developers">Developers</Link>
          {authorized ? <Link to='/myprofile'>Profile</Link> : <></>}
          {authorized ? <Link to='/issues'>Community Issues</Link> : <></>}
          {authorized ?  <Link onClick={handleClick}>Logout</Link> : <Link to="/login">Login</Link>}
          {authorized ? <></> : <Link to="/signup">Sign Up</Link>}
        </StyledNavUl>
      </StyledNavBar>
    </div>
  );
}

export default Nav;
