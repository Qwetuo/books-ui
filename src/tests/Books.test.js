import React from 'react';
import Books from '../components/Books';

import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

const renderer = new ShallowRenderer();
renderer.render(<Books />);

it('renders title', () => {
    let result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot()
})

it('renders title and booklist after the component mount', async () => {
    fetch.mockResponseOnce(
        JSON.stringify([
            {
                title: "book3",
                _id: "3"
            },
            {
                title: "book 4",
                _id: "4"
            }
        ])
    )
    const instance = renderer.getMountedInstance();
    await instance.componentDidMount();
    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot()
})