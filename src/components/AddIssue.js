import React, { useState, useContext } from 'react';
import { IssuesContext} from '../contexts/IssuesContext';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddIssue = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [issues, setIssues] = useContext(IssuesContext);

    const updateName = e => {
        setName(e.target.value);
    }

    const updateDescription = e => {
        setDescription(e.target.value);
    }

    const addIssue = e => {
        e.preventDefault();
        axiosWithAuth()
        .post(`/api/issues/`, issues)
        .then((res) => {
        console.log(res)
        setIssues(prevIssues => [...prevIssues, {name: name, description: description}])
    })
        .catch((err) => {
            console.log(err)
        })
      }
    

    return (
        <form onSubmit={addIssue}>
            <input type='text' name='name' value={name} onChange={updateName}/>
            <input type='text' name='description' value={description} onChange={updateDescription}/>
            <button>Submit</button>
        </form>
    )
}

export default AddIssue