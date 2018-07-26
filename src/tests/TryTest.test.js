import React from 'react';
import TryTest from '../components/TryTest';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

const renderer = new ShallowRenderer();
renderer.render(<TryTest />);
const result = renderer.getRenderOutput();

it('renders without crashing', () => {
    expect(result).toMatchSnapshot()
    // expect(result.type).toBe('div');
    // expect(result.props.children).toEqual("I am a test file")
})
