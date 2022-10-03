import React from 'react';
// render: will render component's in Jest's simulated DOM for testing
// cleanup: used to remove components from the DOM to prevent corrupted tests results
import {render, cleanup} from '@testing-library/react';
// offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// after each test, cleanup data in simulated DOM (refresh the sim DOM)
afterEach(cleanup);

describe('Nav component', () => {
    // make sure about component renders
    it('renders', () => {
        render(<Nav/>);
    });
    // tests snapshot
    it('matches snapshot', () => {
        // asFragment: eturns a snapshot of the About component
        const {asFragment} = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    });
});

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);
  
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
});

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange the assert
        const {getByTestId} = render(<Nav/>);
        // assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
});