import React, { useState, createContext } from 'react';

export const IssuesContext = createContext();

export const IssueProvider = (props) => {
    const [issues, setIssues] = useState([
        {
            title: 'Pothole',
            description: 'Watch out for the potholes on Magnolia Street. I called the city but they have not fixed them yet.'
        },
        {
            title: 'Sidewalks need repair on 5th and Mulberry',
            description: 'Abandoned building at the corner of 5th and Mulberry has dangerous sidewalks. We can work together to beautify our town.'
        }
    ]);

    return (
        <IssuesContext.Provider value={[issues, setIssues]}>
            {props.children}
        </IssuesContext.Provider>
    );
}