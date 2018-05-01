import React from 'react';
import ReactDOM from 'react-dom';
import TmnTracker from '../TmnTracker';
import { MemoryRouter } from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter>
      <TmnTracker />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
