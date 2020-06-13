import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Adder = ({ addHandler }) => {
  const [todo, setTodo] = useState('');
  const changeHandler = (event) => setTodo(event.target.value);
  const clickHandler = () => {
    addHandler(todo);
    setTodo('');
  };

  return (
    <div>
      <p>
        <span>Add Todo:</span>
        <input tyoe="text" onChange={changeHandler} value={todo} />
      </p>
      <p>
        <button type="button" onClick={clickHandler}>Add Todo</button>
      </p>
    </div>
  );
};

Adder.propTypes = {
  addHandler: PropTypes.func.isRequired,
};
