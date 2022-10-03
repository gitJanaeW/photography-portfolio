import React from 'react';
// render: will render component's in Jest's simulated DOM for testing
// cleanup: used to remove components from the DOM to prevent corrupted tests results
import {render, cleanup} from '@testing-library/react';
// offers access to custom matchers that are used to test DOM elements
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// after each test, cleanup data in simulated DOM (refresh the sim DOM)
afterEach(cleanup);

describe('About component', () => {
    // make sure about component renders
    it('renders', () => {
        render(<About/>);
    });
    // ???
    it('matches snapshot DOM node structure', () => {
        // asFragment: eturns a snapshot of the About component
        const {asFragment} = render(<About/>);
        expect(asFragment()).toMatchSnapshot();
    });
});