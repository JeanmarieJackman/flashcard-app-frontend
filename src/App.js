import React, { Component} from 'react';
import './App.css';
import UsersContainer from './UsersContainer.js'

class App extends Component {

  render() {
    return (
      <div className="app">
        <h1>Learn in a Flash!</h1>
        <UsersContainer/>
      </div>
    );
  }
}

export default App;
