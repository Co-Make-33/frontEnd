import React, { useState, useEffect, useContext } from 'react';
import { IssuesContext} from '../contexts/IssuesContext';
import axiosWithAuth from '../utils/axiosWithAuth';


const AddIssue = () => {
    const [addIssue, setAddIssue] = useState(false);
    const [newIssueValues, setNewIssueValues] = useState([]);
    const [issues, setIssues] = useContext(IssuesContext);
    

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/api/issues/`, newIssueValues)
        .then((res) => {
            console.log(res)
            setIssues(userIssues => [...userIssues, {title: issues.title, description: issues.description} ])
        })
        .catch((err) => {
            console.log(err)
        })
      }
    

    return (
       <div>
           <button onClick={()=> setAddIssue(!addIssue) }>{addIssue ? 'Cancel' : 'Add a New Issue'}</button>
        {addIssue &&
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Please enter a title for your issue' name='title' value={newIssueValues.title} onChange={ e =>
              setNewIssueValues({ ...newIssueValues, title: e.target.value })
            }/>
            <input type='text' placeholder='Describe the issue' name='description' value={newIssueValues.description} onChange={ e =>
              setNewIssueValues({ ...newIssueValues, description: e.target.value })
            }/>
            <button>Submit</button>
        </form>
        }
        </div>
    )
}

export default AddIssue




//SUBMITS but does not reload in page
// const AddIssue = () => {
//     const [userIssues, setUserIssues] = useContext(IssuesContext);
//     const [addIssue, setAddIssue] = useState(false);
//     const [newIssueValues, setNewIssueValues] = useState([]);
    

//     const onSubmit = e => {
//         e.preventDefault();
//         axiosWithAuth()
//         .post(`/api/issues/`, newIssueValues)
//         .then((res) => {
//             console.log(res)
//             setUserIssues(res.data)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
//       }
    

//     return (
//        <div>
//            <button onClick={()=> setAddIssue(!addIssue) }>{addIssue ? 'Cancel' : 'Add a New Issue'}</button>
//         {addIssue &&
//         <form onSubmit={onSubmit}>
//             <input type='text' placeholder='Please enter a title for your issue' name='title' value={newIssueValues.title} onChange={ e =>
//               setNewIssueValues({ ...newIssueValues, title: e.target.value })
//             }/>
//             <input type='text' placeholder='Describe the issue' name='description' value={newIssueValues.description} onChange={ e =>
//               setNewIssueValues({ ...newIssueValues, description: e.target.value })
//             }/>
//             <button>Submit</button>
//         </form>
//         }
//         </div>
//     )
// }

// export default AddIssue