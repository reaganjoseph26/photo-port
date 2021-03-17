import React from 'react';
//imported functions from the testing library
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../about/index'
const { asFragment } = render(<About />);


//afterEach is a global funciton fron jest
//ensures that after each test their is no left over memory that gives false results
afterEach(cleanup);

describe('About component', () => {
    // First Test
  it('renders', () => {
    render(<About />);
  });

  // Second Test
  it('matches snapshot DOM node structure', () => {
    // render About
    expect(asFragment()).toMatchSnapshot();

  });
})
