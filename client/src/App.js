import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import HomePage from './HomePage';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className='container'>
       
        <Route path='/' exact component={HomePage} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/about' component={About} />
      </div>
    );
  }
}

export default App;
