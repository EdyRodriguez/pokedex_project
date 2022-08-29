import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from './AutoComplete';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutoComplete />, div);
  ReactDOM.unmountComponentAtNode(div);
});