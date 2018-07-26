import React from 'react';
import Authors from '../components/Authors';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

const renderer = new ShallowRenderer();
renderer.render(<Authors />);

it('renders title', () => {
    let result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot()
})

it('renders title and authors after the component mount', async () => {
    fetch.mockResponseOnce(
        JSON.stringify([
            {
                name: "author1",
                age: 1,
                _id: "100"
            },
            {
                name: "author 2",
                age: 2,
                _id: "2"
            }
        ])
    )
    const instance = renderer.getMountedInstance();
    await instance.componentDidMount();
    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot()
})