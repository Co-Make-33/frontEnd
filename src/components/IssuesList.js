import React, { useState, useContext, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import Issue from './Issue';
import {IssuesContext} from '../contexts/IssuesContext';
// import AddIssue from './AddIssue';

const IssuesList = () => {
    const [issues, setIssues] = useContext(IssuesContext);

  useEffect(() => {
    getIssues();    
  }, [])

  const getIssues = () => {
    axiosWithAuth()
      .get('/api/issues')
      .then(res => {
        setIssues(res.data)
      })
      .catch(err => console.log(err))
  }

    return (
        <div>
        {issues.map(issue => (
            <Issue title={issue.title} description={issue.description} key={issue.id}/>
        ))}
        </div>
  
    );
}

export default IssuesList