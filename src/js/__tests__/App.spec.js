import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/App';
import { MemoryRouter } from 'react-router';

jest.mock('polished');

it('renders without crashing', () => {
  const div = document.createElement('div');
  const mockStore =  {
    getState() {},
    subscribe() {},
    dispatch() {},
  }
  ReactDOM.render(
    <MemoryRouter>
      <App store={mockStore} />
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
