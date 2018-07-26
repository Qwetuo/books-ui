import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Authors from '../components/Authors';
import Books from '../components/Books';
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6


it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot()
})

it('renders Authors', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Authors />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot()
})

it('renders Books', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Books />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot()
})

