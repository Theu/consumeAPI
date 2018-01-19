import React from 'react';
import ReactDOM from 'react-dom';
import ShowTodos from './ShowTodos';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ShowTodos />, div);
  ReactDOM.unmountComponentAtNode(div);
});
