import React, { useState } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth';


const IssueCardStyle = styled.div`

`

const UserIssueCard = (issues, updateIssues) => {
    const [userIssues, setUserIssues] = useState([]);

    const deleteIssue = id => {
        id.preventDefault();
        axiosWithAuth()
        .delete(`https://co-make-33.herokuapp.com/api/issues/:${id}`)
        .then(res => {
            console.log(res);
            axiosWithAuth()
            .get(`https://co-make-33.herokuapp.com/api/users/issues/:`)
            setUserIssues(res.data.issue);
        })
        
        .catch(err => console.log(err))
    }

    // const {issue} = props

    return (
        <>
        { userIssues.map((issue, key) => {
            return (<IssueCardStyle>
            <h3>{issues.name}</h3>
            <p>{issues.description}</p>
            <button onClick={() => deleteIssue(issues.id)}>Delete Issue</button>
        </IssueCardStyle>)
        })
        }
        {/* // <IssueCardStyle>
        //     <h3>{issues.name}</h3>
        //     <p>{issues.description}</p>
        //     <button onClick={() => deleteIssue(issues.id)}>Delete Issue</button>
        // </IssueCardStyle> */}

        </>
    )
}

export default UserIssueCard