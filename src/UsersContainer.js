import React, { Component} from 'react';
import './App.css';
import CreateUser from './CreateUser.js';

class UsersContainer extends React.Component {

  state = {
    usersArray: [],
    clicked: false
  }

  clickHandler = () => {
    this.setState((previousState) => ({clicked: !previousState.clicked}))
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    // .then(data => console.log(data))
    .then(data => this.setState({ usersArray: data}))
  }

  createUserHandler = (obj) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(obj => this.setState({ usersArray: [...this.state.usersArray, obj]}))
  }

  render() {
    console.log(this.state.usersArray)
    return (
      <div className="UsersContainer">
        <CreateUser submitHandler={this.createUserHandler} />
      
      </div>
    );
  }
}

export default UsersContainer;
