import React, { useState, createContext } from 'react';

export const IssuesContext = createContext();

export const IssueProvider = (props) => {
    const [issues, setIssues] = useState([
        {
            name: 'Pothole',
            description: 'Watch out for the potholes on Magnolia Street. I called the city but they have not fixed them yet.'
        },
        {
            name: 'Sidewalks need repair on 5th and Mulberry',
            description: 'Abandoned building at the corner of 5th and Mulberry has dangerous sidewalks. We can work together to beautify our town.'
        }
        // {
        //     name: '',
        //     description: ''
        // }
    ]);

    return (
        <IssuesContext.Provider value={[issues, setIssues]}>
            {props.children}
        </IssuesContext.Provider>
    );
}