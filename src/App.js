import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './components/Home';
import Nav from './components/Nav';
import Developers from './components/Developers';
import MeetTheTeam from './components/MeetTheTeam';
import Signup from './components/Signup';
import Login from './components/Login';

import PrivateRoute from './utils/PrivateRoute';
import IssuesPage from './components/IssuesPage';
import AddIssue from './components/AddIssue';
import CreateProfile from './components/CreateProfile';

export const LoginContext = createContext();

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path="/">
          <Redirect to={{ pathname: '/home' }} />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/meettheteam" component={MeetTheTeam} />
        <Route path="/developers" component={Developers} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/addissue" component={AddIssue} />
        <PrivateRoute path="/issues" component={IssuesPage} />
        <Route path="/createprofile" component={CreateProfile} />
      </Router>
    </div>
  );
}

export default App;
