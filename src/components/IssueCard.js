import React, { useState, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
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
const AddNewButton = styled.button`
  width: 150px;
`

const StyledIssuesWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;

`
const initialIssue = {
  name: '',
  description: ''
};

const IssueCard = ({ issues, updateIssues }) => { 
  console.log(issues);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [issueToEdit, setIssueToEdit] = useState(initialIssue);
  const [issueToAdd, setIssueToAdd] = useState(initialIssue);
  const { id } = useParams();

  const editIssue = e => {
    setEditing(true);
    setIssueToEdit(e);
  };

  const addIssue = e => {
    e.preventDefault();
    setEditing(false);
    setIssueToEdit(initialIssue);
    setAdding(true);
  }

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/issues/:${id}`, issueToEdit)
      .then(response => {
        updateIssues(issues.map((item) => item.id === response.data.id ? response.data : item));
      })
      .catch(error => console.log(error))
  };

  const deleteIssue = e => {
    axiosWithAuth()
      .delete(`/api/issues/:${id}`)
      .then(response => {
        updateIssues(issues.filter((item) => item.id !== e.id))
      })
      .catch(error => console.log(error))
  };

  const submitNewIssue = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/issues/`, issueToAdd)
      .then(response => {
        updateIssues(issues.concat(issueToAdd))
      })
      .catch(error => console.log(error))
  }

  return (
    <div>
      <GlobalStyle/>
      <StyledIssuesWrapper>
      <p>Issues in Your Community:</p>
      <ul>
        {issues.map(e => (
          <li key={e.name} onClick={() => editIssue(e)}>
            <span>
              <span data-testid='test' onClick={e => {
                    e.stopPropagation();
                    deleteIssue(e)
                  }
                }>
                  x
              </span>{" "}
              {e.name} <br/>
              {e.description}
            </span>
          </li>
        ))}
      </ul>
      {/* <button onClick={addIssue}> Add Issue </button> */}
  <AddNewButton onClick={()=> setAdding(!adding) }>{adding ? 'Cancel' : 'Add a New Issue'}  </AddNewButton>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>Edit Issue</legend>
          <label>
            Issue Title: <br/>
            <input
              onChange={e =>
                setIssueToEdit({ ...issueToEdit, name: e.target.value })
              }
              value={issueToEdit.name}
            /> <br/>
          </label>
          <label>
            Description: <br/>
            <input
              onChange={e =>
                setIssueToEdit({
                  ...issueToEdit,
                  description: e.target.value
                })
              }
              value={issueToEdit.description}
            />
          </label>
          <div>
            <button type="submit" onClick={saveEdit}>save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      

      
      {adding && (
        <form onSubmit={submitNewIssue}> 
          <legend>Add Issue:</legend>
          <label>
            Issue Title: <br/>
            <input
              onChange={e =>
                setIssueToAdd({ ...issueToAdd, name: e.target.value })
              }
              value={issueToAdd.name}
            />
          </label>
          <div>
          <label>
            Description: <br/>
            <input
              onChange={e =>
                setIssueToAdd({
                  ...issueToAdd,
                  description: e.target.value
                })
              }
              value={issueToAdd.description}
            />
          </label>
          </div>
          <div>
            <button type="submit" onClick={submitNewIssue}>Submit Issue</button>
          </div>
        </form>
      )}
      </StyledIssuesWrapper>
    </div>
  );
};

export default IssueCard;