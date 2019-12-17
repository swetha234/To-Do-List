import React, { Component } from 'react';
import Todos from './Components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Clean the vessels',
        completed: false
      },
      {
        id: 3,
        title: 'Clean Bathroom',
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className='App'>
        <Todos />
      </div>
    );
  }
}

export default App;