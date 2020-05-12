import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar.js'
import Alert from './components/layout/Alert.js'
import User from './components/users/User.js'
import About from './components/pages/About.js'
import Home from  './components/pages/Home.js'
import NotFound from  './components/pages/NotFound.js'
import GithubState from './context/github/githubState.js'
import AlertState from './context/alert/alertState.js'

const App = () => {
    return (
      <GithubState>
      <AlertState>
      <Router>
      <div className="App">
      <Navbar/>
      <div className='container'>
      <Alert />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/user/:login' component={User}/>
        <Route component={NotFound} />
      </Switch>
      </div>
      </div>
      </Router>
      </AlertState>
      </GithubState>
    );
}

export default App;

//We write states like this in case of classes
// state = {
//   users: [],
//   user: {},
//   repos: [],
//   loading: false,
//   alert: null
// }
