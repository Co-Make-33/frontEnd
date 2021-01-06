import React, { useContext, useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Issue from './Issue';
import {IssuesContext} from '../contexts/IssuesContext';

const IssuesList = () => {
    const [issues, setIssues] = useContext(IssuesContext);
    // const [issuesList, setIssuesList] = useState([]);

  useEffect(() => {
    getIssues();    
  }, [])

  const getIssues = () => {
    axiosWithAuth()
      .get('/api/users/issues')
      .then(response => {
        setIssues(response.data)
      })
      .catch(err => console.log(err))
  }

    return (
        <div>
        {issues.map(issue => (
            <Issue name={issue.name} description={issue.description} key={issue.id}/>
        ))}
        </div>
    );
}

export default IssuesList