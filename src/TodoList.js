import React from 'react';

function TodoList({ todos, onTaskStart, onDelete }) {
  return (
    <div className="column">
      <h2>TODO</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <strong>{todo.name}</strong>
            <p>{todo.description}</p>
            <button onClick={() => onTaskStart(index)}>Start</button>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
