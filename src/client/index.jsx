import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { List, Adder } from './Todos';

import './style.scss';

/**
 * Entry point of the application
 *
 * @return {object} Application
 */
function App() {
  const [todos, setTodos] = useState([]);
  const addHandler = (todo) => setTodos([...todos, todo]
      .reduce(
          (unique, item) => unique
              .includes(item) ? unique : [...unique, item], [],
      ),
  );
  return (
    <div className="heading">
      <h1>Todos</h1>
      <Adder addHandler={addHandler}/>
      <List todos={todos} />
    </div>
  );
}

const target = document.querySelector('#root');

ReactDOM.render(<App />, target);
