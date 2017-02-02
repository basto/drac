import React from 'react';
import TodosList from './todos-list'
const todos = [
  {
    task: 'make React',
    isCompleted: false
  },
  {
    task: 'do laundry',
    isCompleted: true
  }
]

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1> React Todos App </h1>
        <TodosList />
      </div>
    );
  }
}
