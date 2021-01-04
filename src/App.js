import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


import Home from './components/Home';
import Nav from './components/Nav';
import Developers from './components/Developers';
import MeetTheTeam from './components/MeetTheTeam';
import Signup from './components/MeetTheTeam';
import Login from './components/Login';
import CreateProfile from './components/CreateProfile';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Route exact path='/'>
          <Redirect to={{ pathname: '/home'}}/>
        </Route>
        <Route path='/home' component={Home}/>
        <Route path='/meettheteam' component={MeetTheTeam}/>
        <Route path='/developers' component={Developers}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/createprofile' component={CreateProfile}/>
      </Router>
    </div>
  );
}

export default App;



