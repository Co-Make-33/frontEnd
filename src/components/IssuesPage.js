import React from "react";
import IssuesList from './IssuesList';
import {IssueProvider} from '../contexts/IssuesContext';
import AddIssue from './AddIssue';



function IssuesPage () {
  return (
    <IssueProvider>
      <div>
        <IssuesList/>
        <AddIssue/>
      </div>
    </IssueProvider>
  )
}

export default IssuesPage