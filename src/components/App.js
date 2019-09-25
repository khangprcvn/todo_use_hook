import React, { useReducer, createContext } from 'react';
import uuid from 'uuid/v4';

import Filter from './Filter';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import { TodoContext } from './todo-context';
import { filterReducer, todoReducer } from './reducers';

const initialTodos = [
  {
    id: uuid(),
    task: 'Learn React',
    complete: true
  },
  {
    id: uuid(),
    task: 'Learn Firebase',
    complete: true
  },
  {
    id: uuid(),
    task: 'Learn GraphQL',
    complete: false
  }
];

const App = () => {
  const [filter, dispatchFilter] = useReducer(filterReducer, 'ALL');
  const [todos, dispatchTodos] = useReducer(todoReducer, initialTodos);
  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') {
      return true;
    }
    if (filter === 'COMPLETE' && todo.complete) {
      return true;
    }
    if (filter === 'INCOMPLETE' && !todo.complete) {
      return true;
    }
    return false;
  });
  return (
    <div>
      <TodoContext.Provider value={dispatchTodos}>
        <Filter dispatch={dispatchFilter} />
        <TodoList todos={filteredTodos} />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
