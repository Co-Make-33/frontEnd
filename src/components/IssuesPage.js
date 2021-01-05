import React, { useState, useEffect } from "react";
import IssueCard from './IssueCard';
import axiosWithAuth from "../utils/axiosWithAuth";

const IssuesPage = () => {
  const [issuesList, setIssuesList] = useState([]);

  useEffect(() => {
    getIssues();    
  }, [])

  const getIssues = () => {
    axiosWithAuth()
      .get('https://co-make-33.herokuapp.com/api/users/issues')
      .then(response => {
        setIssuesList(response.data)
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <IssueCard issues={issuesList} updateIssues={setIssuesList} />
    </>
  );
};

export default IssuesPage;