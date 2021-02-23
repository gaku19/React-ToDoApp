import React, { Component } from 'react'
import Todos from "./components/Todos"
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/layout/header";
import AddTodo from './components/AddToDo';
import About from './components/About';
// import uuid from "react-uuid";
import axios from 'axios';

export class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => { this.setState({ todos: res.data})})
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => 
      todo.id !== id 
    )] })
  }

  addTodo = (title) => {

    axios.post("https://jsonplaceholder.typicode.com/todos?_limit=10", {
      title, 
      completed: false
    })
      .then(res => { this.setState({todos: [...this.state.todos, res.data]})})
  }


  render() {
    return (
      <Router>
      <div className="app">
        <div className="container">
          <Header />
          <Route path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete}
              delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>

        </div>
      </div>
      </Router>
    )
  }
}

export default App

