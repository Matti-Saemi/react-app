import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
