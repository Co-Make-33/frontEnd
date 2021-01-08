import { createContext} from 'react';

export const ProfileIssuesContext = createContext();

// import React, { useState, createContext } from 'react';

// export const ProfileIssuesContext = createContext();

// export const ProfileProvider = (props) => {
//     const [userIssues, setUserIssues] = useState([
//         {
//             title: '',
//             description: ''
//         }
//     ]);

//     return (
//         <ProfileIssuesContext.Provider value={[userIssues, setUserIssues]}>
//             {props.children}
//         </ProfileIssuesContext.Provider>
//     );
// }