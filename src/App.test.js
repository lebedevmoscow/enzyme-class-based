import React from 'react';
import {shallow} from 'enzyme'
import App from './App';

test('renders without error', () => {
  const app = shallow(<App />);
  expect(app.length).not.toBe(0)
});
