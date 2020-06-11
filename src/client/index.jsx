import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

function App() {
    return (
    <div className="heading">
        <h1>Todos</h1>
    </div>
    );
}

const target = document.querySelector('#root');

console.log('Foo');

ReactDOM.render(<App />, target);