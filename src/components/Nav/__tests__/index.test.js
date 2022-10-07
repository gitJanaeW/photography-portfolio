import React from 'react';
// render: will render component's in Jest's simulated DOM for testing
// cleanup: used to remove components from the DOM to prevent corrupted tests results
import {render, cleanup} from '@testing-library/react';
// offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
})

describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})

describe('links are visible', () => {
  it('inserts text into the links', () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});