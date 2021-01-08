import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import jwt_decode from "jwt-decode"


import Home from './components/Home';
import Nav from './components/Nav';
import Developers from './components/Developers';
import MeetTheTeam from './components/MeetTheTeam';
import Signup from './components/Signup';
import Login from './components/Login';
import MyProfile from './components/MyProfile';

import PrivateRoute from './utils/PrivateRoute';
import IssuesPage from './components/IssuesPage';

import {AuthContext} from './contexts/AuthContext';
import {UserContext} from './contexts/UserContext';
import {ProfileIssuesContext} from './contexts/ProfileIssuesContext';

export const LoginContext = createContext();

function App() {
  const [userIssues, setUserIssues] = useState([])
  const [authorized, setAuthorized] = useState(sessionStorage.getItem('authState'))
  const [userInfo] = useState( sessionStorage.getItem('token') ? jwt_decode(sessionStorage.getItem('token')) : {})

  return (
    <div>
      <Router>
        <AuthContext.Provider value = {{authorized, setAuthorized}}>
        <Nav />
        <UserContext.Provider value = {{userInfo}}>
        <Route exact path="/">
          <Redirect to={{ pathname: '/home' }} />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/meettheteam" component={MeetTheTeam} />
        <Route path="/developers" component={Developers} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/issues" component={IssuesPage} />
        <ProfileIssuesContext.Provider value = {{userIssues, setUserIssues}}>
          <PrivateRoute path='/myprofile' component={MyProfile}/>
        </ProfileIssuesContext.Provider>
        </UserContext.Provider>
        </AuthContext.Provider>
      </Router>
    </div>
  );
}

export default App;
