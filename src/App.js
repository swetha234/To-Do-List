import React, { Component } from 'react';
import Header from './Components/layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Clean the vessels',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Clean Bathroom',
        completed: false
      }
    ]
  };

  //Toggle Completed
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  //Delete Todo

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //add Todo
  addToDo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className='App'>
        <div className='container'>
          <Header />
          <AddTodo addToDo={this.addToDo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
