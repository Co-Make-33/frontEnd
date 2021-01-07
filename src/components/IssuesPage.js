import React from "react";
import IssuesList from './IssuesList';
import {IssueProvider} from '../contexts/IssuesContext';
import AddIssue from "./AddIssue";
// import styled from 'styled-components';

// const IssuePageDiv = styled.div`
//   display:flex;
//   flex-direction: column;
//   justify-content:center;
//   align-items:center;
//   width:100%;
// `
function IssuesPage () {
  return (
    <>
    
    <IssueProvider>
      <div>
      {/* <IssuePageDiv> */}
          <IssuesList/>
          <AddIssue/>
      {/* </IssuePageDiv> */}
      </div>
    </IssueProvider>
    </>
  )
}

export default IssuesPage