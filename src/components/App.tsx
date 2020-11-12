import React from 'react';
import '../styles/App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

/**
 * Represents the App,
 * randers the TodoList and the AddTodo components
 */
function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
        <AddTodo />
      </header>
    </div>
  );
}

export default App;
