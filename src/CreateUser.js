import React, { Component } from "react";
import "./App.css";



class CreateUser extends Component {

    state = {
        name: "",
        age: ""
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    submitHandler = (e) => {
        alert('Welcome' + this.state.name)
        e.preventDefault()
        this.props.submitHandler(this.state)
        this.setState({
            name: "",
            age: ""
        })
    }
    
    render() {
    return (
        <>
        <h2>Sign Up</h2>
        <p>Create a User Name</p>
        <form onSubmit={this.submitHandler}>
        <input type="text" name="name" placeholder="Create a User Name" value={this.state.name} onChange={this.changeHandler} />
        <input type="text" name="age" placeholder="Enter your age" value={this.state.age} onChange={this.changeHandler} />
        <button  onClick={this.props.clickHandler}>Submit</button>
        </form>
        </>
        )
    }
}

export default CreateUser;