import React, { useState, useContext } from 'react';
import uuid from 'uuid/v4';

import { TodoContext } from './todo-context';

const AddTodo = () => {
  const dispatch = useContext(TodoContext);
  const [task, setTask] = useState('');
  const handleSubmit = event => {
    if (task) {
      dispatch({ type: 'ADD_TODO', task, id: uuid() });
    }
    setTask('');
    event.preventDefault();
  };
  const handleChange = event => setTask(event.target.value);
  return (
    <form onSubmit={handleSubmit} className="form-group">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
