import React from 'react';
import ReactDOM from 'react-dom';
import VHBox from '.';

it('renders box without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHBox />, div);
  ReactDOM.unmountComponentAtNode(div);
});
