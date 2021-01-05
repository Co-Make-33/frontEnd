import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import IssueCard from './IssueCard';
import { LoginContext } from '../App';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        /* border: 1px solid black; */
    }

    input {
        width:50%;
        justify-content:center;
    }

    form {
        width:100%;
    }
`

const StyledAddIssue = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const StyledAddForm = styled.div`
    display:flex;
    width:50%;
`

// import LoginContext from '../App';

const initialIssues = {
    name: '',
    description: ''
}

const AddIssue = ( issues, updateIssues ) => {
    const [userIssues, setUserIssues] = useState([]);
    const [addIssue, setAddIssue] = useState(false);
    const [newIssueValues, setNewIssueValues] = useState(initialIssues);

    const loginInfo = useContext(LoginContext)
    const name = loginInfo.username.charAt(0).toUpperCase() + loginInfo.username.slice(1)
    const id = loginInfo.subject
    console.log('Logged in ',loginInfo)

    const onChange = (e) => {
        setNewIssueValues({
            ...newIssueValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('https://co-make-33.herokuapp.com/api/issues/', newIssueValues)
        .then(res => {
            console.log(res)
            setUserIssues(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteIssue = e => {
        e.preventDefault();
        axiosWithAuth()
        .delete('https://co-make-33.herokuapp.com/api/issues/:id')
        .then(res => {
            updateIssues(issues.filter((item) => item.id !== id))
        })
        .catch(err => console.log(err))
    }



    return (
        <>
        <div>
        <GlobalStyle/>
        <StyledAddIssue>
            <h2>{`Your submitted issues:`}</h2>
            <div>
            {
                userIssues.map((issue, key) => {
                    return <IssueCard issue={issue} key={key} />
                })
            }
            </div>
            <button onClick={()=> setAddIssue(!addIssue)}>{addIssue ? 'Cancel' : 'List a new issue'}</button>
            <StyledAddForm>
            {addIssue &&
                <form onSubmit={onSubmit}>
                    <label>
                        Issue Title: <br/>
                        <input
                        type='text'
                        name='name'
                        placeholder='Enter a title'
                        value={newIssueValues.name}
                        onChange={onChange}
                        />
                    </label>
                    <br/>
                    <label>
                        Description: <br/>
                        <textarea
                        type='text'
                        rows='20'
                        cols='60'
                        style={{resize: 'none'}}
                        name='description'
                        placeholder='Describe your issue'
                        value={newIssueValues.description}
                        onChange={onChange}
                        />
                    </label>
                    <br/>
                    <button>Submit Issue</button>
                </form>
            }
            </StyledAddForm>
        </StyledAddIssue>
        </div>
        </>
    )
}
export default AddIssue























// const AddIssue = ( issues, updateIssues ) => {
//     const [userIssues, setUserIssues] = useState([]);
//     const [addIssue, setAddIssue] = useState(false);
//     const [newIssueValues, setNewIssueValues] = useState(initialIssues);

//     // const loginInfo = useContext(LoginContext)
//     // const name = loginInfo.username.charAt(0).toUpperCase() + loginInfo.username.slice(1)
//     // const id = loginInfo.subject
//     // console.log('Logged in ',loginInfo)

//     const onChange = (e) => {
//         setNewIssueValues({
//             ...newIssueValues,
//             [e.target.name]: e.target.value
//         })
//     }

//     const onSubmit = e => {
//         e.preventDefault()
//         axiosWithAuth()
//         .post('https://co-make-33.herokuapp.com/api/issues/', newIssueValues)
//         .then(res => {
//             console.log(res)
//             setUserIssues(res.data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }

//     const deleteIssue = e => {
//         e.preventDefault();
//         axiosWithAuth()
//         .delete('https://co-make-33.herokuapp.com/api/issues/:id')
//         .then(res => {
//             updateIssues(issues.filter((item) => item.id !== id))
//         })
//         .catch(err => console.log(err))
//     }



//     return (
//         <>
//         <div>
//         <GlobalStyle/>
//         <StyledAddIssue>
//             <h2>{`Your submitted issues:`}</h2>
//             <div>
//             {
//                 userIssues.map((item, key) => {
//                     return <IssueCard item={item} key={key} />
//                 })
//             }
//             </div>
//             <button onClick={()=> setAddIssue(!addIssue)}>{addIssue ? 'Cancel' : 'List a new issue'}</button>
//             <StyledAddForm>
//             {addIssue &&
//                 <form onSubmit={onSubmit}>
//                     <label>
//                         Issue Title: <br/>
//                         <input
//                         type='text'
//                         name='name'
//                         placeholder='Enter a title'
//                         value={newIssueValues.name}
//                         onChange={onChange}
//                         />
//                     </label>
//                     <br/>
//                     <label>
//                         Description: <br/>
//                         <textarea
//                         type='text'
//                         rows='20'
//                         cols='60'
//                         style={{resize: 'none'}}
//                         name='description'
//                         placeholder='Describe your issue'
//                         value={newIssueValues.description}
//                         onChange={onChange}
//                         />
//                     </label>
//                     <br/>
//                     <button>Submit Issue</button>
//                 </form>
//             }
//             </StyledAddForm>
//         </StyledAddIssue>
//         </div>
//         </>
//     )
// }
// export default AddIssue

