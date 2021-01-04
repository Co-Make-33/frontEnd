import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import IssueCard from './IssueCard';
import LoginContext from '../App';
import {Link} from 'react-router-dom';

const initialIssues = {
    name: '',
    description: ''
}

const AddIssue = () => {
    const [userIssues, setUserIssues] = useState([]);
    const [addIssue, setAddIssue] = useState(false);
    const [newIssueValues, setNewIssueValues] = useState(initialIssues);

    // const loginInfo = useContext(LoginContext)
    // const name = loginInfo.username.charAt(0).toUpperCase() + loginInfo.username.slice(1)
    // const id = loginInfo.subject
    // console.log('Logged in ',loginInfo)

    const onChange = (e) => {
        setNewIssueValues({
            ...newIssueValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
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




    return (
        <>
        <div>

            {/* <Link to='/profile' >Profile</Link> */}
            <h1>{`Your submitted issues:`}</h1>
            <div>
            {
                userIssues.map((item, key) => {
                    return <IssueCard item={item} key={key} />
                })
            }
            </div>
            <button onClick={()=> setAddIssue(!addIssue)}>{addIssue ? 'Cancel' : 'List a new issue'}</button>
            {addIssue &&
            <div>
                <form onSubmit={onSubmit}>
                    <label>
                        Issue Title:
                        <input
                        type='text'
                        name='name'
                        placeholder='Please enter title for your issue submission'
                        value={newIssueValues.name}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                        type='text'
                        name='description'
                        placeholder='Describe your issue'
                        value={newIssueValues.description}
                        onChange={onChange}
                        />
                    </label>
                    <button>Submit Issue</button>
                </form>
            </div>
            }
    
        </div>
        </>
    )



}
export default AddIssue

