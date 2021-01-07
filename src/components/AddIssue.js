import React, { useState, useEffect, useContext } from 'react';
import { IssuesContext} from '../contexts/IssuesContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled, { createGlobalStyle } from 'styled-components';

const AddIssueGlobal = createGlobalStyle`

  input {
    margin-top:5%;
    width:98%;
    margin-bottom:2%;
  }

  button {
    margin-bottom:4%;
    margin-top:3%;
    font-size:1.2em;
  }
`
const AddIssueStyle = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

`


const AddIssue = () => {
    const [addIssue, setAddIssue] = useState(false);
    const [newIssueValues, setNewIssueValues] = useState([]);
    const [issues, setIssues] = useContext(IssuesContext);
    
    const redirect = e => {
      window.location.href = 'Issues';
    }

    const onSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/api/issues/`, newIssueValues)
        .then((res) => {
            console.log(res)
            setIssues(userIssues => [...userIssues, {title: issues.title, description: issues.description} ])
            redirect()
          })
        .catch((err) => {
            console.log(err)
        })
      }
    
    

    return (
       <div>
         <AddIssueGlobal/>
         <AddIssueStyle>
           <button onClick={()=> setAddIssue(!addIssue) }>{addIssue ? 'Cancel' : 'Add a New Issue'}</button>
        {addIssue &&
        <form onSubmit={onSubmit}>
            <input type='text' placeholder='Please enter a title for your issue' name='title' value={newIssueValues.title} onChange={ e =>
              setNewIssueValues({ ...newIssueValues, title: e.target.value })
            }/> <br/>
            <textarea type='text' placeholder='Describe the issue' name='description' rows ='10' cols='80'style={{resize: 'none'}} value={newIssueValues.description} onChange={ e =>
              setNewIssueValues({ ...newIssueValues, description: e.target.value })
            }/> <br/>
            <button>Submit</button>
        </form>
        }
        </AddIssueStyle>
        <span></span>
        </div>
    )
}

export default AddIssue