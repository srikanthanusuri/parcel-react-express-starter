import React from 'react';
import PropTypes from 'prop-types';

export const List = ({ todos }) => {
  return (
    <div>
      {
        todos.map((todo, index) => (
          <p key={`todo-${index}`}>
            {todo}
          </p>
        ))
      }
    </div>
  );
};

List.propTypes = {
  todos: PropTypes.array.isRequired,
};

List.defaultProps = {
  todos: [],
};
