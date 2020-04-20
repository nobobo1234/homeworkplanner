import React, { useState } from 'react';
import AssignmentContext from '../shared/contexts/context';

import Wrapper from './Wrapper';
import Router from './Router';
import Navigation from '../components/Navigation';

const Layout = () => {
    const assignmentsState = useState([]);

    const setAssignment = (assignment) => {
        assignmentsState[1](assignment);
    };

    return (
        <Wrapper>
            <Navigation />
            <AssignmentContext.Provider value={[assignmentsState[0], setAssignment]}>
                <Router />
            </AssignmentContext.Provider>
        </Wrapper>
    );
};

export default Layout;
