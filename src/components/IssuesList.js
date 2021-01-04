import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddIssue from './AddIssue';
import {Link} from 'react-router-dom';

const IssuesWrap = styled.div`

`



const IssuesList = () => {
    
    
    
    
    

    return (
        <>
        <IssuesWrap>
            <Link to='/addissue'>Create or Edit an Issue Submission</Link>
            

        </IssuesWrap>
        </>
    )
}

export default IssuesList