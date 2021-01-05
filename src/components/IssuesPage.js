import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import IssueCard from './IssueCard';

// const initialIssues = {
//     name: 'Pothole on Magnolia Street',
//     description: 'There is a massive pothole on the East Side of the Road. Be careful when driving.'
// }

const IssuesPage = () => {
    const[issuesList, setIssuesList] = useState([]);

    useEffect(() => {
        getIssues();
    }, [])

    const getIssues = () => {
        axiosWithAuth()
            .get('https://co-make-33.herokuapp.com/api/issues')
            .then(res => {
                setIssuesList(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Link to='/addissue'>Create or Edit an Issue Submission</Link>
            {
                issuesList.map((issue, key) => {
                    return <IssueCard issue={issue} key={key}/>
                })
            }
        </>
    )

}

export default IssuesPage

