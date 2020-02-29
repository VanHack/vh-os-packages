import React from 'react';
import ReactDOM from 'react-dom';
import VHIconTitleList from '.';

const items = [
  { label: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }
];

it('renders IconTitleList component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VHIconTitleList items={items} data="vanhack" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
